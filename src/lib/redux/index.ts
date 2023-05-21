import { from } from "rxjs"
import { configureStore } from "@reduxjs/toolkit"
import search, { doSearchEpic, fetchSuggestionsEpic, fetchTrendingEpic } from "./search"
import global from "./global"

import { createEpicMiddleware, combineEpics } from "redux-observable"
import videoPage, { fetchCommentsEpic } from "./video-page"

const epicMiddleware = createEpicMiddleware()
// @ts-ignore
export const rootEpic = combineEpics(fetchSuggestionsEpic, doSearchEpic, fetchTrendingEpic, fetchCommentsEpic)

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(epicMiddleware),
  reducer: {
    search,
    global,
    videoPage
  }
})

epicMiddleware.run(rootEpic)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const state$ = from(store)
