import{r as s,h as e,H as n}from"./p-27ce4408.js";import{a as t}from"./p-6ad5c5be.js";import{j as a,m as r}from"./p-3b7085e5.js";import{a as i,e as o}from"./p-ffdfb00a.js";import{t as p}from"./p-88cc7230.js";import"./p-9f34646c.js";import"./p-b44dc71b.js";import"./p-954d5885.js";import"./p-fae28420.js";let l=class{constructor(e){s(this,e),this.serverInstances=[]}componentWillLoad(){i.dispatch(o(!0));const s=()=>{i.dispatch(o(!1))};a((()=>t.get("https://raw.githubusercontent.com/wiki/TeamPiped/Piped-Frontend/Instances.md"))).pipe(r((s=>s.data)),r((s=>{const e=[];var n=0;return s.split("\n").map((s=>{const t=s.split("|");if(t.length>=4){if(n<2)return void n++;e.push({name:t[0].trim(),apiUrl:t[1].trim(),locations:t[2].trim(),hasCdn:"Yes"===t[3].trim()})}})),e}))).pipe(p(1)).subscribe({next:s=>{this.serverInstances=s},error:s,complete:s})}render(){return e(n,null,e("mobile-view",null,e("div",{class:"settings-page"},e("page-header",{history:this.history}),this.serverInstances.length&&e("div",{class:"server-instances"},e("dropdown-server",{serverInstances:this.serverInstances}),e("h3",null,"Server Instances"),e("h4",{class:"head"},e("span",null,"Name"),e("span",null,"Locations"),e("span",{class:"has-cdn"},"CDN?")),e("ul",null,this.serverInstances.map((s=>e("li",{key:s.apiUrl},e("li-server-instance",{serverInsance:s})))))))))}};l.style="@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}:host{display:block}.settings-page{padding:0 10px}.server-instances{height:calc(100vh - 56px);display:flex;flex-direction:column;overflow-y:auto}.server-instances li~li{padding-top:10px}.server-instances .head{padding-left:20px;display:flex;margin-bottom:0}.server-instances .head *{flex:1}.server-instances .head .has-cdn{flex:0.3;text-align:center}.server-instances ul{overflow-y:auto;flex:1;padding-left:20px}";export{l as settings_page}