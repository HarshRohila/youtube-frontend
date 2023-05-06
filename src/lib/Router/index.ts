import { SearchResult } from "../../YoutubeApi"
import { AppRoute } from "../../utils/AppRoute"

export class Router {
  constructor(private history: IHistory) {}
  showVideoPage(video: SearchResult) {
    this.history.push(AppRoute.getPath(`/videos/${video.videoId}`))
  }
  showSearchPage(query: string, { replace }: { replace: boolean } = { replace: false }) {
    const path = AppRoute.getPath(`/search?q=${query}`)

    if (replace) {
      this.history.replace(path)
    } else {
      this.history.push(path)
    }
  }
  showTrendingPage() {
    this.history.push(AppRoute.getPath(`/`))
  }
}

interface IHistory {
  push(path: string): void
  replace(path: string): void
}
