export interface Playlist {
  id?: number
  name: string
}

export interface PlaylistItem {
  thumbnail: string
  videoId: string
  title: string
  uploaderAvatar: string
  uploaderName: string
  uploadedDate: string
  playlistId?: number
}
