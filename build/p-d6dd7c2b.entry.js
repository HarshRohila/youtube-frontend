import{r as i,h as s,H as t}from"./p-27ce4408.js";import{d as o,a,l as e}from"./p-165e63ee.js";import{b as p}from"./p-13637994.js";import{V as r}from"./p-c358820d.js";import{R as l}from"./p-1a687b83.js";import{D as d}from"./p-954d5885.js";import{M as n}from"./p-0b475387.js";import{t as h}from"./p-fcbaad83.js";import"./p-54cb02ed.js";import"./p-14a93dff.js";import"./p-6cf4a597.js";import"./p-e88f731b.js";import"./p-2d1a0235.js";let m=class{constructor(s){i(this,s),this.handleDelete=i=>{this.toBeDeletedPlaylistItem=i},this.deletePlaylistItem=i=>{o(i).pipe(h(1)).subscribe(),this.playlistItems=this.playlistItems.filter((s=>s.videoId!==i.videoId))},this.handleImageErrorFixed=(i,s)=>{a({thumbnail:s.thumbnail,videoId:i.videoId,title:s.title,uploaderAvatar:s.uploaderAvatar,uploaderName:s.uploader,uploadedDate:s.uploadDate}).pipe(h(1)).subscribe()}}componentWillLoad(){e().pipe(h(1)).subscribe((i=>{this.playlistItems=i}))}render(){var i;return s(t,null,s("div",{class:"playlist-page"},this.toBeDeletedPlaylistItem&&s(n,{onClose:()=>{this.toBeDeletedPlaylistItem=void 0}},s("span",null,"Are you sure you want to Delete?"),s("icon-btn",{icon:p,label:"Yes",onBtnClicked:()=>{this.deletePlaylistItem(this.toBeDeletedPlaylistItem),this.toBeDeletedPlaylistItem=void 0}})),s("page-header",{history:this.history}),s("h3",{class:"playlist-name"},d.name),this.playlistItems&&s(r,{videos:this.playlistItems,isShowingSuggestions:!1,onClickVideo:i=>{new l(this.history).showVideoPage(i)},onDeleteVideo:this.handleDelete,imageErrorFixed:this.handleImageErrorFixed}),!(null===(i=this.playlistItems)||void 0===i?void 0:i.length)&&s("h5",{class:"empty-msg"},"Nothing here. ",s("br",null),' To add videos in Watch later click "Add to Playlist" while watching a video.')))}};m.style="@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}:host{display:block}.playlist-name{margin:0;padding:10px;padding-top:0}.playlist-page{width:100%;height:100vh;display:flex;flex-direction:column;overflow-y:auto}.empty-msg{margin-top:0;padding:0 10px}";export{m as a_playlist}