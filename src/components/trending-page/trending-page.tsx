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
import { faList } from "@fortawesome/free-solid-svg-icons"

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
        this.videos = state.searchResponse.results
        this.suggestions = state.suggestions
        this.suggestionsError = state.suggestionsError
        this.suggestionsLoading = state.suggestionsLoading
      })
  }

  disconnectedCallback() {}

  private onSearchSubmit = (searchText: string) => {
    new Router(this.history).showSearchPage(searchText)
  }

  private onClickPlaylistBtn = () => {
    new Router(this.history).showPlaylistPage()
  }

  get headerClass() {
    return this.showSearchbar ? "search-active" : ""
  }

  render() {
    const isShowingSuggestions = this.showSearchbar
    return (
      <Host>
        <header class={this.headerClass + " home"}>
          {!this.showSearchbar && (
            <button class="playlist-btn" onClick={this.onClickPlaylistBtn}>
              <x-icon icon={faList}></x-icon>
            </button>
          )}
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
        {!this.showSearchbar && <settings-btn history={this.history}></settings-btn>}
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
          preloadStream
          videos={this.videos}
          isShowingSuggestions={isShowingSuggestions}
          onClickVideo={video => {
            new Router(this.history).showVideoPage(video)
          }}
        />
      </Host>
    )
  }
}
