import { Component, Host, h, Prop, Watch, Method, Event, EventEmitter, State } from "@stencil/core"
import { Subject, buffer, filter, fromEvent, map, takeUntil, throttleTime } from "rxjs"
import videojs from "video.js"
import Player from "video.js/dist/types/player"
import "videojs-landscape-fullscreen"
import { IKeyboard, KEYS, getKeyboard } from "../../utils/keyboard"

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

  @Prop() skipSegments: number[][] = []

  @Method()
  async currentTime() {
    return this.player?.currentTime()
  }

  @Event() loaded: EventEmitter<{ player: Player }>

  private handleDblClick = e => {
    const playerWidth = this.player.currentWidth()
    const playerJS = this.player

    if (0.66 * playerWidth < e.offsetX) {
      forward(playerJS)
    } else if (e.offsetX < 0.33 * playerWidth) {
      rewind(playerJS)
    } else {
      if (playerJS.paused()) {
        playerJS.play()
      } else {
        playerJS.pause()
      }
    }
  }

  @State() isShowingToast = false
  @State() toastMessage = ""
  private showToast(message: string, time: number) {
    this.isShowingToast = true
    this.toastMessage = message

    setTimeout(() => {
      this.isShowingToast = false
    }, time)
  }

  private disconnected$ = new Subject<void>()

  componentDidLoad() {
    this.player = videojs(this.videoElement, {
      controls: true,
      autoplay: true,
      preload: "auto",
      loop: true,
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

      this.loaded.emit({ player: this.player })
    })

    this.player.on("timeupdate", () => {
      const segments = this.skipSegments
      var currentTime = this.player.currentTime()

      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i]

        if (currentTime >= segment[0] && currentTime < segment[1]) {
          this.showToast("Skipping Irrelevant Content", 1000)
          this.player.currentTime(segment[1])
          break
        }
      }
    })

    // @ts-ignore
    this.player.landscapeFullscreen({
      fullscreen: {
        enterOnRotate: true,
        exitOnRotate: true,
        alwaysInLandscapeMode: false,
        iOS: true
      }
    })

    this.keyboard = this.setupKeyboard()
  }

  private keyboard: IKeyboard

  private handleSpacebar = (ev: Event) => {
    ev.preventDefault()

    if (!this.player.isReady_) return

    if (this.player.paused()) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  private handleRight = () => {
    if (!this.player.isReady_) return

    forward(this.player)
  }

  private handleLeft = () => {
    if (!this.player.isReady_) return

    rewind(this.player)
  }

  private setupKeyboard() {
    const keyboard = getKeyboard()
    keyboard.bind(KEYS.space, this.handleSpacebar)
    keyboard.bind(KEYS.right, this.handleRight)
    keyboard.bind(KEYS.left, this.handleLeft)
    return keyboard
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()

    const { keyboard } = this
    keyboard.unbind(KEYS.space, this.handleSpacebar)
    keyboard.unbind(KEYS.right, this.handleRight)
    keyboard.unbind(KEYS.left, this.handleLeft)
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
          {this.isShowingToast && <span class="toast">{this.toastMessage}</span>}
        </div>
      </Host>
    )
  }
}

function forward(player: Player) {
  player.currentTime(player.currentTime() + 10)
}

function rewind(player: Player) {
  player.currentTime(player.currentTime() - 10 < 0 ? 0 : player.currentTime() - 10)
}
