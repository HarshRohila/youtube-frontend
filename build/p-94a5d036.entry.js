import{r as s,h as i,H as t}from"./p-bb4ef53f.js";import{S as a,a as h}from"./p-70d415a9.js";import{a as o,g as e,s as r,h as c,k as n}from"./p-63c55f6f.js";import{R as l}from"./p-88fbaaf1.js";import{S as p,m,u as f}from"./p-4a26d71d.js";import{V as d}from"./p-ef1712c1.js";let g=class{constructor(i){s(this,i),this.searchText="",this.disconnected$=new p,this.handleBack=()=>{new l(this.history).showTrendingPage()},this.onSearchSubmit=s=>{o.dispatch(e(s)),new l(this.history).showSearchPage(s,{replace:!0})}}componentWillLoad(){o.dispatch(e(this.history.location.query.q)),r.pipe(m((s=>s.search)),f(this.disconnected$)).subscribe((s=>{this.videos=s.searchResults,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading,this.searchText=s.searchText}))}disconnectedCallback(){this.disconnected$.next(),this.disconnected$.complete(),o.dispatch(c(""))}render(){const s=!!this.suggestions.length;return i(t,null,i("header",{class:"search-active"},i(h,{searchText:this.searchText,onCloseClick:()=>o.dispatch(c("")),onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:!0,onSearchTextChange:s=>o.dispatch(n(s.target.value)),onClickBack:this.handleBack})),s&&i(a,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:this.onSearchSubmit}),this.videos.length&&i(d,{videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>new l(this.history).showVideoPage(s)}))}};g.style=":host{display:block}";export{g as search_page}