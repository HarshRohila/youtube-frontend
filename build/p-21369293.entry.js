import{r as s,h as t,H as i,g as o}from"./p-27ce4408.js";import{R as e}from"./p-1a687b83.js";import{a as h,l as r,s as a,h as n,k as c}from"./p-4d3dee94.js";import{u as p}from"./p-430cc112.js";import{S as l,a as m}from"./p-f0e5f91a.js";import{A as d}from"./p-371fb604.js";import{g}from"./p-885c367f.js";import{m as f}from"./p-9fe7b038.js";import{V as u}from"./p-30fdc733.js";import"./p-2d1a0235.js";import"./p-54677159.js";let j=class{constructor(t){s(this,t),this.showSearchbar=!1,this.onSearchSubmit=s=>{new e(this.history).showSearchPage(s)},this.onClickPlaylistBtn=()=>{new e(this.history).showPlaylistPage()}}componentWillLoad(){h.dispatch(r()),a.pipe(f((s=>s.search)),p(this,"disconnectedCallback")).subscribe((s=>{this.showSearchbar=s.showSearchBar,this.searchText=s.searchText,this.videos=s.searchResponse.results,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading}))}disconnectedCallback(){}get headerClass(){return this.showSearchbar?"search-active":""}render(){const s=this.showSearchbar;return t(i,null,t("header",{class:this.headerClass+" home"},!this.showSearchbar&&t("button",{class:"playlist-btn",onClick:this.onClickPlaylistBtn},t("x-icon",{icon:g})),!this.showSearchbar&&t("h1",null,d),t(m,{searchText:this.searchText,onCloseClick:()=>h.dispatch(n()),onSearchBtnClick:()=>{const s=this.el.querySelector(".search-input");h.dispatch(n()),setTimeout((()=>{s.focus()}),150)},onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:this.showSearchbar,onSearchTextChange:s=>h.dispatch(c(s.target.value))})),!this.showSearchbar&&t("settings-btn",{history:this.history}),s&&t(l,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:s=>{this.onSearchSubmit(s)}}),t(u,{videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>{new e(this.history).showVideoPage(s)}}))}get el(){return o(this)}};j.style="";export{j as trending_page}