import{b as n,d as t,o as r,O as e,r as o}from"./p-6cf4a597.js";function i(t){return r=>{if(function(t){return n(null==t?void 0:t.lift)}(r))return r.lift((function(n){try{return t(n,this)}catch(n){this.error(n)}}));throw new TypeError("Unable to lift unknown Observable type")}}function u(n,t,r,e,o){return new f(n,t,r,e,o)}class f extends t{constructor(n,t,r,e,o,i){super(n),this.onFinalize=o,this.shouldUnsubscribe=i,this._next=t?function(r){try{t(r)}catch(t){n.error(t)}}:super._next,this._error=e?function(t){try{e(t)}catch(t){n.error(t)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(t){n.error(t)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:t}=this;super.unsubscribe(),!t&&(null===(n=this.onFinalize)||void 0===n||n.call(this))}}}function c(t){return t&&n(t.schedule)}function l(n){return n[n.length-1]}function s(t){return n(l(t))?t.pop():void 0}function a(n){return c(l(n))?n.pop():void 0}function y(n,t){return"number"==typeof l(n)?n.pop():t}function h(n){return this instanceof h?(this.v=n,this):new h(n)}function d(n,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=r.apply(n,t||[]),i=[];return e={},u("next"),u("throw"),u("return"),e[Symbol.asyncIterator]=function(){return this},e;function u(n){o[n]&&(e[n]=function(t){return new Promise((function(r,e){i.push([n,t,r,e])>1||f(n,t)}))})}function f(n,t){try{(r=o[n](t)).value instanceof h?Promise.resolve(r.value.v).then(c,l):s(i[0][2],r)}catch(n){s(i[0][3],n)}var r}function c(n){f("next",n)}function l(n){f("throw",n)}function s(n,t){n(t),i.shift(),i.length&&f(i[0][0],i[0][1])}}function b(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=n[Symbol.asyncIterator];return r?r.call(n):(n=function(n){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&n[t],e=0;if(r)return r.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(n),t={},e("next"),e("throw"),e("return"),t[Symbol.asyncIterator]=function(){return this},t);function e(r){t[r]=n[r]&&function(t){return new Promise((function(e,o){!function(n,t,r,e){Promise.resolve(e).then((function(t){n({value:t,done:r})}),t)}(e,o,(t=n[r](t)).done,t.value)}))}}}const w=n=>n&&"number"==typeof n.length&&"function"!=typeof n;function m(t){return n(null==t?void 0:t.then)}function v(t){return n(t[r])}function p(t){return Symbol.asyncIterator&&n(null==t?void 0:t[Symbol.asyncIterator])}function S(n){return new TypeError(`You provided ${null!==n&&"object"==typeof n?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const x="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function E(t){return n(null==t?void 0:t[x])}function P(n){return d(this,arguments,(function*(){const t=n.getReader();try{for(;;){const{value:n,done:r}=yield h(t.read());if(r)return yield h(void 0);yield yield h(n)}}finally{t.releaseLock()}}))}function T(t){return n(null==t?void 0:t.getReader)}function j(t){if(t instanceof e)return t;if(null!=t){if(v(t))return c=t,new e((t=>{const e=c[r]();if(n(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(w(t))return f=t,new e((n=>{for(let t=0;t<f.length&&!n.closed;t++)n.next(f[t]);n.complete()}));if(m(t))return u=t,new e((n=>{u.then((t=>{n.closed||(n.next(t),n.complete())}),(t=>n.error(t))).then(null,o)}));if(p(t))return I(t);if(E(t))return i=t,new e((n=>{for(const t of i)if(n.next(t),n.closed)return;n.complete()}));if(T(t))return I(P(t))}var i,u,f,c;throw S(t)}function I(n){return new e((t=>{(function(n,t){var r,e,o,i,u,f,c,l;return u=this,f=void 0,l=function*(){try{for(r=b(n);!(e=yield r.next()).done;)if(t.next(e.value),t.closed)return}catch(n){o={error:n}}finally{try{e&&!e.done&&(i=r.return)&&(yield i.call(r))}finally{if(o)throw o.error}}t.complete()},new((c=void 0)||(c=Promise))((function(n,t){function r(n){try{o(l.next(n))}catch(n){t(n)}}function e(n){try{o(l.throw(n))}catch(n){t(n)}}function o(t){var o;t.done?n(t.value):(o=t.value,o instanceof c?o:new c((function(n){n(o)}))).then(r,e)}o((l=l.apply(u,f||[])).next())}))})(n,t).catch((n=>t.error(n)))}))}function O(n,t,r,e=0,o=!1){const i=t.schedule((function(){r(),o?n.add(this.schedule(null,e)):this.unsubscribe()}),e);if(n.add(i),!o)return i}function A(n,t=0){return i(((r,e)=>{r.subscribe(u(e,(r=>O(e,n,(()=>e.next(r)),t)),(()=>O(e,n,(()=>e.complete()),t)),(r=>O(e,n,(()=>e.error(r)),t))))}))}function Y(n,t=0){return i(((r,e)=>{e.add(n.schedule((()=>r.subscribe(e)),t))}))}function $(n,t){if(!n)throw new Error("Iterable cannot be null");return new e((r=>{O(r,t,(()=>{const e=n[Symbol.asyncIterator]();O(r,t,(()=>{e.next().then((n=>{n.done?r.complete():r.next(n.value)}))}),0,!0)}))}))}function g(t,r){return r?function(t,r){if(null!=t){if(v(t))return function(n,t){return j(n).pipe(Y(t),A(t))}(t,r);if(w(t))return function(n,t){return new e((r=>{let e=0;return t.schedule((function(){e===n.length?r.complete():(r.next(n[e++]),r.closed||this.schedule())}))}))}(t,r);if(m(t))return function(n,t){return j(n).pipe(Y(t),A(t))}(t,r);if(p(t))return $(t,r);if(E(t))return function(t,r){return new e((e=>{let o;return O(e,r,(()=>{o=t[x](),O(e,r,(()=>{let n,t;try{({value:n,done:t}=o.next())}catch(n){return void e.error(n)}t?e.complete():e.next(n)}),0,!0)})),()=>n(null==o?void 0:o.return)&&o.return()}))}(t,r);if(T(t))return function(n,t){return $(P(n),t)}(t,r)}throw S(t)}(t,r):j(t)}function k(...n){return g(n,a(n))}function R(n,t){return i(((r,e)=>{let o=0;r.subscribe(u(e,(r=>{e.next(n.call(t,r,o++))})))}))}function U(n){return new e((t=>{j(n()).subscribe(t)}))}function q(n,t){return i(((r,e)=>{let o=null,i=0,f=!1;const c=()=>f&&!o&&e.complete();r.subscribe(u(e,(r=>{null==o||o.unsubscribe();let f=0;const l=i++;j(n(r,l)).subscribe(o=u(e,(n=>e.next(t?t(r,n,l,f++):n)),(()=>{o=null,c()})))}),(()=>{f=!0,c()})))}))}export{s as a,j as b,u as c,U as d,O as e,g as f,k as g,y as h,c as i,R as m,i as o,a as p,q as s}