import{r as s,h as t,H as i,g as o}from"./p-27ce4408.js";import{R as e}from"./p-a215f906.js";import{a,l as r,s as h,t as n,k as c}from"./p-03843603.js";import{u as p}from"./p-28e26140.js";import{S as l,a as m}from"./p-3fbe4248.js";import{A as f}from"./p-293ffef4.js";import{m as g}from"./p-f56b7820.js";import{V as d}from"./p-86422050.js";import"./p-2d1a0235.js";let u=class{constructor(t){s(this,t),this.showSearchbar=!1,this.onSearchSubmit=s=>{new e(this.history).showSearchPage(s)}}componentWillLoad(){a.dispatch(r()),h.pipe(g((s=>s.search)),p(this,"disconnectedCallback")).subscribe((s=>{this.showSearchbar=s.showSearchBar,this.searchText=s.searchText,this.videos=s.searchResults,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading}))}disconnectedCallback(){}render(){const s=this.showSearchbar;return t(i,null,t("header",{class:this.showSearchbar?"search-active":""},!this.showSearchbar&&t("h1",null,f),t(m,{searchText:this.searchText,onCloseClick:()=>a.dispatch(n()),onSearchBtnClick:()=>{const s=this.el.querySelector(".search-input");a.dispatch(n()),setTimeout((()=>{s.focus()}),150)},onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:this.showSearchbar,onSearchTextChange:s=>a.dispatch(c(s.target.value))})),s&&t(l,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:s=>{this.onSearchSubmit(s)}}),t(d,{videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>{new e(this.history).showVideoPage(s)}}))}get el(){return o(this)}};u.style="";export{u as trending_page}