import{c as t,b as o,e as r,m as s,o as n}from"./p-1707b666.js";import{b as a}from"./p-6cf4a597.js";function c(r,e,f=1/0){return a(e)?c(((t,n)=>s(((o,r)=>e(t,o,n,r)))(o(r(t,n)))),f):("number"==typeof e&&(f=e),n(((s,n)=>function(r,s,n,a){const c=[];let e=0,f=0,m=!1;const i=()=>{!m||c.length||e||s.complete()},p=t=>e<a?u(t):c.push(t),u=r=>{e++;let m=!1;o(n(r,f++)).subscribe(t(s,(t=>{s.next(t)}),(()=>{m=!0}),void 0,(()=>{if(m)try{for(e--;c.length&&e<a;){const t=c.shift();u(t)}i()}catch(t){s.error(t)}})))};return r.subscribe(t(s,p,(()=>{m=!0,i()}))),()=>{}}(s,n,r,f))))}export{c as m}