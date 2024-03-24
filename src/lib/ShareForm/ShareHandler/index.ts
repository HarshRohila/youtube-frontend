import { Stream } from "../../../YoutubeApi"
import { store } from "../../redux"
import { setCurrentTimeEnabled, setShareForm, videoPageState } from "../../redux/video-page"

interface IShareHandler {
  share(video: Stream, videoState: { currentTime: number }): void
}

class ShareHandler implements IShareHandler {
  share(_, { currentTime }): void {
    store.dispatch(setCurrentTimeEnabled(false))
    videoPageState.update({ copiedLink: "" })
    store.dispatch(setShareForm({ currentTime }))
  }
}

export function getShareHandler() {
  let shareHander: IShareHandler

  shareHander = new ShareHandler()

  return shareHander
}
