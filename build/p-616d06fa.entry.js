import{r as i,c as t,h as s,H as o,g as r}from"./p-27ce4408.js";import{Y as e}from"./p-d0239e1a.js";import{b as a,c as n}from"./p-13637994.js";import{c as d}from"./p-c1b151ee.js";import{S as h,v as c,t as p}from"./p-8cb43504.js";import{t as l}from"./p-fcbaad83.js";import{o as m,s as b}from"./p-e88f731b.js";import{m as v}from"./p-14a93dff.js";import{m as u}from"./p-701710ba.js";import{t as f}from"./p-ebb7d3fd.js";import"./p-b44dc71b.js";import"./p-bc5141d2.js";import"./p-6cf4a597.js";import"./p-4c181b5f.js";const g=Intl.NumberFormat("en",{notation:"compact"});let j=class{constructor(s){i(this,s),this.imageErrorFixed=t(this,"imageErrorFixed",7),this.preloadStream=!1,this.showVideoPreview=!1,this.handleImageLoad=()=>{this.preloadStream&&!this.stream&&this.getStream(this.video).pipe(l(1)).subscribe(this.setStream)},this.setStream=i=>{this.stream=i},this.getStream=i=>this.stream?m(this.stream):e.getApi().getStream(i.videoId),this.mouseLeaveEvent=h(),this.mouseEnterEvent=c((()=>this.video)),this.destroyEvent=h({once:!0}),this.handleThumbnailError=()=>{e.getApi().getStream(this.video.videoId).pipe(l(1)).subscribe(this.setStream)},this.handleImageErrorFixed=()=>{this.imageErrorFixed.emit(this.stream)}}get subDescription(){const{video:i}=this;return["",...i.views?[g.format(i.views)]:[],i.uploadedDate].join(" ‧ ")}get thumbnail(){var i;return(null===(i=this.stream)||void 0===i?void 0:i.thumbnail)||this.video.thumbnail}componentDidLoad(){const i=this.mouseLeaveEvent.$,t=this.mouseEnterEvent.$,s=d(this),o=t.pipe(b((t=>f(300).pipe(p(i),v((()=>t))))),b(this.getStream));s.subscribe(o,(i=>{this.setStream(i)}));const r=o.pipe(v((()=>!0))),e=u(i,this.destroyEvent.$).pipe(v((()=>!1)));s.subscribe(u(r,e),(i=>{this.showVideoPreview=i}))}get uploaderAvatar(){var i;return(null===(i=this.stream)||void 0===i?void 0:i.uploaderAvatar)||this.video.uploaderAvatar}render(){const{video:i,subDescription:t}=this;return s(o,null,s("div",{class:"card",onMouseLeave:this.mouseLeaveEvent.handler,onMouseEnter:this.mouseEnterEvent.handler},s("video-thumbnail",{onErrorFixed:this.handleImageErrorFixed,imageSrc:this.thumbnail,onErrored:this.handleThumbnailError}),s("div",{class:"video-preview"},this.stream&&this.showVideoPreview&&s("video-player",{sources:this.stream.sources,muted:!0})),s("div",{class:"video-desc"},s("img",{class:"uploader-avatar",onLoad:this.handleImageLoad,src:this.uploaderAvatar}),s("span",{class:"avatar-right"},s("h3",null,i.title),s("p",{class:"sub-desc"},s("span",null,i.uploaderName),!!i.uploaderVerified&&s("x-icon",{icon:a}),s("span",null,t))),this.deleteCallback&&s("icon-btn",{class:"delete-btn",icon:n,onClick:i=>{i.stopPropagation()},onBtnClicked:()=>{this.deleteCallback(i)}}))))}disconnectedCallback(){this.destroyEvent.handler()}get el(){return r(this)}};j.style='@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}:host{display:block}.delete-btn{--padding:0 10px}@keyframes spin{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}.card{overflow:hidden;position:relative}.card .video-preview{top:0;position:absolute;width:100%;aspect-ratio:16/9;background:white;visibility:hidden}.card .video-preview::before{content:"";display:block;width:40px;height:40px;border:4px solid #ccc;border-top-color:#333;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);animation:spin 1s linear infinite}.card:hover .video-preview{visibility:visible}.card:hover .thumbnail{visibility:hidden}';export{j as card_video}