import { Component, Host, h } from "@stencil/core"

@Component({
  tag: "mobile-view",
  styleUrl: "mobile-view.scss",
  shadow: false
})
export class MobileView {
  render() {
    return (
      <Host>
        <div class="mobile-view">
          <slot></slot>
        </div>
      </Host>
    )
  }
}
