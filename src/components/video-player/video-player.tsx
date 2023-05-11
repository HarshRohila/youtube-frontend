import { Component, Host, h, Prop, Watch } from "@stencil/core"
import { Subject, buffer, filter, fromEvent, map, takeUntil, throttleTime } from "rxjs"
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

  private handleDblClick = e => {
    const playerWidth = this.player.currentWidth()
    const playerJS = this.player

    if (0.66 * playerWidth < e.offsetX) {
      playerJS.currentTime(playerJS.currentTime() + 10)
    } else if (e.offsetX < 0.33 * playerWidth) {
      playerJS.currentTime(playerJS.currentTime() - 10 < 0 ? 0 : playerJS.currentTime() - 10)
    } else {
      if (playerJS.paused()) {
        playerJS.play()
      } else {
        playerJS.pause()
      }
    }
  }

  private disconnected$ = new Subject<void>()

  componentDidLoad() {
    this.player = videojs(this.videoElement, {
      controls: true,
      autoplay: true,
      preload: "auto",
      playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
      html5: {
        limitRenditionByPlayerDimensions: false
      }
    })

    this.player.ready(() => {
      const video = this.player.el().querySelector(".vjs-text-track-display") as HTMLDivElement
      video.style.pointerEvents = "auto"
      const clicks$ = fromEvent(video, "click")

      const dlbClick$ = clicks$.pipe(
        buffer(clicks$.pipe(throttleTime(250))),
        filter(clickArray => clickArray.length > 1),
        map(([, e]) => e)
      )

      dlbClick$.pipe(takeUntil(this.disconnected$)).subscribe(this.handleDblClick)
    })
  }
  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
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
