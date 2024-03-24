import { faClose, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Component, Host, h, Prop, State } from "@stencil/core"
import { CommentsViewProps, commentsState } from "../../lib/redux/video-page"
import { filter, map, throttleTime } from "../../lib/rx"
import { Comment, Comments } from "../../YoutubeApi"
import { myLib } from "../../lib/app-state-mgt"
import { createEvent } from "../../lib/state-mgt"
import { fetchComments } from "../../lib/facades/comments"

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

  component = myLib(this)
  componentWillLoad() {
    const { component } = this

    component.untilDestroyed(commentsState.asObservable()).subscribe(state => {
      if (this.comments !== state.comments) {
        this.comments = state.comments
        this.commentsList = [...this.commentsList, ...state.comments.comments]
      }
      this.commentsView = state.commentsView
      this.areCommentsLoading = state.areCommentsLoading
    })
  }

  scrollEvent = createEvent<UIEvent, HTMLUListElement>(ev => ev.target as HTMLUListElement)

  componentDidLoad() {
    const nextPageCommentsState = () => {
      return { ...this.commentsView, nextpage: this.comments.nextpage }
    }

    const scrolledToBottom$ = this.scrollEvent.$.pipe(
      filter(commentList => isScrolledToBottom(commentList)),
      throttleTime(200),
      map(nextPageCommentsState)
    )

    this.component.justSubscribe(scrolledToBottom$.pipe(fetchComments))
  }

  disconnectedCallback() {}

  render() {
    const comments = this.commentsList

    return (
      <Host>
        <div class="comments-view">
          <icon-btn class="close-btn" icon={faClose} onBtnClicked={this.closeCallback}></icon-btn>
          <h3 class="heading">Comments</h3>
          <ul onScroll={this.scrollEvent.handler} class="list">
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
