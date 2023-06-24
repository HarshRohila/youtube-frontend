import { Component, Host, Prop, h } from "@stencil/core"
import { ServerInstance } from "../../serverInstanceApi"

@Component({
  tag: "li-server-instance",
  styleUrl: "li-server-instance.scss",
  shadow: true
})
export class LiServerInstance {
  @Prop() serverInsance: ServerInstance

  render() {
    return (
      <Host>
        <div class="instance">
          <span>{this.serverInsance.name}</span>
          <span>{this.serverInsance.locations}</span>
          <span class="has-cdn">{this.serverInsance.hasCdn ? "✅" : "❌"}</span>
        </div>
      </Host>
    )
  }
}
