import { Component, State, h } from "@stencil/core"
import { AppRoute } from "../../utils/AppRoute"
import { SearchBar } from "../../lib/Search"
import { Subject, map } from "rxjs"
import { state$, store } from "../../lib/redux"
import { toggleSearchBar } from "../../lib/redux/search/actions"
import { untilDestroyed } from "@ngneat/until-destroy"

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: false
})
export class AppRoot {
  disconnected$ = new Subject<void>()
  @State() showSearchbar = false

  componentWillLoad() {
    state$
      .pipe(
        map(state => state.search),
        untilDestroyed(this, "disconnectedCallback")
      )
      .subscribe(state => {
        this.showSearchbar = state.showSearchBar
      })
  }

  disconnectedCallback() {}

  render() {
    return (
      <div>
        <header class={this.showSearchbar ? "search-active" : ""}>
          {!this.showSearchbar && <h1>Another YouTube Front-end</h1>}
          <SearchBar
            onCloseClick={() => store.dispatch(toggleSearchBar())}
            onSearchBtnClick={() => store.dispatch(toggleSearchBar())}
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
