import{v as d,a as g,s as v,b as y}from"./q-f8d3670d.js";import{l as h}from"./q-3396b8e1.js";import"./q-c1d3cd99.js";const j=async(m,u)=>{const[t,l,s,c,a,o,p]=h();c||(s.response={}),s.submitCount++,s.submitted=!0,s.submitting=!0;try{if(await d(s,o)){const e=g(s,o),[r]=await Promise.all([p||t==null?void 0:t.submit(l?new FormData(u):e),a==null?void 0:a(e,m)]);if(r!=null&&r.value){const{errors:n,response:i}=r.value;Object.entries(n).forEach(([f,b])=>v(s,f,b,{...o,shouldFocus:!1})),y(s,n,o),Object.keys(i).length&&(s.response=i)}}}catch(e){s.response={status:"error",message:(e==null?void 0:e.message)||"An unknown error has occurred."}}finally{s.submitting=!1}};export{j as s_qmKnyqz75p4};
