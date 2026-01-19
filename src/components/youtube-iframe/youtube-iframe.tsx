import { MatchResults } from "@stencil-community/router"
import { Component, h, Prop } from "@stencil/core"

@Component({
  tag: "youtube-iframe",
  styleUrl: "youtube-iframe.scss",
  shadow: true
})
export class YoutubeIframe {
  @Prop() match: MatchResults

  get videoId() {
    return this.match.params.videoId
  }

  render() {
    return (
      <div class="container">
        <iframe
          id="ytplayer"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${this.videoId}?autoplay=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>
      </div>
    )
  }
}
