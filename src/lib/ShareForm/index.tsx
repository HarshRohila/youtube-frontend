import { h } from "@stencil/core"
import { Modal } from "../Modal"
import { getId } from "../../utils/getId"
import { store } from "../redux"
import { ShareFormState, setShareForm } from "../redux/video-page"
import { Stream } from "../../YoutubeApi"
import { AppRoute } from "../../utils/AppRoute"

const id = getId("share-cb")

export function ShareForm({ video, state }: { video: Stream; state: ShareFormState }) {
  let url = AppRoute.getCurrentSpaUrl() + "?t=" + state.currentTime

  return (
    <Modal onClose={() => store.dispatch(setShareForm(undefined))}>
      <form>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>
          <span>Share with Current Time?</span>
        </label>
        <p>{url}</p>
      </form>
    </Modal>
  )
}
