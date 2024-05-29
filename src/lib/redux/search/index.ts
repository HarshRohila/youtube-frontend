import {
  Observable,
  catchError,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
  take,
  takeUntil,
  tap,
  timeout
} from "../../../lib/rx"
import { SearchResponse, YouTubeApi } from "../../../YoutubeApi"
import { IAppError, globalState } from "../global"
import { REQUEST_TIMEOUT } from "../../../utils/constants"
import { createState } from "../../state-mgt"
import { ApiServer } from "../../../server-instance/serverInstanceApi"
import { CurrentServerInstance } from "../../../server-instance/currentServerInstance"

export {
  toggleSearchBar,
  searchState,
  keyPress,
  submitSearch,
  setSearchResult,
  setSuggestionsLoading,
  fetchTrending,
  getSuggestions,
  doSearch,
  setSearchText
}

const searchState = createState({
  showSearchBar: false,
  searchText: "",
  searchResponse: newSearchResponse(),
  suggestions: [] as string[],
  suggestionsError: undefined as IAppError | undefined,
  suggestionsLoading: false
})

function setSuggestions(suggestions: string[]) {
  searchState.update({ suggestions })
}

function toggleSearchBar() {
  searchState.update(oldState => ({
    showSearchBar: !oldState.showSearchBar,
    suggestions: oldState.showSearchBar ? [] : oldState.suggestions
  }))
}

function keyPress(searchText: string) {
  searchState.update({ searchText })
}

function submitSearch(searchText: string) {
  searchState.update(oldState => ({ suggestions: [], searchText: searchText ? searchText : oldState.searchText }))
}

function setSearchResult(searchResponse: SearchResponse) {
  searchState.update(oldState => {
    const newState = { ...oldState }

    newState.searchResponse = searchResponse

    if (oldState.showSearchBar) {
      setStateAfterToggleSearchBar(newState)
    }

    return newState
  })
}

function setStateAfterToggleSearchBar(state) {
  state.showSearchBar = !state.showSearchBar

  if (!state.showSearchBar) {
    state.suggestions = []
  }
}

function setSuggestionsError(suggestionsError: IAppError | undefined) {
  searchState.update({ suggestionsError })
}
function setSuggestionsLoading(suggestionsLoading: boolean) {
  searchState.update({ suggestionsLoading })
}

function setSearchText(searchText: string) {
  searchState.update({ searchText })
}

export function newSearchResponse(): SearchResponse {
  return {
    nextpage: "",
    results: []
  }
}

const ERROR_FAILED_FETCH_TRENDING =
  "Failed to get response from the Server. Please try changing server from settings(in home page)"

const FIND_ACTIVE_SERVER_MESSAGE = "Trying to find Active Server. Please Wait..."

function fetchTrending(source: Observable<unknown>) {
  return source.pipe(
    tap(() => {
      globalState.update({ loading: {} })
    }),
    switchMap(() => {
      const api$ = YouTubeApi.getApi()
        .getTrendingVideos()
        .pipe(
          timeout(REQUEST_TIMEOUT),
          map(results => setSearchResult({ results, nextpage: "" })),
          catchError(() => {
            globalState.update({
              loading: {
                message: FIND_ACTIVE_SERVER_MESSAGE
              }
            })

            ApiServer.getActiveServer()
              .pipe(take(1))
              .subscribe({
                next: server => {
                  CurrentServerInstance.set(server)
                  window.location.reload()
                },
                error: () => {
                  globalState.update({
                    error: { message: "Sorry, all Servers are down now. Try after sometime." }
                  })
                }
              })

            return of(setSearchResult({ results: [], nextpage: "" }))
          })
        )

      return api$.pipe(
        tap(() => {
          const msg = globalState.get().loading?.message
          if (msg !== FIND_ACTIVE_SERVER_MESSAGE) {
            globalState.update({ loading: undefined })
          }
        })
      )
    })
  )
}

const getSuggestions = (submitSearch$: Observable<string>) => (searchText$: Observable<string>) =>
  fetchSuggestions(searchText$, submitSearch$)

function fetchSuggestions(searchText$: Observable<string>, submitSearch$: Observable<string>) {
  return searchText$.pipe(
    filter(text => !!text.length),
    debounceTime(300),
    tap(() => {
      globalState.update({ loading: {} })
      setSuggestionsError(undefined)
    }),
    switchMap(text => {
      const api$ = YouTubeApi.getApi()
        .getSuggestions(text)
        .pipe(
          tap(results => {
            setSuggestions(results)
          }),
          catchError(() => {
            setSuggestionsError({ message: "Failed to get Suggestions from the Server. Press Enter to Search" })
            setSuggestions([])
            return of([] as string[])
          }),
          tap(() => {
            globalState.update({ loading: undefined })
          }),
          takeUntil(submitSearch$)
        )

      return api$
    })
  )
}

function doSearch(submitSearch$: Observable<string>) {
  return submitSearch$.pipe(
    filter(text => !!text.length),
    tap(() => {
      globalState.update({ loading: {} })
    }),
    switchMap(text => {
      const api$ = YouTubeApi.getApi()
        .getSearchResults(text)
        .pipe(
          map(results => setSearchResult(results)),
          catchError(() => {
            globalState.update({ error: { message: ERROR_FAILED_FETCH_TRENDING } })
            return of(setSearchResult({ results: [], nextpage: "" }))
          })
        )

      return api$.pipe(
        tap(() => {
          globalState.update({ loading: undefined })
        })
      )
    })
  )
}
