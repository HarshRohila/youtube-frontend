import{r as s,h as t,H as i,g as o}from"./p-958591d1.js";import{R as e}from"./p-8759da8b.js";import{a,l as r,s as h,t as n,k as c}from"./p-f7d64ae4.js";import{u as p}from"./p-14d08795.js";import{S as m,a as l}from"./p-7b52695d.js";import{A as d}from"./p-293ffef4.js";import{m as f}from"./p-5c1a28e4.js";import{V as g}from"./p-712f3b6e.js";import"./p-24b21de3.js";import"./p-aa32d230.js";let u=class{constructor(t){s(this,t),this.showSearchbar=!1,this.onSearchSubmit=s=>{new e(this.history).showSearchPage(s)}}componentWillLoad(){a.dispatch(r()),h.pipe(f((s=>s.search)),p(this,"disconnectedCallback")).subscribe((s=>{this.showSearchbar=s.showSearchBar,this.searchText=s.searchText,this.videos=s.searchResults,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading}))}disconnectedCallback(){}render(){const s=this.showSearchbar;return t(i,null,t("header",{class:this.showSearchbar?"search-active":""},!this.showSearchbar&&t("h1",null,d),t(l,{searchText:this.searchText,onCloseClick:()=>a.dispatch(n()),onSearchBtnClick:()=>{const s=this.el.querySelector(".search-input");a.dispatch(n()),setTimeout((()=>{s.focus()}),150)},onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:this.showSearchbar,onSearchTextChange:s=>a.dispatch(c(s.target.value))})),s&&t(m,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:s=>{this.onSearchSubmit(s)}}),t(g,{videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>{new e(this.history).showVideoPage(s)}}))}get el(){return o(this)}};u.style="";export{u as trending_page}