import{r as t,h as o,H as e}from"./p-958591d1.js";import{A as r}from"./p-2d1a0235.js";let s=class{constructor(o){t(this,o)}componentWillLoad(){alert(location.hash);const t=location.hash.split("?")[1],o=new URLSearchParams(t).get("link")||"";alert(o);const e=function(t){const o=t.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|shorts\/)?([a-zA-Z0-9_-]{11})/);return o?o[1]:null}(o);this.redirect(e)}redirect(t){let o="/";t&&(o=`/videos/${t}`),this.history.push(r.getPath(o))}render(){return o(e,null,o("slot",null))}};export{s as shared_content_receiver}