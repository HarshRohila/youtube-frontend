import { RouterHistory } from "@stencil-community/router"

export const replacePath = (history: RouterHistory) => (path: string) => {
  history.replace(path)
}
