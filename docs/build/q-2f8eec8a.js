import{l as m,I as h,f as x,G as p,h as s,$ as l,c as d,j as f,v as n,w as a,x as w,_ as c}from"./q-3396b8e1.js";import{E as _}from"./q-721453c0.js";import{G as v}from"./q-2acb87dc.js";import{e as u}from"./q-5fedfe40.js";const k=()=>{const[e,t]=m();return e.value=t},y=`.browser iframe{margin:0;padding:8px;border:none}:global(:root[data-theme=dark]) .browser iframe{border:1px solid #333;border-top:none}:global(:root[data-theme=dark]) .browser .bar{background-color:#1f1f1f}:global(:root[data-theme=dark]) .browser .url{background-color:#161616}.browser .bar>ul{display:flex;flex-direction:row;margin:0;padding:0;list-style:none;align-items:center;gap:8px}.browser .bar>ul>li{margin:0;padding:0}.browser .bar>ul>li.edit{position:relative;top:-2px}.browser .bar>ul>li.edit>a{color:#666}.browser .bar>ul>li.edit>a:hover{color:#222}:global(:root[data-theme=dark]) .browser .bar>ul>li.edit>a:hover{color:#aaa}.browser .url .url-link{text-decoration:none;color:#666}.slot-container{border-radius:8px}.tabs{display:flex;justify-content:flex-start;align-items:center;border-bottom:1px solid #ccc}.tab{padding:10px;cursor:pointer}.tab.active{border-radius:8px 8px 0 0;background-color:var(--repl-tab-bg-color);border-bottom:2px solid blue}
`,I=y,S=e=>{const t=h(0);x(d(()=>c(()=>Promise.resolve().then(()=>b),void 0),"s_BgOvR0LZoqo"));const g=p(v),i=(e.url||e.src)+(e.console?"?console=true":"");return s(w,{children:[e.tabs&&l("div",null,{class:"tabs"},e.tabs.map((r,o)=>l("span",{class:{tab:!0,active:o==t.value},onClick$:d(()=>c(()=>Promise.resolve().then(()=>b),void 0),"s_oU9XGhu1Iis",[t,o])},null,r,0,"Ug_0")),1,"Ug_1"),l("div",null,{class:"overflow-auto slot-container mb-4",style:a(r=>({"--pretty-code-fragment-max-height":r.maxHeight?r.maxHeight+"px":"none"}),[e])},s(f,{get name(){return e.tabs?String(t.value):""},[n]:{name:a((r,o)=>o.tabs?String(r.value):"",[t,e])}},3,"Ug_2"),1,null),l("div",null,{class:"browser shadow-xl"},[l("div",null,{class:"bar bg-slate-200 rounded-tl-md rounded-tr-md flex flex-row justify-left px-5 py-2 gap-5"},[l("ul",null,null,[l("li",null,null,l("span",null,{class:"bg-red-600 rounded-full w-3 h-3 inline-block"},null,3,null),3,null),l("li",null,null,l("span",null,{class:"bg-yellow-500 rounded-full w-3 h-3 inline-block"},null,3,null),3,null),l("li",null,null,l("span",null,{class:"bg-lime-500 rounded-full w-3 h-3 inline-block"},null,3,null),3,null)],3,null),l("div",null,{class:"url bg-slate-300 rounded-md inline-grid whitespace-nowrap text-xs px-2 py-1 content-center w-full"},l("a",{href:u(i)},{class:"url-link text-ellipsis overflow-hidden",target:"_blank"},new URL(u(i),"https://qwik.builder.io").toString(),1,null),1,null),l("ul",null,null,l("li",null,{class:"edit"},l("a",null,{href:a(r=>"https://github.com/BuilderIO/qwik/blob/main/packages/docs/"+(r.url||r.src),[e]),rel:"noopener",target:"_blank",title:"edit this snippet"},s(_,{height:20,width:20,[n]:{height:n,width:n}},3,"Ug_3"),1,null),1,null),1,null)],1,null),l("div",null,null,l("iframe",{src:u({path:i,theme:g.theme,includeTheme:!0})},{loading:"lazy",style:a(r=>({width:"100%",height:"200px",...r.style}),[e])},null,3,null),1,null)],1,null)]},1,"Ug_4")},b=Object.freeze(Object.defineProperty({__proto__:null,s_BgOvR0LZoqo:I,s_WlC3SfdxFMI:S,s_oU9XGhu1Iis:k},Symbol.toStringTag,{value:"Module"}));export{I as s_BgOvR0LZoqo,S as s_WlC3SfdxFMI,k as s_oU9XGhu1Iis};