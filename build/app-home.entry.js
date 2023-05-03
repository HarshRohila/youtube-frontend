import { r as registerInstance, h } from './index-3b293f20.js';
import { S as Subject, f as filter, t as tap, d as debounceTime, s as switchMap, a as takeUntil, m as map } from './index-c062af89.js';
import { Y as YouTubeApi } from './index-eda0517b.js';
import { R as Router } from './index-876dd438.js';
import './AppRoute-3105d84a.js';

const appHomeCss = ".app-home{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}.search{position:relative}";

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.searchText$ = new Subject();
    this.disconnected$ = new Subject();
    this.searchSubmit$ = new Subject();
    this.suggestions = [];
    this.searchResults = [];
    this.searchText = "";
    this.showSuggestions = false;
    this.createVideoClickHandler = (video) => {
      const handler = () => {
        new Router(this.history).showVideoPage(video);
      };
      return handler;
    };
  }
  componentWillLoad() {
    const api = YouTubeApi.getApi();
    this.searchText$
      .pipe(filter(text => !!text), tap(text => {
      this.searchText = text;
    }), debounceTime(300), switchMap(api.getSuggestions), takeUntil(this.disconnected$))
      .subscribe(suggetions => {
      this.suggestions = suggetions;
      this.showSuggestions = true;
    });
    this.searchSubmit$
      .pipe(map(() => this.searchText), switchMap(api.getSearchResults), takeUntil(this.disconnected$))
      .subscribe(results => {
      this.searchResults = results;
      this.showSuggestions = false;
    });
  }
  disconnectedCallback() {
    this.disconnected$.next();
    this.disconnected$.complete();
  }
  render() {
    return (h("div", { class: "app-home" }, h("h1", null, "Youtube Search Results"), h("ul", null, this.searchResults.map(r => (h("li", { onClick: this.createVideoClickHandler(r) }, h("img", { src: r.thumbnail })))))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
