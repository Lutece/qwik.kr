import{l as c,I as x,E as u,$ as n,c as o,_ as l,e as p,N as h,w as i,p as m}from"./q-3396b8e1.js";import{u as _}from"./q-4ea5d22c.js";const g=`.clock{background:#fff;border:10px solid #7a7a7a;border-radius:50%;box-sizing:border-box;height:300px;margin:0 auto;position:relative;width:300px}.twelve,.three,.six,.nine{background:#333;position:absolute}.twelve,.six{height:10px;width:4px}.three,.nine{height:4px;width:10px}.twelve{left:50%;top:-1px}.three{right:-1px;top:50%}.six{left:50%;bottom:-1px}.nine{left:-1px;top:50%}.hour{height:60px;width:4px;background:#333;position:absolute;left:50%;top:80px;animation:tick 43200s infinite linear;-webkit-animation:tick 43200s infinite linear}.minute{height:100px;width:4px;background:#777;position:absolute;left:50%;top:40px;animation:tick 3600s infinite linear;-webkit-animation:tick 3600s infinite linear}.second{height:120px;width:3px;background:#fc0505;position:absolute;left:50%;top:20px;animation:tick 60s infinite linear;-webkit-animation:tick 60s infinite linear}.hour,.minute,.second{transform-origin:2px 100%;-webkit-transform-origin:2px 100%}
`,v=g,b=()=>{},f=({cleanup:e})=>{const[t,r]=c();t.isRunning.value=!0;const d=setInterval(()=>r.value=new Date().toLocaleTimeString(),1e3);e(()=>clearInterval(d))},k=e=>{const t=x("paused");return u(o(()=>l(()=>Promise.resolve().then(()=>s),void 0),"s_0M0NP1zb7oo",[e,t]),{strategy:"document-ready"}),n("div",null,null,t,3,"fx_2")},w=`.clock{background:#fff;border:10px solid #7a7a7a;border-radius:50%;box-sizing:border-box;height:300px;margin:0 auto;position:relative;width:300px}.twelve,.three,.six,.nine{background:#333;position:absolute}.twelve,.six{height:10px;width:4px}.three,.nine{height:4px;width:10px}.twelve{left:50%;top:-1px}.three{right:-1px;top:50%}.six{left:50%;bottom:-1px}.nine{left:-1px;top:50%}.hour{height:60px;width:4px;background:#333;position:absolute;left:50%;top:80px;animation:tick 43200s infinite linear;-webkit-animation:tick 43200s infinite linear}.minute{height:100px;width:4px;background:#777;position:absolute;left:50%;top:40px;animation:tick 3600s infinite linear;-webkit-animation:tick 3600s infinite linear}.second{height:120px;width:3px;background:#fc0505;position:absolute;left:50%;top:20px;animation:tick 60s infinite linear;-webkit-animation:tick 60s infinite linear}.hour,.minute,.second{transform-origin:2px 100%;-webkit-transform-origin:2px 100%}
`,y=w,I=()=>{p(o(()=>l(()=>Promise.resolve().then(()=>s),void 0),"s_ahE0byR50Ao"));const e=h({hour:0,minute:0,second:0});return u(o(()=>l(()=>Promise.resolve().then(()=>s),void 0),"s_W1vfybog50o",[e])),n("div",null,{class:"clock"},[n("div",null,{class:"twelve"},null,3,null),n("div",null,{class:"three"},null,3,null),n("div",null,{class:"six"},null,3,null),n("div",null,{class:"nine"},null,3,null),n("div",null,{class:"hour",style:i(t=>({transform:`rotate(${t.hour}deg)`}),[e])},null,3,null),n("div",null,{class:"minute",style:i(t=>({transform:`rotate(${t.minute}deg)`}),[e])},null,3,null),n("div",null,{class:"second",style:i(t=>({transform:`rotate(${t.second}deg)`}),[e])},null,3,null)],3,"Uq_0")},E=()=>{p(o(()=>l(()=>Promise.resolve().then(()=>s),void 0),"s_Y2hNzqE3dZg"));const e=h({hour:0,minute:0,second:0});return u(o(()=>l(()=>Promise.resolve().then(()=>s),void 0),"s_iytbM0DG0b8",[e])),console.log("Render Clock"),n("div",null,{class:"clock"},[n("div",null,{class:"twelve"},null,3,null),n("div",null,{class:"three"},null,3,null),n("div",null,{class:"six"},null,3,null),n("div",null,{class:"nine"},null,3,null),n("div",null,{class:"hour",style:i(t=>({transform:`rotate(${t.hour}deg)`}),[e])},null,3,null),n("div",null,{class:"minute",style:i(t=>({transform:`rotate(${t.minute}deg)`}),[e])},null,3,null),n("div",null,{class:"second",style:i(t=>({transform:`rotate(${t.second}deg)`}),[e])},null,3,null)],3,"0t_3")},P=()=>{p(o(()=>l(()=>Promise.resolve().then(()=>s),void 0),"s_Vb65YOCwLPo"));const e=h({hour:0,minute:0,second:0});return u(o(()=>l(()=>Promise.resolve().then(()=>s),void 0),"s_yGgIneHBxIM")),n("div",null,{class:"clock"},[n("div",null,{class:"twelve"},null,3,null),n("div",null,{class:"three"},null,3,null),n("div",null,{class:"six"},null,3,null),n("div",null,{class:"nine"},null,3,null),n("div",null,{class:"hour",style:i(t=>({transform:`rotate(${t.hour}deg)`}),[e])},null,3,null),n("div",null,{class:"minute",style:i(t=>({transform:`rotate(${t.minute}deg)`}),[e])},null,3,null),n("div",null,{class:"second",style:i(t=>({transform:`rotate(${t.second}deg)`}),[e])},null,3,null)],3,"fQ_0")},L=e=>{const t=x("paused");return u(o(()=>l(()=>Promise.resolve().then(()=>s),void 0),"s_BZqT08M6Wsk",[e,t])),n("div",null,null,t,3,"X3_2")},O=()=>{const[e]=c(),t=()=>{const a=new Date;e.second=a.getSeconds()*6,e.minute=a.getMinutes()*6,e.hour=a.getHours()*30};t();const r=setInterval(t,1e3);return()=>clearInterval(r)},R=({cleanup:e})=>{const[t,r]=c();t.isRunning.value=!0;const d=setInterval(()=>r.value=new Date().toLocaleTimeString(),1e3);e(()=>clearInterval(d))},T=`.clock{background:#fff;border:10px solid #7a7a7a;border-radius:50%;box-sizing:border-box;height:300px;margin:0 auto;position:relative;width:300px}.twelve,.three,.six,.nine{background:#333;position:absolute}.twelve,.six{height:10px;width:4px}.three,.nine{height:4px;width:10px}.twelve{left:50%;top:-1px}.three{right:-1px;top:50%}.six{left:50%;bottom:-1px}.nine{left:-1px;top:50%}.hour{height:60px;width:4px;background:#333;position:absolute;left:50%;top:80px;animation:tick 43200s infinite linear;-webkit-animation:tick 43200s infinite linear}.minute{height:100px;width:4px;background:#777;position:absolute;left:50%;top:40px;animation:tick 3600s infinite linear;-webkit-animation:tick 3600s infinite linear}.second{height:120px;width:3px;background:#fc0505;position:absolute;left:50%;top:20px;animation:tick 60s infinite linear;-webkit-animation:tick 60s infinite linear}.hour,.minute,.second{transform-origin:2px 100%;-webkit-transform-origin:2px 100%}
`,D=T,$=()=>{const[e]=c(),t=setInterval(()=>_(e),1e3);return()=>clearInterval(t)},s=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_0M0NP1zb7oo:f,s_BZqT08M6Wsk:R,s_Vb65YOCwLPo:D,s_W1vfybog50o:$,s_Y2hNzqE3dZg:y,s_ahE0byR50Ao:v,s_d2XBJKOm0ZY:k,s_iytbM0DG0b8:O,s_mKS4fGBkqag:I,s_nauG8uBRObQ:E,s_p7PvHjZuaLU:P,s_yGgIneHBxIM:b,s_zX5TS9NurL8:L},Symbol.toStringTag,{value:"Module"}));export{m as _hW,f as s_0M0NP1zb7oo,R as s_BZqT08M6Wsk,D as s_Vb65YOCwLPo,$ as s_W1vfybog50o,y as s_Y2hNzqE3dZg,v as s_ahE0byR50Ao,k as s_d2XBJKOm0ZY,O as s_iytbM0DG0b8,I as s_mKS4fGBkqag,E as s_nauG8uBRObQ,P as s_p7PvHjZuaLU,b as s_yGgIneHBxIM,L as s_zX5TS9NurL8};
