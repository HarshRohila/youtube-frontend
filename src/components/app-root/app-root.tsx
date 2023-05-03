import { Component, State, h, Element } from "@stencil/core"
import { AppRoute } from "../../utils/AppRoute"
import { SearchBar, Suggestions } from "../../lib/Search"
import { Subject, map } from "rxjs"
import { state$, store } from "../../lib/redux"
import { untilDestroyed } from "@ngneat/until-destroy"
import { keyPress, toggleSearchBar } from "../../lib/redux/search"

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: false
})
export class AppRoot {
  disconnected$ = new Subject<void>()
  @State() showSearchbar = false
  @State() suggestions: string[]
  @State() searchText: string

  @Element() el: HTMLElement

  componentWillLoad() {
    state$
      .pipe(
        map(state => state.search),
        untilDestroyed(this, "disconnectedCallback")
      )
      .subscribe(state => {
        this.showSearchbar = state.showSearchBar
        this.suggestions = state.suggestions
        this.searchText = state.searchText
      })
  }

  disconnectedCallback() {}

  render() {
    const isShowingSuggestions = this.showSearchbar && !!this.suggestions.length

    return (
      <div>
        <header class={this.showSearchbar ? "search-active" : ""}>
          {!this.showSearchbar && <h1>Another YouTube Front-end</h1>}
          <SearchBar
            searchText={this.searchText}
            onCloseClick={() => store.dispatch(toggleSearchBar())}
            onSearchBtnClick={() => {
              const searchInput = this.el.querySelector(".search-input") as HTMLInputElement

              store.dispatch(toggleSearchBar())
              setTimeout(() => {
                searchInput.focus()
              })
            }}
            onSearchSubmit={() => {}}
            showSearchbar={this.showSearchbar}
            onSearchTextChange={ev => store.dispatch(keyPress(ev.target["value"]))}
          />
        </header>
        {isShowingSuggestions && <Suggestions suggestions={this.suggestions} />}

        <main class={`${isShowingSuggestions ? "suggestions-active" : ""}`}>
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
