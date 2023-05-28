import { Observable, defer } from "rxjs"
import { Playlist } from "../models"
import { Table } from "dexie"

export interface IPlaylistRepo {
  upsert(playlist: Playlist): Observable<void>
  query({ name }: { name: string }): Observable<Playlist[]>
}

export class DexiePlaylistRepo implements IPlaylistRepo {
  constructor(private playlists: Table<Playlist>) {}

  upsert(playlist: Playlist) {
    const add$ = defer(async () => {
      await this.playlists.put(playlist)
    })

    return add$
  }

  query({ name }: { name: string }): Observable<Playlist[]> {
    return defer(() => this.playlists.where("name").equals(name).toArray())
  }
}
