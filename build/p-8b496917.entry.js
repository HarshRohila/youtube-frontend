import{r as s,h as i,H as t}from"./p-27ce4408.js";import{S as o,a}from"./p-f0e5f91a.js";import{S as e,a as h,d as r,s as c,t as n,e as p,k as l}from"./p-4d3dee94.js";import{R as m}from"./p-1a687b83.js";import{m as d}from"./p-9fe7b038.js";import{V as f}from"./p-30fdc733.js";import"./p-885c367f.js";import"./p-54677159.js";import"./p-2d1a0235.js";let g=class{constructor(i){s(this,i),this.searchText="",this.disconnected$=new e,this.handleBack=()=>{new m(this.history).showTrendingPage()},this.onSearchSubmit=s=>{h.dispatch(r(s)),new m(this.history).showSearchPage(s,{replace:!0})}}componentWillLoad(){h.dispatch(r(this.history.location.query.q)),c.pipe(d((s=>s.search)),n(this.disconnected$)).subscribe((s=>{this.videos=s.searchResponse.results,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading,this.searchText=s.searchText}))}disconnectedCallback(){this.disconnected$.next(),this.disconnected$.complete(),h.dispatch(p(""))}render(){const s=!!this.suggestions.length;return i(t,null,i("header",{class:"search-active"},i(a,{searchText:this.searchText,onCloseClick:()=>h.dispatch(p("")),onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:!0,onSearchTextChange:s=>h.dispatch(l(s.target.value)),onClickBack:this.handleBack})),s&&i(o,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:this.onSearchSubmit}),this.videos.length&&i(f,{videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>new m(this.history).showVideoPage(s)}))}};g.style=":host{display:block}";export{g as search_page}