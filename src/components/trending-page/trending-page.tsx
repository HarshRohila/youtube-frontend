import { Component, Host, State, h } from "@stencil/core"
import { SearchResult, YouTubeApi } from "../../YoutubeApi"
import { Subject, takeUntil } from "rxjs"

@Component({
  tag: "trending-page",
  shadow: true
})
export class TrendingPage {
  @State() videos: SearchResult[]

  disconnected$ = new Subject<void>()

  componentWillLoad() {
    YouTubeApi.getApi()
      .getTrendingVideos()
      .pipe(takeUntil(this.disconnected$))
      .subscribe(videos => {
        debugger
        this.videos = videos
      })
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  render() {
    return (
      <Host>
        <ul>
          {this.videos &&
            this.videos.map(r => (
              <li>
                <img src={r.thumbnail}></img>
              </li>
            ))}
        </ul>
      </Host>
    )
  }
}
