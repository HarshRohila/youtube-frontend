import{E as t,o,c as r}from"./p-3b7085e5.js";function s(s){return s<=0?()=>t:o(((t,o)=>{let a=0;t.subscribe(r(o,(t=>{++a<=s&&(o.next(t),s<=a&&o.complete())})))}))}export{s as t}