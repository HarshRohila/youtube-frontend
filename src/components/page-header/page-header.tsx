import { Component, Host, Prop, h } from "@stencil/core"
import { Header } from "../../lib/Header"
import { RouterHistory } from "@stencil-community/router"
import { Router } from "../../lib/Router"

@Component({
  tag: "page-header",
  styleUrl: "page-header.scss",
  shadow: true
})
export class PageHeader {
  @Prop() history: RouterHistory

  private handleHeaderClick = () => {
    new Router(this.history).showTrendingPage()
  }

  render() {
    return (
      <Host>
        <Header className="page-header" onHeaderClick={this.handleHeaderClick} />
      </Host>
    )
  }
}
