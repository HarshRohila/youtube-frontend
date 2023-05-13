import { Component, Host, h, Prop } from "@stencil/core"
import { state$, store } from "../../lib/redux"
import { setCurrentTimeEnabled, setShareForm } from "../../lib/redux/video-page"
import { getId } from "../../utils/getId"
import { Subject, map, takeUntil } from "rxjs"
import { Modal } from "../../lib/Modal"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { AppRoute } from "../../utils/AppRoute"
import { ShareFormState } from "../../lib/redux/video-page"

const id = getId("share-cb")

@Component({
  tag: "share-form",
  shadow: false
})
export class ShareForm {
  @Prop({ mutable: true }) shareForm: ShareFormState | undefined
  @Prop({ mutable: true }) currentTimeEnabled: boolean

  disconnected$ = new Subject<void>()

  componentWillLoad() {
    state$
      .pipe(
        map(s => s.videoPage),
        takeUntil(this.disconnected$)
      )
      .subscribe(state => {
        this.shareForm = state.shareForm
        this.currentTimeEnabled = state.currentTimeEnabled
      })
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  render() {
    let url = AppRoute.getCurrentSpaUrl()

    if (this.currentTimeEnabled) {
      url += "?t=" + this.shareForm.currentTime
    }

    return (
      <Host>
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
              checked={this.currentTimeEnabled}
              onClick={() => {
                store.dispatch(setCurrentTimeEnabled(!this.currentTimeEnabled))
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
      </Host>
    )
  }
}
