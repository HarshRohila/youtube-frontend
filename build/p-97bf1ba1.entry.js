import{r as t,h as i,H as s}from"./p-27ce4408.js";import{a as o,f as n,b as a,m as e,k as r}from"./p-9a472600.js";import{d as c,f as l,a as p,b as m,s as d}from"./p-80e4e7a2.js";import{c as h}from"./p-84cca485.js";import{b}from"./p-e8d0ac2d.js";import{f as u}from"./p-675af075.js";import{b as f}from"./p-e202420a.js";import{o as g,c as k,i as j,m as x}from"./p-d991cb74.js";import{t as v}from"./p-e2d90f67.js";import{M as y}from"./p-515fbc07.js";import{A as C}from"./p-2d1a0235.js";import"./p-524a5bb9.js";import"./p-b44dc71b.js";import"./p-bc5141d2.js";import"./p-cff7c84c.js";import"./p-00460c93.js";import"./p-90d81ce8.js";import"./p-1b8850dc.js";function w(t,i=f,s){const o=v(t,i);return function(t,i){return g(((t,s)=>{const{leading:n=!0,trailing:a=!1}=null!=i?i:{};let e=!1,r=null,c=null,l=!1;const p=()=>{null==c||c.unsubscribe(),c=null,a&&(h(),l&&s.complete())},m=()=>{c=null,l&&s.complete()},d=()=>c=j(o).subscribe(k(s,p,m)),h=()=>{if(e){e=!1;const t=r;r=null,s.next(t),!l&&d()}};t.subscribe(k(s,(t=>{e=!0,r=t,(!c||c.closed)&&(n?h():d())}),(()=>{l=!0,(!(a&&e&&c)||c.closed)&&s.complete()})))}))}(0,s)}let L=class{constructor(i){t(this,i),this.commentsList=[],this.component=h(this),this.scrollEvent=b((t=>t.target))}componentWillLoad(){const{component:t}=this;t.untilDestroyed(c.asObservable()).subscribe((t=>{this.comments!==t.comments&&(this.comments=t.comments,this.commentsList=[...this.commentsList,...t.comments.comments]),this.commentsView=t.commentsView,this.areCommentsLoading=t.areCommentsLoading}))}componentDidLoad(){const t=this.scrollEvent.$.pipe(u((t=>{return i=t,Math.abs(i.scrollHeight-i.scrollTop-i.clientHeight)<1;var i})),w(200),x((()=>Object.assign(Object.assign({},this.commentsView),{nextpage:this.comments.nextpage}))));this.component.justSubscribe(t.pipe(l))}disconnectedCallback(){}render(){const t=this.commentsList;return i(s,null,i("div",{class:"comments-view"},i("icon-btn",{class:"close-btn",icon:o,onBtnClicked:this.closeCallback}),i("h3",{class:"heading"},"Comments"),i("ul",{onScroll:this.scrollEvent.handler,class:"list"},t.map((t=>i("li",null,i("a-comment",{comment:t,key:t.commentId}))))),this.areCommentsLoading&&i("x-icon",{icon:n,spin:!0})))}};L.style="@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}:host{display:block}.comments-view{position:relative;background-color:#8c5383;height:100%;border-top-left-radius:15px;border-top-right-radius:15px;display:flex;flex-direction:column}.comments-view .close-btn{position:absolute;right:0;top:0;padding:10px}.heading{padding:10px;margin:0}.list{margin:0;list-style-type:none;padding-right:10px;padding-left:10px;padding-bottom:10px;overflow-y:auto}.list li~li{margin-top:10px}";let S=0;const B="share-cb"+ ++S;let z=class{constructor(i){t(this,i),this.handleCopyLink=async t=>{var i;(i=t,navigator.clipboard.writeText(i)).then((()=>{p.update({copiedLink:t})}))},this.handleShare=t=>{navigator.share({url:t,title:this.video.title||"A YouTube Video"})}}componentWillLoad(){h(this).untilDestroyed(p.asObservable()).subscribe((t=>{this.copiedLink=t.copiedLink,this.shareForm=t.shareForm,this.currentTimeEnabled=t.currentTimeEnabled}))}disconnectedCallback(){}render(){let t=C.getCurrentSpaUrl();return this.currentTimeEnabled&&(t+="?t="+this.shareForm.currentTime),i(s,null,i(y,{onClose:()=>m(void 0)},i("form",{class:"share-form",onSubmit:t=>{t.preventDefault()}},i("input",{type:"checkbox",id:B,checked:this.currentTimeEnabled,onClick:()=>{d(!this.currentTimeEnabled)}}),i("label",{htmlFor:B},i("span",null,"Share with Current Time?")),i("p",null,t),i("div",{class:"share-actions"},i("icon-btn",{icon:this.copiedLink?a:e,label:this.copiedLink?"Copied!":"Copy Link",size:"small",onBtnClicked:()=>{this.handleCopyLink(t)}}),!!navigator.share&&i("icon-btn",{icon:r,label:"Share",size:"small",onBtnClicked:()=>{this.handleShare(t)}})))))}};z.style="@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}input[type=checkbox]{position:relative;top:2px}";export{L as comments_view,z as share_form}