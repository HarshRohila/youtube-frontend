import{A as s}from"./p-c043c005.js";class e{constructor(s){this.history=s}showVideoPage(e){this.history.push(s.getPath(`/videos/${e.videoId}`))}showSearchPage(e,{replace:o}={replace:!1}){const a=s.getPath(`/search?q=${e}`);o?this.history.replace(a):this.history.push(a)}showTrendingPage(){this.history.push(s.getPath("/"))}}export{e as R}