import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ofType } from "redux-observable"
import { BehaviorSubject, Observable, debounceTime, filter, map, switchMap, tap } from "rxjs"
import { YouTubeApi } from "../../../YoutubeApi"
import { RootState } from ".."

const initialState = {
  showSearchBar: false,
  searchText: "",
  suggestions: [] as string[]
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearchBar: state => {
      state.showSearchBar = !state.showSearchBar

      if (!state.showSearchBar) {
        state.suggestions = []
        state.searchText = ""
      }
    },
    keyPress: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
    setSuggestions: (state, action: PayloadAction<string[]>) => {
      state.suggestions = action.payload
    }
  }
})

export const { keyPress, toggleSearchBar, setSuggestions } = searchSlice.actions

export default searchSlice.reducer

export const fetchSuggestionsEpic = (action$: Observable<Action>, state$: BehaviorSubject<RootState>) =>
  action$.pipe(
    ofType(keyPress.type),
    map(() => state$.value.search.searchText),
    filter(text => !!text.length),
    debounceTime(300),
    switchMap(text => YouTubeApi.getApi().getSuggestions(text)),
    map(results => setSuggestions(results))
  )
