import{h as s,r as t,F as i,H as e}from"./p-bb4ef53f.js";import{S as n,Y as o,t as a}from"./p-498ca91a.js";import{a as r,b as l,n as h,o as c}from"./p-0d3348b9.js";import{A as d}from"./p-293ffef4.js";function p(){return s("header",null,s("h1",null,d))}let u=class{constructor(s){t(this,s),this.disconnected$=new n,this.share=()=>{if(navigator.share){const s=document.location.href;navigator.share({url:s})}else r.dispatch(l({message:"Sharing not supported in your Device for now"}))}}componentWillLoad(){const s=this.match.params.videoId;r.dispatch(h(!0)),o.getApi().getStream(s).pipe(a(this.disconnected$)).subscribe({next:s=>{this.stream=s,r.dispatch(h(!1))},error:()=>{this.error={message:"Failed to load video. Please try refreshing"},r.dispatch(h(!1))}})}get url(){return this.stream.sources[0].url}disconnectedCallback(){this.disconnected$.next(),this.disconnected$.complete()}render(){return s(e,null,s("div",{class:"video-page"},s(p,null),this.stream&&s(i,null,s("video-player",{src:this.url}),s("h3",null,this.stream.title),s("div",{class:"actions"},s("icon-btn",{icon:c,onBtnClicked:this.share,label:"Share"}))),this.error&&s("h3",null,this.error.message)))}};u.style="@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.video-page{height:100vh}h3{margin:16px}Header{width:100%;display:flex;align-items:center;justify-content:center;position:static}";export{u as video_page}