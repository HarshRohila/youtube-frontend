import { AppRoute } from "../utils/AppRoute"
import { DefaultPlaylistUtils } from "./DefaultPlaylistUtils"

export class VideoPageController {
  private readonly defaultPlaylistUtils = new DefaultPlaylistUtils()

  readonly handleWatchWithYoutube = (videoId: string): string =>
    AppRoute.getPath(`/youtube/${videoId}`)

  readonly handleOpenPlaylist = (): string =>
    this.defaultPlaylistUtils.getDefaultPlaylistPath()
}
