import{r as s,h as t,H as i,g as o}from"./p-27ce4408.js";import{R as r}from"./p-1a687b83.js";import{f as e,s as a,d as h,g as p,S as n,b as c,t as m,c as j,k as l}from"./p-aa3fc316.js";import{A as f}from"./p-954d5885.js";import{g as d}from"./p-9a472600.js";import{c as g}from"./p-658a3b62.js";import{v as b}from"./p-647a1903.js";import{o as u}from"./p-a0dedc53.js";import{m as S}from"./p-e08808fe.js";import{t as C}from"./p-8e253a81.js";import{V as k}from"./p-4325abee.js";import"./p-2d1a0235.js";import"./p-40ec57f2.js";import"./p-b44dc71b.js";import"./p-bc5141d2.js";import"./p-c9444cc0.js";import"./p-6cf4a597.js";import"./p-2f85254e.js";import"./p-aeb91cdf.js";import"./p-ee839885.js";import"./p-4c181b5f.js";import"./p-1ef9e92e.js";let w=class{constructor(t){s(this,t),this.showSearchbar=!1,this.onClickPlaylistBtn=()=>{new r(this.history).showPlaylistPage()},this.searchTextChangeEvent=b((s=>s.target.value)),this.searchSubmitEvent=b((()=>this.searchText)),this.suggestionClickEvent=b()}componentWillLoad(){const s=g(this),t=e(u(1));s.justSubscribe(t),s.untilDestroyed(a.asObservable()).subscribe({next:s=>{this.showSearchbar=s.showSearchBar,this.searchText=s.searchText,this.videos=s.searchResponse.results,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading}});const i=S(this.suggestionClickEvent.$,this.searchSubmitEvent.$).pipe(C((s=>{j(s),new r(this.history).showSearchPage(s)}))),o=h(i),n=this.searchTextChangeEvent.$.pipe(C((s=>{l(s)})),p(i));s.justSubscribe(o,n)}get headerClass(){return this.showSearchbar?"search-active":""}render(){const s=this.showSearchbar;return t(i,null,t("header",{class:this.headerClass+" home"},!this.showSearchbar&&t("button",{class:"playlist-btn",onClick:this.onClickPlaylistBtn},t("x-icon",{icon:d})),!this.showSearchbar&&t("h1",null,f),t(c,{searchText:this.searchText,onCloseClick:()=>m(),onSearchBtnClick:()=>{const s=this.el.querySelector(".search-input");m(),setTimeout((()=>{s.focus()}),150)},onSearchSubmit:this.searchSubmitEvent.handler,showSearchbar:this.showSearchbar,onSearchTextChange:this.searchTextChangeEvent.handler})),!this.showSearchbar&&t("settings-btn",{history:this.history}),s&&t(n,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:this.suggestionClickEvent.handler}),t(k,{preloadStream:!0,videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>{new r(this.history).showVideoPage(s)}}))}get el(){return o(this)}};w.style="";export{w as trending_page}