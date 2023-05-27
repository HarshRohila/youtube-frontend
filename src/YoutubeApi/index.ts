import { Observable, catchError, defer, map, from, of } from "rxjs"
import axios from "axios"
import { Comments, IYouTubeApi, SearchResponse, SearchResult, Stream } from "./IYouTubeApi"

export * from "./IYouTubeApi"

export function newComments(): Comments {
  return {
    comments: [],
    nextpage: "",
    disabled: false
  }
}

export const YouTubeApi = {
  getApi(): IYouTubeApi {
    return new PipedApi()
  }
}

class PipedApi implements IYouTubeApi {
  static baseUrl = "https://pipedapi.in.projectsegfau.lt"

  getComments(videoId: string, nextpage?: string): Observable<Comments> {
    let url = `${PipedApi.baseUrl}/comments/${videoId}`

    if (nextpage) {
      url = `${PipedApi.baseUrl}/nextpage/comments/${videoId}?nextpage=${nextpage}`
    }

    return defer(() => axios.get(url)).pipe(map(response => response.data))
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

    let url = `${PipedApi.baseUrl}/search?q=${query}&filter=videos`

    if (nextpage) {
      url = `${PipedApi.baseUrl}/nextpage/search?q=${query}&filter=videos&nextpage=${nextpage}`
    }

    return defer(() => axios.get(url)).pipe(
      map(response => response.data),
      map(data => {
        return {
          results: data.items.map(createApiMapFunc()),
          nextpage: data.nextpage
        }
      })
    )
  }

  getStream(videoId: string): Observable<Stream> {
    const isStream = (stream: { type: string }) => stream.type === "stream"

    return defer(() => axios.get(`${PipedApi.baseUrl}/streams/${videoId}`)).pipe(
      map(response => response.data),
      map(data => {
        return {
          sources: [{ url: data.hls }],
          title: data.title,
          relatedVideos: data.relatedStreams.filter(isStream).map(createApiMapFunc()),
          likes: data.likes,
          dislikes: data.dislikes,
          uploader: data.uploader,
          uploaderAvatar: data.uploaderAvatar,
          uploaderSubscriberCount: data.uploaderSubscriberCount,
          views: data.views,
          uploadDate: data.uploadDate,
          id: videoId
        }
      })
    )
  }

  getTrendingVideos(): Observable<SearchResult[]> {
    const region = "IN"
    return defer(() => axios.get(`${PipedApi.baseUrl}/trending?region=${region}`)).pipe(
      map(response => response.data),
      map(videos => {
        return videos.map(createApiMapFunc())
      })
    )
  }

  getSuggestions(query: string): Observable<string[]> {
    return defer(() => axios.get(`${PipedApi.baseUrl}/suggestions?query=${query}`)).pipe(map(response => response.data))
  }

  getSkipSegments(videoId: string): Observable<number[][]> {
    return defer(() =>
      from(
        axios.get(
          `${PipedApi.baseUrl}/sponsors/${videoId}?category=["sponsor","interaction","selfpromo","music_offtopic"]`
        )
      )
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
function createApiMapFunc(): any {
  return v => ({
    videoId: v.url.split("/watch?v=")[1],
    thumbnail: v.thumbnail,
    title: v.title,
    uploaderAvatar: v.uploaderAvatar,
    uploaderName: v.uploaderName,
    uploadedDate: v.uploadedDate,
    views: v.views
  })
}
