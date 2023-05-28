import { map, switchMap } from "rxjs"
import { DEFAULT_PLAYLIST } from "../utils/constants"
import { IDatabase, getDbInstance } from "./database/Database"
import { IPlaylistItemRepo } from "./database/repositories/PlaylistItemRepo"
import { PlaylistItem } from "./database/models"
import { IPlaylistRepo } from "./database/repositories/PlaylistRepo"

export function addItemInPlaylist(item: PlaylistItem) {
  return getDbInstance().pipe(
    switchMap(db => {
      return getDefaultPlaylist(db).pipe(
        switchMap(playlist => {
          const playlistItemRepo = db.getRepo("playlistsItems") as IPlaylistItemRepo
          item.playlistId = playlist.id
          return playlistItemRepo.upsert(item)
        })
      )
    })
  )
}

export function listItems() {
  const db = getDbInstance()

  return db.pipe(
    switchMap(db => {
      const playlist$ = getDefaultPlaylist(db)

      return playlist$.pipe(
        switchMap(playlist => {
          const playlistItemRepo = db.getRepo("playlistsItems") as IPlaylistItemRepo
          return playlistItemRepo.query({ playlistId: playlist.id })
        })
      )
    })
  )
}
function getDefaultPlaylist(db: IDatabase) {
  const playlistRepo = db.getRepo("playlists") as IPlaylistRepo
  const playlist$ = playlistRepo.query({ name: DEFAULT_PLAYLIST }).pipe(map(list => list[0]))
  return playlist$
}
