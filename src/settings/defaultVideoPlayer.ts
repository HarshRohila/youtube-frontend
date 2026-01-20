import { LocalStorage } from "../local-storage"

export type VideoPlayerType = "in-built" | "youtube"

const KEY = "default-video-player"

export const DefaultVideoPlayer = {
  set(player: VideoPlayerType) {
    LocalStorage.setJson(KEY, { player })
  },
  get(): VideoPlayerType {
    const data = LocalStorage.getJson<{ player: VideoPlayerType }>(KEY)

    if (data) return data.player

    return "in-built"
  }
}
