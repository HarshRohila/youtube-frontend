import { Component, Host, h } from "@stencil/core"
import { Modal } from "../../lib/Modal"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { closePlaylistForm } from "./facade"

@Component({
  tag: "form-playlist",
  styleUrl: "form-playlist.scss",
  shadow: false
})
export class FormPlaylist {
  private handleCloseForm = () => {
    closePlaylistForm()
  }

  render() {
    return (
      <Host>
        <Modal onClose={this.handleCloseForm}>
          <icon-btn icon={faPlus} label="New Playlist"></icon-btn>
        </Modal>
      </Host>
    )
  }
}
