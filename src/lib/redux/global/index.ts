import { createState } from "../../state-mgt"

const initialState = {
  error: undefined as IAppError | undefined,
  loading: undefined as IAppLoading | undefined
}

interface IAppError {
  message: string
}

interface IAppLoading {
  message?: string
}

const state = createState(initialState)

export { IAppError, IAppLoading, state as globalState }
