import { Component, Host, Prop, h } from "@stencil/core"
import { SearchResult } from "../../YoutubeApi"

const formatter = Intl.NumberFormat("en", { notation: "compact" })

@Component({
  tag: "card-video",
  styleUrl: "card-video.scss",
  shadow: false
})
export class CardVideo {
  @Prop() video: SearchResult

  get subDescription() {
    const { video } = this

    return [video.uploaderName, ...(video.views ? [formatter.format(video.views)] : []), video.uploadedDate].join(" ‧ ")
  }

  render() {
    const { video, subDescription } = this

    return (
      <Host>
        <div class="card">
          <img class="thumbnail" src={video.thumbnail}></img>
          <div class="video-desc">
            <img class="uploader-avatar" src={video.uploaderAvatar}></img>
            <span>
              <h3>{video.title}</h3>
              <p>{subDescription}</p>
            </span>
          </div>
        </div>
      </Host>
    )
  }
}
