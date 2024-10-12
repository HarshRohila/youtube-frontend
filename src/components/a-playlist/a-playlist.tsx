import { RouterHistory } from "@stencil-community/router"
import { Component, Host, Prop, State, h } from "@stencil/core"
import { addItemInPlaylist, deleteItemInPlaylist, listItems } from "../../playlist"
import { take } from "rxjs"
import { PlaylistItem } from "../../playlist/database/models"
import { Videos } from "../../lib/Search"
import { Router } from "../../lib/Router"
import { DEFAULT_PLAYLIST } from "../../utils/constants"
import { Modal } from "../../lib/Modal"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { SearchResult, Stream } from "../../YoutubeApi"

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

  private deletePlaylistItem = (playlistItem: PlaylistItem) => {
    deleteItemInPlaylist(playlistItem).pipe(take(1)).subscribe()
    this.playlistItems = this.playlistItems.filter(i => i.videoId !== playlistItem.videoId)
  }

  private handleImageErrorFixed = (video: SearchResult, stream: Stream) => {
    addItemInPlaylist({
      thumbnail: stream.thumbnail,
      videoId: video.videoId,
      title: stream.title,
      uploaderAvatar: stream.uploaderAvatar,
      uploaderName: stream.uploader,
      uploadedDate: stream.uploadDate
    })
      .pipe(take(1))
      .subscribe()
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
                  this.deletePlaylistItem(this.toBeDeletedPlaylistItem)
                  this.toBeDeletedPlaylistItem = undefined
                }}
              ></icon-btn>
            </Modal>
          )}
          <page-header history={this.history}></page-header>
          <h3 class="playlist-name">{DEFAULT_PLAYLIST.name}</h3>
          {this.playlistItems && (
            <Videos
              videos={this.playlistItems}
              isShowingSuggestions={false}
              onClickVideo={video => {
                new Router(this.history).showVideoPage(video)
              }}
              onDeleteVideo={this.handleDelete}
              imageErrorFixed={this.handleImageErrorFixed}
            ></Videos>
          )}
          {!this.playlistItems?.length && (
            <h5 class="empty-msg">
              Nothing here. <br /> To add videos in Watch later click "Add to Playlist" while watching a video.
            </h5>
          )}
        </div>
      </Host>
    )
  }
}
