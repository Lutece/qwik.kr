import{O as C,c as d,r as A,G as p,b as T,U as W,_,N as j,M as D,a as Q,d as V,h as F,B as h,W as P,$ as M}from"./q-3396b8e1.js";const N='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',U=h("qc-s"),$=h("qc-c"),ht=h("qc-ic"),B=h("qc-h"),H=h("qc-l"),z=h("qc-n"),G=h("qc-a"),dt=h("qc-ir"),_t=d(()=>_(()=>import("./q-61e731e2.js"),[]),"s_DyVc0YBIqQU"),gt=()=>{},yt=C(d(()=>_(()=>import("./q-bff33121.js"),["build/q-bff33121.js","build/q-3396b8e1.js"]),"s_e0ssiDXoeAM")),S=new WeakMap,m=new Map,I="qaction",pt=(t,e,n,s)=>{const o=Y(),i={head:o,withLocale:r=>P(s,r),resolveValue:r=>{const c=r.__id;if(r.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const u=t.loaders[c];if(u instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return u},...e};for(let r=n.length-1;r>=0;r--){const c=n[r]&&n[r].head;c&&(typeof c=="function"?x(o,P(s,()=>c(i))):typeof c=="object"&&x(o,c))}return i.head},x=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),E(t.meta,e.meta),E(t.links,e.links),E(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},E=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const s=t.findIndex(o=>o.key===n.key);if(s>-1){t[s]=n;continue}}t.push(n)}},Y=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),vt=async(t,e,n,s)=>{if(Array.isArray(t))for(const o of t){const a=o[0].exec(s);if(a){const i=o[1],r=K(o[2],a),c=o[4],u=new Array(i.length),l=[],g=J(e,s);let y;return i.forEach((f,b)=>{k(f,l,R=>u[b]=R,n)}),k(g,l,f=>y=f==null?void 0:f.default,n),l.length>0&&await Promise.all(l),[r,u,y,c]}}return null},k=(t,e,n,s)=>{if(typeof t=="function"){const o=S.get(t);if(o)n(o);else{const a=t();typeof a.then=="function"?e.push(a.then(i=>{s!==!1&&S.set(t,i),n(i)})):a&&n(a)}}},J=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const n=t.find(s=>s[0]===e||e.startsWith(s[0]+(e.endsWith("/")?"":"/")));if(n)return n[1]}},K=(t,e)=>{const n={};if(t)for(let s=0;s<t.length;s++){const o=(e==null?void 0:e[s+1])??"",a=o.endsWith("/")?o.slice(0,-1):o;n[t[s]]=decodeURIComponent(a)}return n},w=t=>t.pathname+t.search+t.hash,v=(t,e)=>new URL(t,e.href),Z=(t,e)=>t.origin===e.origin,L=(t,e)=>t.pathname+t.search===e.pathname+e.search,X=(t,e)=>t.pathname===e.pathname,tt=(t,e)=>t.search===e.search,et=(t,e,n)=>{let s=e??"";return n&&(s+=(s?"&":"?")+I+"="+encodeURIComponent(n.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+s},mt=(t,e)=>{const n=t.href;if(typeof n=="string"&&typeof t.target!="string")try{const s=v(n.trim(),e.url),o=v("",e.url);if(Z(s,o))return w(s)}catch(s){console.error(s)}else if(t.reload)return w(v("",e.url));return null},wt=(t,e,n)=>{if(t.prefetch===!0&&e){const s=v(e,n.url),o=v("",n.url);if(!X(s,o)||!tt(s,o))return""}return null},Ct=(t,e,n,s,o=!1)=>{if(e!=="popstate"){const a=L(n,s),i=n.hash===s.hash;if(!a||!i){const r={_qCityScroll:st()};o?t.history.replaceState(r,"",w(s)):t.history.pushState(r,"",w(s))}}},st=()=>({x:0,y:0,w:0,h:0}),nt=t=>{document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},ot=async(t,e,n,s)=>{const o=t.pathname,a=t.search,i=et(o,a,s);let r;if(s||(r=m.get(i)),nt({links:[o]}),!r){const c=rt(s);s&&(s.data=void 0),r=fetch(i,c).then(u=>{const l=new URL(u.url),g=l.pathname.endsWith("/q-data.json");if(l.origin!==location.origin||!g){location.href=l.href;return}if((u.headers.get("content-type")||"").includes("json"))return u.text().then(y=>{const f=A(y,e);if(!f){location.href=t.href;return}if(n&&m.delete(i),f.redirect)location.href=f.redirect;else if(s){const b=f.loaders[s.id];s.resolve({status:u.status,result:b})}return f});location.href=t.href}),s||m.set(i,r)}return r.then(c=>(c||m.delete(i),c))},rt=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},bt=()=>p($),Et=()=>p(B),at=()=>p(H),qt=()=>p(z),it=()=>p(G),Dt=()=>T(W("qwikcity")),Pt=(t,e,n,s)=>{t==="popstate"&&s?window.scrollTo(s.x,s.y):t==="link"&&(ct(e,n)||window.scrollTo(0,0))},ct=(t,e)=>{const n=t.hash.slice(1),s=n&&document.getElementById(n);return s?(s.scrollIntoView(),!0):!!(!s&&t.hash&&L(t,e))},St=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),xt=()=>{const t=history.state;return t==null?void 0:t._qCityScroll},kt=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},At=C(d(()=>_(()=>import("./q-53b213a2.js"),["build/q-53b213a2.js","build/q-3396b8e1.js"]),"s_TxCFOy819ag")),It=C(d(()=>_(()=>import("./q-b6f7972f.js"),["build/q-b6f7972f.js","build/q-3396b8e1.js"]),"s_8gdLBszqbaM")),Lt=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(q||(q=innerWidth),(!e||e&&q<520)&&ot(new URL(t.href),t))};let q=0;const Ot=t=>M("script",{nonce:D(t,"nonce")},{dangerouslySetInnerHTML:N},null,3,"1Z_0"),lt=(t,...e)=>{const{id:n,validators:s}=O(e,t);function o(){const a=at(),i=it(),r={actionPath:`?${I}=${n}`,isRunning:!1,status:void 0,value:void 0,formData:void 0},c=j(()=>{const l=i.value;if(l&&(l==null?void 0:l.id)===n){const g=l.data;if(g instanceof FormData&&(r.formData=g),l.output){const{status:y,result:f}=l.output;r.status=y,r.value=f}}return r}),u=d(()=>_(()=>import("./q-f6ea78b1.js"),["build/q-f6ea78b1.js","build/q-3396b8e1.js"]),"s_A5bZC7WO00A",[i,n,a,c]);return r.submit=u,c}return o.__brand="server_action",o.__validators=s,o.__qrl=t,o.__id=n,Object.freeze(o),o},Rt=(t,...e)=>lt(t,...e),Tt=(t,...e)=>{const{id:n,validators:s}=O(e,t);function o(){return p(U,a=>{if(!(n in a))throw new Error(`routeLoader$ "${t.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/route-loader/`);return D(a,n)})}return o.__brand="server_loader",o.__qrl=t,o.__validators=s,o.__id=n,Object.freeze(o),o},Wt=t=>{function e(){return d(()=>_(()=>import("./q-c98fec82.js"),["build/q-c98fec82.js","build/q-3396b8e1.js"]),"s_wOIPfiQ04l4",[t])}return e()},O=(t,e)=>{let n;const s=[];if(t.length===1){const o=t[0];o&&typeof o=="object"&&("validate"in o?s.push(o):(n=o.id,o.validation&&s.push(...o.validation)))}else t.length>1&&s.push(...t.filter(o=>!!o));return typeof n=="string"?n=`id_${n}`:n=e.getHash(),{validators:s.reverse(),id:n}},jt=async function*(t,e,n){const s=t.getReader();try{let o="";const a=new TextDecoder;for(;!(n!=null&&n.aborted);){const i=await s.read();if(i.done)break;o+=a.decode(i.value,{stream:!0});const r=o.split(/\n/);o=r.pop();for(const c of r)yield await A(c,e)}}finally{s.releaseLock()}},Qt=({action:t,spaReset:e,reloadDocument:n,onSubmit$:s,...o},a)=>(Q(),t?V("form",{...o,action:D(t,"actionPath"),"preventdefault:submit":!n,"data-spa-reset":e?"true":void 0,onSubmit$:[n?void 0:t.submit,s]},{method:"post"},0,a):F(ft,{onSubmit$:s,reloadDocument:n,spaReset:e,...o},0,a)),ft=C(d(()=>_(()=>import("./q-cff2ecdb.js"),["build/q-cff2ecdb.js","build/q-3396b8e1.js"]),"s_Nk9PlpjQm9Y"));export{St as A,_t as B,$ as C,B as D,Ct as E,Qt as F,Dt as G,Et as H,gt as I,yt as J,jt as K,It as L,Lt as M,At as Q,H as R,Ot as S,at as a,lt as b,qt as c,mt as d,wt as e,Y as f,Rt as g,ht as h,z as i,U as j,G as k,dt as l,Z as m,L as n,Pt as o,xt as p,ot as q,Tt as r,Wt as s,v as t,bt as u,vt as v,X as w,pt as x,m as y,kt as z};
