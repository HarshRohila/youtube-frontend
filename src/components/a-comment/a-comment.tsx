import { Component, Host, Prop, h } from "@stencil/core"
import { Comment } from "../../YoutubeApi"

@Component({
  tag: "a-comment",
  styleUrl: "a-comment.scss",
  shadow: true
})
export class AComment {
  @Prop() comment: Comment

  get title() {
    const { author, commentedTime } = this.comment
    return [author, commentedTime].join(" ‧ ")
  }

  render() {
    return (
      <Host>
        <div class="comment">
          <img class="thumbnail" src={this.comment.thumbnail} alt="thumbnail" />
          <span class="title">{this.title}</span>
          <span class="text" innerHTML={this.comment.commentText}></span>
        </div>
      </Host>
    )
  }
}
