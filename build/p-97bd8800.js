import{a as t,b as n,o as e,O as r,r as o,n as i}from"./p-d0b56f57.js";function s(n){return e=>{if(function(n){return t(null==n?void 0:n.lift)}(e))return e.lift((function(t){try{return n(t,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function u(t,n,e,r,o){return new c(t,n,e,r,o)}class c extends n{constructor(t,n,e,r,o,i){super(t),this.onFinalize=o,this.shouldUnsubscribe=i,this._next=n?function(e){try{n(e)}catch(n){t.error(n)}}:super._next,this._error=r?function(n){try{r(n)}catch(n){t.error(n)}finally{this.unsubscribe()}}:super._error,this._complete=e?function(){try{e()}catch(n){t.error(n)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}function a(t){return this instanceof a?(this.v=t,this):new a(t)}function f(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=e.apply(t,n||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(t){o[t]&&(r[t]=function(n){return new Promise((function(e,r){i.push([t,n,e,r])>1||u(t,n)}))})}function u(t,n){try{(e=o[t](n)).value instanceof a?Promise.resolve(e.value.v).then(c,f):l(i[0][2],e)}catch(t){l(i[0][3],t)}var e}function c(t){u("next",t)}function f(t){u("throw",t)}function l(t,n){t(n),i.shift(),i.length&&u(i[0][0],i[0][1])}}function l(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,e=t[Symbol.asyncIterator];return e?e.call(t):(t=function(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(t),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(e){n[e]=t[e]&&function(n){return new Promise((function(r,o){!function(t,n,e,r){Promise.resolve(r).then((function(n){t({value:n,done:e})}),n)}(r,o,(n=t[e](n)).done,n.value)}))}}}const d=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function h(n){return t(null==n?void 0:n.then)}function p(n){return t(n[e])}function m(n){return Symbol.asyncIterator&&t(null==n?void 0:n[Symbol.asyncIterator])}function b(t){return new TypeError(`You provided ${null!==t&&"object"==typeof t?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const y="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function w(n){return t(null==n?void 0:n[y])}function g(t){return f(this,arguments,(function*(){const n=t.getReader();try{for(;;){const{value:t,done:e}=yield a(n.read());if(e)return yield a(void 0);yield yield a(t)}}finally{n.releaseLock()}}))}function v(n){return t(null==n?void 0:n.getReader)}function O(n){if(n instanceof r)return n;if(null!=n){if(p(n))return c=n,new r((n=>{const r=c[e]();if(t(r.subscribe))return r.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(d(n))return u=n,new r((t=>{for(let n=0;n<u.length&&!t.closed;n++)t.next(u[n]);t.complete()}));if(h(n))return s=n,new r((t=>{s.then((n=>{t.closed||(t.next(n),t.complete())}),(n=>t.error(n))).then(null,o)}));if(m(n))return S(n);if(w(n))return i=n,new r((t=>{for(const n of i)if(t.next(n),t.closed)return;t.complete()}));if(v(n))return S(g(n))}var i,s,u,c;throw b(n)}function S(t){return new r((n=>{(function(t,n){var e,r,o,i,s,u,c,a;return s=this,u=void 0,a=function*(){try{for(e=l(t);!(r=yield e.next()).done;)if(n.next(r.value),n.closed)return}catch(t){o={error:t}}finally{try{r&&!r.done&&(i=e.return)&&(yield i.call(e))}finally{if(o)throw o.error}}n.complete()},new((c=void 0)||(c=Promise))((function(t,n){function e(t){try{o(a.next(t))}catch(t){n(t)}}function r(t){try{o(a.throw(t))}catch(t){n(t)}}function o(n){var o;n.done?t(n.value):(o=n.value,o instanceof c?o:new c((function(t){t(o)}))).then(e,r)}o((a=a.apply(s,u||[])).next())}))})(t,n).catch((t=>n.error(t)))}))}function E(t,n){return s(((e,r)=>{let o=0;e.subscribe(u(r,(e=>{r.next(t.call(n,e,o++))})))}))}function R(t){return new r((n=>{O(t()).subscribe(n)}))}function A(t){return s(((n,e)=>{O(t).subscribe(u(e,(()=>e.complete()),i)),!e.closed&&n.subscribe(e)}))}function j(t,n){return function(){return t.apply(n,arguments)}}const{toString:T}=Object.prototype,{getPrototypeOf:N}=Object,P=(x=Object.create(null),t=>{const n=T.call(t);return x[n]||(x[n]=n.slice(8,-1).toLowerCase())});var x;const F=t=>(t=t.toLowerCase(),n=>P(n)===t),D=t=>n=>typeof n===t,{isArray:U}=Array,B=D("undefined"),C=F("ArrayBuffer"),L=D("string"),I=D("function"),_=D("number"),q=t=>null!==t&&"object"==typeof t,k=t=>{if("object"!==P(t))return!1;const n=N(t);return!(null!==n&&n!==Object.prototype&&null!==Object.getPrototypeOf(n)||Symbol.toStringTag in t||Symbol.iterator in t)},M=F("Date"),$=F("File"),z=F("Blob"),H=F("FileList"),J=F("URLSearchParams");function K(t,n,{allOwnKeys:e=!1}={}){if(null==t)return;let r,o;if("object"!=typeof t&&(t=[t]),U(t))for(r=0,o=t.length;r<o;r++)n.call(null,t[r],r,t);else{const o=e?Object.getOwnPropertyNames(t):Object.keys(t),i=o.length;let s;for(r=0;r<i;r++)s=o[r],n.call(null,t[s],s,t)}}function V(t,n){n=n.toLowerCase();const e=Object.keys(t);let r,o=e.length;for(;o-- >0;)if(r=e[o],n===r.toLowerCase())return r;return null}const G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,W=t=>!B(t)&&t!==G,X=(Y="undefined"!=typeof Uint8Array&&N(Uint8Array),t=>Y&&t instanceof Y);var Y;const Z=F("HTMLFormElement"),Q=(({hasOwnProperty:t})=>(n,e)=>t.call(n,e))(Object.prototype),tt=F("RegExp"),nt=(t,n)=>{const e=Object.getOwnPropertyDescriptors(t),r={};K(e,((e,o)=>{!1!==n(e,o,t)&&(r[o]=e)})),Object.defineProperties(t,r)},et="abcdefghijklmnopqrstuvwxyz",rt={DIGIT:"0123456789",ALPHA:et,ALPHA_DIGIT:et+et.toUpperCase()+"0123456789"},ot=F("AsyncFunction"),it={isArray:U,isArrayBuffer:C,isBuffer:function(t){return null!==t&&!B(t)&&null!==t.constructor&&!B(t.constructor)&&I(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let n;return t&&("function"==typeof FormData&&t instanceof FormData||I(t.append)&&("formdata"===(n=P(t))||"object"===n&&I(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let n;return n="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&C(t.buffer),n},isString:L,isNumber:_,isBoolean:t=>!0===t||!1===t,isObject:q,isPlainObject:k,isUndefined:B,isDate:M,isFile:$,isBlob:z,isRegExp:tt,isFunction:I,isStream:t=>q(t)&&I(t.pipe),isURLSearchParams:J,isTypedArray:X,isFileList:H,forEach:K,merge:function t(){const{caseless:n}=W(this)&&this||{},e={},r=(r,o)=>{const i=n&&V(e,o)||o;e[i]=k(e[i])&&k(r)?t(e[i],r):k(r)?t({},r):U(r)?r.slice():r};for(let t=0,n=arguments.length;t<n;t++)arguments[t]&&K(arguments[t],r);return e},extend:(t,n,e,{allOwnKeys:r}={})=>(K(n,((n,r)=>{t[r]=e&&I(n)?j(n,e):n}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,n,e,r)=>{t.prototype=Object.create(n.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:n.prototype}),e&&Object.assign(t.prototype,e)},toFlatObject:(t,n,e,r)=>{let o,i,s;const u={};if(n=n||{},null==t)return n;do{for(o=Object.getOwnPropertyNames(t),i=o.length;i-- >0;)s=o[i],r&&!r(s,t,n)||u[s]||(n[s]=t[s],u[s]=!0);t=!1!==e&&N(t)}while(t&&(!e||e(t,n))&&t!==Object.prototype);return n},kindOf:P,kindOfTest:F,endsWith:(t,n,e)=>{t=String(t),(void 0===e||e>t.length)&&(e=t.length);const r=t.indexOf(n,e-=n.length);return-1!==r&&r===e},toArray:t=>{if(!t)return null;if(U(t))return t;let n=t.length;if(!_(n))return null;const e=new Array(n);for(;n-- >0;)e[n]=t[n];return e},forEachEntry:(t,n)=>{const e=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=e.next())&&!r.done;){const e=r.value;n.call(t,e[0],e[1])}},matchAll:(t,n)=>{let e;const r=[];for(;null!==(e=t.exec(n));)r.push(e);return r},isHTMLForm:Z,hasOwnProperty:Q,hasOwnProp:Q,reduceDescriptors:nt,freezeMethods:t=>{nt(t,((n,e)=>{if(I(t)&&-1!==["arguments","caller","callee"].indexOf(e))return!1;I(t[e])&&(n.enumerable=!1,"writable"in n?n.writable=!1:n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")}))}))},toObjectSet:(t,n)=>{const e={},r=t=>{t.forEach((t=>{e[t]=!0}))};return U(t)?r(t):r(String(t).split(n)),e},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,n,e){return n.toUpperCase()+e})),noop:()=>{},toFiniteNumber:(t,n)=>(t=+t,Number.isFinite(t)?t:n),findKey:V,global:G,isContextDefined:W,ALPHABET:rt,generateString:(t=16,n=rt.ALPHA_DIGIT)=>{let e="";const{length:r}=n;for(;t--;)e+=n[Math.random()*r|0];return e},isSpecCompliantForm:function(t){return!!(t&&I(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const n=new Array(10),e=(t,r)=>{if(q(t)){if(n.indexOf(t)>=0)return;if(!("toJSON"in t)){n[r]=t;const o=U(t)?[]:{};return K(t,((t,n)=>{const i=e(t,r+1);!B(i)&&(o[n]=i)})),n[r]=void 0,o}}return t};return e(t,0)},isAsyncFn:ot,isThenable:t=>t&&(q(t)||I(t))&&I(t.then)&&I(t.catch)};function st(t,n,e,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",n&&(this.code=n),e&&(this.config=e),r&&(this.request=r),o&&(this.response=o)}it.inherits(st,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:it.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ut=st.prototype,ct={};function at(t){return it.isPlainObject(t)||it.isArray(t)}function ft(t){return it.endsWith(t,"[]")?t.slice(0,-2):t}function lt(t,n,e){return t?t.concat(n).map((function(t,n){return t=ft(t),!e&&n?"["+t+"]":t})).join(e?".":""):n}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{ct[t]={value:t}})),Object.defineProperties(st,ct),Object.defineProperty(ut,"isAxiosError",{value:!0}),st.from=(t,n,e,r,o,i)=>{const s=Object.create(ut);return it.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),st.call(s,t.message,n,e,r,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s};const dt=it.toFlatObject(it,{},null,(function(t){return/^is[A-Z]/.test(t)}));function ht(t,n,e){if(!it.isObject(t))throw new TypeError("target must be an object");n=n||new FormData;const r=(e=it.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,n){return!it.isUndefined(n[t])}))).metaTokens,o=e.visitor||a,i=e.dots,s=e.indexes,u=(e.Blob||"undefined"!=typeof Blob&&Blob)&&it.isSpecCompliantForm(n);if(!it.isFunction(o))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(it.isDate(t))return t.toISOString();if(!u&&it.isBlob(t))throw new st("Blob is not supported. Use a Buffer instead.");return it.isArrayBuffer(t)||it.isTypedArray(t)?u&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function a(t,e,o){let u=t;if(t&&!o&&"object"==typeof t)if(it.endsWith(e,"{}"))e=r?e:e.slice(0,-2),t=JSON.stringify(t);else if(it.isArray(t)&&function(t){return it.isArray(t)&&!t.some(at)}(t)||(it.isFileList(t)||it.endsWith(e,"[]"))&&(u=it.toArray(t)))return e=ft(e),u.forEach((function(t,r){!it.isUndefined(t)&&null!==t&&n.append(!0===s?lt([e],r,i):null===s?e:e+"[]",c(t))})),!1;return!!at(t)||(n.append(lt(o,e,i),c(t)),!1)}const f=[],l=Object.assign(dt,{defaultVisitor:a,convertValue:c,isVisitable:at});if(!it.isObject(t))throw new TypeError("data must be an object");return function t(e,r){if(!it.isUndefined(e)){if(-1!==f.indexOf(e))throw Error("Circular reference detected in "+r.join("."));f.push(e),it.forEach(e,(function(e,i){!0===(!(it.isUndefined(e)||null===e)&&o.call(n,e,it.isString(i)?i.trim():i,r,l))&&t(e,r?r.concat(i):[i])})),f.pop()}}(t),n}function pt(t){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return n[t]}))}function mt(t,n){this._pairs=[],t&&ht(t,this,n)}const bt=mt.prototype;function yt(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function wt(t,n,e){if(!n)return t;const r=e&&e.encode||yt,o=e&&e.serialize;let i;if(i=o?o(n,e):it.isURLSearchParams(n)?n.toString():new mt(n,e).toString(r),i){const n=t.indexOf("#");-1!==n&&(t=t.slice(0,n)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}bt.append=function(t,n){this._pairs.push([t,n])},bt.toString=function(t){const n=t?function(n){return t.call(this,n,pt)}:pt;return this._pairs.map((function(t){return n(t[0])+"="+n(t[1])}),"").join("&")};class gt{constructor(){this.handlers=[]}use(t,n,e){return this.handlers.push({fulfilled:t,rejected:n,synchronous:!!e&&e.synchronous,runWhen:e?e.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){it.forEach(this.handlers,(function(n){null!==n&&t(n)}))}}const vt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ot={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:mt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function St(t){function n(t,e,r,o){let i=t[o++];const s=Number.isFinite(+i),u=o>=t.length;return i=!i&&it.isArray(r)?r.length:i,u?(r[i]=it.hasOwnProp(r,i)?[r[i],e]:e,!s):(r[i]&&it.isObject(r[i])||(r[i]=[]),n(t,e,r[i],o)&&it.isArray(r[i])&&(r[i]=function(t){const n={},e=Object.keys(t);let r;const o=e.length;let i;for(r=0;r<o;r++)i=e[r],n[i]=t[i];return n}(r[i])),!s)}if(it.isFormData(t)&&it.isFunction(t.entries)){const e={};return it.forEachEntry(t,((t,r)=>{n(function(t){return it.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),r,e,0)})),e}return null}const Et={"Content-Type":void 0},Rt={transitional:vt,adapter:["xhr","http"],transformRequest:[function(t,n){const e=n.getContentType()||"",r=e.indexOf("application/json")>-1,o=it.isObject(t);if(o&&it.isHTMLForm(t)&&(t=new FormData(t)),it.isFormData(t))return r&&r?JSON.stringify(St(t)):t;if(it.isArrayBuffer(t)||it.isBuffer(t)||it.isStream(t)||it.isFile(t)||it.isBlob(t))return t;if(it.isArrayBufferView(t))return t.buffer;if(it.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let i;if(o){if(e.indexOf("application/x-www-form-urlencoded")>-1)return function(t,n){return ht(t,new Ot.classes.URLSearchParams,Object.assign({visitor:function(t,n,e,r){return r.defaultVisitor.apply(this,arguments)}},n))}(t,this.formSerializer).toString();if((i=it.isFileList(t))||e.indexOf("multipart/form-data")>-1){const n=this.env&&this.env.FormData;return ht(i?{"files[]":t}:t,n&&new n,this.formSerializer)}}return o||r?(n.setContentType("application/json",!1),function(t){if(it.isString(t))try{return(0,JSON.parse)(t),it.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const n=this.transitional||Rt.transitional,e=n&&n.forcedJSONParsing,r="json"===this.responseType;if(t&&it.isString(t)&&(e&&!this.responseType||r)){const e=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(t){if(e){if("SyntaxError"===t.name)throw st.from(t,st.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ot.classes.FormData,Blob:Ot.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};it.forEach(["delete","get","head"],(function(t){Rt.headers[t]={}})),it.forEach(["post","put","patch"],(function(t){Rt.headers[t]=it.merge(Et)}));const At=it.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jt=Symbol("internals");function Tt(t){return t&&String(t).trim().toLowerCase()}function Nt(t){return!1===t||null==t?t:it.isArray(t)?t.map(Nt):String(t)}function Pt(t,n,e,r,o){return it.isFunction(r)?r.call(this,n,e):(o&&(n=e),it.isString(n)?it.isString(r)?-1!==n.indexOf(r):it.isRegExp(r)?r.test(n):void 0:void 0)}class xt{constructor(t){t&&this.set(t)}set(t,n,e){const r=this;function o(t,n,e){const o=Tt(n);if(!o)throw new Error("header name must be a non-empty string");const i=it.findKey(r,o);(!i||void 0===r[i]||!0===e||void 0===e&&!1!==r[i])&&(r[i||n]=Nt(t))}const i=(t,n)=>it.forEach(t,((t,e)=>o(t,e,n)));return it.isPlainObject(t)||t instanceof this.constructor?i(t,n):it.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?i((t=>{const n={};let e,r,o;return t&&t.split("\n").forEach((function(t){o=t.indexOf(":"),e=t.substring(0,o).trim().toLowerCase(),r=t.substring(o+1).trim(),!e||n[e]&&At[e]||("set-cookie"===e?n[e]?n[e].push(r):n[e]=[r]:n[e]=n[e]?n[e]+", "+r:r)})),n})(t),n):null!=t&&o(n,t,e),this}get(t,n){if(t=Tt(t)){const e=it.findKey(this,t);if(e){const t=this[e];if(!n)return t;if(!0===n)return function(t){const n=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=e.exec(t);)n[r[1]]=r[2];return n}(t);if(it.isFunction(n))return n.call(this,t,e);if(it.isRegExp(n))return n.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Tt(t)){const e=it.findKey(this,t);return!(!e||void 0===this[e]||n&&!Pt(0,this[e],e,n))}return!1}delete(t,n){const e=this;let r=!1;function o(t){if(t=Tt(t)){const o=it.findKey(e,t);!o||n&&!Pt(0,e[o],o,n)||(delete e[o],r=!0)}}return it.isArray(t)?t.forEach(o):o(t),r}clear(t){const n=Object.keys(this);let e=n.length,r=!1;for(;e--;){const o=n[e];t&&!Pt(0,this[o],o,t,!0)||(delete this[o],r=!0)}return r}normalize(t){const n=this,e={};return it.forEach(this,((r,o)=>{const i=it.findKey(e,o);if(i)return n[i]=Nt(r),void delete n[o];const s=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,n,e)=>n.toUpperCase()+e))}(o):String(o).trim();s!==o&&delete n[o],n[s]=Nt(r),e[s]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return it.forEach(this,((e,r)=>{null!=e&&!1!==e&&(n[r]=t&&it.isArray(e)?e.join(", "):e)})),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,n])=>t+": "+n)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const e=new this(t);return n.forEach((t=>e.set(t))),e}static accessor(t){const n=(this[jt]=this[jt]={accessors:{}}).accessors,e=this.prototype;function r(t){const r=Tt(t);n[r]||(function(t,n){const e=it.toCamelCase(" "+n);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+e,{value:function(t,e,o){return this[r].call(this,n,t,e,o)},configurable:!0})}))}(e,t),n[r]=!0)}return it.isArray(t)?t.forEach(r):r(t),this}}function Ft(t,n){const e=this||Rt,r=n||e,o=xt.from(r.headers);let i=r.data;return it.forEach(t,(function(t){i=t.call(e,i,o.normalize(),n?n.status:void 0)})),o.normalize(),i}function Dt(t){return!(!t||!t.__CANCEL__)}function Ut(t,n,e){st.call(this,null==t?"canceled":t,st.ERR_CANCELED,n,e),this.name="CanceledError"}xt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),it.freezeMethods(xt.prototype),it.freezeMethods(xt),it.inherits(Ut,st,{__CANCEL__:!0});const Bt=Ot.isStandardBrowserEnv?{write:function(t,n,e,r,o,i){const s=[];s.push(t+"="+encodeURIComponent(n)),it.isNumber(e)&&s.push("expires="+new Date(e).toGMTString()),it.isString(r)&&s.push("path="+r),it.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ct(t,n){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)?function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t}(t,n):n}const Lt=Ot.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let e;function r(e){let r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){const n=it.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function It(t,n){let e=0;const r=function(t,n){t=t||10;const e=new Array(t),r=new Array(t);let o,i=0,s=0;return n=void 0!==n?n:1e3,function(u){const c=Date.now(),a=r[s];o||(o=c),e[i]=u,r[i]=c;let f=s,l=0;for(;f!==i;)l+=e[f++],f%=t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<n)return;const d=a&&c-a;return d?Math.round(1e3*l/d):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,u=i-e,c=r(u);e=i;const a={loaded:i,total:s,progress:s?i/s:void 0,bytes:u,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};a[n?"download":"upload"]=!0,t(a)}}const _t={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(n,e){let r=t.data;const o=xt.from(t.headers).normalize(),i=t.responseType;let s;function u(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}it.isFormData(r)&&(Ot.isStandardBrowserEnv||Ot.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const n=t.auth.username||"",e=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(n+":"+e))}const a=Ct(t.baseURL,t.url);function f(){if(!c)return;const r=xt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(t,n,e){const r=e.config.validateStatus;e.status&&r&&!r(e.status)?n(new st("Request failed with status code "+e.status,[st.ERR_BAD_REQUEST,st.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e)):t(e)}((function(t){n(t),u()}),(function(t){e(t),u()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),wt(a,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(f)},c.onabort=function(){c&&(e(new st("Request aborted",st.ECONNABORTED,t,c)),c=null)},c.onerror=function(){e(new st("Network Error",st.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let n=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";t.timeoutErrorMessage&&(n=t.timeoutErrorMessage),e(new st(n,(t.transitional||vt).clarifyTimeoutError?st.ETIMEDOUT:st.ECONNABORTED,t,c)),c=null},Ot.isStandardBrowserEnv){const n=(t.withCredentials||Lt(a))&&t.xsrfCookieName&&Bt.read(t.xsrfCookieName);n&&o.set(t.xsrfHeaderName,n)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&it.forEach(o.toJSON(),(function(t,n){c.setRequestHeader(n,t)})),it.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),i&&"json"!==i&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",It(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",It(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=n=>{c&&(e(!n||n.type?new Ut(null,t,c):n),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const l=function(t){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""}(a);l&&-1===Ot.protocols.indexOf(l)?e(new st("Unsupported protocol "+l+":",st.ERR_BAD_REQUEST,t)):c.send(r||null)}))}};it.forEach(_t,((t,n)=>{if(t){try{Object.defineProperty(t,"name",{value:n})}catch(t){}Object.defineProperty(t,"adapterName",{value:n})}}));function qt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ut(null,t)}function kt(t){return qt(t),t.headers=xt.from(t.headers),t.data=Ft.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1),(t=>{t=it.isArray(t)?t:[t];const{length:n}=t;let e,r;for(let o=0;o<n&&(e=t[o],!(r=it.isString(e)?_t[e.toLowerCase()]:e));o++);if(!r){if(!1===r)throw new st(`Adapter ${e} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(it.hasOwnProp(_t,e)?`Adapter '${e}' is not available in the build`:`Unknown adapter '${e}'`)}if(!it.isFunction(r))throw new TypeError("adapter is not a function");return r})(t.adapter||Rt.adapter)(t).then((function(n){return qt(t),n.data=Ft.call(t,t.transformResponse,n),n.headers=xt.from(n.headers),n}),(function(n){return Dt(n)||(qt(t),n&&n.response&&(n.response.data=Ft.call(t,t.transformResponse,n.response),n.response.headers=xt.from(n.response.headers))),Promise.reject(n)}))}const Mt=t=>t instanceof xt?t.toJSON():t;function $t(t,n){n=n||{};const e={};function r(t,n,e){return it.isPlainObject(t)&&it.isPlainObject(n)?it.merge.call({caseless:e},t,n):it.isPlainObject(n)?it.merge({},n):it.isArray(n)?n.slice():n}function o(t,n,e){return it.isUndefined(n)?it.isUndefined(t)?void 0:r(void 0,t,e):r(t,n,e)}function i(t,n){if(!it.isUndefined(n))return r(void 0,n)}function s(t,n){return it.isUndefined(n)?it.isUndefined(t)?void 0:r(void 0,t):r(void 0,n)}function u(e,o,i){return i in n?r(e,o):i in t?r(void 0,e):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u,headers:(t,n)=>o(Mt(t),Mt(n),!0)};return it.forEach(Object.keys(Object.assign({},t,n)),(function(r){const i=c[r]||o,s=i(t[r],n[r],r);it.isUndefined(s)&&i!==u||(e[r]=s)})),e}const zt={};["object","boolean","number","function","string","symbol"].forEach(((t,n)=>{zt[t]=function(e){return typeof e===t||"a"+(n<1?"n ":" ")+t}}));const Ht={};zt.transitional=function(t,n,e){function r(t,n){return"[Axios v1.4.0] Transitional option '"+t+"'"+n+(e?". "+e:"")}return(e,o,i)=>{if(!1===t)throw new st(r(o," has been removed"+(n?" in "+n:"")),st.ERR_DEPRECATED);return n&&!Ht[o]&&(Ht[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),!t||t(e,o,i)}};const Jt={assertOptions:function(t,n,e){if("object"!=typeof t)throw new st("options must be an object",st.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let o=r.length;for(;o-- >0;){const i=r[o],s=n[i];if(s){const n=t[i],e=void 0===n||s(n,i,t);if(!0!==e)throw new st("option "+i+" must be "+e,st.ERR_BAD_OPTION_VALUE)}else if(!0!==e)throw new st("Unknown option "+i,st.ERR_BAD_OPTION)}},validators:zt},Kt=Jt.validators;class Vt{constructor(t){this.defaults=t,this.interceptors={request:new gt,response:new gt}}request(t,n){"string"==typeof t?(n=n||{}).url=t:n=t||{},n=$t(this.defaults,n);const{transitional:e,paramsSerializer:r,headers:o}=n;let i;void 0!==e&&Jt.assertOptions(e,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean)},!1),null!=r&&(it.isFunction(r)?n.paramsSerializer={serialize:r}:Jt.assertOptions(r,{encode:Kt.function,serialize:Kt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase(),i=o&&it.merge(o.common,o[n.method]),i&&it.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete o[t]})),n.headers=xt.concat(i,o);const s=[];let u=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(n)||(u=u&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));const c=[];let a;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let f,l=0;if(!u){const t=[kt.bind(this),void 0];for(t.unshift.apply(t,s),t.push.apply(t,c),f=t.length,a=Promise.resolve(n);l<f;)a=a.then(t[l++],t[l++]);return a}f=s.length;let d=n;for(l=0;l<f;){const t=s[l++],n=s[l++];try{d=t(d)}catch(t){n.call(this,t);break}}try{a=kt.call(this,d)}catch(t){return Promise.reject(t)}for(l=0,f=c.length;l<f;)a=a.then(c[l++],c[l++]);return a}getUri(t){return wt(Ct((t=$t(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}it.forEach(["delete","get","head","options"],(function(t){Vt.prototype[t]=function(n,e){return this.request($t(e||{},{method:t,url:n,data:(e||{}).data}))}})),it.forEach(["post","put","patch"],(function(t){function n(n){return function(e,r,o){return this.request($t(o||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:e,data:r}))}}Vt.prototype[t]=n(),Vt.prototype[t+"Form"]=n(!0)}));class Gt{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let n;this.promise=new Promise((function(t){n=t}));const e=this;this.promise.then((t=>{if(!e._listeners)return;let n=e._listeners.length;for(;n-- >0;)e._listeners[n](t);e._listeners=null})),this.promise.then=t=>{let n;const r=new Promise((t=>{e.subscribe(t),n=t})).then(t);return r.cancel=function(){e.unsubscribe(n)},r},t((function(t,r,o){e.reason||(e.reason=new Ut(t,r,o),n(e.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);-1!==n&&this._listeners.splice(n,1)}static source(){let t;return{token:new Gt((function(n){t=n})),cancel:t}}}const Wt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Wt).forEach((([t,n])=>{Wt[n]=t}));const Xt=function t(n){const e=new Vt(n),r=j(Vt.prototype.request,e);return it.extend(r,Vt.prototype,e,{allOwnKeys:!0}),it.extend(r,e,null,{allOwnKeys:!0}),r.create=function(e){return t($t(n,e))},r}(Rt);Xt.Axios=Vt,Xt.CanceledError=Ut,Xt.CancelToken=Gt,Xt.isCancel=Dt,Xt.VERSION="1.4.0",Xt.toFormData=ht,Xt.AxiosError=st,Xt.Cancel=Xt.CanceledError,Xt.all=function(t){return Promise.all(t)},Xt.spread=function(t){return function(n){return t.apply(null,n)}},Xt.isAxiosError=function(t){return it.isObject(t)&&!0===t.isAxiosError},Xt.mergeConfig=$t,Xt.AxiosHeaders=xt,Xt.formToJSON=t=>St(it.isHTMLForm(t)?new FormData(t):t),Xt.HttpStatusCode=Wt,Xt.default=Xt;const Yt={getApi:()=>new Zt};class Zt{getStream(t){return R((()=>Xt.get(`${Zt.baseUrl}/streams/${t}`))).pipe(E((t=>t.data)),E((t=>({sources:[{url:t.hls}]}))))}getTrendingVideos(){return R((()=>Xt.get(`${Zt.baseUrl}/trending?region=IN`))).pipe(E((t=>t.data)),E((t=>t.map((t=>({videoId:t.url.split("/watch?v=")[1],thumbnail:t.thumbnail,title:t.title,uploaderAvatar:t.uploaderAvatar,uploaderName:t.uploaderName,uploadedDate:t.uploadedDate,views:t.views}))))))}getSuggestions(t){return R((()=>Xt.get(`${Zt.baseUrl}/suggestions?query=${t}`))).pipe(E((t=>t.data)))}getSearchResults(t){return R((()=>Xt.get(`${Zt.baseUrl}/search?q=${t}&filter=videos`))).pipe(E((t=>t.data.items)),E((t=>t.map((t=>({videoId:t.url.split("/watch?v=")[1],thumbnail:t.thumbnail,title:t.title,uploaderAvatar:t.uploaderAvatar,uploaderName:t.uploaderName,uploadedDate:t.uploadedDate,views:t.views}))))))}}Zt.baseUrl="https://watchapi.whatever.social";export{Yt as Y,y as a,p as b,u as c,d,h as e,m as f,w as g,v as h,O as i,b as j,E as m,s as o,g as r,A as t}