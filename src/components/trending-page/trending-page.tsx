import { Component, Host, Prop, State, h, Element } from "@stencil/core"
import { SearchResult } from "../../YoutubeApi"
import { Subject, map } from "rxjs"
import { Card } from "./card"
import { RouterHistory } from "@stencil-community/router"
import { Router } from "../../lib/Router"
import { state$, store } from "../../lib/redux"
import { untilDestroyed } from "@ngneat/until-destroy"
import { SearchBar, Suggestions } from "../../lib/Search"
import { keyPress, loadTrending, submitSearch, toggleSearchBar } from "../../lib/redux/search"

@Component({
  tag: "trending-page",
  styleUrl: "trending-page.scss",
  shadow: false
})
export class TrendingPage {
  @State() videos: SearchResult[]

  @State() showSearchbar = false
  @State() suggestions: string[]
  @State() searchText: string

  @Element() el: HTMLElement

  @Prop() history: RouterHistory

  disconnected$ = new Subject<void>()

  componentWillLoad() {
    store.dispatch(loadTrending())

    state$
      .pipe(
        map(state => state.search),
        untilDestroyed(this, "disconnectedCallback")
      )
      .subscribe(state => {
        this.showSearchbar = state.showSearchBar
        this.suggestions = state.suggestions
        this.searchText = state.searchText
        this.videos = state.searchResults
      })
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  private createVideoClickHandler = (video: SearchResult) => {
    const handler = () => {
      new Router(this.history).showVideoPage(video)
    }

    return handler
  }

  render() {
    const isShowingSuggestions = this.showSearchbar && !!this.suggestions.length
    return (
      <Host>
        <header class={this.showSearchbar ? "search-active" : ""}>
          {!this.showSearchbar && <h1>PipedRx</h1>}
          <SearchBar
            searchText={this.searchText}
            onCloseClick={() => store.dispatch(toggleSearchBar())}
            onSearchBtnClick={() => {
              const searchInput = this.el.querySelector(".search-input") as HTMLInputElement

              store.dispatch(toggleSearchBar())
              setTimeout(() => {
                searchInput.focus()
              }, 150)
            }}
            onSearchSubmit={() => {
              store.dispatch(submitSearch())
            }}
            showSearchbar={this.showSearchbar}
            onSearchTextChange={ev => store.dispatch(keyPress(ev.target["value"]))}
          />
        </header>
        {isShowingSuggestions && (
          <Suggestions
            suggestions={this.suggestions}
            onClickSuggesion={suggestion => {
              store.dispatch(submitSearch(suggestion))
            }}
          />
        )}
        <ul class={"trending " + `${isShowingSuggestions ? "suggestions-active" : ""}`}>
          {this.videos &&
            this.videos.map(r => (
              <li onClick={this.createVideoClickHandler(r)}>
                <Card video={r} />
              </li>
            ))}
        </ul>
      </Host>
    )
  }
}
