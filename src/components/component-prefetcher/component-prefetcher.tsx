import { Component, Host, Prop, h, Element } from "@stencil/core"
import { componentUtil } from "../../lib/app-state-mgt"
import { AnyComponent } from "../../core/types"
import { ComponentPrefetcherController } from "../../core/ComponentPrefetcherController"

@Component({
  tag: "component-prefetcher",
  shadow: true
})
export class ComponentPrefetcher {
  @Prop() components!: AnyComponent[]

  @Element() el!: HTMLComponentPrefetcherElement

  componentDidLoad() {
    const controller = new ComponentPrefetcherController(this.components)
    const compUtil = componentUtil(this)

    compUtil.subscribe(controller.createComp$(), name => {
      this.fetchSingleComponent(name)
    })
  }

  private fetchSingleComponent(name: string) {
    const compEl = this.createComponent(name)
    this.el.append(compEl)
    compEl.remove()
  }

  private createComponent(name: string) {
    return Object.assign(document.createElement(name), { prefetching: true })
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
