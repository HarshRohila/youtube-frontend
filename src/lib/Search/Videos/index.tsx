import { SearchResult } from "../../../YoutubeApi"
import { h } from "@stencil/core"

interface VideoProps {
  preloadStream?: boolean
  videos: SearchResult[]
  isShowingSuggestions: boolean
  onClickVideo: (video: SearchResult) => void
  onDeleteVideo?: (video: SearchResult) => void
}

export function Videos({ videos, isShowingSuggestions, onClickVideo, onDeleteVideo, preloadStream }: VideoProps) {
  return (
    <ul class={"trending " + `${isShowingSuggestions ? "suggestions-active" : ""}`}>
      {videos &&
        videos.map(r => (
          <li onClick={() => onClickVideo(r)} key={r.videoId}>
            <card-video video={r} deleteCallback={onDeleteVideo} preloadStream={preloadStream} />
          </li>
        ))}
    </ul>
  )
}
