import { faClose, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Component, Host, h, Prop, State } from "@stencil/core"
import { state$, store } from "../../lib/redux"
import { setCommentView, CommentsViewProps } from "../../lib/redux/video-page"
import { Subject, filter, fromEvent, map, takeUntil, throttleTime } from "rxjs"
import { Comment, Comments } from "../../YoutubeApi"

@Component({
  tag: "comments-view",
  styleUrl: "comments-view.scss",
  shadow: true
})
export class CommentsView {
  @Prop({ mutable: true }) comments: Comments
  @Prop({ mutable: true }) commentsView: CommentsViewProps
  @Prop({ mutable: true }) areCommentsLoading: boolean

  @Prop() closeCallback: () => void

  @State() commentsList = [] as Comment[]

  componentWillLoad() {
    state$
      .pipe(
        map(s => s.videoPage),
        takeUntil(this.disconnected$)
      )
      .subscribe(state => {
        if (this.comments !== state.comments) {
          this.comments = state.comments
          this.commentsList = [...this.commentsList, ...state.comments.comments]
        }
        this.commentsView = state.commentsView
        this.areCommentsLoading = state.areCommentsLoading
      })
  }

  componentDidLoad() {
    fromEvent(this.commentList, "scroll")
      .pipe(
        filter(() => isScrolledToBottom(this.commentList)),
        throttleTime(200),
        takeUntil(this.disconnected$)
      )
      .subscribe(() => {
        store.dispatch(setCommentView({ ...this.commentsView, nextpage: this.comments.nextpage }))
      })
  }

  disconnected$ = new Subject<void>()
  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  private commentList: HTMLUListElement

  render() {
    const comments = this.commentsList

    return (
      <Host>
        <div class="comments-view">
          <icon-btn class="close-btn" icon={faClose} onBtnClicked={this.closeCallback}></icon-btn>
          <h3 class="heading">Comments</h3>
          <ul
            ref={el => {
              this.commentList = el
            }}
            class="list"
          >
            {comments.map(c => {
              return (
                <li>
                  <a-comment comment={c} key={c.commentId}></a-comment>
                </li>
              )
            })}
          </ul>
          {this.areCommentsLoading && <x-icon icon={faSpinner} spin></x-icon>}
        </div>
      </Host>
    )
  }
}

function isScrolledToBottom(element: HTMLElement) {
  return Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 1
}
