import{e as f,N as x,E as _,C as g,$ as n,h as c,w as m,v as a,c as s,_ as i,l as u,M as h,p as E}from"./q-3396b8e1.js";import{H as b}from"./q-26a98aba.js";import{P as y}from"./q-82dbd22d.js";import{R as w}from"./q-80595764.js";import{p as v,c as P}from"./q-817799a6.js";import{P as I,g as T,e as S}from"./q-4efeebba.js";import{a as L}from"./q-c1d3cd99.js";import"./q-84b66123.js";const R={inputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <p>Hello Qwik</p>;
});
`},{path:"/entry.server.tsx",code:`import { renderToString, type RenderOptions } from '@builder.io/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
`},{path:"/root.tsx",code:`import App from './app';

export const Root = () => {
  return (
    <>
      <head>
        <title>Hello Qwik</title>
      </head>
      <body>
        <App />
      </body>
    </>
  );
};
`}]},z=()=>{f(s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_bCRZz8Uw8t4"));const t=x(()=>({buildId:0,files:R.inputs,version:"",buildMode:"development",entryStrategy:"hook",colResizeActive:!1,colLeft:50,shareUrlTmr:null})),e=x(()=>({active:"Input",list:["Input","Output","Console"]}));_(s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_YzsJjEfYrUs",[t])),g(s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_OJy32LtotZw",[t]));const o=s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_rL68x2dQTYM",[t]),r=s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_vkZre20bmo0",[t]),l=s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_599ANF7zBGE",[t]);return n("div",null,{class:m(d=>({playground:!0,"full-width":!0,"fixed-header":!0,"repl-resize-active":d.colResizeActive}),[t])},[c(b,null,3,"Yu_0"),n("div",null,{class:m(d=>({"repl-panel-output":d.active==="Output","repl-panel-console":d.active==="Console",repl:!0}),[e]),style:m(d=>({gridTemplateColumns:`${d.colLeft}% ${100-d.colLeft}%`}),[t])},c(w,{enableCopyToPlayground:!1,enableDownload:!0,enableInputDelete:!0,input:t,[a]:{enableCopyToPlayground:a,enableDownload:a,enableInputDelete:a,input:a}},3,"Yu_1"),1,null),n("div",null,{class:"repl-col-resize-bar",onPointerDown$:o,onPointerMove$:r,onPointerOut$:l,onPointerUp$:l,style:m(d=>({left:`calc(${d.colLeft}% - 6px)`}),[t])},null,3,null),c(y,{panelStore:e,[a]:{panelStore:a}},3,"Yu_2")],1,"Yu_3")},M=()=>{const[t]=u(),e=v(location.hash.slice(1));e&&(t.version=e.version,t.buildMode=e.buildMode,t.entryStrategy=e.entryStrategy,t.files=e.files)},A=()=>{const[t,e,o]=u();o.appId=t.id,e.active,history.replaceState({},"",`/examples/${t.id}/`)},D=()=>{const[t]=u();t.colResizeActive=!1},O=()=>{const[t]=u();t.colResizeActive=!0},U=t=>{const[e]=u();e.colResizeActive&&(e.colLeft=(t.clientX,t.clientX/window.innerWidth*100),e.colLeft=Math.max(25,e.colLeft),e.colLeft=Math.min(75,e.colLeft))},k=({track:t})=>{const[e]=u();t(()=>e.buildId),t(()=>e.buildMode),t(()=>e.entryStrategy),t(()=>e.files),t(()=>e.version),e.version&&(clearTimeout(e.shareUrlTmr),e.shareUrlTmr=setTimeout(()=>{const o=P(e);history.replaceState({},"",o)},1e3))},$=()=>{f(s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_I0Fc3lhuGPE"));const t=x(()=>({active:"Input",list:I})),e=L(),o=x(()=>{const r=T(e.params.id);return{appId:r?r.id:"",buildId:0,buildMode:"development",entryStrategy:"hook",files:(r==null?void 0:r.inputs)||[],version:"",shareUrlTmr:void 0}});return g(s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_TfrlLrfSReQ",[o])),_(s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_WT6IaiITlvU",[o])),g(s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_hwQf7Utxq0M",[o])),n("div",null,{class:"examples full-width fixed-header"},[c(b,null,3,"M8_0"),n("div",{class:{"examples-menu-container":!0,"examples-panel-input":t.active==="Input","examples-panel-output":t.active==="Output","examples-panel-console":t.active==="Console"}},null,[n("div",null,{class:"examples-menu"},[S.map(r=>n("article",null,{class:"examples-menu-section"},[n("h2",null,null,h(r,"title"),1,null),r.apps.map(l=>n("a",{class:{"example-button":!0,selected:o.appId===l.id},href:`/examples/${l.id}/`,onClick$:s(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_5I3W8TGc0ls",[l,t,o])},{"preventdefault:click":!0},[n("div",null,{class:"example-button-icon"},h(l,"icon"),1,null),n("div",null,{class:"example-button-content"},[n("h3",null,null,h(l,"title"),1,null),n("p",null,null,h(l,"description"),1,null)],1,null)],0,l.id))],1,r.id)),n("a",null,{class:"example-button-new",href:"https://github.com/BuilderIO/qwik/tree/main/packages/docs/src/routes/examples/apps/",target:"_blank"},"👏 Add new examples",3,null)],1,null),n("main",null,{class:"examples-repl"},n("div",null,{class:"repl"},c(w,{enableDownload:!0,input:o,[a]:{enableDownload:a,input:a}},3,"M8_1"),1,null),1,null)],1,null),c(y,{panelStore:t,[a]:{panelStore:a}},3,"M8_2")],1,"M8_3")},C=`.playground{width:100%;height:cal(100vh - var(--header-height));--playground-header-height: 0px}.playground .repl{display:grid;grid-template-columns:50% 50%;grid-template-rows:1fr 40%;grid-template-areas:"repl-input-panel repl-output-panel" "repl-input-panel repl-detail-panel";top:calc(var(--header-height) + var(--playground-header-height));height:calc(100vh - var(--header-height) - var(--panel-toggle-height))}.playground .repl-col-resize-bar{position:absolute;z-index:20;top:var(--playground-header-height);left:calc(50% - 6px);width:12px;height:calc(100vh - var(--header-height) - var(--playground-header-height));cursor:ew-resize;-webkit-user-select:none;-moz-user-select:none;user-select:none}.playground.repl-resize-active .repl-col-resize-bar{width:100%;transform:translate(-50%);pointer-events:initial}.playground.repl-resize-active{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.playground-header{height:var(--playground-header-height);background-color:#2a354d}.playground-header select{background-color:#fff;color:#000;border-radius:3px;margin:8px 0 0 12px;font-size:14px}.playground .repl-input-panel{border-right:1px solid var(--repl-tab-bg-color)}@media (max-width: 768px){.playground .repl{width:300vw;grid-template-rows:100%;grid-template-columns:33.33% 33.33% 33.33%!important;grid-template-areas:"repl-input-panel repl-output-panel repl-detail-panel";transition:transform .5s}.repl-panel-output{transform:translate(-33.33%)}.repl-panel-console{transform:translate(-66.66%)}.playground .repl-col-resize-bar{display:none}}
`,Q=C,V=({track:t})=>{const[e]=u(),o=t(()=>e.appId),r=T(o);{const l=v(location.hash.slice(1));if(l){e.version=l.version,e.buildMode=l.buildMode,e.entryStrategy=l.entryStrategy,e.files=l.files,document.title="REPL Playground - Qwik";return}}e.files=(r==null?void 0:r.inputs)||[],typeof document<"u"&&(document.title=`${r==null?void 0:r.title} - Qwik`)},Y=`.examples{position:fixed;top:0;bottom:0;left:0;right:0}.examples-menu-container{display:grid;grid-template-rows:100%;grid-template-columns:100vw 100vw;grid-template-areas:"example-content-panel example-repl-panel";height:calc(100% - var(--header-height));transform:translateZ(0);transition:transform .5s;height:100%}.examples-panel-input{transform:translate3d(-100vw,0,0)}.examples-panel-output{transform:translate3d(-200vw,0,0)}.examples-panel-console{transform:translate3d(-300vw,0,0)}.examples-repl{grid-area:example-repl-panel;border-color:var(--examples-main-border-color);border-width:1px;border-top-style:solid;border-top-left-radius:5px;overflow:hidden}.examples .repl{display:grid;grid-template-rows:auto;grid-template-columns:100vw 100vw 100vw;grid-template-areas:"repl-input-panel repl-output-panel repl-detail-panel";height:calc(100vh - var(--header-height))}@media (min-width: 768px){.examples-menu-container{grid-template-rows:auto;grid-template-columns:minmax(240px,20%) auto;grid-template-areas:"example-content-panel example-repl-panel";transform:translateZ(0);transition:none}.examples .repl{grid-template-rows:1fr 1fr 1fr;grid-template-columns:minmax(auto,100%);grid-template-areas:"repl-input-panel" "repl-output-panel" "repl-detail-panel"}}@media (min-width: 1200px){.examples .repl{grid-template-rows:minmax(0,1fr) minmax(0,1fr);grid-template-columns:minmax(300px,1.2fr) minmax(0,1fr);grid-template-areas:"repl-input-panel repl-input-panel" "repl-output-panel repl-detail-panel"}}.examples-menu{grid-area:example-content-panel;position:relative;padding:20px;overflow-y:auto}.examples-menu-section{margin:0 0 20px}.examples-menu-section h2{font-weight:700;margin:0 0 5px;color:var(--examples-header-text-color)}.example-button{display:flex;padding:10px;margin-bottom:10px;color:var(--examples-header-text-color);text-align:left;border:1px solid var(--examples-border-color);border-radius:4px;width:100%;font-size:12px}.example-button-icon{font-size:30px;width:38px}.example-button-content{flex:1}.example-button.selected{background:var(--examples-active-bg-color)}.example-button:hover{background:var(--examples-hover-bg-color)}.example-button h3{font-weight:700}.example-button-new{display:block;padding:10px;margin-bottom:10px;color:var(--examples-header-text-color);text-align:center;border:1px solid var(--examples-border-color);border-radius:5px;width:100%;font-size:14px;margin-top:40px}
`,Z=Y,W=({track:t})=>{const[e]=u();t(()=>e.buildId),t(()=>e.buildMode),t(()=>e.entryStrategy),t(()=>e.files),t(()=>e.version),e.version&&(clearTimeout(e.shareUrlTmr),e.shareUrlTmr=setTimeout(()=>{const o=P(e,location.pathname);history.replaceState({},"",o)},1e3))},G=()=>{const[t]=u(),e=v(location.hash.slice(1));if(e){t.version=e.version,t.buildMode=e.buildMode,t.entryStrategy=e.entryStrategy,t.files=e.files,document.title="REPL Playground - Qwik";return}},p=Object.freeze(Object.defineProperty({__proto__:null,_hW:E,s_599ANF7zBGE:D,s_5I3W8TGc0ls:A,s_5jhnS5JSixE:z,s_6xZk2IFCT8M:$,s_I0Fc3lhuGPE:Z,s_OJy32LtotZw:k,s_TfrlLrfSReQ:V,s_WT6IaiITlvU:G,s_YzsJjEfYrUs:M,s_bCRZz8Uw8t4:Q,s_hwQf7Utxq0M:W,s_rL68x2dQTYM:O,s_vkZre20bmo0:U},Symbol.toStringTag,{value:"Module"}));export{E as _hW,D as s_599ANF7zBGE,A as s_5I3W8TGc0ls,z as s_5jhnS5JSixE,$ as s_6xZk2IFCT8M,Z as s_I0Fc3lhuGPE,k as s_OJy32LtotZw,V as s_TfrlLrfSReQ,G as s_WT6IaiITlvU,M as s_YzsJjEfYrUs,Q as s_bCRZz8Uw8t4,W as s_hwQf7Utxq0M,O as s_rL68x2dQTYM,U as s_vkZre20bmo0};
