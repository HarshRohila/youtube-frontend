import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core"
import { NotificationModel } from "../../lib/notifier"

@Component({
  tag: "x-notification",
  styleUrl: "x-notification.scss",
  shadow: true
})
export class XNotification {
  @Prop() data: NotificationModel

  @Event() timedOut: EventEmitter<void>

  el: HTMLDivElement

  componentDidLoad() {
    setTimeout(() => {
      this.el?.classList.add("loaded")
    })
  }

  render() {
    return (
      <Host>
        <div
          class="notification"
          ref={el => {
            this.el = el
          }}
        >
          <span class="text">{this.data.text}</span>
          <ul>
            {this.data.buttons.map(b => (
              <li key={b.text}>
                <a onClick={b.clickHandler}>{b.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </Host>
    )
  }
}
