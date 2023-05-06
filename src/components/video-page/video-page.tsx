import { MatchResults } from "@stencil-community/router"
import { Component, Host, Prop, h, State, Fragment } from "@stencil/core"
import { Stream, YouTubeApi } from "../../YoutubeApi"
import { Subject, takeUntil } from "rxjs"
import { IAppError, setLoading } from "../../lib/redux/global"
import { store } from "../../lib/redux"

@Component({
  tag: "video-page",
  styleUrl: "video-page.scss",
  shadow: false
})
export class VideoPage {
  @Prop() match: MatchResults

  @State() stream: Stream
  @State() error: IAppError | undefined

  disconnected$ = new Subject<void>()

  componentWillLoad() {
    const videoId = this.match.params.videoId

    store.dispatch(setLoading(true))
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

  render() {
    return (
      <Host>
        <div class="video-page">
          {this.stream && (
            <Fragment>
              <video-player src={this.url}></video-player>
              <h3>{this.stream.title}</h3>
            </Fragment>
          )}
          {this.error && <h3>{this.error.message}</h3>}
        </div>
      </Host>
    )
  }
}
