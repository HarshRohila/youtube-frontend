import { h } from "@stencil/core"
import { Stream } from "../../YoutubeApi"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const formatter = Intl.NumberFormat("en", { notation: "compact" })

export function UploaderInfo({ video }: { video: Stream }) {
  return (
    <div class="uploader-info">
      <img class="uploader-avatar" src={video.uploaderAvatar}></img>
      <span class="info">
        <h3>{video.uploader}</h3>
        {!!video.uploaderVerified && <x-icon icon={faCheck}></x-icon>}
        <h4>{formatter.format(video.uploaderSubscriberCount)}</h4>
      </span>
    </div>
  )
}
