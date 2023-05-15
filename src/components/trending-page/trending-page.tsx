import { Component, Host, Prop, State, h, Element } from "@stencil/core"
import { SearchResult } from "../../YoutubeApi"
import { map } from "rxjs"
import { RouterHistory } from "@stencil-community/router"
import { Router } from "../../lib/Router"
import { state$, store } from "../../lib/redux"
import { untilDestroyed } from "@ngneat/until-destroy"
import { SearchBar, Suggestions, Videos } from "../../lib/Search"
import { keyPress, loadTrending, toggleSearchBar } from "../../lib/redux/search"
import { IAppError } from "../../lib/redux/global"
import { APP_NAME } from "../../utils/constants"

@Component({
  tag: "trending-page",
  styleUrl: "trending-page.scss",
  shadow: false
})
export class TrendingPage {
  @State() videos: SearchResult[]

  @State() showSearchbar = false
  @State() suggestions: string[]
  @State() private suggestionsError: IAppError | undefined
  @State() private suggestionsLoading: boolean
  @State() searchText: string

  @Element() el: HTMLElement

  @Prop() history: RouterHistory

  componentWillLoad() {
    store.dispatch(loadTrending())

    state$
      .pipe(
        map(state => state.search),
        untilDestroyed(this, "disconnectedCallback")
      )
      .subscribe(state => {
        this.showSearchbar = state.showSearchBar
        this.searchText = state.searchText
        this.videos = state.searchResults
        this.suggestions = state.suggestions
        this.suggestionsError = state.suggestionsError
        this.suggestionsLoading = state.suggestionsLoading
      })
  }

  disconnectedCallback() {}

  private onSearchSubmit = (searchText: string) => {
    new Router(this.history).showSearchPage(searchText)
  }

  render() {
    const isShowingSuggestions = this.showSearchbar
    return (
      <Host>
        <mobile-view>
          <header class={this.showSearchbar ? "search-active" : ""}>
            {!this.showSearchbar && <h1>{APP_NAME}</h1>}
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
                this.onSearchSubmit(this.searchText)
              }}
              showSearchbar={this.showSearchbar}
              onSearchTextChange={ev => store.dispatch(keyPress(ev.target["value"]))}
            />
          </header>
          {isShowingSuggestions && (
            <Suggestions
              suggestions={this.suggestions}
              error={this.suggestionsError}
              loading={this.suggestionsLoading}
              onClickSuggesion={suggestion => {
                this.onSearchSubmit(suggestion)
              }}
            />
          )}
          <Videos
            videos={this.videos}
            isShowingSuggestions={isShowingSuggestions}
            onClickVideo={video => {
              new Router(this.history).showVideoPage(video)
            }}
          />
        </mobile-view>
      </Host>
    )
  }
}
