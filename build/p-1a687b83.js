import{A as s}from"./p-2d1a0235.js";class t{constructor(s){this.history=s}showVideoPage(t){this.history.push(s.getPath(`/videos/${t.videoId}`))}showSearchPage(t,{replace:e}={replace:!1}){const a=s.getPath(`/search?q=${t}`);e?this.history.replace(a):this.history.push(a)}showTrendingPage(){this.history.push(s.getPath("/"))}showPlaylistPage(){this.history.push(s.getPath("/playlists/1"))}showSettingsPage(){this.history.push(s.getPath("/settings"))}}export{t as R}