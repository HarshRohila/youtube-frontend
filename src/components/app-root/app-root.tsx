import { Component, State, h } from "@stencil/core"
import { AppRoute } from "../../utils/AppRoute"
import { SearchBar } from "../../lib/Search"
import { state$, userEvents } from "../../lib/Search/state"
import { Subject, takeUntil } from "rxjs"
@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: false
})
export class AppRoot {
  disconnected$ = new Subject<void>()
  @State() showSearchbar = false

  componentWillLoad() {
    state$.pipe(takeUntil(this.disconnected$)).subscribe(state => {
      this.showSearchbar = state.showSearchbar
    })
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  searchCloseEvent = userEvents.searchClose(this.disconnected$)
  searchClick = userEvents.searchClick(this.disconnected$)

  render() {
    return (
      <div>
        <header class={this.showSearchbar ? "search-active" : ""}>
          {!this.showSearchbar && <h1>Another YouTube Front-end</h1>}
          <SearchBar
            onCloseClick={() => this.searchCloseEvent.emit()}
            onSearchBtnClick={() => this.searchClick.emit()}
            onSearchSubmit={() => {}}
            showSearchbar={this.showSearchbar}
            onSearchTextChange={() => {}}
          />
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url={AppRoute.getPath("")} component="trending-page" exact />
              <stencil-route url={AppRoute.getPath("/videos/:videoId")} component="video-page" />
              <stencil-route url={AppRoute.getPath("/trending")} component="trending-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    )
  }
}
