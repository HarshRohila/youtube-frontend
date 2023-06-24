import { faGear } from "@fortawesome/free-solid-svg-icons"
import { Component, Host, Prop, h } from "@stencil/core"
import { Router } from "../../lib/Router"
import { RouterHistory } from "@stencil-community/router"

@Component({
  tag: "settings-btn",
  styleUrl: "settings-btn.scss",
  shadow: true
})
export class SettingsBtn {
  @Prop() history: RouterHistory

  private handleClick = () => {
    new Router(this.history).showSettingsPage()
  }

  render() {
    return (
      <Host>
        <div class="settings-btn">
          <icon-btn icon={faGear} onBtnClicked={this.handleClick}></icon-btn>
        </div>
      </Host>
    )
  }
}
