import { Component, Host, Prop, h } from "@stencil/core"
import { Comment } from "../../YoutubeApi"
import { AppRoute } from "../../utils/AppRoute"

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
          <span class="text" innerHTML={replaceYouTubeLinksWithNewLink(this.comment.commentText)}></span>
        </div>
      </Host>
    )
  }
}

function replaceYouTubeLinksWithNewLink(input: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(input, "text/html")
  const links = doc.getElementsByTagName("a")

  for (let i = 0; i < links.length; i++) {
    const link = links[i]
    const href = link.getAttribute("href")

    if (href && href.includes("youtube.com") && href.includes("&t=")) {
      const youtubeRegex = /v=([^&\n]+)&t=(\d+)/
      const match = href.match(youtubeRegex)

      if (match) {
        const time = match[2]
        const newLinkWithTime = generateNewLinkWithTime(time)
        link.setAttribute("href", newLinkWithTime)
      }
    }
  }

  return doc.documentElement.innerHTML
}

function generateNewLinkWithTime(time: string): string {
  return `${AppRoute.getCurrentSpaUrl()}?t=${time}`
}
