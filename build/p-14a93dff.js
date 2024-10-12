import{b as n,d as t,o as r,O as e,r as o}from"./p-6cf4a597.js";function i(t){return r=>{if(function(t){return n(null==t?void 0:t.lift)}(r))return r.lift((function(n){try{return t(n,this)}catch(n){this.error(n)}}));throw new TypeError("Unable to lift unknown Observable type")}}function u(n,t,r,e,o){return new f(n,t,r,e,o)}class f extends t{constructor(n,t,r,e,o,i){super(n),this.onFinalize=o,this.shouldUnsubscribe=i,this._next=t?function(r){try{t(r)}catch(t){n.error(t)}}:super._next,this._error=e?function(t){try{e(t)}catch(t){n.error(t)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(t){n.error(t)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:t}=this;super.unsubscribe(),!t&&(null===(n=this.onFinalize)||void 0===n||n.call(this))}}}function c(n){return this instanceof c?(this.v=n,this):new c(n)}function s(n,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=r.apply(n,t||[]),i=[];return e={},u("next"),u("throw"),u("return"),e[Symbol.asyncIterator]=function(){return this},e;function u(n){o[n]&&(e[n]=function(t){return new Promise((function(r,e){i.push([n,t,r,e])>1||f(n,t)}))})}function f(n,t){try{(r=o[n](t)).value instanceof c?Promise.resolve(r.value.v).then(s,a):l(i[0][2],r)}catch(n){l(i[0][3],n)}var r}function s(n){f("next",n)}function a(n){f("throw",n)}function l(n,t){n(t),i.shift(),i.length&&f(i[0][0],i[0][1])}}function a(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=n[Symbol.asyncIterator];return r?r.call(n):(n=function(n){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&n[t],e=0;if(r)return r.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(n),t={},e("next"),e("throw"),e("return"),t[Symbol.asyncIterator]=function(){return this},t);function e(r){t[r]=n[r]&&function(t){return new Promise((function(e,o){!function(n,t,r,e){Promise.resolve(e).then((function(t){n({value:t,done:r})}),t)}(e,o,(t=n[r](t)).done,t.value)}))}}}const l=n=>n&&"number"==typeof n.length&&"function"!=typeof n;function y(t){return n(null==t?void 0:t.then)}function h(t){return n(t[r])}function d(t){return Symbol.asyncIterator&&n(null==t?void 0:t[Symbol.asyncIterator])}function b(n){return new TypeError(`You provided ${null!==n&&"object"==typeof n?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const m="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function w(t){return n(null==t?void 0:t[m])}function v(n){return s(this,arguments,(function*(){const t=n.getReader();try{for(;;){const{value:n,done:r}=yield c(t.read());if(r)return yield c(void 0);yield yield c(n)}}finally{t.releaseLock()}}))}function p(t){return n(null==t?void 0:t.getReader)}function S(t){if(t instanceof e)return t;if(null!=t){if(h(t))return c=t,new e((t=>{const e=c[r]();if(n(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(l(t))return f=t,new e((n=>{for(let t=0;t<f.length&&!n.closed;t++)n.next(f[t]);n.complete()}));if(y(t))return u=t,new e((n=>{u.then((t=>{n.closed||(n.next(t),n.complete())}),(t=>n.error(t))).then(null,o)}));if(d(t))return x(t);if(w(t))return i=t,new e((n=>{for(const t of i)if(n.next(t),n.closed)return;n.complete()}));if(p(t))return x(v(t))}var i,u,f,c;throw b(t)}function x(n){return new e((t=>{(function(n,t){var r,e,o,i,u,f,c,s;return u=this,f=void 0,s=function*(){try{for(r=a(n);!(e=yield r.next()).done;)if(t.next(e.value),t.closed)return}catch(n){o={error:n}}finally{try{e&&!e.done&&(i=r.return)&&(yield i.call(r))}finally{if(o)throw o.error}}t.complete()},new((c=void 0)||(c=Promise))((function(n,t){function r(n){try{o(s.next(n))}catch(n){t(n)}}function e(n){try{o(s.throw(n))}catch(n){t(n)}}function o(t){var o;t.done?n(t.value):(o=t.value,o instanceof c?o:new c((function(n){n(o)}))).then(r,e)}o((s=s.apply(u,f||[])).next())}))})(n,t).catch((n=>t.error(n)))}))}function P(n,t){return i(((r,e)=>{let o=0;r.subscribe(u(e,(r=>{e.next(n.call(t,r,o++))})))}))}function j(n){return new e((t=>{S(n()).subscribe(t)}))}export{m as a,h as b,u as c,l as d,y as e,d as f,w as g,p as h,S as i,b as j,j as k,P as m,i as o,v as r}