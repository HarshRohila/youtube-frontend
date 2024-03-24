import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ofType } from "redux-observable"
import { BehaviorSubject, Observable, catchError, concat, map, of, switchMap } from "rxjs"
import { RootState } from ".."
import { Comments, YouTubeApi, newComments } from "../../../YoutubeApi"
import { createState } from "../../state-mgt"

const initialState = {
  shareForm: undefined as ShareFormState | undefined,
  currentTimeEnabled: false,
  commentsView: undefined as CommentsViewProps | undefined,
  comments: undefined as Comments | undefined,
  areCommentsLoading: false
}

const state = createState({
  copiedLink: ""
})

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
    setShareForm: (reduxState, action: PayloadAction<ShareFormState | undefined>) => {
      reduxState.shareForm = action.payload

      if (!action.payload) {
        reduxState.currentTimeEnabled = false
        state.update({ copiedLink: "" })
      }
    },
    setCurrentTimeEnabled(reduxState, action: PayloadAction<boolean>) {
      reduxState.currentTimeEnabled = action.payload
      state.update({ copiedLink: "" })
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

export const { setShareForm, setCurrentTimeEnabled, setCommentView, setComments, setAreCommentsLoading } =
  videoPageSlice.actions

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

export { state as videoPageState }
