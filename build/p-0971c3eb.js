import{A as s}from"./p-45b0fa56.js";class e{constructor(s){this.history=s}showVideoPage(e){this.history.push(s.getPath(`/videos/${e.videoId}`))}showSearchPage(e,{replace:a}={replace:!1}){const o=s.getPath(`/search?q=${e}`);a?this.history.replace(o):this.history.push(o)}showTrendingPage(){this.history.push(s.getPath("/"))}}export{e as R}