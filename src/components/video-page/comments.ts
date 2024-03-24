import { CommentsViewProps, setCommentView } from "../../lib/redux/video-page"

export const Comments = {
  open(openProps: CommentsViewProps) {
    setCommentView(openProps)
  },
  close() {
    setCommentView(undefined)
  }
}
