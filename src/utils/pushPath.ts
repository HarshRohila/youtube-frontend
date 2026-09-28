import { RouterHistory } from "@stencil-community/router"

export const pushPath = (history: RouterHistory) => (path: string) => {
  history.push(path)
}
