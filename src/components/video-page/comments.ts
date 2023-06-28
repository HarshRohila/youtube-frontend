import { store } from "../../lib/redux"
import { CommentsViewProps, setCommentView } from "../../lib/redux/video-page"

export const Comments = {
  open(openProps: CommentsViewProps) {
    store.dispatch(setCommentView(openProps))
  },
  close() {
    store.dispatch(setCommentView(undefined))
  }
}
