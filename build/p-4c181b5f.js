import{c as s,O as t,e as i,E as r,S as e,a as h}from"./p-6cf4a597.js";const o=s((s=>function(){s(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}));class n extends t{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(s){const t=new u(this,this);return t.operator=s,t}_throwIfClosed(){if(this.closed)throw new o}next(s){i((()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const t of this.currentObservers)t.next(s)}}))}error(s){i((()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=s;const{observers:t}=this;for(;t.length;)t.shift().error(s)}}))}complete(){i((()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:s}=this;for(;s.length;)s.shift().complete()}}))}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var s;return(null===(s=this.observers)||void 0===s?void 0:s.length)>0}_trySubscribe(s){return this._throwIfClosed(),super._trySubscribe(s)}_subscribe(s){return this._throwIfClosed(),this._checkFinalizedStatuses(s),this._innerSubscribe(s)}_innerSubscribe(s){const{hasError:t,isStopped:i,observers:o}=this;return t||i?r:(this.currentObservers=null,o.push(s),new e((()=>{this.currentObservers=null,h(o,s)})))}_checkFinalizedStatuses(s){const{hasError:t,thrownError:i,isStopped:r}=this;t?s.error(i):r&&s.complete()}asObservable(){const s=new t;return s.source=this,s}}n.create=(s,t)=>new u(s,t);class u extends n{constructor(s,t){super(),this.destination=s,this.source=t}next(s){var t,i;null===(i=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===i||i.call(t,s)}error(s){var t,i;null===(i=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===i||i.call(t,s)}complete(){var s,t;null===(t=null===(s=this.destination)||void 0===s?void 0:s.complete)||void 0===t||t.call(s)}_subscribe(s){var t,i;return null!==(i=null===(t=this.source)||void 0===t?void 0:t.subscribe(s))&&void 0!==i?i:r}}export{n as S}