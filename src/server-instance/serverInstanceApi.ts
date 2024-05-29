import axios from "axios"
import {
  Observable,
  catchError,
  concatMap,
  defer,
  filter,
  from,
  map,
  of,
  switchMap,
  take,
  throwIfEmpty,
  timeout
} from "../lib/rx"
import { YouTubeApi } from "../YoutubeApi"

export function getServerInstances(): Observable<ServerInstance[]> {
  const apiUrl = "https://raw.githubusercontent.com/wiki/TeamPiped/Piped-Frontend/Instances.md"

  return defer(() => axios.get(apiUrl)).pipe(
    map(response => response.data),
    map(data => {
      const instances = []
      var skipped = 0
      const lines = data.split("\n")
      lines.map(line => {
        const split = line.split("|")
        if (split.length >= 4) {
          if (skipped < 2) {
            skipped++
            return
          }
          instances.push({
            name: split[0].trim(),
            apiUrl: split[1].trim(),
            locations: split[2].trim(),
            hasCdn: split[3].trim() === "Yes" ? true : false
          } as ServerInstance)
        }
      })

      return instances
    })
  )
}

function testServer(server: ServerInstance): Observable<boolean> {
  const api = YouTubeApi.getApi({ baseUrl: server.apiUrl })
  const trending$ = api.getTrendingVideos(server.apiUrl).pipe(timeout(500))

  const ANY_VIDEO_ID = "OgRoRBLZbUQ"
  const stream$ = api.getStream(ANY_VIDEO_ID).pipe(timeout(500))

  return trending$.pipe(
    switchMap(() => stream$),
    map(() => true),
    catchError(() => of(false))
  )
}

const ApiServer = {
  getActiveServer(): Observable<ServerInstance> {
    return getServerInstances().pipe(
      switchMap(servers => {
        return from(servers).pipe(
          concatMap(value =>
            testServer(value).pipe(
              map(passed => {
                if (passed) return value
                return undefined
              })
            )
          ),
          filter(Boolean),
          take(1),
          map(value => value),
          throwIfEmpty(() => new Error("No server found"))
        )
      })
    )
  }
}

export { ApiServer }

export interface ServerInstance extends Record<string, unknown> {
  name: string
  apiUrl: string
  locations: string
  hasCdn: boolean
}
