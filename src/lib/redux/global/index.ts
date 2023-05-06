import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
  error: undefined as IAppError | undefined,
  isLoading: false
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<IAppError>) => {
      state.error = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    }
  }
})

export const { setError, setLoading } = globalSlice.actions

export default globalSlice.reducer

export interface IAppError {
  message: string
}
