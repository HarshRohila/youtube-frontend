import{r as i,h as s,H as o}from"./p-27ce4408.js";import{d as t,l as a}from"./p-28a32af5.js";import{b as e}from"./p-885c367f.js";import{V as p}from"./p-4325abee.js";import{R as l}from"./p-1a687b83.js";import{D as r}from"./p-371fb604.js";import{M as n}from"./p-32ff31d4.js";import{t as d}from"./p-06712466.js";import"./p-2f53529c.js";import"./p-8f183a2a.js";import"./p-fa40f061.js";import"./p-2d1a0235.js";let h=class{constructor(s){i(this,s),this.handleDelete=i=>{this.toBeDeletedPlaylistItem=i},this.deletePlaylistItem=i=>{t(i).pipe(d(1)).subscribe(),this.playlistItems=this.playlistItems.filter((s=>s.videoId!==i.videoId))}}componentWillLoad(){a().pipe(d(1)).subscribe((i=>{this.playlistItems=i}))}render(){var i;return s(o,null,s("div",{class:"playlist-page"},this.toBeDeletedPlaylistItem&&s(n,{onClose:()=>{this.toBeDeletedPlaylistItem=void 0}},s("span",null,"Are you sure you want to Delete?"),s("icon-btn",{icon:e,label:"Yes",onBtnClicked:()=>{this.deletePlaylistItem(this.toBeDeletedPlaylistItem),this.toBeDeletedPlaylistItem=void 0}})),s("page-header",{history:this.history}),s("h3",{class:"playlist-name"},r.name),this.playlistItems&&s(p,{videos:this.playlistItems,isShowingSuggestions:!1,onClickVideo:i=>{new l(this.history).showVideoPage(i)},onDeleteVideo:this.handleDelete}),!(null===(i=this.playlistItems)||void 0===i?void 0:i.length)&&s("h5",{class:"empty-msg"},"Nothing here. ",s("br",null),' To add videos in Watch later click "Add to Playlist" while watching a video.')))}};h.style="@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}:host{display:block}.playlist-name{margin:0;padding:10px;padding-top:0}.playlist-page{width:100%;height:100vh;display:flex;flex-direction:column;overflow-y:auto}.empty-msg{margin-top:0;padding:0 10px}";export{h as a_playlist}