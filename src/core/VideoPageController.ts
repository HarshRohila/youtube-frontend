import { AppRoute } from "../utils/AppRoute"

export class VideoPageController {
  readonly handleWatchWithYoutube = (videoId: string): string =>
    AppRoute.getPath(`/youtube/${videoId}`)
}
