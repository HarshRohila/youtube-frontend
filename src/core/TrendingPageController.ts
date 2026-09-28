import { AppRoute } from "../utils/AppRoute"
import { DefaultPlaylistUtils } from "./DefaultPlaylistUtils"
import { SearchRouteUtils } from "./SearchRouteUtils"

export class TrendingPageController {
  private readonly defaultPlaylistUtils = new DefaultPlaylistUtils()
  private readonly searchRouteUtils = new SearchRouteUtils()

  readonly handleOpenSettings = (): string => AppRoute.getPath("/settings")

  readonly handleOpenPlaylist = (): string => this.defaultPlaylistUtils.getDefaultPlaylistPath()

  readonly handleOpenSearch = this.searchRouteUtils.getSearchPath
}
