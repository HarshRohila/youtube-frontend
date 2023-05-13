import { h } from "@stencil/core"
import { Modal } from "../Modal"
import { getId } from "../../utils/getId"
import { store } from "../redux"
import { ShareFormState, setCurrentTimeEnabled, setShareForm } from "../redux/video-page"
import { Stream } from "../../YoutubeApi"
import { AppRoute } from "../../utils/AppRoute"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const id = getId("share-cb")

export function ShareForm({
  state,
  currentTimeEnabled
}: {
  video: Stream
  state: ShareFormState
  currentTimeEnabled: boolean
}) {
  let url = AppRoute.getCurrentSpaUrl()

  if (currentTimeEnabled) {
    url += "?t=" + state.currentTime
  }

  return (
    <Modal onClose={() => store.dispatch(setShareForm(undefined))}>
      <form
        class="share-form"
        onSubmit={ev => {
          ev.preventDefault()
        }}
      >
        <input
          type="checkbox"
          id={id}
          checked={currentTimeEnabled}
          onClick={() => {
            store.dispatch(setCurrentTimeEnabled(!currentTimeEnabled))
          }}
        />
        <label htmlFor={id}>
          <span>Share with Current Time?</span>
        </label>
        <p>{url}</p>
        <div class="share-actions">
          <icon-btn icon={faLink} label="Copy Link" size="small"></icon-btn>
        </div>
      </form>
    </Modal>
  )
}
