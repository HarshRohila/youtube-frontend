import{h as e,r,H as a}from"./p-27ce4408.js";import{A as o}from"./p-2326336d.js";import{R as i}from"./p-6b26b51f.js";import"./p-2d1a0235.js";function t({onHeaderClick:r,className:a}){return a||(a=""),e("header",{class:a},e("h1",{onClick:r},o))}let s=class{constructor(e){r(this,e),this.handleHeaderClick=()=>{new i(this.history).showTrendingPage()}}render(){return e(a,null,e(t,{className:"page-header",onHeaderClick:this.handleHeaderClick}))}};s.style='@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}:host{display:block}header.page-header{height:56px;color:white;z-index:2;box-shadow:0px 1px 12px 5px rgb(2, 0, 36);background:rgb(2, 0, 36);background:linear-gradient(171deg, rgb(2, 0, 36) 15%, rgba(255, 255, 255, 0) 100%);width:100%;display:flex;align-items:center;justify-content:center;position:static;box-shadow:none}header.page-header h1{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500;color:#fff;padding:0 12px;font-family:"Rancho";font-size:2rem;margin:0}header.page-header h1{height:100%;display:grid;place-items:center;cursor:pointer}';export{s as page_header}