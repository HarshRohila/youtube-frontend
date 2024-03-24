import { createState } from "../../state-mgt"

const initialState = {
  error: undefined as IAppError | undefined,
  isLoading: false
}

interface IAppError {
  message: string
}

const state = createState(initialState)

export { IAppError, state as globalState }
