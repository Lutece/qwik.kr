import{B as x,Y as v,O as l,c as $,_ as g}from"./q-3396b8e1.js";const m=[3840,1920,1280,960,640],h=x("ImageContext"),w=t=>{v(h,t)},i=t=>t||t===0,S=({placeholder:t,width:e,height:s,aspectRatio:n,objectFit:r="cover",layout:a})=>{const o=i(n);s==="auto"&&e==="auto"&&o&&console.warn("To use the aspect ratio either set the width or the height"),s!=="auto"&&a!=="fixed"&&o&&console.warn(`To maintain the aspect ratio we set 'height: "auto"'`);const c={"object-fit":r,background:t||"transparent"};switch(a){case"fixed":return{...c,width:i(e)?`${e}px`:void 0,height:i(s)?`${s}px`:void 0};case"constrained":return{...c,width:"100%",height:o?"auto":void 0,"max-width":i(e)?`${e}px`:void 0,"max-height":i(s)?`${s}px`:void 0,"aspect-ratio":o?`${n}`:void 0};case"fullWidth":{const d={height:o?"auto":i(s)?`${s}px`:void 0};return{...c,...d,width:"100%","aspect-ratio":o?`${n}`:void 0}}}},O=({width:t,layout:e})=>{if(!(!t||!e))switch(e){case"constrained":return`(min-width: ${t}px) ${t}px, 100vw`;case"fixed":return`${t}px`;case"fullWidth":return"100vw";default:return}},k=async({src:t="",width:e,height:s,aspectRatio:n,layout:r,resolutions:a,imageTransformer$:o})=>{const c=I({width:typeof e=="string"?parseInt(e,10):e,layout:r,resolutions:a||m}),d=[];for await(const u of c.sort()){let f=typeof s=="string"?parseInt(s,10):s;if(s&&n&&(f=Math.round(u*n)),!o){d.push(`${t} ${u}w`);continue}const p=await o({src:t,width:u,height:f});d.push(`${p} ${u}w`)}return d.join(`,
`)},I=({width:t,layout:e,resolutions:s=[]})=>{if(e==="fullWidth")return s;if(!t)return[];const n=typeof t=="string"?parseInt(t,10):t,r=n*2;return e==="fixed"?[n,r]:e==="constrained"?[n,r,...s.filter(a=>a<r)]:[]},b=l($(()=>g(()=>import("./q-77206e94.js"),["build/q-77206e94.js","build/q-b4025d6c.js","build/q-3396b8e1.js","build/q-bd5c72f6.js"]),"s_vchO0uJY55k"));export{h as I,O as a,S as b,b as c,k as g,w as u};