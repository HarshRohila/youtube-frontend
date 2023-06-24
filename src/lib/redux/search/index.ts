import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ofType } from "redux-observable"
import {
  BehaviorSubject,
  Observable,
  catchError,
  concat,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
  takeUntil
} from "rxjs"
import { SearchResponse, YouTubeApi } from "../../../YoutubeApi"
import { RootState } from ".."
import { IAppError, setError, setLoading } from "../global"

const initialState = {
  showSearchBar: false,
  searchText: "",
  suggestions: [] as string[],
  searchResponse: newSearchResponse(),
  suggestionsError: undefined as IAppError | undefined,
  suggestionsLoading: false
}

export function newSearchResponse(): SearchResponse {
  return {
    nextpage: "",
    results: []
  }
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
      state.suggestions = []
    },
    setSearchResult: (state, action: PayloadAction<SearchResponse>) => {
      state.searchResponse = action.payload

      if (state.showSearchBar) {
        setStateAfterToggleSearchBar(state)
      }
    },
    setSuggestionsError(state, action: PayloadAction<IAppError | undefined>) {
      state.suggestionsError = action.payload
    },
    loadTrending() {},
    setSuggestionsLoading(state, action: PayloadAction<boolean>) {
      state.suggestionsLoading = action.payload
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload
    }
  }
})

export const {
  keyPress,
  toggleSearchBar,
  setSuggestions,
  submitSearch,
  setSearchResult,
  loadTrending,
  setSuggestionsError,
  setSuggestionsLoading,
  setSearchText
} = searchSlice.actions

export default searchSlice.reducer

export const fetchTrendingEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(loadTrending),
    switchMap(() => {
      const api$ = YouTubeApi.getApi()
        .getTrendingVideos()
        .pipe(
          map(results => setSearchResult({ results, nextpage: "" })),
          catchError(() =>
            of(
              setError({
                message:
                  "Failed to get response from the Server. Please try changing server from settings(in home page)"
              })
            )
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
    switchMap(text => {
      const resetError = of(setSuggestionsError(undefined))

      const api$ = of(text).pipe(
        debounceTime(300),
        switchMap(text => {
          const api$ = YouTubeApi.getApi()
            .getSuggestions(text)
            .pipe(
              map(results => setSuggestions(results)),
              catchError(() =>
                of(setSuggestionsError({ message: "Failed to get Suggestions from the Server. Press Enter to Search" }))
              ),
              takeUntil(action$.pipe(ofType(submitSearch.type)))
            )

          const dispatchLoading = (isLoading: boolean) => {
            return of(setSuggestionsLoading(isLoading))
          }

          return concat(dispatchLoading(true), api$, dispatchLoading(false))
        })
      )

      return concat(resetError, api$)
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
            of(
              setError({
                message:
                  "Failed to get response from the Server. Please try changing server from settings(in home page)"
              })
            )
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
  }
}
