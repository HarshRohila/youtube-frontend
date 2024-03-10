import { Component, Host, Prop, State, h, Element } from "@stencil/core"
import { SearchResult, Stream, YouTubeApi } from "../../YoutubeApi"
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"
import { fromEvent, take, switchMap, of, map, merge, Subject, timer, takeUntil } from "../../lib/rx"
import { untilDestroyed } from "@ngneat/until-destroy"

const formatter = Intl.NumberFormat("en", { notation: "compact" })

@Component({
  tag: "card-video",
  styleUrl: "card-video.scss",
  shadow: false
})
export class CardVideo {
  @Element() el: HTMLElement

  @Prop() video: SearchResult

  @Prop() preloadStream = false

  @Prop() deleteCallback?: (video: SearchResult) => void

  get subDescription() {
    const { video } = this

    return ["", ...(video.views ? [formatter.format(video.views)] : []), video.uploadedDate].join(" ‧ ")
  }

  @State() stream: Stream | undefined
  @State() showVideoPreview = false

  get thumbnail() {
    return this.stream?.thumbnail || this.video.thumbnail
  }

  private handleImageLoad = () => {
    if (!this.preloadStream || this.stream) return

    this.getStream().pipe(take(1)).subscribe(this.setStream)
  }

  private setStream = (newStream: Stream) => {
    this.stream = newStream
  }

  private getStream = () => {
    if (this.stream) return of(this.stream)

    return YouTubeApi.getApi().getStream(this.video.videoId)
  }

  componentDidLoad() {
    const card = this.el.querySelector(".card")

    const mouseLeave$ = fromEvent(card, "mouseleave")
    const mouseEnter$ = fromEvent(card, "mouseenter")

    const videoStream$ = mouseEnter$.pipe(
      switchMap(() => timer(300).pipe(takeUntil(mouseLeave$))),
      switchMap(this.getStream)
    )

    videoStream$.pipe(untilDestroyed(this, "disconnectedCallback")).subscribe(stream => {
      this.setStream(stream)
    })

    const showVideoPreview$ = videoStream$.pipe(map(() => true))
    const hideVideoPreview$ = merge(mouseLeave$, this.destroy$).pipe(map(() => false))

    merge(showVideoPreview$, hideVideoPreview$)
      .pipe(untilDestroyed(this, "disconnectedCallback"))
      .subscribe(value => {
        this.showVideoPreview = value
      })

    mouseLeave$.pipe(take(1)).subscribe(() => {
      this.showVideoPreview = false
    })
  }

  render() {
    const { video, subDescription } = this

    return (
      <Host>
        <div class="card">
          <img class="thumbnail" src={this.thumbnail}></img>
          <div class="video-preview">
            {this.stream && this.showVideoPreview && (
              <video-player sources={this.stream.sources} muted={true}></video-player>
            )}
          </div>
          <div class="video-desc">
            <img class="uploader-avatar" onLoad={this.handleImageLoad} src={video.uploaderAvatar}></img>
            <span class="avatar-right">
              <h3>{video.title}</h3>
              <p class="sub-desc">
                <span>{video.uploaderName}</span>
                {!!video.uploaderVerified && <x-icon icon={faCheck}></x-icon>}
                <span>{subDescription}</span>
              </p>
            </span>
            {this.deleteCallback && (
              <icon-btn
                class="delete-btn"
                icon={faTrash}
                onClick={ev => {
                  ev.stopPropagation()
                }}
                onBtnClicked={() => {
                  this.deleteCallback(video)
                }}
              ></icon-btn>
            )}
          </div>
        </div>
      </Host>
    )
  }

  destroy$ = new Subject<void>()

  disconnectedCallback() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
