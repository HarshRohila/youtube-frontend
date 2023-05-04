import{h as s,r as i,H as e,g as t}from"./p-703a61bf.js";import{S as a,Y as n,t as o,m as r}from"./p-65ec2e8f.js";import{R as c}from"./p-12c01453.js";import{c as l,d,a as h,e as p,s as u,u as g,g as m,t as b,k as x}from"./p-8f8f5983.js";import"./p-35015f5b.js";const f=Intl.NumberFormat("en",{notation:"compact"});function v({video:i}){const e=[i.uploaderName,f.format(i.views),i.uploadedDate].join(" ‧ ");return s("div",{class:"card"},s("img",{class:"thumbnail",src:i.thumbnail}),s("div",{class:"video-desc"},s("img",{class:"uploader-avatar",src:i.uploaderAvatar}),s("span",null,s("h3",null,i.title),s("p",null,e))))}function k({onSearchSubmit:i,onSearchTextChange:e,onSearchBtnClick:t,searchText:a,showSearchbar:n,onCloseClick:o}){return s("div",{class:"search-bar"},s("form",{class:"search-form "+(n?"":"hide"),onSubmit:s=>{s.preventDefault(),i(s)}},s("input",{type:"text",class:"search-input",value:a,placeholder:"Search",onInput:e})),n&&s("button",{class:"close",onClick:o},s("x-icon",{icon:d})),!n&&s("button",{class:"search",onClick:t},s("x-icon",{icon:l})))}function w({suggestions:i,onClickSuggesion:e}){return s("ul",{class:"suggestions"},i.map((i=>s("li",{onClick:()=>e(i)},i))))}let C=class{constructor(s){i(this,s),this.showSearchbar=!1,this.disconnected$=new a,this.createVideoClickHandler=s=>()=>{new c(this.history).showVideoPage(s)}}componentWillLoad(){n.getApi().getTrendingVideos().pipe(o(this.disconnected$)).subscribe((s=>{h.dispatch(p(s))})),u.pipe(r((s=>s.search)),g(this,"disconnectedCallback")).subscribe((s=>{this.showSearchbar=s.showSearchBar,this.suggestions=s.suggestions,this.searchText=s.searchText,this.videos=s.searchResults}))}disconnectedCallback(){this.disconnected$.next(),this.disconnected$.complete()}render(){const i=this.showSearchbar&&!!this.suggestions.length;return s(e,null,s("header",{class:this.showSearchbar?"search-active":""},!this.showSearchbar&&s("h1",null,"Another YouTube Front-end"),s(k,{searchText:this.searchText,onCloseClick:()=>h.dispatch(b()),onSearchBtnClick:()=>{const s=this.el.querySelector(".search-input");h.dispatch(b()),setTimeout((()=>{s.focus()}))},onSearchSubmit:()=>{h.dispatch(m())},showSearchbar:this.showSearchbar,onSearchTextChange:s=>h.dispatch(x(s.target.value))})),i&&s(w,{suggestions:this.suggestions,onClickSuggesion:s=>{h.dispatch(m(s))}}),s("ul",{class:"trending "+(i?"suggestions-active":"")},this.videos&&this.videos.map((i=>s("li",{onClick:this.createVideoClickHandler(i)},s(v,{video:i}))))))}get el(){return t(this)}};C.style="@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}ul.trending{list-style-type:none;margin:0;padding:0}.card{position:relative;margin-bottom:50px}.card .thumbnail{border-radius:15px;width:100%;aspect-ratio:16/9;background-image:linear-gradient(-45deg, #020024, white, #020024);background-size:400% 400%;animation:gradient 1.5s ease-in-out infinite}.card .video-desc{box-shadow:0px 0px 21px 12px rgb(2, 0, 36);width:100%;position:absolute;background:#020024;bottom:-37px;display:flex;height:50px;align-items:center}.card .video-desc .uploader-avatar{padding:0 10px;border-radius:50%;height:35px;width:35px}.card .video-desc span{width:100px;flex:1;display:block}.card .video-desc h3{margin:0;font-size:1rem;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card .video-desc p{margin:0;font-size:0.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}ul.trending.suggestions-active{filter:blur(45px)}";export{C as trending_page}