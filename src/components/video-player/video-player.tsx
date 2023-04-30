import { Component, Host, h, Prop } from "@stencil/core"
import videojs from "video.js"

@Component({
  tag: "video-player",
  styleUrl: "video-player.scss",
  shadow: true
})
export class VideoPlayer {
  videoElement!: HTMLElement

  @Prop() src: string

  componentDidLoad() {
    videojs(this.videoElement, {
      controls: true,
      autoplay: true,
      preload: "auto"
    })
  }

  private setVideoElement = (el: HTMLElement) => {
    this.videoElement = el
  }

  render() {
    return (
      <Host>
        <div class="container">
          <video-js ref={this.setVideoElement}>
            <source src={this.src} />
          </video-js>
        </div>
      </Host>
    )
  }
}
