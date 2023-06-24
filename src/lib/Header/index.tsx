import { h } from "@stencil/core"
import { APP_NAME } from "../../utils/constants"

export function Header({ onHeaderClick, className }: { onHeaderClick: () => void; className?: string }) {
  if (!className) {
    className = ""
  }

  return (
    <header class={className}>
      <h1 onClick={onHeaderClick}>{APP_NAME}</h1>
    </header>
  )
}
