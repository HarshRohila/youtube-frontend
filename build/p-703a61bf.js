const e={apiEnv:"prod"};let t,n,l,o=!1,s=!1,i=!1,r=!1;const c="undefined"!=typeof window?window:{},f=c.document||{head:{}},a={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),$={},p="http://www.w3.org/1999/xlink",h=new WeakMap,y=e=>"sc-"+e.o,m={},b=e=>"object"==(e=typeof e)||"function"===e,w=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1,c=[];const f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!b(l))&&(l+=""),i&&r?c[c.length-1].i+=l:c.push(i?k(null,l):l),r=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,S);const a=k(e,null);return a.u=t,c.length>0&&(a.$=c),a.p=o,a.h=s,a},k=(e,t)=>({t:0,m:e,i:t,k:null,$:null,u:null,p:null,h:null}),v={},S={forEach:(e,t)=>e.map(g).forEach(t),map:(e,t)=>e.map(g).map(t).map(j)},g=e=>({vattrs:e.u,vchildren:e.$,vkey:e.p,vname:e.h,vtag:e.m,vtext:e.i}),j=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),w(e.vtag,t,...e.vchildren||[])}const t=k(e.vtag,e.vtext);return t.u=e.vattrs,t.$=e.vchildren,t.p=e.vkey,t.h=e.vname,t},C=(e,t,n,l,o,s)=>{if(n!==l){let i=re(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=O(n),s=O(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=b(l);if((i||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(p,t):e.removeAttribute(t)):(!i||4&s||o)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(p,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):re(c,r)?r.slice(2):r[2]+t.slice(3),n&&a.rel(e,t,n,!1),l&&a.ael(e,t,l,!1)}},M=/\s/,O=e=>e?e.split(M):[],x=(e,t,n,l)=>{const o=11===t.k.nodeType&&t.k.host?t.k.host:t.k,s=e&&e.u||m,i=t.u||m;for(l in s)l in i||C(o,l,s[l],void 0,n,t.t);for(l in i)C(o,l,s[l],i[l],n,t.t)},E=(e,s,r,c)=>{let a,u,d,$=s.$[r],p=0;if(o||(i=!0,"slot"===$.m&&(t&&c.classList.add(t+"-s"),$.t|=$.$?2:1)),null!==$.i)a=$.k=f.createTextNode($.i);else if(1&$.t)a=$.k=f.createTextNode("");else if(a=$.k=f.createElement(2&$.t?"slot-fb":$.m),x(null,$,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),$.$)for(p=0;p<$.$.length;++p)u=E(e,$,p,a),u&&a.appendChild(u);return a["s-hn"]=l,3&$.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=$.h||"",d=e&&e.$&&e.$[r],d&&d.m===$.m&&e.k&&P(e.k,!1)),a},P=(e,t)=>{a.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const o=n[e];o["s-hn"]!==l&&o["s-ol"]&&(D(o).insertBefore(o,T(o)),o["s-ol"].remove(),o["s-ol"]=void 0,i=!0),t&&P(o,t)}a.t&=-2},R=(e,t,n,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=E(null,n,s,e),r&&(o[s].k=r,c.insertBefore(r,T(t))))},U=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.k,N(l),s=!0,o["s-ol"]?o["s-ol"].remove():P(o,!0),o.remove())},L=(e,t)=>e.m===t.m&&("slot"===e.m?e.h===t.h:e.p===t.p),T=e=>e&&e["s-ol"]||e,D=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,W=(e,t)=>{const n=t.k=e.k,l=e.$,o=t.$,s=t.i;let i;null===s?("slot"===t.m||x(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],d=t[a],$=l.length-1,p=l[0],h=l[$];for(;i<=a&&r<=$;)if(null==u)u=t[++i];else if(null==d)d=t[--a];else if(null==p)p=l[++r];else if(null==h)h=l[--$];else if(L(u,p))W(u,p),u=t[++i],p=l[++r];else if(L(d,h))W(d,h),d=t[--a],h=l[--$];else if(L(u,h))"slot"!==u.m&&"slot"!==h.m||P(u.k.parentNode,!1),W(u,h),e.insertBefore(u.k,d.k.nextSibling),u=t[++i],h=l[--$];else if(L(d,p))"slot"!==u.m&&"slot"!==h.m||P(d.k.parentNode,!1),W(d,p),e.insertBefore(d.k,u.k),d=t[--a],p=l[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].p&&t[f].p===p.p){c=f;break}c>=0?(s=t[c],s.m!==p.m?o=E(t&&t[r],n,c,e):(W(s,p),t[c]=void 0,o=s.k),p=l[++r]):(o=E(t&&t[r],n,r,e),p=l[++r]),o&&D(u.k).insertBefore(o,T(u.k))}i>a?R(e,null==l[$+1]?null:l[$+1].k,n,l,r,$):r>$&&U(t,i,a)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),R(n,null,t,o,0,o.length-1)):null!==l&&U(l,0,l.length-1)):(i=n["s-cr"])?i.parentNode.textContent=s:e.i!==s&&(n.data=s)},q=e=>{let t,n,l,o,s,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(i=r[o].nodeType,r[o]["s-hn"]!==t["s-hn"]||""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}q(t)}},A=[],F=e=>{let t,n,l,o,i,r,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,o=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(H(n,o)?(i=A.find((e=>e.v===n)),s=!0,n["s-sn"]=n["s-sn"]||o,i?i.S=t:A.push({S:t,v:n}),n["s-sr"]&&A.map((e=>{H(e.v,n["s-sn"])&&(i=A.find((e=>e.v===n)),i&&!e.S&&(e.S=i.S))}))):A.some((e=>e.v===n))||A.push({v:n}));1===t.nodeType&&F(t)}},H=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,N=e=>{e.u&&e.u.ref&&e.u.ref(null),e.$&&e.$.map(N)},V=e=>oe(e).g,_=(e,t)=>{t&&!e.j&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.j=t)))},z=(e,t)=>{if(e.t|=16,!(4&e.t))return _(e,e.C),we((()=>B(e,t)));e.t|=512},B=(e,t)=>{const n=e.M;let l;return t&&(l=Q(n,"componentWillLoad")),X(l,(()=>G(e,n,t)))},G=async(e,t,n)=>{const l=e.g,o=l["s-rc"];n&&(e=>{const t=e.O,n=e.g,l=t.t,o=((e,t)=>{let n=y(t),l=ue.get(n);if(e=11===e.nodeType?e:f,l)if("string"==typeof l){let t,o=h.get(e=e.head||e);o||h.set(e,o=new Set),o.has(n)||(t=f.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);I(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>J(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},I=(e,r)=>{try{r=r.render&&r.render(),e.t&=-17,e.t|=2,((e,r)=>{const c=e.g,u=e.O,d=e.P||k(null,null),$=(e=>e&&e.m===v)(r)?r:w(null,null,r);if(l=c.tagName,u.R&&($.u=$.u||{},u.R.map((([e,t])=>$.u[t]=c[e]))),$.m=null,$.t|=4,e.P=$,$.k=d.k=c.shadowRoot||c,t=c["s-sc"],n=c["s-cr"],o=0!=(1&u.t),s=!1,W(d,$),a.t|=1,i){let e,t,n,l,o,s;F($.k);let i=0;for(;i<A.length;i++)e=A[i],t=e.v,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<A.length;i++)if(e=A[i],t=e.v,e.S){for(l=e.S.parentNode,o=e.S.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&q($.k),a.t&=-2,A.length=0})(e,r)}catch(t){ce(t,e.g)}return null},J=e=>{const t=e.g,n=e.M,l=e.C;64&e.t?Q(n,"componentDidUpdate"):(e.t|=64,Y(t),Q(n,"componentDidLoad"),e.U(t),l||K()),e.j&&(e.j(),e.j=void 0),512&e.t&&me((()=>z(e,!1))),e.t&=-517},K=()=>{Y(f.documentElement),me((()=>(e=>{const t=a.ce("appload",{detail:{namespace:"app"}});return e.dispatchEvent(t),t})(c)))},Q=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){ce(e)}},X=(e,t)=>e&&e.then?e.then(t):t(),Y=e=>e.classList.add("hydrated"),Z=(e,t,n)=>{if(t.L){e.watchers&&(t.T=e.watchers);const l=Object.entries(t.L),o=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>oe(this).D.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=oe(e),s=o.g,i=o.D.get(t),r=o.t,c=o.M;if(n=((e,t)=>null==e||b(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.L[t][0]),!(8&r&&void 0!==i||n===i)&&(o.D.set(t,n),c)){if(l.T&&128&r){const e=l.T[t];e&&e.map((e=>{try{c[e](n,i,t)}catch(e){ce(e,s)}}))}2==(18&r)&&z(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){a.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.R.push([e,o]),o}))}}return e},ee=e=>{Q(e,"connectedCallback")},te=(e,t={})=>{const n=[],l=t.exclude||[],o=c.customElements,s=f.head,i=s.querySelector("meta[charset]"),r=f.createElement("style"),u=[];let $,p=!0;Object.assign(a,t),a.l=new URL(t.resourcesUrl||"./",f.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],o:t[1],L:t[2],W:t[3]};s.L=t[2],s.R=[],s.T={};const i=s.o,r=class extends HTMLElement{constructor(e){super(e),ie(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){$&&(clearTimeout($),$=null),p?u.push(this):a.jmp((()=>(e=>{if(0==(1&a.t)){const t=oe(e),n=t.O,l=()=>{};if(1&t.t)ee(t.M);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){_(t,t.C=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=ae(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.T=o.watchers,Z(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){ce(e)}t.t&=-9,t.t|=128,e(),ee(t.M)}if(o.style){let e=o.style;const t=y(n);if(!ue.has(t)){const l=()=>{};((e,t,n)=>{let l=ue.get(e);d&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ue.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.C,i=()=>z(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){a.jmp((()=>(()=>{if(0==(1&a.t)){const e=oe(this).M;Q(e,"disconnectedCallback"),Q(e,"componentDidUnload")}})()))}componentOnReady(){return oe(this).q}};s.A=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,Z(r,s,1)))}))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,i?i.nextSibling:s.firstChild),p=!1,u.length?u.map((e=>e.connectedCallback())):a.jmp((()=>$=setTimeout(K,30)))},ne=(e,t)=>t in $?$[t]:"window"===t?c:"document"===t?f:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",a.l);return e.origin!==c.location.origin?e.href:e.pathname})():"queue"===t?{write:we,read:be,tick:{then:e=>me(e)}}:void 0)),le=new WeakMap,oe=e=>le.get(e),se=(e,t)=>le.set(t.M=e,t),ie=(e,t)=>{const n={t:0,g:e,O:t,D:new Map};return n.q=new Promise((e=>n.U=e)),e["s-p"]=[],e["s-rc"]=[],le.set(e,n)},re=(e,t)=>t in e,ce=(e,t)=>(0,console.error)(e,t),fe=new Map,ae=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=fe.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(fe.set(n,e),e[t])),ce)},ue=new Map,de=[],$e=[],pe=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&a.t?me(ye):a.raf(ye))},he=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ce(e)}e.length=0},ye=()=>{he(de),he($e),(r=de.length>0)&&a.raf(ye)},me=e=>u().then(e),be=pe(de,!1),we=pe($e,!0);export{e as E,v as H,ne as a,te as b,V as g,w as h,u as p,se as r}