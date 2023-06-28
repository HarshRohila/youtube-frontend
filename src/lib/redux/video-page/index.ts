import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ofType } from "redux-observable"
import { BehaviorSubject, Observable, catchError, concat, map, of, switchMap } from "rxjs"
import { RootState } from ".."
import { Comments, YouTubeApi, newComments } from "../../../YoutubeApi"

const initialState = {
  shareForm: undefined as ShareFormState | undefined,
  currentTimeEnabled: false,
  copiedLink: "",
  commentsView: undefined as CommentsViewProps | undefined,
  comments: undefined as Comments | undefined,
  areCommentsLoading: false
}

export interface CommentsViewProps {
  videoId: string
  nextpage?: string
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
    setCommentView(state, action: PayloadAction<CommentsViewProps | undefined>) {
      state.commentsView = action.payload

      if (!state.commentsView) {
        state.comments = newComments()
      }
    },
    setComments(state, action: PayloadAction<Comments>) {
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

export const fetchCommentsEpic = (action$: Observable<Action>, _state$: BehaviorSubject<RootState>) =>
  action$.pipe(
    ofType(setCommentView.type),
    switchMap(action => {
      const setCommentViewOpen = action as PayloadAction<CommentsViewProps | undefined>

      if (!setCommentViewOpen.payload) {
        return of(setComments(newComments()))
      }

      const { videoId, nextpage } = setCommentViewOpen.payload

      const api$ = YouTubeApi.getApi()
        .getComments(videoId, nextpage)
        .pipe(
          map(results => setComments(results)),
          catchError(() => of(setComments(newComments())))
        )

      const dispatchLoading = (isLoading: boolean) => {
        return of(setAreCommentsLoading(isLoading))
      }

      return concat(dispatchLoading(true), api$, dispatchLoading(false))
    })
  )

export default videoPageSlice.reducer
