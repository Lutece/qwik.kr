import{l,z as i,d as u,w as n,h as d,j as m,c as p,_}from"./q-3396b8e1.js";import{c as f}from"./q-c1d3cd99.js";const b=async(s,e)=>{const[a]=l(),t=new FormData(e),o=new URLSearchParams;t.forEach((r,c)=>{typeof r=="string"&&o.append(c,r)}),a("?"+o.toString(),{type:"form",forceReload:!0}).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},v=s=>{const e=i(s,["action","spaReset","reloadDocument","onSubmit$"]),a=f();return u("form",{...e,children:d(m,null,3,"BC_0"),onSubmit$:p(()=>_(()=>Promise.resolve().then(()=>h),void 0),"s_p9MSze0ojs4",[a])},{action:"get","data-spa-reset":n(t=>t.spaReset?"true":void 0,[s],'p0.spaReset?"true":undefined'),"preventdefault:submit":n(t=>!t.reloadDocument,[s],"!p0.reloadDocument")},0,"BC_1")},h=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:v,s_p9MSze0ojs4:b},Symbol.toStringTag,{value:"Module"}));export{v as s_Nk9PlpjQm9Y,b as s_p9MSze0ojs4};
