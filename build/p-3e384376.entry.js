import{r as s,h as t,H as i}from"./p-27ce4408.js";import{s as o,d as r,g as a,a as p,S as e,b as c,c as h,k as m}from"./p-aa3fc316.js";import{R as n}from"./p-1a687b83.js";import{c as j}from"./p-658a3b62.js";import{v as f}from"./p-647a1903.js";import{a as d,m as l}from"./p-e08808fe.js";import{t as b}from"./p-8e253a81.js";import{f as g,p as u}from"./p-a0dedc53.js";import{o as k}from"./p-c9444cc0.js";import{V as S}from"./p-4325abee.js";import"./p-9a472600.js";import"./p-40ec57f2.js";import"./p-b44dc71b.js";import"./p-bc5141d2.js";import"./p-2f85254e.js";import"./p-954d5885.js";import"./p-aeb91cdf.js";import"./p-ee839885.js";import"./p-6cf4a597.js";import"./p-2d1a0235.js";import"./p-4c181b5f.js";import"./p-1ef9e92e.js";function w(...s){return d(1)(g(s,u(s)))}let C=class{constructor(t){s(this,t),this.searchText="",this.searchSubmitEvent=f((()=>this.searchText)),this.suggestionClickEvent=f(),this.handleBack=()=>{new n(this.history).showTrendingPage()},this.searchTextChangeEvent=f((s=>s.target.value))}componentWillLoad(){const s=this.history.location.query.q,t=j(this);t.untilDestroyed(o.asObservable()).subscribe((s=>{this.videos=s.searchResponse.results,this.suggestions=s.suggestions,this.suggestionsError=s.suggestionsError,this.suggestionsLoading=s.suggestionsLoading,this.searchText=s.searchText}));const i=l(this.searchSubmitEvent.$,this.suggestionClickEvent.$).pipe(b((s=>{window.scrollTo({top:0}),new n(this.history).showSearchPage(s,{replace:!0})}))),p=i.pipe(function(...s){const t=u(s);return k(((i,o)=>{(t?w(s,i,t):w(s,i)).subscribe(o)}))}(s),b((s=>{h(s)}))),e=r(p),c=this.searchTextChangeEvent.$.pipe(b((s=>{m(s)})),a(i));t.justSubscribe(e,c)}disconnectedCallback(){p("")}render(){const s=!!this.suggestions.length;return t(i,null,t("header",{class:"search-active"},t(c,{searchText:this.searchText,onCloseClick:()=>p(""),onSearchSubmit:this.searchSubmitEvent.handler,showSearchbar:!0,onSearchTextChange:this.searchTextChangeEvent.handler,onClickBack:this.handleBack})),s&&t(e,{suggestions:this.suggestions,error:this.suggestionsError,loading:this.suggestionsLoading,onClickSuggesion:this.suggestionClickEvent.handler}),this.videos.length&&t(S,{videos:this.videos,isShowingSuggestions:s,onClickVideo:s=>new n(this.history).showVideoPage(s)}))}};C.style=":host{display:block}";export{C as search_page}