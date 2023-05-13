import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
  shareForm: undefined as ShareFormState | undefined
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
    }
  }
})

export const { setShareForm } = videoPageSlice.actions

export default videoPageSlice.reducer
