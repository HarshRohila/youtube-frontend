import { Component, Host, h } from "@stencil/core"

@Component({
  tag: "a-playlist",
  styleUrl: "a-playlist.scss",
  shadow: false
})
export class APlaylist {
  render() {
    return (
      <Host>
        <div class="playlist-page">
          <h1>hello</h1>
        </div>
      </Host>
    )
  }
}
