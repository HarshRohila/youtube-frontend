import { SearchResult } from "../../../YoutubeApi"
import { h } from "@stencil/core"

interface VideoProps {
  videos: SearchResult[]
  isShowingSuggestions: boolean
  onClickVideo: (video: SearchResult) => void
  onDeleteVideo?: (video: SearchResult) => void
}

export function Videos({ videos, isShowingSuggestions, onClickVideo, onDeleteVideo }: VideoProps) {
  return (
    <ul class={"trending " + `${isShowingSuggestions ? "suggestions-active" : ""}`}>
      {videos &&
        videos.map(r => (
          <li onClick={() => onClickVideo(r)}>
            <card-video video={r} deleteCallback={onDeleteVideo} />
          </li>
        ))}
    </ul>
  )
}
