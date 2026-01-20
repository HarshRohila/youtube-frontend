import { SearchResult } from "../../YoutubeApi"
import { DefaultVideoPlayer } from "../../settings/defaultVideoPlayer"
import { AppRoute } from "../../utils/AppRoute"

export class Router {
  constructor(private history: IHistory) {}
  showVideoPage(video: SearchResult) {
    const player = DefaultVideoPlayer.get()
    if (player === "youtube") {
      this.history.push(AppRoute.getPath(`/youtube/${video.videoId}`))
    } else {
      this.history.push(AppRoute.getPath(`/videos/${video.videoId}`))
    }
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
  showPlaylistPage() {
    this.history.push(AppRoute.getPath(`/playlists/1`))
  }
  showSettingsPage() {
    this.history.push(AppRoute.getPath(`/settings`))
  }
  showYoutubePage(videoId: string) {
    this.history.replace(AppRoute.getPath(`/youtube/${videoId}`))
  }
}

interface IHistory {
  push(path: string): void
  replace(path: string): void
}
