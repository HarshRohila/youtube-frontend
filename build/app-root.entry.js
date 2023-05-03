import { r as registerInstance, h, g as getElement } from './index-3b293f20.js';
import { A as AppRoute } from './AppRoute-3105d84a.js';
import { S as Subject } from './index-c062af89.js';

const appRootCss = "header{z-index:2;background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26);position:fixed;border-bottom-right-radius:20px;box-shadow:0px 1px 12px 5px rgb(2, 0, 36);background:rgb(2, 0, 36);background:linear-gradient(171deg, rgb(2, 0, 36) 15%, rgba(255, 255, 255, 0) 100%);transition-property:width;transition:width 0.5s;width:calc(100% - 60px)}header.search-active{width:100%}header .search-bar{display:flex;align-items:center}header .search-bar button{background:transparent;border:0;color:white;font-size:1.5em;padding:10px}header .search-bar form{flex:1}header .search-bar form.hide{display:none}header .search-bar form input{padding:0 10px;width:100%;background:transparent;border:0;color:white;font-size:1.5em}header .search-bar form input:focus{outline:none}header.search-active .search-bar{width:100%}h1{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500;color:#fff;padding:0 12px;font-family:\"Rancho\";font-size:2rem;margin:0}.suggestions{padding-top:56px;border:1px solid;color:white;position:absolute;z-index:1;margin:0;width:100%;border:0;list-style-type:none}.suggestions li{font-size:1.2rem;padding-top:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 50px)}";

let AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disconnected$ = new Subject();
  }
  render() {
    return (h("div", null, h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: AppRoute.getPath(""), component: "trending-page", exact: true }), h("stencil-route", { url: AppRoute.getPath("/videos/:videoId"), component: "video-page" }), h("stencil-route", { url: AppRoute.getPath("/trending"), component: "trending-page" }))))));
  }
  get el() { return getElement(this); }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
