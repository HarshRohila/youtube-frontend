import { Component, State, h, Prop } from "@stencil/core"
import { Subject, debounceTime, filter, map, switchMap, takeUntil, tap } from "rxjs"
import { SearchResult, YouTubeApi } from "../../YoutubeApi"
import { RouterHistory } from "@stencil-community/router"
import { Router } from "../../lib/Router"

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss",
  shadow: true
})
export class AppHome {
  searchText$ = new Subject<string>()
  disconnected$ = new Subject<void>()
  searchSubmit$ = new Subject<void>()

  @State() suggestions: string[] = []
  @State() searchResults: SearchResult[] = []
  @State() searchText = ""
  @State() showSuggestions = false

  @Prop() history: RouterHistory

  componentWillLoad() {
    const api = YouTubeApi.getApi()

    this.searchText$
      .pipe(
        filter(text => !!text),
        tap(text => {
          this.searchText = text
        }),
        debounceTime(300),
        switchMap(api.getSuggestions),
        takeUntil(this.disconnected$)
      )
      .subscribe(suggetions => {
        this.suggestions = suggetions
        this.showSuggestions = true
      })

    this.searchSubmit$
      .pipe(
        map(() => this.searchText),
        switchMap(searchText => api.getSearchResults(searchText)),
        takeUntil(this.disconnected$)
      )
      .subscribe(results => {
        this.searchResults = results.results
        this.showSuggestions = false
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
    return (
      <div class="app-home">
        <h1>Youtube Search Results</h1>
        <ul>
          {this.searchResults.map(r => (
            <li onClick={this.createVideoClickHandler(r)}>
              <img src={r.thumbnail}></img>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
