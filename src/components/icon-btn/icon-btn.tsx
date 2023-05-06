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

  @Event() btnClicked: EventEmitter<void>

  render() {
    return (
      <Host>
        <label>
          <button
            onClick={() => {
              this.btnClicked.emit()
            }}
          >
            <x-icon icon={this.icon}></x-icon>
          </button>
          <span>{this.label}</span>
        </label>
      </Host>
    )
  }
}
