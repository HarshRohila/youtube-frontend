import { SearchResult } from "../../../YoutubeApi"
import { h } from "@stencil/core"

interface VideoProps {
  videos: SearchResult[]
  isShowingSuggestions: boolean
  onClickVideo: (video: SearchResult) => void
}

export function Videos({ videos, isShowingSuggestions, onClickVideo }: VideoProps) {
  return (
    <ul class={"trending " + `${isShowingSuggestions ? "suggestions-active" : ""}`}>
      {videos &&
        videos.map(r => (
          <li onClick={() => onClickVideo(r)}>
            <card-video video={r} />
          </li>
        ))}
    </ul>
  )
}
