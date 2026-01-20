import { MatchResults, RouterHistory } from "@stencil-community/router"
import { Component, h, Host, Prop } from "@stencil/core"

@Component({
  tag: "youtube-iframe",
  styleUrl: "youtube-iframe.scss",
  shadow: true
})
export class YoutubeIframe {
  @Prop() match: MatchResults
  @Prop() history: RouterHistory

  get videoId() {
    return this.match.params.videoId
  }

  render() {
    return (
      <Host>
        <page-header history={this.history} />
        <div class="container">
          <iframe
            title="YouTube Video Player"
            id="ytplayer"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${this.videoId}?autoplay=1&origin=http://example.com`}
            frameborder="0"
          ></iframe>
        </div>
      </Host>
    )
  }
}
