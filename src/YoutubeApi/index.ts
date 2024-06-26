import { Observable, catchError, map, of } from "rxjs"
import { Comments, IYouTubeApi, SearchResponse, SearchResult, Source, Stream } from "./IYouTubeApi"
import { CurrentServerInstance } from "../server-instance/currentServerInstance"
import { httpGet$ } from "../utils/http"

export * from "./IYouTubeApi"

const hlsMimeType = "application/x-mpegURL"

export function newComments(): Comments {
  return {
    comments: [],
    nextpage: "",
    disabled: false
  }
}

interface YoutubeApiConfig {
  baseUrl: string
}

export const YouTubeApi = {
  getApi(config?: YoutubeApiConfig): IYouTubeApi {
    return new PipedApi(config)
  }
}

class PipedApi implements IYouTubeApi {
  private getBaseUrl() {
    if (this.config?.baseUrl) return this.config.baseUrl
    return CurrentServerInstance.get().apiUrl
  }

  constructor(private config: YoutubeApiConfig) {}

  getComments(videoId: string, nextpage?: string): Observable<Comments> {
    let url = `${this.getBaseUrl()}/comments/${videoId}`

    if (nextpage) {
      url = `${this.getBaseUrl()}/nextpage/comments/${videoId}?nextpage=${nextpage}`
    }

    return httpGet$(url).pipe(map(response => response.data))
  }

  getSearchResults(query: string, nextpage?: string): Observable<SearchResponse> {
    // Filter types
    // R.id.chip_all -> "all"
    // R.id.chip_videos -> "videos"
    // R.id.chip_channels -> "channels"
    // R.id.chip_playlists -> "playlists"
    // R.id.chip_music_songs -> "music_songs"
    // R.id.chip_music_videos -> "music_videos"
    // R.id.chip_music_albums -> "music_albums"
    // R.id.chip_music_playlists -> "music_playlists"

    let url = `${this.getBaseUrl()}/search?q=${query}&filter=videos`

    if (nextpage) {
      url = `${this.getBaseUrl()}/nextpage/search?q=${query}&filter=videos&nextpage=${nextpage}`
    }

    return httpGet$(url).pipe(
      map(response => response.data),
      map(data => {
        return {
          results: data.items.map(createSearchResultMapFunc()),
          nextpage: data.nextpage
        }
      })
    )
  }

  getStream(videoId: string): Observable<Stream> {
    const isStream = (stream: { type: string }) => stream.type === "stream"

    const createHlsSource = ({ url }): Source => {
      return { url, mime: hlsMimeType, quality: "Auto" }
    }

    const isVideoStreamWorking = (stream): boolean => {
      return stream.contentLength !== -1 && stream.mimeType === "video/webm" && !!stream.url
    }

    const toStreamSource = (stream): Source => {
      return { ...stream, mime: stream.mimeType }
    }

    return httpGet$(`${this.getBaseUrl()}/streams/${videoId}`).pipe(
      map(response => response.data),
      map(data => {
        return {
          sources: [
            ...(data.hls ? [createHlsSource({ url: data.hls })] : []),
            ...data.videoStreams.filter(isVideoStreamWorking).map(toStreamSource)
          ] as Source[],
          title: data.title,
          relatedVideos: data.relatedStreams.filter(isStream).map(createSearchResultMapFunc()),
          likes: data.likes,
          dislikes: data.dislikes,
          uploader: data.uploader,
          uploaderAvatar: data.uploaderAvatar,
          uploaderSubscriberCount: data.uploaderSubscriberCount,
          uploaderVerified: data.uploaderVerified,
          views: data.views,
          uploadDate: data.uploadDate,
          thumbnail: data.thumbnailUrl,
          id: videoId
        }
      })
    )
  }

  getTrendingVideos(): Observable<SearchResult[]> {
    const region = "IN"

    return httpGet$(`${this.getBaseUrl()}/trending?region=${region}`).pipe(
      map(response => response.data),
      map(videos => {
        return videos.map(createSearchResultMapFunc())
      })
    )
  }

  getSuggestions(query: string): Observable<string[]> {
    return httpGet$(`${this.getBaseUrl()}/suggestions?query=${query}`).pipe(map(response => response.data))
  }

  getSkipSegments(videoId: string): Observable<number[][]> {
    return httpGet$(
      `${this.getBaseUrl()}/sponsors/${videoId}?category=["sponsor","interaction","selfpromo","music_offtopic"]`
    ).pipe(
      map(response => response.data.segments),
      map(segments => {
        return segments.map(s => s.segment)
      }),
      catchError(_err => {
        return of([])
      })
    )
  }
}
function createSearchResultMapFunc(): (v: any) => SearchResult {
  return v => ({
    videoId: v.url.split("/watch?v=")[1],
    thumbnail: v.thumbnail,
    title: v.title,
    uploaderAvatar: v.uploaderAvatar,
    uploaderName: v.uploaderName,
    uploadedDate: v.uploadedDate,
    uploaderVerified: v.uploaderVerified,
    views: v.views
  })
}
