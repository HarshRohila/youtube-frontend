import { Observable, defer, map } from "rxjs"
import axios from "axios"

interface IYouTubeApi {
  getSuggestions(query: string): Observable<string[]>
  getSearchResults(query: string): Observable<SearchResult[]>
}

export interface SearchResult {
  thumbnail: string
}

export const YouTubeApi = {
  getApi(): IYouTubeApi {
    return new PipedApi()
  }
}

class PipedApi implements IYouTubeApi {
  static baseUrl = "https://watchapi.whatever.social"

  getSuggestions(query: string): Observable<string[]> {
    return defer(() => axios.get(`${PipedApi.baseUrl}/suggestions?query=${query}`)).pipe(map(response => response.data))
  }

  getSearchResults(query: string): Observable<SearchResult[]> {
    return defer(() => axios.get(`${PipedApi.baseUrl}/search?q=${query}&filter=all`)).pipe(
      map(response => response.data.items)
    )
  }
}
