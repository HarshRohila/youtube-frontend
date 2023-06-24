function t(t){return"function"==typeof t}function n(t){const n=t((t=>{Error.call(t),t.stack=(new Error).stack}));return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const r=n((t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map(((t,n)=>`${n+1}) ${t.toString()}`)).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n}));function e(t,n){if(t){const r=t.indexOf(n);0<=r&&t.splice(r,1)}}class i{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;const{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(const t of e)t.remove(this);else e.remove(this);const{initialTeardown:i}=this;if(t(i))try{i()}catch(t){n=t instanceof r?t.errors:[t]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const t of o)try{u(t)}catch(t){n=null!=n?n:[],t instanceof r?n=[...n,...t.errors]:n.push(t)}}if(n)throw new r(n)}}add(t){var n;if(t&&t!==this)if(this.closed)u(t);else{if(t instanceof i){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&e(n,t)}remove(t){const{_finalizers:n}=this;n&&e(n,t),t instanceof i&&t._removeParent(this)}}i.EMPTY=(()=>{const t=new i;return t.closed=!0,t})();const o=i.EMPTY;function s(n){return n instanceof i||n&&"closed"in n&&t(n.remove)&&t(n.add)&&t(n.unsubscribe)}function u(n){t(n)?n():n.unsubscribe()}const c={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},f={setTimeout(t,n,...r){const{delegate:e}=f;return(null==e?void 0:e.setTimeout)?e.setTimeout(t,n,...r):setTimeout(t,n,...r)},clearTimeout(t){const{delegate:n}=f;return((null==n?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function l(t){f.setTimeout((()=>{const{onUnhandledError:n}=c;if(!n)throw t;n(t)}))}function a(){}const h=d("C",void 0,void 0);function d(t,n,r){return{kind:t,value:n,error:r}}function y(t){t()}class v extends i{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,s(t)&&t.add(this)):this.destination=E}static create(t,n,r){return new m(t,n,r)}next(t){this.isStopped?x(function(t){return d("N",t,void 0)}(t),this):this._next(t)}error(t){this.isStopped?x(d("E",void 0,t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?x(h,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const b=Function.prototype.bind;function p(t,n){return b.call(t,n)}class w{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(t){S(t)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(t){S(t)}else S(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(t){S(t)}}}class m extends v{constructor(n,r,e){let i;if(super(),t(n)||!n)i={next:null!=n?n:void 0,error:null!=r?r:void 0,complete:null!=e?e:void 0};else{let t;this&&c.useDeprecatedNextContext?(t=Object.create(n),t.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&p(n.next,t),error:n.error&&p(n.error,t),complete:n.complete&&p(n.complete,t)}):i=n}this.destination=new w(i)}}function S(t){l(t)}function x(t,n){const{onStoppedNotification:r}=c;r&&f.setTimeout((()=>r(t,n)))}const E={closed:!0,next:a,error:function(t){throw t},complete:a},_="function"==typeof Symbol&&Symbol.observable||"@@observable";function P(t){return t}class T{constructor(t){t&&(this._subscribe=t)}lift(t){const n=new T;return n.source=this,n.operator=t,n}subscribe(n,r,e){const i=(o=n)&&o instanceof v||function(n){return n&&t(n.next)&&t(n.error)&&t(n.complete)}(o)&&s(o)?n:new m(n,r,e);var o;return y((()=>{const{operator:t,source:n}=this;i.add(t?t.call(i,n):n?this._subscribe(i):this._trySubscribe(i))})),i}_trySubscribe(t){try{return this._subscribe(t)}catch(n){t.error(n)}}forEach(t,n){return new(n=g(n))(((n,r)=>{const e=new m({next:n=>{try{t(n)}catch(t){r(t),e.unsubscribe()}},error:r,complete:n});this.subscribe(e)}))}_subscribe(t){var n;return null===(n=this.source)||void 0===n?void 0:n.subscribe(t)}[_](){return this}pipe(...t){return(0===(n=t).length?P:1===n.length?n[0]:function(t){return n.reduce(((t,n)=>n(t)),t)})(this);var n}toPromise(t){return new(t=g(t))(((t,n)=>{let r;this.subscribe((t=>r=t),(t=>n(t)),(()=>t(r)))}))}}function g(t){var n;return null!==(n=null!=t?t:c.Promise)&&void 0!==n?n:Promise}function O(n){return r=>{if(function(n){return t(null==n?void 0:n.lift)}(r))return r.lift((function(t){try{return n(t,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function j(t,n,r,e,i){return new A(t,n,r,e,i)}T.create=t=>new T(t);class A extends v{constructor(t,n,r,e,i,o){super(t),this.onFinalize=i,this.shouldUnsubscribe=o,this._next=n?function(r){try{n(r)}catch(n){t.error(n)}}:super._next,this._error=e?function(n){try{e(n)}catch(n){t.error(n)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(n){t.error(n)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}const $=new T((t=>t.complete()));function I(t){return t[t.length-1]}function N(n){return t(I(n))?n.pop():void 0}function U(n){return(r=I(n))&&t(r.schedule)?n.pop():void 0;var r}function k(t,n){return"number"==typeof I(t)?t.pop():n}function z(t){return this instanceof z?(this.v=t,this):new z(t)}function C(t,n,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,i=r.apply(t,n||[]),o=[];return e={},s("next"),s("throw"),s("return"),e[Symbol.asyncIterator]=function(){return this},e;function s(t){i[t]&&(e[t]=function(n){return new Promise((function(r,e){o.push([t,n,r,e])>1||u(t,n)}))})}function u(t,n){try{(r=i[t](n)).value instanceof z?Promise.resolve(r.value.v).then(c,f):l(o[0][2],r)}catch(t){l(o[0][3],t)}var r}function c(t){u("next",t)}function f(t){u("throw",t)}function l(t,n){t(n),o.shift(),o.length&&u(o[0][0],o[0][1])}}function D(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,r=t[Symbol.asyncIterator];return r?r.call(t):(t=function(t){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&t[n],e=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(t),n={},e("next"),e("throw"),e("return"),n[Symbol.asyncIterator]=function(){return this},n);function e(r){n[r]=t[r]&&function(n){return new Promise((function(e,i){!function(t,n,r,e){Promise.resolve(e).then((function(n){t({value:n,done:r})}),n)}(e,i,(n=t[r](n)).done,n.value)}))}}}const Y=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function q(n){return t(null==n?void 0:n.then)}function F(n){return t(n[_])}function H(n){return Symbol.asyncIterator&&t(null==n?void 0:n[Symbol.asyncIterator])}function R(t){return new TypeError(`You provided ${null!==t&&"object"==typeof t?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const B="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function G(n){return t(null==n?void 0:n[B])}function J(t){return C(this,arguments,(function*(){const n=t.getReader();try{for(;;){const{value:t,done:r}=yield z(n.read());if(r)return yield z(void 0);yield yield z(t)}}finally{n.releaseLock()}}))}function K(n){return t(null==n?void 0:n.getReader)}function L(n){if(n instanceof T)return n;if(null!=n){if(F(n))return o=n,new T((n=>{const r=o[_]();if(t(r.subscribe))return r.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(Y(n))return i=n,new T((t=>{for(let n=0;n<i.length&&!t.closed;n++)t.next(i[n]);t.complete()}));if(q(n))return e=n,new T((t=>{e.then((n=>{t.closed||(t.next(n),t.complete())}),(n=>t.error(n))).then(null,l)}));if(H(n))return M(n);if(G(n))return r=n,new T((t=>{for(const n of r)if(t.next(n),t.closed)return;t.complete()}));if(K(n))return M(J(n))}var r,e,i,o;throw R(n)}function M(t){return new T((n=>{(function(t,n){var r,e,i,o,s,u,c,f;return s=this,u=void 0,f=function*(){try{for(r=D(t);!(e=yield r.next()).done;)if(n.next(e.value),n.closed)return}catch(t){i={error:t}}finally{try{e&&!e.done&&(o=r.return)&&(yield o.call(r))}finally{if(i)throw i.error}}n.complete()},new((c=void 0)||(c=Promise))((function(t,n){function r(t){try{i(f.next(t))}catch(t){n(t)}}function e(t){try{i(f.throw(t))}catch(t){n(t)}}function i(n){var i;n.done?t(n.value):(i=n.value,i instanceof c?i:new c((function(t){t(i)}))).then(r,e)}i((f=f.apply(s,u||[])).next())}))})(t,n).catch((t=>n.error(t)))}))}function Q(t,n,r,e=0,i=!1){const o=n.schedule((function(){r(),i?t.add(this.schedule(null,e)):this.unsubscribe()}),e);if(t.add(o),!i)return o}function V(t,n=0){return O(((r,e)=>{r.subscribe(j(e,(r=>Q(e,t,(()=>e.next(r)),n)),(()=>Q(e,t,(()=>e.complete()),n)),(r=>Q(e,t,(()=>e.error(r)),n))))}))}function W(t,n=0){return O(((r,e)=>{e.add(t.schedule((()=>r.subscribe(e)),n))}))}function X(t,n){if(!t)throw new Error("Iterable cannot be null");return new T((r=>{Q(r,n,(()=>{const e=t[Symbol.asyncIterator]();Q(r,n,(()=>{e.next().then((t=>{t.done?r.complete():r.next(t.value)}))}),0,!0)}))}))}function Z(n,r){return r?function(n,r){if(null!=n){if(F(n))return function(t,n){return L(t).pipe(W(n),V(n))}(n,r);if(Y(n))return function(t,n){return new T((r=>{let e=0;return n.schedule((function(){e===t.length?r.complete():(r.next(t[e++]),r.closed||this.schedule())}))}))}(n,r);if(q(n))return function(t,n){return L(t).pipe(W(n),V(n))}(n,r);if(H(n))return X(n,r);if(G(n))return function(n,r){return new T((e=>{let i;return Q(e,r,(()=>{i=n[B](),Q(e,r,(()=>{let t,n;try{({value:t,done:n}=i.next())}catch(t){return void e.error(t)}n?e.complete():e.next(t)}),0,!0)})),()=>t(null==i?void 0:i.return)&&i.return()}))}(n,r);if(K(n))return function(t,n){return X(J(t),n)}(n,r)}throw R(n)}(n,r):L(n)}function tt(...t){return Z(t,U(t))}function nt(t,n){return O(((r,e)=>{let i=0;r.subscribe(j(e,(r=>{e.next(t.call(n,r,i++))})))}))}function rt(t){return new T((n=>{L(t()).subscribe(n)}))}function et(t,n){return O(((r,e)=>{let i=null,o=0,s=!1;const u=()=>s&&!i&&e.complete();r.subscribe(j(e,(r=>{null==i||i.unsubscribe();let s=0;const c=o++;L(t(r,c)).subscribe(i=j(e,(t=>e.next(n?n(r,t,c,s++):t)),(()=>{i=null,u()})))}),(()=>{s=!0,u()})))}))}export{o as E,T as O,i as S,n as a,e as b,j as c,Q as d,y as e,t as f,P as g,Z as h,L as i,U as j,$ as k,k as l,nt as m,a as n,O as o,N as p,V as q,rt as r,W as s,tt as t,et as u,m as v}