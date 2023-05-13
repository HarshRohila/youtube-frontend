import { MatchResults, RouterHistory } from "@stencil-community/router"
import { Component, Host, Prop, h, State, Fragment } from "@stencil/core"
import { SearchResult, Stream, YouTubeApi } from "../../YoutubeApi"
import { Subject, map, takeUntil } from "rxjs"
import { IAppError, setLoading } from "../../lib/redux/global"
import { state$, store } from "../../lib/redux"
import { Header } from "../../lib/Header"
import { faShare, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { Router } from "../../lib/Router"
import { Videos } from "../../lib/Search"
import { UploaderInfo } from "./Uploader"
import { getTimeAgoFormatter } from "../../utils/TimeFormatter"
import { getShareHandler } from "../../lib/ShareForm/ShareHandler"
import { ShareFormState } from "../../lib/redux/video-page"
import Player from "video.js/dist/types/player"

@Component({
  tag: "video-page",
  styleUrl: "video-page.scss",
  shadow: false
})
export class VideoPage {
  @Prop() match: MatchResults
  @Prop() history: RouterHistory

  @Prop({ mutable: true }) shareForm: ShareFormState | undefined

  @State() stream: Stream
  @State() error: IAppError | undefined

  disconnected$ = new Subject<void>()

  routeChange$ = new Subject<{ videoId: string }>()
  videoPlayer: HTMLVideoPlayerElement

  componentWillLoad() {
    const videoId = this.match.params.videoId

    this.history.listen(({ pathname }: { pathname: string }) => {
      const videoId = pathname.split("/").pop()
      this.routeChange$.next({ videoId })
    })

    this.routeChange$.pipe(takeUntil(this.disconnected$)).subscribe(({ videoId }) => {
      this.fetchVideo(videoId)
    })

    state$
      .pipe(
        map(s => s.videoPage),
        takeUntil(this.disconnected$)
      )
      .subscribe(state => {
        this.shareForm = state.shareForm
      })

    this.fetchVideo(videoId)
  }

  private fetchVideo(videoId: string) {
    store.dispatch(setLoading(true))

    window.scrollTo({ top: 0, behavior: "smooth" })

    YouTubeApi.getApi()
      .getStream(videoId)
      .pipe(takeUntil(this.disconnected$))
      .subscribe({
        next: stream => {
          this.stream = stream
          store.dispatch(setLoading(false))
        },
        error: () => {
          this.error = { message: "Failed to load video. Please try refreshing" }
          store.dispatch(setLoading(false))
        }
      })
  }

  get url() {
    return this.stream.sources[0].url
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  private share = async () => {
    const time = (await this.videoPlayer.currentTime()) ?? 0

    getShareHandler().share(this.stream, { currentTime: time })
  }

  private handleHeaderClick = () => {
    new Router(this.history).showTrendingPage()
  }

  private handleVideoClick = (video: SearchResult) => {
    new Router(this.history).showVideoPage(video)
  }

  get views() {
    return formatter.format(this.stream.views) + " views"
  }

  get videoInfo() {
    return this.views + " ‧ " + this.timeAgo
  }

  get timeAgo() {
    return getTimeAgoFormatter().format(new Date(this.stream.uploadDate))
  }

  private handleVideoPlayerLoaded(player: Player) {
    const time = this.history.location.query.t

    if (time) {
      player.currentTime(time)
    }
  }

  render() {
    return (
      <Host>
        <div class="video-page">
          <Header onHeaderClick={this.handleHeaderClick} />
          {this.stream && (
            <Fragment>
              <video-player
                src={this.url}
                ref={el => {
                  this.videoPlayer = el
                }}
                onLoaded={ev => {
                  this.handleVideoPlayerLoaded(ev.detail.player)
                }}
              ></video-player>
              <h3>{this.stream.title}</h3>
              <div class="video-info">{this.videoInfo}</div>
              <UploaderInfo video={this.stream} />
              <div class="actions">
                <icon-btn icon={faThumbsUp} label={formatter.format(this.stream.likes)} disabled></icon-btn>
                <icon-btn icon={faThumbsDown} label={formatter.format(this.stream.dislikes)} disabled></icon-btn>
                <icon-btn icon={faShare} onBtnClicked={this.share} label="Share"></icon-btn>
                {this.shareForm && <share-form></share-form>}
              </div>
            </Fragment>
          )}
          {this.error && <h3>{this.error.message}</h3>}
          {this.stream && <h3>You may also like</h3>}
          {this.stream && (
            <Videos
              videos={this.stream.relatedVideos}
              isShowingSuggestions={false}
              onClickVideo={this.handleVideoClick}
            />
          )}
        </div>
      </Host>
    )
  }
}

const formatter = Intl.NumberFormat("en", { notation: "compact" })
