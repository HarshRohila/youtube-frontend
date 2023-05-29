import { Component, Host, Prop, h } from "@stencil/core"
import { Header } from "../../lib/Header"
import { Router } from "../../lib/Router"
import { RouterHistory } from "@stencil-community/router"

@Component({
  tag: "app-header",
  styleUrl: "app-header.scss",
  shadow: true
})
export class AppHeader {
  @Prop() history: RouterHistory

  private handleHeaderClick = () => {
    new Router(this.history).showTrendingPage()
  }

  render() {
    return (
      <Host>
        <Header onHeaderClick={this.handleHeaderClick} />
      </Host>
    )
  }
}
