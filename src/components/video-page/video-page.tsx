import { MatchResults } from "@stencil-community/router"
import { Component, Host, Prop, h, State, Fragment } from "@stencil/core"
import { Stream, YouTubeApi } from "../../YoutubeApi"
import { Subject, takeUntil } from "rxjs"

@Component({
  tag: "video-page",
  styleUrl: "video-page.scss",
  shadow: false
})
export class VideoPage {
  @Prop() match: MatchResults

  @State() stream: Stream

  disconnected$ = new Subject<void>()

  componentWillLoad() {
    const videoId = this.match.params.videoId

    YouTubeApi.getApi()
      .getStream(videoId)
      .pipe(takeUntil(this.disconnected$))
      .subscribe(stream => {
        this.stream = stream
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
          {!this.stream && <h3>Failed to load video. Please try refreshing</h3>}
        </div>
      </Host>
    )
  }
}
