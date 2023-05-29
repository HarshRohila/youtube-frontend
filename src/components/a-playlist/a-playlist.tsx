import { RouterHistory } from "@stencil-community/router"
import { Component, Host, Prop, h } from "@stencil/core"

@Component({
  tag: "a-playlist",
  styleUrl: "a-playlist.scss",
  shadow: false
})
export class APlaylist {
  @Prop() history: RouterHistory

  render() {
    return (
      <Host>
        <div class="playlist-page">
          <app-header history={this.history}></app-header>
        </div>
      </Host>
    )
  }
}
