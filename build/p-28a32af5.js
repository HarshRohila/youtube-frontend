import{D as s}from"./p-371fb604.js";import{g as t}from"./p-2f53529c.js";import{s as r}from"./p-fa40f061.js";function n(n){return t().pipe(r((t=>{const r=t.getRepo("playlistsItems");return n.playlistId=s.id,r.upsert(n)})))}function a(n){return t().pipe(r((t=>{const r=t.getRepo("playlistsItems");return n.playlistId=s.id,r.delete(n)})))}function o(){return t().pipe(r((t=>t.getRepo("playlistsItems").query({playlistId:s.id}))))}export{n as a,a as d,o as l}