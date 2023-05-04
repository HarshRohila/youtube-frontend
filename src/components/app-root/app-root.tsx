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
        map(state => state.search),
        untilDestroyed(this, "disconnectedCallback")
      )
      .subscribe(state => {
        this.isLoading = state.isLoading
      })

    state$
      .pipe(
        map(state => state.global),
        untilDestroyed(this, "disconnectedCallback")
      )
      .subscribe(state => {
        this.error = state.error
      })
  }

  disconnectedCallback() {}

  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url={AppRoute.getPath("")} component="trending-page" exact />
              <stencil-route url={AppRoute.getPath("/videos/:videoId")} component="video-page" />
              <stencil-route url={AppRoute.getPath("/trending")} component="trending-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
        {this.isLoading && <loading-page></loading-page>}
        {this.error && <error-page error={this.error}></error-page>}
      </div>
    )
  }
}
