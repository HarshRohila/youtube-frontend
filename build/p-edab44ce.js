const r={getPath:r=>r,getCurrentSpaUrl(){var r=window.location;return r.protocol+"//"+r.hostname+(r.port?":"+r.port:"")+r.pathname.split("/").slice(0,2).join("/")+"/?/"+r.pathname.slice(1).split("/").slice(1).join("/").replace(/&/g,"~and~")+(r.search?"&"+r.search.slice(1).replace(/&/g,"~and~"):"")+r.hash}};export{r as A}