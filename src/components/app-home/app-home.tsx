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

  private createVideoClickHandler = (video: SearchResult) => {
    const handler = () => {
      new Router(this.history).showVideoPage(video)
    }

    return handler
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
            <li onClick={this.createVideoClickHandler(r)}>
              <img src={r.thumbnail}></img>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
