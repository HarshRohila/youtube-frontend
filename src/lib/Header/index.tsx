import { h } from "@stencil/core"
import { APP_NAME } from "../../utils/constants"

export function Header({ onHeaderClick }: { onHeaderClick: () => void }) {
  return (
    <header>
      <h1 onClick={onHeaderClick}>{APP_NAME}</h1>
    </header>
  )
}
