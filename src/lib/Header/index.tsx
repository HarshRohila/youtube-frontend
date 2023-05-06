import { h } from "@stencil/core"
import { APP_NAME } from "../../utils/constants"

export function Header() {
  return (
    <header>
      <h1>{APP_NAME}</h1>
    </header>
  )
}
