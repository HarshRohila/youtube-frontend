import{r as s,h as i,H as t}from"./p-27ce4408.js";import{S as a,a as h}from"./p-c2a732d7.js";import{a as o,e,s as r,g as c,k as n}from"./p-3131ca7e.js";import{R as p}from"./p-a215f906.js";import{S as l,m,t as d}from"./p-99aa2201.js";import{V as g}from"./p-86422050.js";import"./p-2d1a0235.js";let S=class{constructor(i){s(this,i),this.searchText="",this.disconnected$=new l,this.handleBack=()=>{new p(this.history).showTrendingPage()},this.onSearchSubmit=s=>{o.dispatch(e(s)),new p(this.history).showSearchPage(s,{replace:!0})}}componentWillLoad(){o.dispatch(e(this.history.location.query.q)),r.pipe(m((s=>s.search)),d(this.disconnected$)).subscribe((s=>{this.videos=s.searchResults,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading,this.searchText=s.searchText}))}disconnectedCallback(){this.disconnected$.next(),this.disconnected$.complete(),o.dispatch(c(""))}render(){const s=!!this.suggestions.length;return i(t,null,i("header",{class:"search-active"},i(h,{searchText:this.searchText,onCloseClick:()=>o.dispatch(c("")),onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:!0,onSearchTextChange:s=>o.dispatch(n(s.target.value)),onClickBack:this.handleBack})),s&&i(a,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:this.onSearchSubmit}),this.videos.length&&i(g,{videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>new p(this.history).showVideoPage(s)}))}};S.style=":host{display:block}";export{S as search_page}