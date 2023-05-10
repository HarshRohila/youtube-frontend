import { Component, h, Element, State } from "@stencil/core"
import { AppRoute } from "../../utils/AppRoute"
import { Subject, map } from "rxjs"
import { state$ } from "../../lib/redux"
import { untilDestroyed } from "@ngneat/until-destroy"
import { IAppError } from "../../lib/redux/global"

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: false
})
export class AppRoot {
  disconnected$ = new Subject<void>()

  @Element() el: HTMLElement
  @State() private isLoading: boolean
  @State() private error: IAppError

  componentWillLoad() {
    state$
      .pipe(
        map(state => state.global),
        untilDestroyed(this, "disconnectedCallback")
      )
      .subscribe(state => {
        this.error = state.error
        this.isLoading = state.isLoading
      })
  }

  disconnectedCallback() {}

  render() {
    return (
      <div>
        <main>
          <stencil-router historyType="hash">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url={AppRoute.getPath("")} component="trending-page" exact />
              <stencil-route url={AppRoute.getPath("/videos/:videoId")} component="video-page" />
              <stencil-route url={AppRoute.getPath("/search")} component="search-page" />
              <stencil-route url={AppRoute.getPath("/shared-content-receiver")} component="shared-content-receiver" />
            </stencil-route-switch>
          </stencil-router>
        </main>
        {this.isLoading && <loading-page></loading-page>}
        {this.error && <error-page error={this.error}></error-page>}
      </div>
    )
  }
}
