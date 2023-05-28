import { Component, Host, h, Prop, Watch, Method, Event, EventEmitter, State, Element } from "@stencil/core"
import { Subject } from "rxjs"
import videojs from "video.js"
import Player from "video.js/dist/types/player"
import "videojs-landscape-fullscreen"
import { IKeyboard, KEYS, getKeyboard } from "../../utils/keyboard"
import { createDblClickEvent } from "../../utils/dblClick"
import { faBackward, faForward, faPause, faPlay } from "@fortawesome/free-solid-svg-icons"

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

  @Element() el!: HTMLVideoPlayerElement

  @Method()
  async currentTime(newTime?: number) {
    if (newTime) {
      return this.player?.currentTime(newTime)
    }

    return this.player?.currentTime()
  }

  @Event() loaded: EventEmitter<{ player: Player }>

  private handleDblClick = ev => {
    const e = ev.detail.clickEvent
    const playerWidth = this.player.currentWidth()
    const playerJS = this.player

    if (0.66 * playerWidth < e.offsetX) {
      forward(playerJS, this.el)
    } else if (e.offsetX < 0.33 * playerWidth) {
      rewind(playerJS, this.el)
    } else {
      togglePlayPause(playerJS, this.el)
    }
  }

  private handleRightClick = ev => {
    ev.preventDefault()
    const playerEl = this.player.el()
    playerEl.classList.toggle("video-cover")
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
        vhs: {
          useDevicePixelRatio: true
        }
      }
    })

    this.player.ready(() => {
      const video = this.player.el().querySelector(".vjs-text-track-display") as HTMLDivElement
      video.style.pointerEvents = "auto"

      const ev = createDblClickEvent(video)
      video.addEventListener(ev.name, this.handleDblClick)
      video.addEventListener("contextmenu", this.handleRightClick)

      this.disconnected$.subscribe({
        complete: () => {
          ev.remove()
        }
      })

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

    togglePlayPause(this.player, this.el)
  }

  private handleRight = () => {
    if (!this.player.isReady_) return

    forward(this.player, this.el)
  }

  private handleLeft = () => {
    if (!this.player.isReady_) return

    rewind(this.player, this.el)
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
            <div class="action-icons">
              <div class="backward">
                <x-icon icon={faBackward}></x-icon>
              </div>
              <div class="play">
                <x-icon icon={faPlay}></x-icon>
              </div>
              <div class="pause">
                <x-icon icon={faPause}></x-icon>
              </div>
              <div class="forward">
                <x-icon icon={faForward}></x-icon>
              </div>
            </div>
          </video-js>
          {this.isShowingToast && <span class="toast">{this.toastMessage}</span>}
        </div>
      </Host>
    )
  }
}

function forward(player: Player, el: HTMLVideoPlayerElement) {
  const fwd = el.querySelector(".forward")
  briflyShowElement(fwd)

  player.currentTime(player.currentTime() + 10)
}

function rewind(player: Player, el: HTMLVideoPlayerElement) {
  const bk = el.querySelector(".backward")
  briflyShowElement(bk)

  player.currentTime(player.currentTime() - 10 < 0 ? 0 : player.currentTime() - 10)
}

function togglePlayPause(player: Player, el: HTMLVideoPlayerElement) {
  if (player.paused()) {
    const play = el.querySelector(".play")
    briflyShowElement(play)
    player.play()
  } else {
    const pause = el.querySelector(".pause")
    briflyShowElement(pause)
    player.pause()
  }
}

function briflyShowElement(el: Element) {
  el.classList.add("show")
  setTimeout(() => {
    el.classList.remove("show")
  }, 300)
}
