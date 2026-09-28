import { AppRoute } from "../utils/AppRoute"
import { DEFAULT_PLAYLIST } from "../utils/constants"

export class DefaultPlaylistUtils {
  readonly getDefaultPlaylistPath = (): string =>
    AppRoute.getPath(`/playlists/${DEFAULT_PLAYLIST.id}`)
}
