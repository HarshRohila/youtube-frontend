import { RouterHistory } from "@stencil-community/router"
import { Component, Host, Prop, State, h } from "@stencil/core"
import { deleteItemInPlaylist, listItems } from "../../playlist"
import { take } from "rxjs"
import { PlaylistItem } from "../../playlist/database/models"
import { Videos } from "../../lib/Search"
import { Router } from "../../lib/Router"
import { DEFAULT_PLAYLIST } from "../../utils/constants"
import { Modal } from "../../lib/Modal"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

@Component({
  tag: "a-playlist",
  styleUrl: "a-playlist.scss",
  shadow: false
})
export class APlaylist {
  @Prop() history: RouterHistory

  @State() playlistItems: PlaylistItem[]

  componentWillLoad() {
    listItems()
      .pipe(take(1))
      .subscribe(items => {
        this.playlistItems = items
      })
  }

  @State() toBeDeletedPlaylistItem: PlaylistItem | undefined

  private handleDelete = (playlistItem: PlaylistItem) => {
    this.toBeDeletedPlaylistItem = playlistItem
  }

  render() {
    return (
      <Host>
        <div class="playlist-page">
          {this.toBeDeletedPlaylistItem && (
            <Modal
              onClose={() => {
                this.toBeDeletedPlaylistItem = undefined
              }}
            >
              <span>Are you sure you want to Delete?</span>
              <icon-btn
                icon={faCheck}
                label="Yes"
                onBtnClicked={() => {
                  deleteItemInPlaylist(this.toBeDeletedPlaylistItem).pipe(take(1)).subscribe()
                  this.toBeDeletedPlaylistItem = undefined
                }}
              ></icon-btn>
            </Modal>
          )}
          <app-header history={this.history}></app-header>
          <h3 class="playlist-name">{DEFAULT_PLAYLIST.name}</h3>
          {this.playlistItems && (
            <Videos
              videos={this.playlistItems}
              isShowingSuggestions={false}
              onClickVideo={video => {
                new Router(this.history).showVideoPage(video)
              }}
              onDeleteVideo={this.handleDelete}
            ></Videos>
          )}
        </div>
      </Host>
    )
  }
}
