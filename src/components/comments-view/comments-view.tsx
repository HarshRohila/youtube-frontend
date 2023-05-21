import { faClose, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Component, Host, h, Prop } from "@stencil/core"
import { state$, store } from "../../lib/redux"
import { setCommentView } from "../../lib/redux/video-page"
import { Subject, map, takeUntil } from "rxjs"
import { Comment } from "../../YoutubeApi"

@Component({
  tag: "comments-view",
  styleUrl: "comments-view.scss",
  shadow: true
})
export class CommentsView {
  @Prop({ mutable: true }) comments: Comment[]
  @Prop({ mutable: true }) areCommentsLoading: boolean

  componentWillLoad() {
    state$
      .pipe(
        map(s => s.videoPage),
        takeUntil(this.disconnected$)
      )
      .subscribe(state => {
        this.comments = state.comments
        this.areCommentsLoading = state.areCommentsLoading
      })
  }

  disconnected$ = new Subject<void>()
  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  render() {
    return (
      <Host>
        <div class="comments-view">
          <icon-btn
            class="close-btn"
            icon={faClose}
            onBtnClicked={() => store.dispatch(setCommentView(undefined))}
          ></icon-btn>
          <h3 class="heading">Comments</h3>
          {this.areCommentsLoading && <x-icon icon={faSpinner} spin></x-icon>}
          {!this.areCommentsLoading && (
            <ul class="list">
              {this.comments.map(c => (
                <li innerHTML={c.commentText}></li>
              ))}
            </ul>
          )}
        </div>
      </Host>
    )
  }
}
