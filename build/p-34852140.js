import{n as o,Y as n,c as e}from"./p-d0239e1a.js";import{y as s}from"./p-8cb43504.js";import{t as m}from"./p-c4fd8842.js";import{s as i,o as t}from"./p-e88f731b.js";const r=s({shareForm:void 0,copiedLink:"",currentTimeEnabled:!1}),a=s({commentsView:void 0,comments:void 0,areCommentsLoading:!1});function c(n){a.update({commentsView:n}),n||a.update({comments:o()})}function d(o){r.update({shareForm:o}),o||r.update({copiedLink:"",currentTimeEnabled:!1})}function p(o){r.update({copiedLink:"",currentTimeEnabled:o})}function f(o){a.update({areCommentsLoading:o})}function u(s){return s.pipe(m((()=>{f(!0)})),i((o=>{const{videoId:e,nextpage:s}=o;return n.getApi().getComments(e,s)})),e((()=>t(o()))),m((o=>{a.update({comments:o}),f(!1)})))}export{r as a,d as b,c,a as d,u as f,p as s}