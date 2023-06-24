import axios from "axios"
import { Observable, defer, map } from "rxjs"

export function getServerInstances(): Observable<ServerInstance[]> {
  const apiUrl = "https://piped-instances.kavin.rocks/"

  return defer(() => axios.get(apiUrl)).pipe(
    map(response => response.data),
    map(data =>
      data.map(d => ({
        name: d.name,
        apiUrl: d.api_url,
        locations: d.locations,
        hasCdn: d.cdn
      }))
    )
  )
}

export interface ServerInstance extends Record<string, unknown> {
  name: string
  apiUrl: string
  locations: string
  hasCdn: boolean
}
