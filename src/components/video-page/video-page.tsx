import { MatchResults } from "@stencil-community/router"
import { Component, Host, Prop, h, State } from "@stencil/core"
import { YouTubeApi } from "../../YoutubeApi"
import { Subject, takeUntil } from "rxjs"

@Component({
  tag: "video-page",
  styleUrl: "video-page.scss",
  shadow: false
})
export class VideoPage {
  @Prop() match: MatchResults

  @State() url: string

  disconnected$ = new Subject<void>()

  componentWillLoad() {
    const videoId = this.match.params.videoId
    console.log(videoId)

    YouTubeApi.getApi()
      .getStream(videoId)
      .pipe(takeUntil(this.disconnected$))
      .subscribe(stream => {
        this.url = stream.sources[0].url
      })
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  render() {
    return (
      <Host>
        <div class="video-page">{this.url && <video-player src={this.url}></video-player>}</div>
      </Host>
    )
  }
}
