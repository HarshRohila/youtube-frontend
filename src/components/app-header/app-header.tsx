import { Component, Host, Prop, h } from "@stencil/core"
import { Header } from "../../lib/Header"
import { RouterHistory } from "@stencil-community/router"
import { RouteUtils } from "../../core/RouteUtils"
import { pipe } from "../../lib/fp"
import { pushPath } from "../../utils/pushPath"

@Component({
  tag: "app-header",
  styleUrl: "app-header.scss",
  shadow: true
})
export class AppHeader {
  @Prop() history: RouterHistory

  private readonly routeUtils = new RouteUtils()

  render() {
    return (
      <Host>
        <Header onHeaderClick={pipe(this.routeUtils.getTrendingPath, pushPath(this.history))} />
      </Host>
    )
  }
}
