import { MatchResults, RouterHistory } from "@stencil-community/router"
import { Component, Host, Prop, h, State, Fragment } from "@stencil/core"
import { SearchResult, Stream, YouTubeApi } from "../../YoutubeApi"
import { Subject, map, take, takeUntil } from "rxjs"
import { IAppError, setLoading } from "../../lib/redux/global"
import { state$, store } from "../../lib/redux"
import { faComment, faPlus, faShare, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { Router } from "../../lib/Router"
import { Videos } from "../../lib/Search"
import { UploaderInfo } from "./Uploader"
import { getTimeAgoFormatter } from "../../utils/TimeFormatter"
import { getShareHandler } from "../../lib/ShareForm/ShareHandler"
import { ShareFormState, setCommentView } from "../../lib/redux/video-page"
import { addItemInPlaylist } from "../../playlist"
import { getNotifier } from "../../lib/notifier"
import { clearNotification } from "../../lib/facades/notifier"

@Component({
  tag: "video-page",
  styleUrl: "video-page.scss",
  shadow: false
})
export class VideoPage {
  @Prop() match: MatchResults
  @Prop() history: RouterHistory

  @Prop({ mutable: true }) shareForm: ShareFormState | undefined
  @Prop({ mutable: true }) isCommentsOpen: boolean

  @State() stream: Stream
  @State() error: IAppError | undefined
  @State() skipSegments: number[][] = []

  disconnected$ = new Subject<void>()

  routeChange$ = new Subject<{ videoId: string; time: undefined | number }>()
  videoPlayer: HTMLVideoPlayerElement

  get videoId() {
    return this.match.params.videoId
  }

  componentWillLoad() {
    store.dispatch(setCommentView(undefined))

    const videoId = this.match.params.videoId

    this.history.listen(args => {
      const { pathname, query } = args

      if (!pathname.includes("videos")) return

      const time = query?.t
      const videoId = pathname.split("/").pop()
      this.routeChange$.next({ videoId, time })
    })

    this.routeChange$.pipe(takeUntil(this.disconnected$)).subscribe(({ videoId, time }) => {
      if (videoId === this.stream.id) {
        this.setCurrentTime(time)
      } else {
        this.fetchVideo(videoId)
      }
    })

    state$
      .pipe(
        map(s => s.videoPage),
        takeUntil(this.disconnected$)
      )
      .subscribe(state => {
        this.shareForm = state.shareForm
        this.isCommentsOpen = !!state.commentsView
      })

    this.fetchVideo(videoId)
  }

  private fetchVideo(videoId: string) {
    if (!videoId) return

    store.dispatch(setLoading(true))

    window.scrollTo({ top: 0, behavior: "smooth" })

    YouTubeApi.getApi()
      .getSkipSegments(videoId)
      .subscribe(skipSegments => {
        this.skipSegments = skipSegments
      })

    YouTubeApi.getApi()
      .getStream(videoId)
      .pipe(takeUntil(this.disconnected$))
      .subscribe({
        next: stream => {
          this.stream = stream
          store.dispatch(setLoading(false))
        },
        error: () => {
          this.error = { message: "Failed to load video. Please try changing server from settings(in home page)" }
          store.dispatch(setLoading(false))
        }
      })
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  private share = async () => {
    const time = (await this.videoPlayer.currentTime()) ?? 0

    getShareHandler().share(this.stream, { currentTime: time })
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

  private setCurrentTime(time: number | undefined) {
    if (time) {
      this.videoPlayer.currentTime(time)
      removeTimeFromQueryParameter()
    }
  }

  private handleVideoPlayerLoaded() {
    const time = this.history.location.query.t
    this.setCurrentTime(time)
  }

  private handleViewPlaylist = () => {
    clearNotification()
    new Router(this.history).showPlaylistPage()
  }

  private handleChangePlaylist = () => {}

  private handleAddPlaylist = () => {
    addItemInPlaylist({
      thumbnail: this.stream.thumbnail,
      title: this.stream.title,
      uploadedDate: this.stream.uploadDate,
      uploaderAvatar: this.stream.uploaderAvatar,
      uploaderName: this.stream.uploader,
      videoId: this.stream.id
    })
      .pipe(take(1))
      .subscribe()

    getNotifier().notify("Added in Watch Later", [
      {
        text: "View",
        clickHandler: this.handleViewPlaylist
      },
      {
        text: "Change",
        clickHandler: this.handleChangePlaylist
      }
    ])
  }

  render() {
    return (
      <Host>
        <div class="video-page">
          <page-header history={this.history} />
          {this.stream && (
            <Fragment>
              <video-player
                sources={this.stream.sources}
                ref={el => {
                  this.videoPlayer = el
                }}
                onLoaded={() => {
                  this.handleVideoPlayerLoaded()
                }}
                skipSegments={this.skipSegments}
              ></video-player>
              <h3>{this.stream.title}</h3>
            </Fragment>
          )}
          {this.stream && (
            <div class="below-video">
              <div class="video-info">{this.videoInfo}</div>
              <UploaderInfo video={this.stream} />
              <div class="actions">
                <icon-btn icon={faThumbsUp} label={formatter.format(this.stream.likes)} disabled></icon-btn>
                <icon-btn icon={faThumbsDown} label={formatter.format(this.stream.dislikes)} disabled></icon-btn>
                <icon-btn icon={faPlus} label="Add to Playlist" onBtnClicked={this.handleAddPlaylist}></icon-btn>
                <icon-btn icon={faShare} onBtnClicked={this.share} label="Share"></icon-btn>
                {this.shareForm && <share-form video={this.stream}></share-form>}
              </div>
              <icon-btn
                class="view-comments"
                size="small"
                icon={faComment}
                label="View Comments"
                type="secondary"
                onBtnClicked={() => store.dispatch(setCommentView({ videoId: this.videoId }))}
              ></icon-btn>
              {this.isCommentsOpen && <comments-view></comments-view>}
              {!!this.stream.relatedVideos?.length && <h3 class="suggestion-header">You may also like</h3>}
              <Videos
                preloadStream
                videos={this.stream.relatedVideos}
                isShowingSuggestions={false}
                onClickVideo={this.handleVideoClick}
              />
            </div>
          )}
          {this.error && <h3>{this.error.message}</h3>}
        </div>
      </Host>
    )
  }
}

const formatter = Intl.NumberFormat("en", { notation: "compact" })
function removeTimeFromQueryParameter() {
  const newUrl = location.href.split("?")[0]
  window.history.replaceState({ path: newUrl }, "", newUrl)
}
