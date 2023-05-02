import { SearchResult } from "../../YoutubeApi"
import { AppRoute } from "../../utils/AppRoute"

export class Router {
  constructor(private history: IHistory) {}
  showVideoPage(video: SearchResult) {
    this.history.push(AppRoute.getPath(`/videos/${video.videoId}`))
  }
}

interface IHistory {
  push(path: string): void
}
