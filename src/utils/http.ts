import axios from "axios"
import { Observable, catchError, defer, of, timeout as rxTimeout, throwError } from "rxjs"

export function httpGet$(url: string) {
  return defer(() => axios.get(url))
}

export function newHttp({ hosts, timeout }) {
  let hostIndex = 0

  function getNextHost() {
    hostIndex = (hostIndex + 1) % hosts.length
    return hosts[hostIndex]
  }

  const maxRetry = hosts.length
  let retryCount = 0

  return {
    get$(url: string) {
      const api$ = host => defer(() => axios.get(host + url))

      function retryOp(source$: Observable<unknown>) {
        return source$.pipe(
          rxTimeout({ each: timeout, with: () => throwError(() => new AppTimeoutError()) }),
          catchError(err => {
            if (err instanceof AppTimeoutError) {
              retryCount++
              if (retryCount === maxRetry) {
                return throwError(() => err)
              }
              return api$(getNextHost()).pipe(retryOp)
            } else {
              return throwError(() => err)
            }
          })
        )
      }

      const retryApi$ = api$(hosts[0]).pipe(retryOp)

      return retryApi$
    }
  }
}

class AppError extends Error {}
class AppTimeoutError extends AppError {}
