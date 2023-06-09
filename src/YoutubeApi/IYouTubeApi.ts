import { Observable } from "rxjs"

export interface IYouTubeApi {
  getSuggestions(query: string): Observable<string[]>
  getSearchResults(query: string, nextpage?: string): Observable<SearchResponse>
  getStream(videoId: string): Observable<Stream>
  getTrendingVideos(): Observable<SearchResult[]>
  getSkipSegments(videoId: string): Observable<number[][]>
  getComments(videoId: string, nextpage?: string): Observable<Comments>
}

export interface SearchResponse {
  results: SearchResult[]
  nextpage: string
}

export interface Source {
  url: string
  mime: string
  quality: string
}

export interface SearchResult {
  thumbnail: string
  videoId: string
  title: string
  uploaderAvatar: string
  uploaderName: string
  uploadedDate: string
  uploaderVerified?: boolean
  views?: number
}

export interface Comment {
  commentText: string
  thumbnail: string
  author: string
  commentedTime: string
  commentId: string
}

export interface Comments {
  comments: Comment[]
  nextpage: string
  disabled: boolean
}

export interface Stream {
  sources: Source[]
  title: string
  relatedVideos: SearchResult[]
  likes: number
  dislikes: number
  uploader: string
  uploaderAvatar: string
  uploaderSubscriberCount: number
  views: number
  uploadDate: string
  thumbnail: string
  id: string
  uploaderVerified?: boolean
}
export interface StreamSource {
  url: string
}
