import { Component, Host, h, State, Prop } from "@stencil/core"
import { SearchBar, Suggestions, Videos } from "../../lib/Search"
import { submitSearch, keyPress, setSearchText, searchState, doSearch, getSuggestions } from "../../lib/redux/search"
import { RouterHistory } from "@stencil-community/router"
import { SearchResult } from "../../YoutubeApi"
import { Router } from "../../lib/Router"
import { IAppError } from "../../lib/redux/global"
import { componentUtil } from "../../lib/app-state-mgt"
import { merge, startWith, tap } from "../../lib/rx"
import { createEvent } from "../../lib/state-mgt"

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

  searchSubmitEvent = createEvent(() => this.searchText)
  suggestionClickEvent = createEvent<string>()

  componentWillLoad() {
    const searchText = this.history.location.query.q as string

    const component = componentUtil(this)

    component.untilDestroyed(searchState.asObservable()).subscribe(state => {
      this.videos = state.searchResponse.results
      this.suggestions = state.suggestions
      this.suggestionsError = state.suggestionsError
      this.suggestionsLoading = state.suggestionsLoading

      this.searchText = state.searchText
    })

    const laterSubmits$ = merge(this.searchSubmitEvent.$, this.suggestionClickEvent.$).pipe(
      tap(searchText => {
        window.scrollTo({ top: 0 })
        new Router(this.history).showSearchPage(searchText, { replace: true })
      })
    )

    const submitSearch$ = laterSubmits$.pipe(
      startWith(searchText),
      tap(searchText => {
        submitSearch(searchText)
      })
    )

    const doSearch$ = doSearch(submitSearch$)

    const keyPress$ = this.searchTextChangeEvent.$.pipe(
      tap(searchText => {
        keyPress(searchText)
      }),
      getSuggestions(laterSubmits$)
    )

    component.justSubscribe(doSearch$, keyPress$)
  }

  private handleBack = () => {
    new Router(this.history).showTrendingPage()
  }

  disconnectedCallback() {
    setSearchText("")
  }

  searchTextChangeEvent = createEvent<Event, string>(ev => ev.target["value"])

  render() {
    const isShowingSuggestions = !!this.suggestions.length

    return (
      <Host>
        <header class="search-active">
          <SearchBar
            searchText={this.searchText}
            onCloseClick={() => setSearchText("")}
            onSearchSubmit={this.searchSubmitEvent.handler}
            showSearchbar={true}
            onSearchTextChange={this.searchTextChangeEvent.handler}
            onClickBack={this.handleBack}
          />
        </header>
        {isShowingSuggestions && (
          <Suggestions
            suggestions={this.suggestions}
            error={this.suggestionsError}
            loading={this.suggestionsLoading}
            onClickSuggesion={this.suggestionClickEvent.handler}
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
