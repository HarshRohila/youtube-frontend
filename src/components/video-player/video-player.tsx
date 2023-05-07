import { Component, Host, h, Prop, Watch } from "@stencil/core"
import videojs from "video.js"
import Player from "video.js/dist/types/player"

@Component({
  tag: "video-player",
  styleUrl: "video-player.scss",
  shadow: false
})
export class VideoPlayer {
  videoElement!: HTMLElement
  private player: Player

  @Prop() src: string
  @Watch("src")
  onSrcChange() {
    this.player.src({ src: this.src })
  }

  componentDidLoad() {
    this.player = videojs(this.videoElement, {
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
