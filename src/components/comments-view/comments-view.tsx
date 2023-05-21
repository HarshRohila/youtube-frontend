import { faClose, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Component, Host, h, Prop, State } from "@stencil/core"
import { state$, store } from "../../lib/redux"
import { setCommentView, CommentsViewProps } from "../../lib/redux/video-page"
import { Subject, map, takeUntil } from "rxjs"
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

  @State() commentsList = [] as Comment[]

  private observer: IntersectionObserver

  componentWillLoad() {
    this.observer = new IntersectionObserver(this.handleIntersection, { root: null, rootMargin: "0px", threshold: 1 })

    state$
      .pipe(
        map(s => s.videoPage),
        takeUntil(this.disconnected$)
      )
      .subscribe(state => {
        this.commentsList = [...this.commentsList, ...state.comments.comments]
        this.comments = state.comments
        this.commentsView = state.commentsView
        this.areCommentsLoading = state.areCommentsLoading
      })
  }

  private handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const lastCommentEntry = entries[0]

    if (lastCommentEntry.isIntersecting) {
      store.dispatch(setCommentView({ ...this.commentsView, nextpage: this.comments.nextpage }))
    }
  }

  disconnected$ = new Subject<void>()
  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  render() {
    const comments = this.commentsList

    return (
      <Host>
        <div class="comments-view">
          <icon-btn
            class="close-btn"
            icon={faClose}
            onBtnClicked={() => store.dispatch(setCommentView(undefined))}
          ></icon-btn>
          <h3 class="heading">Comments</h3>
          <ul class="list">
            {comments.map((c, index) => {
              if (index === comments.length - 1) {
                return (
                  <li ref={el => el && this.observer.observe(el)}>
                    <a-comment comment={c}></a-comment>
                  </li>
                )
              }

              return (
                <li>
                  <a-comment comment={c}></a-comment>
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
