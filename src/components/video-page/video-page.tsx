import { MatchResults, RouterHistory } from "@stencil-community/router"
import { Component, Host, Prop, h, State, Fragment } from "@stencil/core"
import { Stream, YouTubeApi } from "../../YoutubeApi"
import { Subject, takeUntil } from "rxjs"
import { IAppError, setError, setLoading } from "../../lib/redux/global"
import { store } from "../../lib/redux"
import { Header } from "../../lib/Header"
import { faShare } from "@fortawesome/free-solid-svg-icons"
import { Router } from "../../lib/Router"

@Component({
  tag: "video-page",
  styleUrl: "video-page.scss",
  shadow: false
})
export class VideoPage {
  @Prop() match: MatchResults
  @Prop() history: RouterHistory

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

  private share = () => {
    if (navigator.share) {
      const url = document.location.href

      navigator.share({ url })
    } else {
      store.dispatch(setError({ message: "Sharing not supported in your Device for now" }))
    }
  }

  private handleHeaderClick = () => {
    new Router(this.history).showTrendingPage()
  }

  render() {
    return (
      <Host>
        <div class="video-page">
          <Header onHeaderClick={this.handleHeaderClick} />
          {this.stream && (
            <Fragment>
              <video-player src={this.url}></video-player>
              <h3>{this.stream.title}</h3>
              <div class="actions">
                <icon-btn icon={faShare} onBtnClicked={this.share} label="Share"></icon-btn>
              </div>
            </Fragment>
          )}
          {this.error && <h3>{this.error.message}</h3>}
        </div>
      </Host>
    )
  }
}
