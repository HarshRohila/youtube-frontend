import { SearchResult } from "../../../YoutubeApi"
import { h } from "@stencil/core"

interface CardProps {
  video: SearchResult
}

export function Card({ video }: CardProps) {
  return (
    <div class="card">
      <img class="thumbnail" src={video.thumbnail}></img>
      <div class="video-desc">
        <img class="uploader-avatar" src={video.uploaderAvatar}></img>
        <h3>{video.title}</h3>
      </div>
    </div>
  )
}
