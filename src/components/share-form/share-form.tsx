import { Component, Host, h, Prop } from "@stencil/core"
import { setCurrentTimeEnabled, setShareForm, videoPageState } from "../../lib/redux/video-page"
import { getId } from "../../utils/getId"
import { Modal } from "../../lib/Modal"
import { faCheck, faLink, faShare } from "@fortawesome/free-solid-svg-icons"
import { AppRoute } from "../../utils/AppRoute"
import { ShareFormState } from "../../lib/redux/video-page"
import { Stream } from "../../YoutubeApi"
import { componentUtil } from "../../lib/app-state-mgt"

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

  componentWillLoad() {
    const component = componentUtil(this)

    component.untilDestroyed(videoPageState.asObservable()).subscribe(state => {
      this.copiedLink = state.copiedLink
      this.shareForm = state.shareForm
      this.currentTimeEnabled = state.currentTimeEnabled
    })
  }

  private handleCopyLink = async (link: string) => {
    copyToClipboard(link).then(() => {
      videoPageState.update({ copiedLink: link })
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
        <Modal onClose={() => setShareForm(undefined)}>
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
                setCurrentTimeEnabled(!this.currentTimeEnabled)
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
