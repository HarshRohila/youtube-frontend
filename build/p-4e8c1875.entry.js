import{r as i,h as s,H as t,g as o}from"./p-27ce4408.js";import{Y as e}from"./p-d0239e1a.js";import{b as r,c as a}from"./p-13637994.js";import{c as n}from"./p-c1b151ee.js";import{S as d,v as c,t as p}from"./p-8cb43504.js";import{t as h}from"./p-fcbaad83.js";import{o as l,s as m}from"./p-e88f731b.js";import{m as b}from"./p-14a93dff.js";import{m as v}from"./p-701710ba.js";import{t as u}from"./p-ebb7d3fd.js";import"./p-b44dc71b.js";import"./p-bc5141d2.js";import"./p-6cf4a597.js";import"./p-4c181b5f.js";const f=Intl.NumberFormat("en",{notation:"compact"});let g=class{constructor(s){i(this,s),this.preloadStream=!1,this.showVideoPreview=!1,this.handleImageLoad=()=>{this.preloadStream&&!this.stream&&this.getStream(this.video).pipe(h(1)).subscribe(this.setStream)},this.setStream=i=>{this.stream=i},this.getStream=i=>this.stream?l(this.stream):e.getApi().getStream(i.videoId),this.mouseLeaveEvent=d(),this.mouseEnterEvent=c((()=>this.video)),this.destroyEvent=d({once:!0}),this.handleThumbnailError=()=>{e.getApi().getStream(this.video.videoId).pipe(h(1)).subscribe(this.setStream)}}get subDescription(){const{video:i}=this;return["",...i.views?[f.format(i.views)]:[],i.uploadedDate].join(" ‧ ")}get thumbnail(){var i;return(null===(i=this.stream)||void 0===i?void 0:i.thumbnail)||this.video.thumbnail}componentDidLoad(){const i=this.mouseLeaveEvent.$,s=this.mouseEnterEvent.$,t=n(this),o=s.pipe(m((s=>u(300).pipe(p(i),b((()=>s))))),m(this.getStream));t.subscribe(o,(i=>{this.setStream(i)}));const e=o.pipe(b((()=>!0))),r=v(i,this.destroyEvent.$).pipe(b((()=>!1)));t.subscribe(v(e,r),(i=>{this.showVideoPreview=i}))}render(){const{video:i,subDescription:o}=this;return s(t,null,s("div",{class:"card",onMouseLeave:this.mouseLeaveEvent.handler,onMouseEnter:this.mouseEnterEvent.handler},s("video-thumbnail",{imageSrc:this.thumbnail,onErrored:this.handleThumbnailError}),s("div",{class:"video-preview"},this.stream&&this.showVideoPreview&&s("video-player",{sources:this.stream.sources,muted:!0})),s("div",{class:"video-desc"},s("img",{class:"uploader-avatar",onLoad:this.handleImageLoad,src:i.uploaderAvatar}),s("span",{class:"avatar-right"},s("h3",null,i.title),s("p",{class:"sub-desc"},s("span",null,i.uploaderName),!!i.uploaderVerified&&s("x-icon",{icon:r}),s("span",null,o))),this.deleteCallback&&s("icon-btn",{class:"delete-btn",icon:a,onClick:i=>{i.stopPropagation()},onBtnClicked:()=>{this.deleteCallback(i)}}))))}disconnectedCallback(){this.destroyEvent.handler()}get el(){return o(this)}};g.style='@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}:host{display:block}.delete-btn{--padding:0 10px}@keyframes spin{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}.card{overflow:hidden;position:relative}.card .video-preview{top:0;position:absolute;width:100%;aspect-ratio:16/9;background:white;visibility:hidden}.card .video-preview::before{content:"";display:block;width:40px;height:40px;border:4px solid #ccc;border-top-color:#333;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);animation:spin 1s linear infinite}.card:hover .video-preview{visibility:visible}.card:hover .thumbnail{visibility:hidden}';export{g as card_video}