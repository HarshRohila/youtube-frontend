import{r as s,h as t,H as i,g as o}from"./p-27ce4408.js";import{R as a}from"./p-1a687b83.js";import{a as e,l as r,s as h,g as n,k as c}from"./p-76a5b20e.js";import{u as p}from"./p-aefc2466.js";import{S as m,a as l}from"./p-bacd31b3.js";import{A as g}from"./p-371fb604.js";import{g as d}from"./p-885c367f.js";import{m as f}from"./p-8f183a2a.js";import{V as u}from"./p-4325abee.js";import"./p-2d1a0235.js";import"./p-8f173dc6.js";import"./p-54677159.js";import"./p-fa40f061.js";let b=class{constructor(t){s(this,t),this.showSearchbar=!1,this.onSearchSubmit=s=>{new a(this.history).showSearchPage(s)},this.onClickPlaylistBtn=()=>{new a(this.history).showPlaylistPage()}}componentWillLoad(){e.dispatch(r()),h.pipe(f((s=>s.search)),p(this,"disconnectedCallback")).subscribe((s=>{this.showSearchbar=s.showSearchBar,this.searchText=s.searchText,this.videos=s.searchResponse.results,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading}))}disconnectedCallback(){}get headerClass(){return this.showSearchbar?"search-active":""}render(){const s=this.showSearchbar;return t(i,null,t("header",{class:this.headerClass+" home"},!this.showSearchbar&&t("button",{class:"playlist-btn",onClick:this.onClickPlaylistBtn},t("x-icon",{icon:d})),!this.showSearchbar&&t("h1",null,g),t(l,{searchText:this.searchText,onCloseClick:()=>e.dispatch(n()),onSearchBtnClick:()=>{const s=this.el.querySelector(".search-input");e.dispatch(n()),setTimeout((()=>{s.focus()}),150)},onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:this.showSearchbar,onSearchTextChange:s=>e.dispatch(c(s.target.value))})),!this.showSearchbar&&t("settings-btn",{history:this.history}),s&&t(m,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:s=>{this.onSearchSubmit(s)}}),t(u,{preloadStream:!0,videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>{new a(this.history).showVideoPage(s)}}))}get el(){return o(this)}};b.style="";export{b as trending_page}