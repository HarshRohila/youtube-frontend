import { faClose, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Component, Host, State, h } from "@stencil/core"
import { store } from "../../lib/redux"
import { setIsCommentViewOpen } from "../../lib/redux/video-page"

@Component({
  tag: "comments-view",
  styleUrl: "comments-view.scss",
  shadow: true
})
export class CommentsView {
  @State() isOpen = true

  render() {
    return (
      <Host>
        <div class="comments-view">
          <icon-btn
            class="close-btn"
            icon={faClose}
            onBtnClicked={() => store.dispatch(setIsCommentViewOpen(false))}
          ></icon-btn>
          <x-icon icon={faSpinner} spin></x-icon>
          <ul class="list"></ul>
        </div>
      </Host>
    )
  }
}
