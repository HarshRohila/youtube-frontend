import{r as s,h as t,H as i,g as o}from"./p-27ce4408.js";import{R as e}from"./p-1a687b83.js";import{a as r,l as a,s as h,g as n,k as c}from"./p-19623bb4.js";import{u as p}from"./p-3fc199ca.js";import{S as m,a as l}from"./p-bacd31b3.js";import{A as d}from"./p-371fb604.js";import{g}from"./p-885c367f.js";import{m as b}from"./p-b157210b.js";import{V as u}from"./p-4325abee.js";import"./p-2d1a0235.js";import"./p-c2192697.js";import"./p-54677159.js";import"./p-296d4d5e.js";let j=class{constructor(t){s(this,t),this.showSearchbar=!1,this.onSearchSubmit=s=>{new e(this.history).showSearchPage(s)},this.onClickPlaylistBtn=()=>{new e(this.history).showPlaylistPage()}}componentWillLoad(){r.dispatch(a()),h.pipe(b((s=>s.search)),p(this,"disconnectedCallback")).subscribe((s=>{this.showSearchbar=s.showSearchBar,this.searchText=s.searchText,this.videos=s.searchResponse.results,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading}))}disconnectedCallback(){}get headerClass(){return this.showSearchbar?"search-active":""}render(){const s=this.showSearchbar;return t(i,null,t("header",{class:this.headerClass+" home"},!this.showSearchbar&&t("button",{class:"playlist-btn",onClick:this.onClickPlaylistBtn},t("x-icon",{icon:g})),!this.showSearchbar&&t("h1",null,d),t(l,{searchText:this.searchText,onCloseClick:()=>r.dispatch(n()),onSearchBtnClick:()=>{const s=this.el.querySelector(".search-input");r.dispatch(n()),setTimeout((()=>{s.focus()}),150)},onSearchSubmit:()=>{this.onSearchSubmit(this.searchText)},showSearchbar:this.showSearchbar,onSearchTextChange:s=>r.dispatch(c(s.target.value))})),!this.showSearchbar&&t("settings-btn",{history:this.history}),s&&t(m,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:s=>{this.onSearchSubmit(s)}}),t(u,{preloadStream:!0,videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>{new e(this.history).showVideoPage(s)}}))}get el(){return o(this)}};j.style="";export{j as trending_page}