import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ofType } from "redux-observable"
import { BehaviorSubject, Observable, catchError, concat, map, of, switchMap } from "rxjs"
import { RootState } from ".."
import { Comment, YouTubeApi } from "../../../YoutubeApi"

const initialState = {
  shareForm: undefined as ShareFormState | undefined,
  currentTimeEnabled: false,
  copiedLink: "",
  commentsView: undefined as CommentsView | undefined,
  comments: [] as Comment[],
  areCommentsLoading: false
}

interface CommentsView {
  videoId: string
}

export interface ShareFormState {
  currentTime: number
}

export const videoPageSlice = createSlice({
  name: "video-page",
  initialState,
  reducers: {
    setShareForm: (state, action: PayloadAction<ShareFormState | undefined>) => {
      state.shareForm = action.payload

      if (!action.payload) {
        state.currentTimeEnabled = false
        state.copiedLink = ""
      }
    },
    setCurrentTimeEnabled(state, action: PayloadAction<boolean>) {
      state.currentTimeEnabled = action.payload
      state.copiedLink = ""
    },
    setCopiedLink(state, action: PayloadAction<string>) {
      state.copiedLink = action.payload
    },
    setCommentView(state, action: PayloadAction<CommentsView | undefined>) {
      state.commentsView = action.payload
    },
    setComments(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload
    },
    setAreCommentsLoading(state, action: PayloadAction<boolean>) {
      state.areCommentsLoading = action.payload
    }
  }
})

export const {
  setShareForm,
  setCurrentTimeEnabled,
  setCopiedLink,
  setCommentView,
  setComments,
  setAreCommentsLoading
} = videoPageSlice.actions

export const fetchCommentsEpic = (action$: Observable<Action>, state$: BehaviorSubject<RootState>) =>
  action$.pipe(
    ofType(setCommentView.type),
    switchMap(action => {
      const setCommentViewOpen = action as PayloadAction<CommentsView | undefined>

      if (!setCommentViewOpen.payload) {
        return of(setComments([]))
      }

      const api$ = YouTubeApi.getApi()
        .getComments(setCommentViewOpen.payload.videoId)
        .pipe(
          map(results => setComments(results)),
          catchError(() => of(setComments([])))
        )

      const dispatchLoading = (isLoading: boolean) => {
        return of(setAreCommentsLoading(isLoading))
      }

      return concat(dispatchLoading(true), api$, dispatchLoading(false))
    })
  )

export default videoPageSlice.reducer
