import axios from "axios"
import { defer } from "rxjs"

export function httpGet$(url: string) {
  return defer(() => axios.get(url))
}
