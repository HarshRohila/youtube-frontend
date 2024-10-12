import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { createState } from "../../state-mgt"

const initialState = {
  error: undefined as IAppError | undefined,
  loading: undefined as IAppLoading | undefined
}

interface IAppError {
  message: string
  buttons?: ErrorActionButton[]
}

interface ErrorActionButton {
  text: string
  icon: IconDefinition
  clickHandler: () => void
}

interface IAppLoading {
  message?: string
}

const state = createState(initialState)

export { IAppError, IAppLoading, state as globalState }
