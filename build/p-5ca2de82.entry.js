import{r as s,h as i,H as t}from"./p-958591d1.js";import{S as a,a as o}from"./p-3fa8c836.js";import{a as e,e as h,s as r,g as c,k as n}from"./p-7c95d887.js";import{R as p}from"./p-6442a25f.js";import{S as l,m,t as d}from"./p-c0874b44.js";import{V as g}from"./p-712f3b6e.js";import"./p-27f6585c.js";import"./p-6ad30cec.js";import"./p-edab44ce.js";let f=class{constructor(i){s(this,i),this.searchText="",this.disconnected$=new l,this.handleBack=()=>{new p(this.history).showTrendingPage()},this.onSearchSubmit=s=>{e.dispatch(h(s)),new p(this.history).showSearchPage(s,{replace:!0})}}componentWillLoad(){e.dispatch(h(this.history.location.query.q)),r.pipe(m((s=>s.search)),d(this.disconnected$)).subscribe((s=>{this.videos=s.searchResults,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading,this.searchText=s.searchText}))}disconnectedCallback(){this.disconnected$.next(),this.disconnected$.complete(),e.dispatch(c(""))}render(){const s=!!this.suggestions.length;return i(t,null,i("header",{class:"search-active"},i(o,{searchText:this.searchText,onCloseClick:()=>e.dispatch(c("")),onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:!0,onSearchTextChange:s=>e.dispatch(n(s.target.value)),onClickBack:this.handleBack})),s&&i(a,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:this.onSearchSubmit}),this.videos.length&&i(g,{videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>new p(this.history).showVideoPage(s)}))}};f.style=":host{display:block}";export{f as search_page}