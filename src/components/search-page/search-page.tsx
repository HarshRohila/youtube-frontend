import { Component, Host, h, State, Prop } from "@stencil/core"
import { SearchBar, Suggestions, Videos } from "../../lib/Search"
import { state$, store } from "../../lib/redux"
import { Subject, map, takeUntil } from "rxjs"
import { submitSearch, keyPress, setSearchText } from "../../lib/redux/search"
import { RouterHistory } from "@stencil-community/router"
import { SearchResult } from "../../YoutubeApi"
import { Router } from "../../lib/Router"
import { IAppError } from "../../lib/redux/global"

@Component({
  tag: "search-page",
  styleUrl: "search-page.css",
  shadow: false
})
export class SearchPage {
  @State() searchText = ""
  @Prop() history: RouterHistory
  @State() videos: SearchResult[]
  @State() suggestions: string[]
  @State() private suggestionsError: IAppError | undefined
  @State() private suggestionsLoading: boolean

  private disconnected$ = new Subject<void>()
  componentWillLoad() {
    const searchText = this.history.location.query.q
    store.dispatch(submitSearch(searchText))

    state$
      .pipe(
        map(state => state.search),
        takeUntil(this.disconnected$)
      )
      .subscribe(state => {
        this.videos = state.searchResponse.results
        this.suggestions = state.suggestions
        this.suggestionsError = state.suggestionsError
        this.suggestionsLoading = state.suggestionsLoading

        this.searchText = state.searchText
      })
  }

  private handleBack = () => {
    new Router(this.history).showTrendingPage()
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
    store.dispatch(setSearchText(""))
  }

  private onSearchSubmit = (searchText: string) => {
    window.scrollTo({ top: 0 })
    store.dispatch(submitSearch(searchText))
    new Router(this.history).showSearchPage(searchText, { replace: true })
  }

  render() {
    const isShowingSuggestions = !!this.suggestions.length

    return (
      <Host>
        <header class="search-active">
          <SearchBar
            searchText={this.searchText}
            onCloseClick={() => store.dispatch(setSearchText(""))}
            onSearchSubmit={() => {
              this.onSearchSubmit(this.searchText)
            }}
            showSearchbar={true}
            onSearchTextChange={ev => store.dispatch(keyPress(ev.target["value"]))}
            onClickBack={this.handleBack}
          />
        </header>
        {isShowingSuggestions && (
          <Suggestions
            suggestions={this.suggestions}
            error={this.suggestionsError}
            loading={this.suggestionsLoading}
            onClickSuggesion={this.onSearchSubmit}
          />
        )}
        {this.videos.length && (
          <Videos
            videos={this.videos}
            isShowingSuggestions={isShowingSuggestions}
            onClickVideo={video => new Router(this.history).showVideoPage(video)}
          />
        )}
      </Host>
    )
  }
}
