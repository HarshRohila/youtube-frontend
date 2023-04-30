import { Component, State, h } from "@stencil/core"
import { Subject, debounceTime, filter, map, switchMap, takeUntil, tap } from "rxjs"
import { SearchResult, YouTubeApi } from "../../YoutubeApi"

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
        switchMap(api.getSearchResults),
        takeUntil(this.disconnected$)
      )
      .subscribe(results => {
        this.searchResults = results
        this.showSuggestions = false
      })
  }

  disconnectedCallback() {
    this.disconnected$.next()
    this.disconnected$.complete()
  }

  private onSearchTextChange = (ev: Event) => {
    const target = ev.target as HTMLInputElement
    this.searchText$.next(target.value)
  }

  private onSearchSubmit = (ev: Event) => {
    ev.preventDefault()
    this.searchSubmit$.next()
  }

  render() {
    return (
      <div class="app-home">
        <div class="search">
          <form onSubmit={this.onSearchSubmit}>
            <input type="search" placeholder="Search" onInput={this.onSearchTextChange} />
          </form>
          {this.showSuggestions && (
            <ul class="suggestions">
              {this.suggestions.map(s => (
                <li>{s}</li>
              ))}
            </ul>
          )}
        </div>
        <h1>Youtube Search Results</h1>
        <ul>
          {this.searchResults.map(r => (
            <li>
              <img src={r.thumbnail}></img>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
