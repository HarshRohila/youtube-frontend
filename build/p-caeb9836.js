import{O as t}from"./p-6cf4a597.js";import{i as r,a as e}from"./p-ee839885.js";import{i as o}from"./p-a0dedc53.js";function i(i=0,s,a=e){let n=-1;return null!=s&&(o(s)?a=s:n=s),new t((t=>{let e=r(i)?+i-a.now():i;e<0&&(e=0);let o=0;return a.schedule((function(){t.closed||(t.next(o++),0<=n?this.schedule(void 0,n):t.complete())}),e)}))}export{i as t}