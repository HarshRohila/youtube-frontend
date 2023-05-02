import { Component, Host, Prop, State, h } from "@stencil/core"
import { SearchResult, YouTubeApi } from "../../YoutubeApi"
import { Subject, takeUntil } from "rxjs"
import { Card } from "./card"
import { RouterHistory } from "@stencil-community/router"
import { Router } from "../../lib/Router"

@Component({
  tag: "trending-page",
  styleUrl: "trending-page.scss",
  shadow: true
})
export class TrendingPage {
  @State() videos: SearchResult[]

  @Prop() history: RouterHistory

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

  private createVideoClickHandler = (video: SearchResult) => {
    const handler = () => {
      new Router(this.history).showVideoPage(video)
    }

    return handler
  }

  render() {
    return (
      <Host>
        <ul>
          {this.videos &&
            this.videos.map(r => (
              <li onClick={this.createVideoClickHandler(r)}>
                <Card video={r} />
              </li>
            ))}
        </ul>
      </Host>
    )
  }
}
