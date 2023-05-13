import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
  shareForm: undefined as ShareFormState | undefined,
  currentTimeEnabled: false
}

export interface ShareFormState {
  currentTime: number
}

export const videoPageSlice = createSlice({
  name: "video-page",
  initialState,
  reducers: {
    setShareForm: (state, action: PayloadAction<ShareFormState>) => {
      state.shareForm = action.payload
    },
    setCurrentTimeEnabled(state, action: PayloadAction<boolean>) {
      state.currentTimeEnabled = action.payload
    }
  }
})

export const { setShareForm, setCurrentTimeEnabled } = videoPageSlice.actions

export default videoPageSlice.reducer
