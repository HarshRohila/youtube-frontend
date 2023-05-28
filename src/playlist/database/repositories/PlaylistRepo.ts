import { Observable, defer, iif, of, switchMap } from "rxjs"
import { Playlist } from "../models"
import { Table } from "dexie"

export interface IPlaylistRepo {
  upsert(playlist: Playlist): Observable<void>
  add(record: unknown): Observable<void>
  query({ name }: { name: string }): Observable<Playlist[]>
}

export class DexiePlaylistRepo implements IPlaylistRepo {
  constructor(private playlists: Table<Playlist>) {}

  add(record: unknown): Observable<void> {
    const add$ = defer(async () => {
      await this.playlists.add(record as Playlist)
    })

    return add$
  }

  upsert(playlist: Playlist) {
    const count = defer(() => this.playlists.where("name").equals(playlist.name).count())

    const add$ = defer(async () => {
      await this.playlists.add(playlist)
    })

    return count.pipe(switchMap(exists => iif(() => !!exists, of(undefined), add$)))
  }

  query({ name }: { name: string }): Observable<Playlist[]> {
    return defer(() => this.playlists.where("name").equals(name).toArray())
  }
}
