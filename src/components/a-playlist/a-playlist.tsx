import { RouterHistory } from "@stencil-community/router"
import { Component, Host, Prop, State, h } from "@stencil/core"
import { listItems } from "../../playlist"
import { take } from "rxjs"
import { PlaylistItem } from "../../playlist/database/models"
import { Videos } from "../../lib/Search"
import { Router } from "../../lib/Router"
import { DEFAULT_PLAYLIST } from "../../utils/constants"

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

  render() {
    return (
      <Host>
        <div class="playlist-page">
          <app-header history={this.history}></app-header>
          <h3 class="playlist-name">{DEFAULT_PLAYLIST.name}</h3>
          {this.playlistItems && (
            <Videos
              videos={this.playlistItems}
              isShowingSuggestions={false}
              onClickVideo={video => {
                new Router(this.history).showVideoPage(video)
              }}
            ></Videos>
          )}
        </div>
      </Host>
    )
  }
}
