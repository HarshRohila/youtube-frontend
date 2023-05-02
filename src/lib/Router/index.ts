import { SearchResult } from "../../YoutubeApi"

export class Router {
  constructor(private history: IHistory) {}
  showVideoPage(video: SearchResult) {
    this.history.push(`/videos/${video.videoId}`)
  }
}

interface IHistory {
  push(path: string): void
}
