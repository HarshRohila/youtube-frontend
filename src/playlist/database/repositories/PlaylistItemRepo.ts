import { Observable, defer, iif, of, switchMap, tap } from "rxjs"
import { PlaylistItem } from "../models"
import { IRepository } from "./IRepository"
import { Table } from "dexie"

export interface IPlaylistItemRepo extends IRepository {
  upsert(record: PlaylistItem): Observable<void>
  query({ playlistId }: Partial<PlaylistItem>): Observable<PlaylistItem[]>
}

export class DexiePlaylistItemRepo implements IPlaylistItemRepo {
  constructor(private playlistItems: Table<PlaylistItem>) {}

  upsert(playlistItem: PlaylistItem) {
    const count = defer(() =>
      this.playlistItems.where({ playlistId: playlistItem.playlistId, videoId: playlistItem.videoId }).count()
    )

    const add$ = defer(async () => {
      console.log("adding", playlistItem)
      await this.playlistItems.put(playlistItem)
    })

    return count.pipe(
      tap(console.log),
      switchMap(exists => iif(() => !!exists, of(undefined), add$))
    )
  }

  query({ playlistId }: Partial<PlaylistItem>): Observable<PlaylistItem[]> {
    return defer(() => this.playlistItems.where("playlistId").equals(playlistId).toArray())
  }
}
