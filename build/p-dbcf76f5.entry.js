import{r as s,h as t}from"./p-958591d1.js";import{Y as o,d as i,s as r}from"./p-27f6585c.js";import{R as a}from"./p-a215f906.js";import{o as n,c as e,n as p,b as l,S as h,p as d,t as c,m as u}from"./p-c0874b44.js";import"./p-2d1a0235.js";let m=class{constructor(t){s(this,t),this.searchText$=new h,this.disconnected$=new h,this.searchSubmit$=new h,this.suggestions=[],this.searchResults=[],this.searchText="",this.showSuggestions=!1,this.createVideoClickHandler=s=>()=>{new a(this.history).showVideoPage(s)}}componentWillLoad(){const s=o.getApi();this.searchText$.pipe(d((s=>!!s)),function(s,t,o){const i=l(s)?{next:s,error:t,complete:o}:s;return i?n(((s,t)=>{var o;null===(o=i.subscribe)||void 0===o||o.call(i);let r=!0;s.subscribe(e(t,(s=>{var o;null===(o=i.next)||void 0===o||o.call(i,s),t.next(s)}),(()=>{var s;r=!1,null===(s=i.complete)||void 0===s||s.call(i),t.complete()}),(s=>{var o;r=!1,null===(o=i.error)||void 0===o||o.call(i,s),t.error(s)}),(()=>{var s,t;r&&(null===(s=i.unsubscribe)||void 0===s||s.call(i)),null===(t=i.finalize)||void 0===t||t.call(i)})))})):p}((s=>{this.searchText=s})),i(300),r(s.getSuggestions),c(this.disconnected$)).subscribe((s=>{this.suggestions=s,this.showSuggestions=!0})),this.searchSubmit$.pipe(u((()=>this.searchText)),r(s.getSearchResults),c(this.disconnected$)).subscribe((s=>{this.searchResults=s,this.showSuggestions=!1}))}disconnectedCallback(){this.disconnected$.next(),this.disconnected$.complete()}render(){return t("div",{class:"app-home"},t("h1",null,"Youtube Search Results"),t("ul",null,this.searchResults.map((s=>t("li",{onClick:this.createVideoClickHandler(s)},t("img",{src:s.thumbnail}))))))}};m.style="@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.app-home{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}.search{position:relative}";export{m as app_home}