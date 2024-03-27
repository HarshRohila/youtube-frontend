import { Component, Host, Prop, State, h, Element } from "@stencil/core"
import { SearchResult } from "../../YoutubeApi"
import { RouterHistory } from "@stencil-community/router"
import { Router } from "../../lib/Router"
import { SearchBar, Suggestions, Videos } from "../../lib/Search"
import {
  doSearch,
  fetchTrending,
  getSuggestions,
  keyPress,
  searchState,
  submitSearch,
  toggleSearchBar
} from "../../lib/redux/search"
import { IAppError } from "../../lib/redux/global"
import { APP_NAME } from "../../utils/constants"
import { faList } from "@fortawesome/free-solid-svg-icons"
import { componentUtil } from "../../lib/app-state-mgt"
import { merge, of, tap } from "../../lib/rx"
import { createEvent } from "../../lib/state-mgt"

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
    const component = componentUtil(this)

    const loadTrending$ = fetchTrending(of(1))

    component.justSubscribe(loadTrending$)

    component.untilDestroyed(searchState.asObservable()).subscribe({
      next: state => {
        this.showSearchbar = state.showSearchBar
        this.searchText = state.searchText
        this.videos = state.searchResponse.results
        this.suggestions = state.suggestions
        this.suggestionsError = state.suggestionsError
        this.suggestionsLoading = state.suggestionsLoading
      }
    })

    const submitSearch$ = merge(this.suggestionClickEvent.$, this.searchSubmitEvent.$).pipe(
      tap(searchText => {
        submitSearch(searchText)
        new Router(this.history).showSearchPage(searchText)
      })
    )

    const doSearch$ = doSearch(submitSearch$)

    const keyPress$ = this.searchTextChangeEvent.$.pipe(
      tap(searchText => {
        keyPress(searchText)
      }),
      getSuggestions(submitSearch$)
    )

    component.justSubscribe(doSearch$, keyPress$)
  }

  disconnectedCallback() {}

  private onClickPlaylistBtn = () => {
    new Router(this.history).showPlaylistPage()
  }

  get headerClass() {
    return this.showSearchbar ? "search-active" : ""
  }

  searchTextChangeEvent = createEvent<Event, string>(ev => {
    return ev.target["value"]
  })
  searchSubmitEvent = createEvent(() => this.searchText)
  suggestionClickEvent = createEvent<string>()

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
            onCloseClick={() => toggleSearchBar()}
            onSearchBtnClick={() => {
              const searchInput = this.el.querySelector(".search-input") as HTMLInputElement
              toggleSearchBar()
              setTimeout(() => {
                searchInput.focus()
              }, 150)
            }}
            onSearchSubmit={this.searchSubmitEvent.handler}
            showSearchbar={this.showSearchbar}
            onSearchTextChange={this.searchTextChangeEvent.handler}
          />
        </header>
        {!this.showSearchbar && <settings-btn history={this.history}></settings-btn>}
        {isShowingSuggestions && (
          <Suggestions
            suggestions={this.suggestions}
            error={this.suggestionsError}
            loading={this.suggestionsLoading}
            onClickSuggesion={this.suggestionClickEvent.handler}
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
