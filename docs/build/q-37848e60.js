import{O as o,c as a,_ as c,$ as e,a as _,M as f,h as d,v as b,P as m}from"./q-3396b8e1.js";const G=o(a(()=>c(()=>import("./q-1253213b.js"),["build/q-1253213b.js","build/q-3396b8e1.js","build/q-544b7f32.js","build/q-2acb87dc.js","build/q-c1d3cd99.js"]),"s_n4HVUVzHQGQ"));function h({items:l,pathname:t,allOpen:s}){return e("ul",null,null,l&&l.map((r,u)=>{var i;return _(e("li",null,null,r.items?e("details",{open:s||u<1||((i=r.items)==null?void 0:i.some(n=>t===n.href))},null,[e("summary",null,null,e("h5",null,null,f(r,"text"),1,null),1,null),d(h,{get items(){return r.items},pathname:t,[b]:{items:m(r,"items")}},3,"TG_3")],1,"TG_4"):e("a",{class:{"is-active":t===r.href},href:f(r,"href")},null,f(r,"text"),1,null),1,"TG_5"))}),1,"TG_6")}function T(l,t){if(l!=null&&l.items)for(const s of l.items){if(s.href===t)return[s];if(s.items)for(const r of s.items){if(r.href===t)return[s,r];if(r.items){for(const u of r.items)if(u.href===t)return[s,r,u]}}}return[]}export{h as I,G as S,T as c};
