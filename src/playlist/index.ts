import { switchMap } from "rxjs"
import { DEFAULT_PLAYLIST } from "../utils/constants"
import { getDbInstance } from "./database/Database"
import { IPlaylistItemRepo } from "./database/repositories/PlaylistItemRepo"
import { PlaylistItem } from "./database/models"

export function addItemInPlaylist(item: PlaylistItem) {
  return getDbInstance().pipe(
    switchMap(db => {
      const playlistItemRepo = db.getRepo("playlistsItems") as IPlaylistItemRepo
      item.playlistId = DEFAULT_PLAYLIST.id
      return playlistItemRepo.upsert(item)
    })
  )
}

export function deleteItemInPlaylist(item: PlaylistItem) {
  return getDbInstance().pipe(
    switchMap(db => {
      const playlistItemRepo = db.getRepo("playlistsItems") as IPlaylistItemRepo
      item.playlistId = DEFAULT_PLAYLIST.id
      return playlistItemRepo.delete(item)
    })
  )
}

export function listItems() {
  const db = getDbInstance()

  return db.pipe(
    switchMap(db => {
      const playlistItemRepo = db.getRepo("playlistsItems") as IPlaylistItemRepo
      return playlistItemRepo.query({ playlistId: DEFAULT_PLAYLIST.id })
    })
  )
}
