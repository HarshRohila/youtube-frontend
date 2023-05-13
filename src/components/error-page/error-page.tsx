import { Component, Host, h, Prop } from "@stencil/core"
import { IAppError, setError } from "../../lib/redux/global"
import { Modal } from "../../lib/Modal"
import { store } from "../../lib/redux"

@Component({
  tag: "error-page",
  styleUrl: "error-page.scss",
  shadow: true
})
export class ErrorPage {
  @Prop() error: IAppError

  connectedCallback() {
    document.body.style.overflow = "hidden"
  }
  disconnectedCallback() {
    document.body.style.overflow = "initial"
  }

  render() {
    return (
      <Host>
        <Modal onClose={() => store.dispatch(setError(undefined))}>
          <h3>{this.error.message}</h3>
        </Modal>
      </Host>
    )
  }
}
