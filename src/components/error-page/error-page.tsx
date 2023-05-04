import { Component, Host, h, Prop } from "@stencil/core"
import { IAppError, setError } from "../../lib/redux/global"
import { store } from "../../lib/redux"

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
        <div class="error-page">
          <h3>{this.error.message}</h3>
          <button onClick={() => store.dispatch(setError(undefined))}>Close Message</button>
        </div>
      </Host>
    )
  }
}
