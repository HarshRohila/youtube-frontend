import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Component, Host, Prop, h } from "@stencil/core"
import { IAppLoading } from "../../lib/redux/global"

@Component({
  tag: "loading-page",
  styleUrl: "loading-page.scss",
  shadow: true
})
export class LoadingPage {
  @Prop() loading?: IAppLoading

  connectedCallback() {
    document.body.style.overflow = "hidden"
  }
  disconnectedCallback() {
    document.body.style.overflow = "initial"
  }
  render() {
    return (
      <Host>
        <div class="loading-page">
          <x-icon icon={faSpinner} spin size="3x"></x-icon>
          {this.loading?.message && <p>{this.loading.message}</p>}
        </div>
      </Host>
    )
  }
}
