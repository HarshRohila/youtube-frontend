import { Observable, defer, map } from "rxjs"
import axios from "axios"

interface IYouTubeApi {
  getSuggestions(query: string): Observable<string[]>
  getSearchResults(query: string): Observable<SearchResult[]>
  getStream(videoId: string): Observable<Stream>
}

interface Stream {
  sources: StreamSource[]
}

interface StreamSource {
  url: string
}

export interface SearchResult {
  thumbnail: string
  videoId: string
}

export const YouTubeApi = {
  getApi(): IYouTubeApi {
    return new PipedApi()
  }
}

class PipedApi implements IYouTubeApi {
  static baseUrl = "https://watchapi.whatever.social"

  getStream(videoId: string): Observable<Stream> {
    return defer(() => axios.get(`${PipedApi.baseUrl}/streams/${videoId}`)).pipe(
      map(response => response.data),
      map(data => {
        return {
          sources: [{ url: data.hls }]
        }
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
        return items.map(i => {
          return { thumbnail: i.thumbnail, videoId: i.url.split("/watch?v=")[1] }
        })
      })
    )
  }
}
