import{O as t}from"./p-6cf4a597.js";import{i as r,a as o}from"./p-ee839885.js";import{i as e}from"./p-1707b666.js";function i(i=0,s,n=o){let a=-1;return null!=s&&(e(s)?n=s:a=s),new t((t=>{let o=r(i)?+i-n.now():i;o<0&&(o=0);let e=0;return n.schedule((function(){t.closed||(t.next(e++),0<=a?this.schedule(void 0,a):t.complete())}),o)}))}export{i as t}