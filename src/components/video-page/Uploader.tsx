import { h } from "@stencil/core"
import { Stream } from "../../YoutubeApi"

const formatter = Intl.NumberFormat("en", { notation: "compact" })

export function UploaderInfo({ video }: { video: Stream }) {
  return (
    <div class="uploader-info">
      <img class="uploader-avatar" src={video.uploaderAvatar}></img>
      <span class="info">
        <h3>{video.uploader}</h3>
        <h4>{formatter.format(video.uploaderSubscriberCount)}</h4>
      </span>
    </div>
  )
}
