import { Comments, newComments } from "../../../YoutubeApi"
import { createState } from "../../state-mgt"

const state = createState({
  shareForm: undefined as ShareFormState | undefined,
  copiedLink: "",
  currentTimeEnabled: false
})

const commentsState = createState({
  commentsView: undefined as CommentsViewProps | undefined,
  comments: undefined as Comments | undefined,
  areCommentsLoading: false
})

export interface CommentsViewProps {
  videoId: string
  nextpage?: string
}

export interface ShareFormState {
  currentTime: number
}

function setComments(comments: Comments) {
  commentsState.update({ comments })
}

function setCommentView(commentsView: CommentsViewProps | undefined) {
  commentsState.update({ commentsView })

  if (!commentsView) {
    commentsState.update({ comments: newComments() })
  }
}

function setShareForm(shareForm: ShareFormState) {
  state.update({ shareForm })

  if (!shareForm) {
    state.update({ copiedLink: "", currentTimeEnabled: false })
  }
}

function setCurrentTimeEnabled(currentTimeEnabled: boolean) {
  state.update({ copiedLink: "", currentTimeEnabled })
}

function setAreCommentsLoading(areCommentsLoading: boolean) {
  commentsState.update({ areCommentsLoading })
}

export {
  state as videoPageState,
  setShareForm,
  setCurrentTimeEnabled,
  setComments,
  setCommentView,
  commentsState,
  setAreCommentsLoading
}
