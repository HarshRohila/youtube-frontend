import{r as s,c as i,h as t,H as o}from"./p-27ce4408.js";let n=class{constructor(t){s(this,t),this.btnClicked=i(this,"btnClicked",7),this.disabled=!1,this.size="medium"}render(){return t(o,null,t("label",{class:`${this.size}`},t("button",{onClick:()=>{this.btnClicked.emit()},disabled:this.disabled},t("x-icon",{icon:this.icon})),t("span",null,this.label)))}};n.style="@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}:host{display:block}button{background:transparent;border:0;color:white;cursor:pointer}x-icon{font-size:1.5rem}label{display:grid;place-items:center}label span{padding-top:3px;font-size:0.8rem}label.small{display:flex}label.small x-icon{font-size:1rem}";export{n as icon_btn}