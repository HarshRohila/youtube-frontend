import { Component, State, h } from '@stencil/core';
import { Subject, debounceTime, switchMap, takeUntil, tap } from 'rxjs';
import { YouTubeApi } from '../../YoutubeApi';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  searchText$ = new Subject<string>();
  disconnected$ = new Subject<void>();

  @State() suggestions: string[] = [];

  componentWillLoad() {
    const api = YouTubeApi.getApi();

    this.searchText$.pipe(debounceTime(300), switchMap(api.getSuggestions), takeUntil(this.disconnected$)).subscribe(suggetions => {
      this.suggestions = suggetions;
    });
  }

  disconnectedCallback() {
    this.disconnected$.next();
    this.disconnected$.complete();
  }

  private onSearchTextChange = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    this.searchText$.next(target.value);
  };

  render() {
    return (
      <div class="app-home">
        <div class="search">
          <input type="search" placeholder="Search" onInput={this.onSearchTextChange} />
          <ul class="suggestions">
            {this.suggestions.map(s => (
              <li>{s}</li>
            ))}
          </ul>
        </div>
        <h1>Youtube Search Results</h1>
      </div>
    );
  }
}
