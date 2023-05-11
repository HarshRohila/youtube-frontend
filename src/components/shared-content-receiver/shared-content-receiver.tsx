import { RouterHistory } from "@stencil-community/router"
import { Component, Host, h, Prop } from "@stencil/core"
import { AppRoute } from "../../utils/AppRoute"

@Component({
  tag: "shared-content-receiver",
  shadow: true
})
export class SharedContentReceiver {
  @Prop() history: RouterHistory

  componentWillLoad() {
    const url = location.hash.split("?")[1]

    const params = new URLSearchParams(url)

    const sharedLink = params.get("text") || ""
    const videoId = getYouTubeVideoId(sharedLink)

    this.redirect(videoId)
  }

  private redirect(videoId: string) {
    let redirectPath = "/"

    if (videoId) {
      redirectPath = `/videos/${videoId}`
    }

    this.history.push(AppRoute.getPath(redirectPath))
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}

function getYouTubeVideoId(link: string): string | null {
  const youtubeRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|shorts\/)?([a-zA-Z0-9_-]{11})/
  const match = link.match(youtubeRegex)
  return match ? match[1] : null
}
