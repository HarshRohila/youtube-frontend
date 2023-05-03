const initialState = {
  showSearchBar: false
}
interface Action {
  type: string
  payload?: any
}
export function search(state = initialState, action: Action) {
  switch (action.type) {
    case "search/toggleSearchBar":
      return { showSearchBar: !state.showSearchBar }

    default:
      return initialState
  }
}
