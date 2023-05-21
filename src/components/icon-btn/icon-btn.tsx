import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core"

@Component({
  tag: "icon-btn",
  styleUrl: "icon-btn.scss",
  shadow: true
})
export class IconBtn {
  @Prop() icon: IconDefinition
  @Prop() label: string
  @Prop() disabled = false
  @Prop() size: "small" | "medium" = "medium"
  @Prop() type: "primary" | "secondary" = "primary"

  @Event() btnClicked: EventEmitter<void>

  render() {
    return (
      <Host>
        <label class={`${this.size} ${this.type}`}>
          <button
            onClick={() => {
              this.btnClicked.emit()
            }}
            disabled={this.disabled}
          >
            <x-icon icon={this.icon}></x-icon>
          </button>
          <span>{this.label}</span>
        </label>
      </Host>
    )
  }
}
