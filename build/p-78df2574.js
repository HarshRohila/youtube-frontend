import{h as s}from"./p-27ce4408.js";import{h as o,d as c,i as n,f as a}from"./p-eeaa0d64.js";function i({onSearchSubmit:a,onSearchTextChange:i,onSearchBtnClick:e,searchText:r,showSearchbar:t,onCloseClick:l,onClickBack:u}){return s("div",{class:"search-bar"},u&&s("button",{class:"back",onClick:u},s("x-icon",{icon:n})),s("form",{class:"search-form "+(t?"":"hide"),onSubmit:s=>{s.preventDefault(),a(s)}},s("input",{type:"text",class:"search-input",value:r,placeholder:"Search",onInput:i})),t&&s("button",{class:"close",onClick:l},s("x-icon",{icon:c})),!t&&s("button",{class:"search",onClick:e},s("x-icon",{icon:o})))}function e({suggestions:o,onClickSuggesion:c,error:n,loading:i}){return s("div",{class:"suggestions-container"},n&&s("div",{class:"error"},n.message),i&&s("div",{class:"loading"},s("x-icon",{icon:a,spin:!0})),s("ul",{class:"suggestions"},!i&&!n&&o.map((o=>s("li",{onClick:()=>c(o)},o)))))}export{e as S,i as a}