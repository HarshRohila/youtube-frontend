import Dexie, { Table } from "dexie"
import { of } from "rxjs"
import { Playlist, PlaylistItem } from "./models"
import { DexiePlaylistRepo } from "./repositories/PlaylistRepo"
import { IRepository } from "./repositories/IRepository"
import { DexiePlaylistItemRepo } from "./repositories/PlaylistItemRepo"
import { IDatabase } from "./Database"

export class DexieDatabase extends Dexie implements IDatabase {
  static getInstance() {
    return of(new DexieDatabase())
  }

  playlists!: Table<Playlist>
  playlistItems!: Table<PlaylistItem>

  constructor() {
    super("myDatabase")
    this.version(2).stores({
      playlists: "++id, name",
      playlistItems: "[playlistId+videoId]"
    })
  }

  getRepo(tableName: string) {
    if (tableName === "playlists") {
      return new DexiePlaylistRepo(this.playlists) as IRepository
    }
    if (tableName === "playlistsItems") {
      return new DexiePlaylistItemRepo(this.playlistItems) as IRepository
    }
    throw new Error(`Repo not defined for table name: ${tableName}`)
  }
}
