import{r as s,h as i,H as t}from"./p-27ce4408.js";import{S as h,a}from"./p-3fbe4248.js";import{a as o,g as e,s as r,h as n,k as c}from"./p-03843603.js";import{R as p}from"./p-a215f906.js";import{S as l,m,t as g}from"./p-f56b7820.js";import{V as d}from"./p-86422050.js";import"./p-2d1a0235.js";let f=class{constructor(i){s(this,i),this.searchText="",this.disconnected$=new l,this.handleBack=()=>{new p(this.history).showTrendingPage()},this.onSearchSubmit=s=>{o.dispatch(e(s)),new p(this.history).showSearchPage(s,{replace:!0})}}componentWillLoad(){o.dispatch(e(this.history.location.query.q)),r.pipe(m((s=>s.search)),g(this.disconnected$)).subscribe((s=>{this.videos=s.searchResults,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading,this.searchText=s.searchText}))}disconnectedCallback(){this.disconnected$.next(),this.disconnected$.complete(),o.dispatch(n(""))}render(){const s=!!this.suggestions.length;return i(t,null,i("header",{class:"search-active"},i(a,{searchText:this.searchText,onCloseClick:()=>o.dispatch(n("")),onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:!0,onSearchTextChange:s=>o.dispatch(c(s.target.value)),onClickBack:this.handleBack})),s&&i(h,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:this.onSearchSubmit}),this.videos.length&&i(d,{videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>new p(this.history).showVideoPage(s)}))}};f.style=":host{display:block}";export{f as search_page}