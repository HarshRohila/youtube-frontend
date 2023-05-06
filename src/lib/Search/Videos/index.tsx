import { SearchResult } from "../../../YoutubeApi"
import { h } from "@stencil/core"
import { Card } from "../../../components/trending-page/card"

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
            <Card video={r} />
          </li>
        ))}
    </ul>
  )
}
