export interface Media {
  title: string
  author: string
  images: {
    src: string
    type: string
  }[]
}

export const MediaSession = {
  init(media: Media) {
    if ("mediaSession" in navigator) {
      // @ts-ignore
      window.navigator.mediaSession.metadata = new MediaMetadata({
        title: media.title,
        artist: media.author,
        artwork: media.images
      })
    }
  }
}
