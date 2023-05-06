import { Component, Host, h, Prop } from "@stencil/core"
import { IAppError, setError } from "../../lib/redux/global"
import { store } from "../../lib/redux"
import { faClose } from "@fortawesome/free-solid-svg-icons"

@Component({
  tag: "error-page",
  styleUrl: "error-page.scss",
  shadow: true
})
export class ErrorPage {
  @Prop() error: IAppError

  render() {
    return (
      <Host>
        <div class="container">
          <div class="error-page">
            <h3>{this.error.message}</h3>
            <button class="close-btn" onClick={() => store.dispatch(setError(undefined))}>
              <x-icon icon={faClose}></x-icon>
            </button>
          </div>
        </div>
      </Host>
    )
  }
}
