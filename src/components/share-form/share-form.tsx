import { Component, Host, h, Prop } from "@stencil/core"
import { state$, store } from "../../lib/redux"
import { setCopiedLink, setCurrentTimeEnabled, setShareForm } from "../../lib/redux/video-page"
import { getId } from "../../utils/getId"
import { Subject, map, takeUntil } from "rxjs"
import { Modal } from "../../lib/Modal"
import { faCheck, faLink, faShare } from "@fortawesome/free-solid-svg-icons"
import { AppRoute } from "../../utils/AppRoute"
import { ShareFormState } from "../../lib/redux/video-page"
import { Stream } from "../../YoutubeApi"

const id = getId("share-cb")

@Component({
  tag: "share-form",
  styleUrl: "share-form.scss",
  shadow: false
})
export class ShareForm {
  @Prop({ mutable: true }) shareForm: ShareFormState | undefined
  @Prop({ mutable: true }) currentTimeEnabled: boolean
  @Prop({ mutable: true }) copiedLink: string
  @Prop() video: Stream

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
        this.copiedLink = state.copiedLink
      })
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  private handleCopyLink = async (link: string) => {
    copyToClipboard(link).then(() => {
      store.dispatch(setCopiedLink(link))
    })
  }

  private handleShare = (url: string) => {
    navigator.share({ url, title: this.video.title || "A YouTube Video" })
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
              <icon-btn
                icon={this.copiedLink ? faCheck : faLink}
                label={`${this.copiedLink ? "Copied!" : "Copy Link"}`}
                size="small"
                onBtnClicked={() => {
                  this.handleCopyLink(url)
                }}
              ></icon-btn>
              {isHavingShareSupport() && (
                <icon-btn
                  icon={faShare}
                  label="Share"
                  size="small"
                  onBtnClicked={() => {
                    this.handleShare(url)
                  }}
                ></icon-btn>
              )}
            </div>
          </form>
        </Modal>
      </Host>
    )
  }
}

function copyToClipboard(text: string) {
  return navigator.clipboard.writeText(text)
}

function isHavingShareSupport() {
  return !!navigator.share
}
