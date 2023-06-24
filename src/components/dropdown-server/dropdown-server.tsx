import { Component, Host, Prop, State, h } from "@stencil/core"
import { ServerInstance } from "../../server-instance/serverInstanceApi"
import { CurrentServerInstance } from "../../server-instance/currentServerInstance"

const DROPDOWN_ID = "current-server-instance"

@Component({
  tag: "dropdown-server",
  styleUrl: "dropdown-server.css",
  shadow: true
})
export class DropdownServer {
  @Prop() serverInstances: ServerInstance[]

  @State() selected: ServerInstance

  componentWillLoad() {
    this.selected = CurrentServerInstance.get()
  }

  render() {
    return (
      <Host>
        <label htmlFor={DROPDOWN_ID}>Select Server:</label>
        <select name="server-instance" id={DROPDOWN_ID}>
          {this.serverInstances.map(s => (
            <option value={s.apiUrl} selected={this.selected.apiUrl === s.apiUrl}>
              {s.name}
            </option>
          ))}
        </select>
      </Host>
    )
  }
}
