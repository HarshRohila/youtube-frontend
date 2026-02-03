import { container } from "../../container"
import { newComments } from "../../YoutubeApi"
import { setAreCommentsLoading, setComments, CommentsViewProps } from "../redux/video-page"
import { Observable, catchError, of, switchMap, tap } from "../rx"

function fetchComments(source: Observable<CommentsViewProps>) {
  return source.pipe(
    tap(() => {
      setAreCommentsLoading(true)
    }),
    switchMap(commentsView => {
      const { videoId, nextpage } = commentsView
      const api = container.resolve("youtubeApi")
      const api$ = api.getComments(videoId, nextpage)
      return api$
    }),
    catchError(() => {
      return of(newComments())
    }),
    tap(results => {
      setComments(results)
      setAreCommentsLoading(false)
    })
  )
}

export { fetchComments }
