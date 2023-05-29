import { SearchResult } from "../../../YoutubeApi"
import { h } from "@stencil/core"

interface CardProps {
  video: SearchResult
}

const formatter = Intl.NumberFormat("en", { notation: "compact" })

export function Card({ video }: CardProps) {
  const subDescription = [
    video.uploaderName,
    ...(video.views ? [formatter.format(video.views)] : []),
    video.uploadedDate
  ].join(" ‧ ")

  return (
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
  )
}
