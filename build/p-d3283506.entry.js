import{r as s,h as t,H as i,g as o}from"./p-958591d1.js";import{R as e}from"./p-6442a25f.js";import{a,l as r,s as h,t as c,k as n}from"./p-7c95d887.js";import{u as p}from"./p-5ff301a6.js";import{S as m,a as l}from"./p-3fa8c836.js";import{A as f}from"./p-293ffef4.js";import{m as d}from"./p-c0874b44.js";import{V as g}from"./p-712f3b6e.js";import"./p-edab44ce.js";import"./p-27f6585c.js";import"./p-6ad30cec.js";let u=class{constructor(t){s(this,t),this.showSearchbar=!1,this.onSearchSubmit=s=>{new e(this.history).showSearchPage(s)}}componentWillLoad(){a.dispatch(r()),h.pipe(d((s=>s.search)),p(this,"disconnectedCallback")).subscribe((s=>{this.showSearchbar=s.showSearchBar,this.searchText=s.searchText,this.videos=s.searchResults,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading}))}disconnectedCallback(){}render(){const s=this.showSearchbar;return t(i,null,t("header",{class:this.showSearchbar?"search-active":""},!this.showSearchbar&&t("h1",null,f),t(l,{searchText:this.searchText,onCloseClick:()=>a.dispatch(c()),onSearchBtnClick:()=>{const s=this.el.querySelector(".search-input");a.dispatch(c()),setTimeout((()=>{s.focus()}),150)},onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:this.showSearchbar,onSearchTextChange:s=>a.dispatch(n(s.target.value))})),s&&t(m,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:s=>{this.onSearchSubmit(s)}}),t(g,{videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>{new e(this.history).showVideoPage(s)}}))}get el(){return o(this)}};u.style="";export{u as trending_page}