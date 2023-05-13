import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
  shareForm: undefined as ShareFormState | undefined,
  currentTimeEnabled: false,
  copiedLink: ""
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
    }
  }
})

export const { setShareForm, setCurrentTimeEnabled, setCopiedLink } = videoPageSlice.actions

export default videoPageSlice.reducer
