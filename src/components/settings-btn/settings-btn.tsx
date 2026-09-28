import { faGear } from "@fortawesome/free-solid-svg-icons"
import { Component, Host, Prop, h } from "@stencil/core"

@Component({
  tag: "settings-btn",
  styleUrl: "settings-btn.scss",
  shadow: true
})
export class SettingsBtn {
  @Prop() onOpenSettings!: () => void

  render() {
    return (
      <Host>
        <div class="settings-btn">
          <icon-btn icon={faGear} onBtnClicked={this.onOpenSettings}></icon-btn>
        </div>
      </Host>
    )
  }
}
