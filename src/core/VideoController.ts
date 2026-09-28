import { AppRoute } from "../utils/AppRoute"

export type VideoPlayerMode = "in-built" | "youtube"

export type VideoRef = {
  videoId: string
}

export class VideoController {
  constructor(private readonly videoPlayer: VideoPlayerMode) {}

  readonly handleClickVideo = (video: VideoRef): string => {
    const relativePath =
      this.videoPlayer === "youtube"
        ? `/youtube/${video.videoId}`
        : `/videos/${video.videoId}`

    return AppRoute.getPath(relativePath)
  }
}
