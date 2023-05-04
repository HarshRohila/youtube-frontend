import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
  error: undefined as IAppError | undefined
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<IAppError>) => {
      state.error = action.payload
    }
  }
})

export const { setError } = globalSlice.actions

export default globalSlice.reducer

export interface IAppError {
  message: string
}
