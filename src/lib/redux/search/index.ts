import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ofType } from "redux-observable"
import { BehaviorSubject, Observable, catchError, concat, debounceTime, filter, map, of, switchMap } from "rxjs"
import { SearchResult, YouTubeApi } from "../../../YoutubeApi"
import { RootState } from ".."
import { setError, setLoading } from "../global"

const initialState = {
  showSearchBar: false,
  searchText: "",
  suggestions: [] as string[],
  searchResults: [] as SearchResult[]
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearchBar: state => {
      setStateAfterToggleSearchBar(state)
    },
    keyPress: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
    setSuggestions: (state, action: PayloadAction<string[]>) => {
      state.suggestions = action.payload
    },
    submitSearch: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.searchText = action.payload
      }
    },
    setSearchResult: (state, action: PayloadAction<SearchResult[]>) => {
      state.searchResults = action.payload

      if (state.showSearchBar) {
        setStateAfterToggleSearchBar(state)
      }
    },
    loadTrending() {}
  }
})

export const { keyPress, toggleSearchBar, setSuggestions, submitSearch, setSearchResult, loadTrending } =
  searchSlice.actions

export default searchSlice.reducer

export const fetchTrendingEpic = (action$: Observable<Action>, state$: BehaviorSubject<RootState>) =>
  action$.pipe(
    ofType(loadTrending),
    switchMap(() => {
      const api$ = YouTubeApi.getApi()
        .getTrendingVideos()
        .pipe(
          map(results => setSearchResult(results)),
          catchError(() =>
            of(setError({ message: "Failed to get response from the Server. Please try again after some time." }))
          )
        )

      const dispatchLoading = (isLoading: boolean) => {
        return of(setLoading(isLoading))
      }

      return concat(dispatchLoading(true), api$, dispatchLoading(false))
    })
  )

export const fetchSuggestionsEpic = (action$: Observable<Action>, state$: BehaviorSubject<RootState>) =>
  action$.pipe(
    ofType(keyPress.type),
    map(() => state$.value.search.searchText),
    filter(text => !!text.length),
    debounceTime(300),
    switchMap(text => {
      const api$ = YouTubeApi.getApi()
        .getSuggestions(text)
        .pipe(map(results => setSuggestions(results)))
      return api$
    })
  )

export const doSearchEpic = (action$: Observable<Action>, state$: BehaviorSubject<RootState>) =>
  action$.pipe(
    ofType(submitSearch.type),
    map(() => state$.value.search.searchText),
    filter(text => !!text.length),
    switchMap(text => {
      const api$ = YouTubeApi.getApi()
        .getSearchResults(text)
        .pipe(
          map(results => setSearchResult(results)),
          catchError(() =>
            of(setError({ message: "Failed to get response from the Server. Please try again after some time." }))
          )
        )

      const dispatchLoading = (isLoading: boolean) => {
        return of(setLoading(isLoading))
      }

      return concat(dispatchLoading(true), api$, dispatchLoading(false))
    })
  )

function setStateAfterToggleSearchBar(state) {
  state.showSearchBar = !state.showSearchBar

  if (!state.showSearchBar) {
    state.suggestions = []
    state.searchText = ""
  }
}
