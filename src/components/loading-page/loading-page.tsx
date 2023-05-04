import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Component, Host, h } from "@stencil/core"

@Component({
  tag: "loading-page",
  styleUrl: "loading-page.scss",
  shadow: true
})
export class LoadingPage {
  render() {
    return (
      <Host>
        <div class="loading-page">
          <x-icon icon={faSpinner} spin size="3x"></x-icon>
        </div>
      </Host>
    )
  }
}
