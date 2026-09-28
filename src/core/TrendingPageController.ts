import { AppRoute } from "../utils/AppRoute"
import { DefaultPlaylistUtils } from "./DefaultPlaylistUtils"

export class TrendingPageController {
  private readonly defaultPlaylistUtils = new DefaultPlaylistUtils()

  readonly handleOpenSettings = (): string => AppRoute.getPath("/settings")

  readonly handleOpenPlaylist = (): string =>
    this.defaultPlaylistUtils.getDefaultPlaylistPath()
}
