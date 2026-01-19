import { Component, h } from "@stencil/core"

@Component({
  tag: "youtube-iframe",
  styleUrl: "youtube-iframe.scss",
  shadow: true
})
export class YoutubeIframe {
  // @Prop() videoId: string

  render() {
    return (
      <div class="container">
        <iframe
          id="ytplayer"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"
        ></iframe>
      </div>
    )
  }
}
