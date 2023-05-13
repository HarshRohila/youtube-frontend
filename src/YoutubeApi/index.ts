import { Observable, catchError, defer, map, from, of } from "rxjs"
import axios from "axios"

interface IYouTubeApi {
  getSuggestions(query: string): Observable<string[]>
  getSearchResults(query: string): Observable<SearchResult[]>
  getStream(videoId: string): Observable<Stream>
  getTrendingVideos(): Observable<SearchResult[]>
  getSkipSegments(videoId: string): Observable<number[][]>
}

export interface Stream {
  sources: StreamSource[]
  title: string
  relatedVideos: SearchResult[]
  likes: number
  dislikes: number
  uploader: string
  uploaderAvatar: string
  uploaderSubscriberCount: number
  views: number
  uploadDate: string
}

interface StreamSource {
  url: string
}

export interface SearchResult {
  thumbnail: string
  videoId: string
  title: string
  uploaderAvatar: string
  uploaderName: string
  uploadedDate: string
  views: number
}

export const YouTubeApi = {
  getApi(): IYouTubeApi {
    return new PipedApi()
  }
}

class PipedApi implements IYouTubeApi {
  static baseUrl = "https://pipedapi.in.projectsegfau.lt"

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
          uploadDate: data.uploadDate
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

  getSearchResults(query: string): Observable<SearchResult[]> {
    // Filter types
    // R.id.chip_all -> "all"
    // R.id.chip_videos -> "videos"
    // R.id.chip_channels -> "channels"
    // R.id.chip_playlists -> "playlists"
    // R.id.chip_music_songs -> "music_songs"
    // R.id.chip_music_videos -> "music_videos"
    // R.id.chip_music_albums -> "music_albums"
    // R.id.chip_music_playlists -> "music_playlists"
    return defer(() => axios.get(`${PipedApi.baseUrl}/search?q=${query}&filter=videos`)).pipe(
      map(response => response.data.items),
      map(items => {
        return items.map(createApiMapFunc())
      })
    )
  }

  getSkipSegments(videoId: string): Observable<number[][]> {
    return defer(() =>
      from(axios.get(`${PipedApi.baseUrl}/sponsors/${videoId}?category=["sponsor","interaction","selfpromo"]`))
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
