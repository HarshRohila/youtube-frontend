import { Observable, map, switchMap } from "rxjs"
import { DexieDatabase } from "./DexieDatabase"
import { IPlaylistRepo } from "./repositories/PlaylistRepo"
import { DEFAULT_PLAYLIST } from "../../utils/constants"
import { IRepository } from "./repositories/IRepository"

export interface IDatabase {
  getRepo(tableName: string): IRepository
}

export function getDbInstance(): Observable<IDatabase> {
  return DexieDatabase.getInstance()
}

export function initDatbase() {
  return getDbInstance().pipe(
    switchMap(db => {
      const playlistRepo = db.getRepo("playlists") as IPlaylistRepo
      return playlistRepo.upsert({ name: DEFAULT_PLAYLIST }).pipe(map(() => db))
    })
  )
}
