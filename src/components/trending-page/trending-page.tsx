import { Component, Host, State, h } from "@stencil/core"
import { SearchResult, YouTubeApi } from "../../YoutubeApi"
import { Subject, takeUntil } from "rxjs"
import { Card } from "./card"

@Component({
  tag: "trending-page",
  styleUrl: "trending-page.scss",
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
                <Card video={r} />
              </li>
            ))}
        </ul>
      </Host>
    )
  }
}
