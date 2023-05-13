import { Stream } from "../../../YoutubeApi"
import { AppRoute } from "../../../utils/AppRoute"
import { store } from "../../redux"
import { setCopiedLink, setCurrentTimeEnabled, setShareForm } from "../../redux/video-page"

interface IShareHandler {
  share(video: Stream, videoState: { currentTime: number }): void
}

class MobileShareHandler implements IShareHandler {
  share(video: Stream): void {
    const url = AppRoute.getCurrentSpaUrl()
    navigator.share({ url, title: video.title || "A YouTube Video" })
  }
}

class DesktopShareHandler implements IShareHandler {
  share(_, { currentTime }): void {
    store.dispatch(setCurrentTimeEnabled(false))
    store.dispatch(setCopiedLink(""))
    store.dispatch(setShareForm({ currentTime }))
  }
}

export function getShareHandler() {
  let shareHander: IShareHandler

  if (navigator.share) {
    shareHander = new MobileShareHandler()
  } else {
    shareHander = new DesktopShareHandler()
  }

  return shareHander
}
