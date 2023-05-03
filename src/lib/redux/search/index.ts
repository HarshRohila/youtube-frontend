import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
  showSearchBar: false,
  searchText: ""
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearchBar: state => {
      state.showSearchBar = !state.showSearchBar
    },
    keyPress: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    }
  }
})

export const { keyPress, toggleSearchBar } = searchSlice.actions

export default searchSlice.reducer
