import { Component, Host, Prop, h } from "@stencil/core"
import { Header } from "../../lib/Header"
import { RouterHistory } from "@stencil-community/router"
import { RouteUtils } from "../../core/RouteUtils"
import { pipe } from "../../lib/fp"
import { pushPath } from "../../utils/pushPath"

@Component({
  tag: "page-header",
  styleUrl: "page-header.scss",
  shadow: true
})
export class PageHeader {
  @Prop() history: RouterHistory

  private readonly routeUtils = new RouteUtils()

  render() {
    return (
      <Host>
        <Header
          className="page-header"
          onHeaderClick={pipe(this.routeUtils.getTrendingPath, pushPath(this.history))}
        />
      </Host>
    )
  }
}
