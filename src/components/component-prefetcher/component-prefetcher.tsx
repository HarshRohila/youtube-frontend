import { Component, Host, Prop, h, Element } from "@stencil/core"
import { from, map, switchMap, timer } from "../../lib/rx"
import { componentUtil } from "../../lib/app-state-mgt"
import { AnyComponent } from "./types"

@Component({
  tag: "component-prefetcher",
  shadow: true
})
export class ComponentPrefetcher {
  @Prop() components: AnyComponent[]

  @Element() el: HTMLComponentPrefetcherElement

  componentDidLoad() {
    const comp$ = from(this.components).pipe(switchMap(comp => timer(1000).pipe(map(() => comp))))

    const compUtil = componentUtil(this)

    compUtil.subscribe(comp$, comp => {
      this.prefetchComponent(comp)
    })
  }

  private prefetchComponent(comp: AnyComponent) {
    this.fetchCompDeps([comp])
  }

  private fetchCompDeps(deps: AnyComponent[]) {
    if (!deps.length) return

    deps.forEach(dep => {
      const { name, deps } = this.toComponentObject(dep)
      this.fetchCompDeps(deps)
      this.fetchSingleComponent(name)
    })
  }

  private fetchSingleComponent(name: string) {
    const compEl = this.createComponent(name)
    this.el.append(compEl)
    compEl.remove()
  }

  private toComponentObject(comp: AnyComponent): { name: string; deps: AnyComponent[] } {
    const isArray = Array.isArray(comp)

    return {
      // @ts-ignore
      name: isArray ? comp[0] : comp,
      // @ts-ignore
      deps: isArray ? comp[1].deps : []
    }
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
