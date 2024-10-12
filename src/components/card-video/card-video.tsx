import { Component, Host, Prop, State, h, Element } from "@stencil/core"
import { SearchResult, Stream, YouTubeApi } from "../../YoutubeApi"
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"
import { take, of, switchMap, timer, takeUntil, map, merge } from "../../lib/rx"
import { componentUtil } from "../../lib/app-state-mgt"
import { createEvent, createVoidEvent } from "../../lib/state-mgt"

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

    this.getStream(this.video).pipe(take(1)).subscribe(this.setStream)
  }

  private setStream = (newStream: Stream) => {
    this.stream = newStream
  }

  private getStream = (video: SearchResult) => {
    if (this.stream) return of(this.stream)

    return YouTubeApi.getApi().getStream(video.videoId)
  }

  mouseLeaveEvent = createVoidEvent<MouseEvent>()
  mouseEnterEvent = createEvent<MouseEvent, SearchResult>(() => this.video)
  destroyEvent = createVoidEvent<void>({ once: true })

  componentDidLoad() {
    const mouseLeave$ = this.mouseLeaveEvent.$
    const mouseEnter$ = this.mouseEnterEvent.$

    const component = componentUtil(this)

    const videoStream$ = mouseEnter$.pipe(
      switchMap(video =>
        timer(300).pipe(
          takeUntil(mouseLeave$),
          map(() => video)
        )
      ),
      switchMap(this.getStream)
    )

    component.subscribe(videoStream$, stream => {
      this.setStream(stream)
    })

    const showVideoPreview$ = videoStream$.pipe(map(() => true))
    const hideVideoPreview$ = merge(mouseLeave$, this.destroyEvent.$).pipe(map(() => false))

    component.subscribe(merge(showVideoPreview$, hideVideoPreview$), value => {
      this.showVideoPreview = value
    })
  }

  handleThumbnailError = () => {
    YouTubeApi.getApi().getStream(this.video.videoId).pipe(take(1)).subscribe(this.setStream)
  }

  render() {
    const { video, subDescription } = this

    return (
      <Host>
        <div class="card" onMouseLeave={this.mouseLeaveEvent.handler} onMouseEnter={this.mouseEnterEvent.handler}>
          <video-thumbnail imageSrc={this.thumbnail} onErrored={this.handleThumbnailError}></video-thumbnail>
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

  disconnectedCallback() {
    this.destroyEvent.handler()
  }
}
