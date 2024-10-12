import { SearchResult, Stream } from "../../../YoutubeApi"
import { h } from "@stencil/core"

interface VideoProps {
  preloadStream?: boolean
  videos: SearchResult[]
  isShowingSuggestions: boolean
  onClickVideo: (video: SearchResult) => void
  onDeleteVideo?: (video: SearchResult) => void
  imageErrorFixed?: (video: SearchResult, stream: Stream) => void
}

export function Videos({
  videos,
  isShowingSuggestions,
  onClickVideo,
  onDeleteVideo,
  preloadStream,
  imageErrorFixed
}: VideoProps) {
  const createImageErrorFixedHandler = (video: SearchResult) => {
    return function imageErrorFixedHandler(ev: CustomEvent<Stream>) {
      imageErrorFixed(video, ev.detail)
    }
  }

  return (
    <ul class={"trending " + `${isShowingSuggestions ? "suggestions-active" : ""}`}>
      {videos &&
        videos.map(r => (
          <li onClick={() => onClickVideo(r)} key={r.videoId}>
            <card-video
              video={r}
              deleteCallback={onDeleteVideo}
              preloadStream={preloadStream}
              onImageErrorFixed={createImageErrorFixedHandler(r)}
            />
          </li>
        ))}
    </ul>
  )
}
