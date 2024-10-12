import axios from "axios"
import { Observable, defer, map } from "../lib/rx"

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

export interface ServerInstance extends Record<string, unknown> {
  name: string
  apiUrl: string
  locations: string
  hasCdn: boolean
}
