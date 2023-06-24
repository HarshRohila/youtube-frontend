import { Observable, defer } from "rxjs"
import { PlaylistItem } from "../models"
import { IRepository } from "./IRepository"
import { Table } from "dexie"

export interface IPlaylistItemRepo extends IRepository {
  upsert(record: PlaylistItem): Observable<void>
  query({ playlistId }: Partial<PlaylistItem>): Observable<PlaylistItem[]>
  delete(record: PlaylistItem): Observable<void>
}

export class DexiePlaylistItemRepo implements IPlaylistItemRepo {
  constructor(private playlistItems: Table<PlaylistItem>) {}

  upsert(playlistItem: PlaylistItem) {
    const add$ = defer(async () => {
      await this.playlistItems.put(playlistItem)
    })

    return add$
  }

  delete(playlistItem: PlaylistItem) {
    const delete$ = defer(async () => {
      console.log("here", playlistItem)
      await this.playlistItems.delete([playlistItem.playlistId, playlistItem.videoId])
    })

    return delete$
  }

  query({ playlistId }: Partial<PlaylistItem>): Observable<PlaylistItem[]> {
    return defer(() => this.playlistItems.where("playlistId").equals(playlistId).toArray())
  }
}
