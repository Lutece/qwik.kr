import{O as C,c as D,_ as F}from"./q-3396b8e1.js";const k={"images.ctfassets.net":"contentful","cdn.builder.io":"builder.io","images.prismic.io":"imgix","www.datocms-assets.com":"imgix","cdn.sanity.io":"imgix","images.unsplash.com":"imgix","cdn.shopify.com":"shopify","s7d1.scene7.com":"scene7","ip.keycdn.com":"keycdn","assets.caisy.io":"bunny"},q={"imgix.net":"imgix","files.wordpress.com":"wordpress","b-cdn.net":"bunny","storyblok.com":"storyblok","kc-usercontent.com":"kontent.ai","cloudinary.com":"cloudinary","kxcdn.com":"keycdn","imgeng.in":"imageengine"},B={"/cdn-cgi/image/":"cloudflare","/_next/image":"nextjs","/_next/static":"nextjs","/_vercel/image":"vercel","/is/image":"scene7"},_=r=>{if(!r)return r;const t=Number(r);return isNaN(t)?r:Math.round(t)},c=(r,t,e,s,n)=>{e?(n&&(e=_(e)),r.searchParams.set(t,e.toString())):s&&r.searchParams.delete(t)},h=(r,t,e)=>{r.searchParams.has(t)||r.searchParams.set(t,e.toString())},x=(r,t)=>{const e=Number(r.searchParams.get(t));return isNaN(e)?void 0:e},E=r=>{const{pathname:t,search:e}=r;return`${t}${e}`},m=(r,t)=>typeof r=="string"?new URL(r,t??"http://n/"):r,S=new Map(Object.entries(k)),M=Object.entries(q);function V(r){return O(r)||H(r)}function O(r){if(typeof r=="string"&&!r.startsWith("https://"))return!1;const{hostname:t}=m(r);if(S.has(t))return S.get(t);for(const[e,s]of M)if(t.endsWith(`.${e}`))return s;return!1}function H(r){const{pathname:t}=m(r);for(const[e,s]of Object.entries(B))if(t.startsWith(e))return s;return!1}const Z=({url:r,width:t,height:e,format:s})=>{const n=m(r);return c(n,"w",t,!0,!0),c(n,"h",e,!0,!0),c(n,"fm",s),h(n,"fit","fill"),n},J=({url:r,width:t,height:e,format:s})=>{const n=m(r);return c(n,"width",t,!0,!0),c(n,"height",e,!0,!0),c(n,"format",s),t&&e&&(h(n,"fit","cover"),h(n,"sharp","true")),n},K=({url:r,width:t,height:e,format:s})=>{var i;const n=m(r);if(c(n,"w",t,!0,!0),c(n,"h",e,!0,!0),h(n,"fit","min"),s){n.searchParams.set("fm",s);const o=n.searchParams.get("auto");o==="format"?n.searchParams.delete("auto"):o!=null&&o.includes("format")&&n.searchParams.set("auto",o.split(",").filter(a=>a!=="format").join(","))}else n.searchParams.delete("fm"),(i=n.searchParams.get("auto"))!=null&&i.includes("format")||n.searchParams.append("auto","format");return n},G=/(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/,Q=r=>{const t=m(r),e=t.pathname.match(G);if(!e)throw new Error("Invalid Shopify URL");const[,s,n,i,o,a,u,f]=e;t.pathname=`${s}${u}`;const d=i||t.searchParams.get("width"),l=o||t.searchParams.get("height");return t.searchParams.delete("width"),t.searchParams.delete("height"),{base:t.toString(),width:Number(d)||void 0,height:Number(l)||void 0,format:f?f.slice(1):void 0,params:{crop:a,size:n},cdn:"shopify"}},X=({base:r,width:t,height:e,format:s,params:n})=>{const i=m(r);return c(i,"width",t,!0,!0),c(i,"height",e,!0,!0),c(i,"crop",n==null?void 0:n.crop),c(i,"format",s),i},Y=({url:r,width:t,height:e})=>{const s=Q(r);if(!s)return;const n={...s,width:t,height:e};return X(n)},tt=({url:r,width:t,height:e})=>{const s=m(r);return c(s,"w",t,!0,!0),c(s,"h",e,!0,!0),h(s,"crop","1"),s},rt=/https?:\/\/(?<host>[^\/]+)\/(?<cloudName>[^\/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<idAndFormat>[^\s]+)$/g,et=r=>r?Object.fromEntries(r.split(",").map(t=>t.split("_"))):{},W=({host:r,cloudName:t,assetType:e,deliveryType:s,signature:n,transformations:i={},version:o,id:a,format:u})=>{u&&(i.f=u);const f=Object.entries(i).map(([l,p])=>`${l}_${p}`).join(",");return`https://${[r,t,e,s,n,f,o,a].filter(Boolean).join("/")}`},N=r=>{const e=[...m(r).toString().matchAll(rt)];if(!e.length)throw new Error("Invalid Cloudinary URL");const s=e[0].groups||{},{transformations:n="",idAndFormat:i,...o}=s;delete s.idAndFormat;const a=i.lastIndexOf("."),u=a<0?i:i.slice(0,a),f=a<0?void 0:i.slice(a+1),{w:d,h:l,f:p,...g}=et(n),$=p&&p!=="auto"?p:f;return{base:W({...o,id:u,transformations:g}),width:Number(d)||void 0,height:Number(l)||void 0,format:$,cdn:"cloudinary",params:{...s,id:s.deliveryType==="fetch"?i:u,format:$,transformations:g}}},nt=({base:r,width:t,height:e,format:s,params:n})=>{var i;const o=N(r.toString()),a={transformations:{},...o.params,...n,format:s||"auto"};return t&&(a.transformations.w=_(t).toString()),e&&(a.transformations.h=_(e).toString()),(i=a.transformations).c||(i.c="lfill"),W(a)},st=({url:r,width:t,height:e,format:s="auto"})=>{var o,a;const n=N(r);if(!n)throw new Error("Invalid Cloudinary URL");if(((o=n.params)==null?void 0:o.assetType)!=="image")throw new Error("Cloudinary transformer only supports images");if((a=n.params)!=null&&a.signature)throw new Error("Cloudinary transformer does not support signed URLs");const i={...n,width:t,height:e,format:s};return nt(i)},it=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/image\/(?<transformations>[^\/]+)\/(?<path>.*)$/g,ot=r=>Object.fromEntries(r.split(",").map(t=>t.split("="))),A=({host:r,transformations:t={},path:e})=>{const s=Object.entries(t).map(([i,o])=>`${i}=${o}`).join(",");return`https://${[r,"cdn-cgi","image",s,e].join("/")}`},L=r=>{const t=m(r),e=[...t.toString().matchAll(it)];if(!e.length)throw new Error("Invalid Cloudflare URL");const s=e[0].groups||{},{transformations:n,...i}=s,{width:o,height:a,f:u,...f}=ot(n);return A({...i,transformations:f}),{base:t.toString(),width:Number(o)||void 0,height:Number(a)||void 0,format:u,cdn:"cloudflare",params:{...s,transformations:f}}},at=({base:r,width:t,height:e,format:s,params:n})=>{var i;const o=L(r.toString()),a={transformations:{},...o.params,...n};return t&&(a.transformations.width=t==null?void 0:t.toString()),e&&(a.transformations.height=e==null?void 0:e.toString()),s&&(a.transformations.f=s),(i=a.transformations).fit||(i.fit="cover"),new URL(A(a))},ct=({url:r,width:t,height:e,format:s="auto"})=>{const n=L(r);if(!n)throw new Error("Invalid Cloudflare URL");const i={...n,width:t,height:e,format:s};return at(i)},lt=({url:r,width:t,height:e})=>{const s=m(r);return c(s,"width",t,!0,!0),t&&e&&h(s,"aspect_ratio",`${t}:${e}`),s},ft=/(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/g,ut=/^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/g,mt=r=>r?Object.fromEntries(r.split(":").map(t=>{if(!t)return[];const[e,s]=t.split("(");return[e,s.replace(")","")]})):{},dt=r=>{if(!r)return;const t=Object.entries(r).map(([e,s])=>`${e}(${s??""})`);if(t.length!==0)return`filters:${t.join(":")}`},pt=r=>{const t=m(r),e=t.hostname==="img2.storyblok.com"?ut:ft,[s]=t.pathname.matchAll(e);if(!s||!s.groups)throw new Error("Invalid Storyblok URL");const{id:n,crop:i,width:o,height:a,filters:u,flipx:f,flipy:d}=s.groups,{format:l,...p}=mt(u);return t.hostname==="img2.storyblok.com"&&(t.hostname="a.storyblok.com"),{base:t.origin+n,width:Number(o)||void 0,height:Number(a)||void 0,format:l,params:{crop:i,filters:p,flipx:f,flipy:d},cdn:"storyblok"}},ht=({base:r,width:t=0,height:e=0,format:s,params:n={}})=>{const{crop:i,filters:o,flipx:a="",flipy:u=""}=n,f=`${a}${t}x${u}${e}`;return new URL([r,"m",i,f,dt(o),s].filter(Boolean).join("/"))},gt=({url:r,width:t,height:e,format:s})=>{const n=pt(r);if(n)return s&&(n.params||(n.params={filters:{}}),n.params.filters||(n.params.filters={}),n.params.filters.format=s),ht({...n,width:t,height:e})},vt=({url:r,width:t,height:e,format:s})=>{const n=m(r);return c(n,"w",t,!0,!0),c(n,"h",e,!0,!0),c(n,"fm",s,!0),t&&e&&h(n,"fit","crop"),n},P=r=>{const e=m(r).searchParams.get("url");if(!e||!e.startsWith("http"))return!1;const s=O(e);return s?{cdn:s,url:e}:!1},yt=({base:r,width:t,params:{quality:e=75,root:s="_vercel"}={}})=>{const n=new URL("http://n");return n.pathname=`/${s}/image`,n.searchParams.set("url",r.toString()),c(n,"w",t,!1,!0),h(n,"q",e),E(n)},R=({url:r,width:t,cdn:e})=>{const s=m(r),n=s.pathname.startsWith("/_next/image")||s.pathname.startsWith("/_vercel/image"),i=n?s.searchParams.get("url"):r.toString();if(i)return c(s,"w",t,!0,!0),n?s.hostname==="n"?E(s):s.toString():yt({base:i,width:t,params:{root:e==="nextjs"?"_next":"_vercel"}})},$t=r=>R({...r,cdn:"nextjs"}),xt=({url:r,width:t,height:e,format:s})=>{const n=m(r);return c(n,"wid",t,!0,!0),c(n,"hei",e,!0,!0),c(n,"fmt",s,!0),c(n,"qlt",x(n,"qlt"),!0),c(n,"scl",x(n,"scl"),!0),h(n,"fit","crop"),!t&&!e&&h(n,"scl",1),n},_t=({url:r,width:t,height:e,format:s})=>{const n=m(r);return c(n,"width",t,!0,!0),c(n,"height",e,!0,!0),c(n,"format",s,!0),c(n,"quality",x(n,"quality"),!0),h(n,"enlarge",0),n},bt=({url:r,width:t,height:e,format:s})=>{const n=m(r);return c(n,"width",t,!0,!0),c(n,"height",e,!0,!0),c(n,"format",s),c(n,"quality",x(n,"quality"),!0),n},b={width:"w",height:"h",autoWidthWithFallback:"w_auto",auto_width_fallback:"w_auto",scaleToScreenWidth:"pc",scale_to_screen_width:"pc",crop:"cr",outputFormat:"f",format:"f",fit:"m",fitMethod:"m",compression:"cmpr",sharpness:"s",rotate:"r",inline:"in",keepMeta:"meta",keep_meta:"meta",noOptimization:"pass",no_optimization:"pass",force_download:"dl",max_device_pixel_ratio:"maxdpr",maxDevicePixelRatio:"maxdpr"};function wt(r){return Object.keys(b).find(s=>b[s]===r)||""}function St(r){let t=r.toString(),e=[];if(t){let s=t.split("imgeng=");s.length>1&&(e=s[1].split("/"))}return e}function Pt(r){let t=r.toString(),e="";if(t){let s=t.split("imgeng=");s.length>1?e=s[0].slice(0,-1):e=t}return e}const jt=({url:r,width:t,height:e,format:s})=>{const n=m(r),i=Pt(n);let o={};const a=n.toString()===i?[]:St(n);a.length&&(o=Ot(a)),t&&(o.width=t),e&&(o.height=e),s&&(o.format=s),o.hasOwnProperty("fit")||(o={...o,fit:"cropbox"});let u=It(o),f=Ut(u),d=f===""?"":i.includes("?")?"&":"?";return`${i}${d}${f}`};function It(r){return Object.entries(r).reduce((t,[e,s])=>t+Et(e,s),"")}function Ut(r){return r&&r!==""?`imgeng=${r}`:""}function Et(r,t){let e=b[r];return e&&(t||t===0)?`/${e}_${t}`:""}function Ot(r){let t={};return r.forEach(e=>{let s=e.split("_");if(s.length>1){let n=s[0],i=s[1],o=wt(n);o&&(t[o]=i)}}),t}const j={vercel:P,nextjs:P};function Wt(r,t){if(!(t in j))return!1;const e=j[t];return e?e(r):!1}function T(r,t){const e=V(r)||t;if(!e)return!1;const s=Wt(r,e);return s||{cdn:e,url:r}}const z=r=>({imgix:K,contentful:Z,"builder.io":J,shopify:Y,wordpress:tt,cloudinary:st,bunny:lt,storyblok:gt,cloudflare:ct,vercel:R,nextjs:$t,scene7:xt,"kontent.ai":vt,keycdn:_t,directus:bt,imageengine:jt})[r];var Nt=(r,t)=>{if(!(!r||!t))switch(t){case"constrained":return`(min-width: ${r}px) ${r}px, 100vw`;case"fixed":return`${r}px`;case"fullWidth":return"100vw";default:return}},y=r=>r||r===0?`${r}px`:void 0,At=({width:r,height:t,aspectRatio:e,layout:s,objectFit:n="cover",background:i})=>{const o=[["object-fit",n]];return i!=null&&i.startsWith("https:")||i!=null&&i.startsWith("http:")||i!=null&&i.startsWith("data:")?(o.push(["background-image",`url(${i})`]),o.push(["background-size","cover"]),o.push(["background-repeat","no-repeat"])):o.push(["background",i]),s==="fixed"&&(o.push(["width",y(r)]),o.push(["height",y(t)])),s==="constrained"&&(o.push(["max-width",y(r)]),o.push(["max-height",y(t)]),o.push(["aspect-ratio",e?`${e}`:void 0]),o.push(["width","100%"])),s==="fullWidth"&&(o.push(["width","100%"]),o.push(["aspect-ratio",e?`${e}`:void 0]),o.push(["height",y(t)])),Object.fromEntries(o.filter(([,a])=>a))},I=[6016,5120,4480,3840,3200,2560,2048,1920,1668,1280,1080,960,828,750,640],U=24,Lt=({width:r,layout:t})=>{if(t==="fullWidth")return I;if(!r)return[];const e=r*2;return t==="fixed"?[r,e]:t==="constrained"?[r,e,...I.filter(s=>s<e)]:[]},Rt=({src:r,width:t,layout:e="constrained",height:s,aspectRatio:n,breakpoints:i,cdn:o,transformer:a})=>{const u=T(r,o);if(u&&!a&&(a=z(u.cdn)),!!a)return i||(i=Lt({width:t,layout:e})),i.sort((f,d)=>f-d).map(f=>{let d;s&&n&&(d=Math.round(f/n));const l=a({url:u?u.url:r,width:f,height:d});return l?`${l.toString()} ${f}w`:""}).join(`,
`)};function zt({src:r,width:t,height:e,priority:s,layout:n="constrained",aspectRatio:i,cdn:o,transformer:a,objectFit:u="cover",background:f,breakpoints:d,...l}){const p=T(r,o);let g=r;if(p&&(g=p.url,a||(a=z(p.cdn))),t=t&&Number(t)||void 0,e=e&&Number(e)||void 0,s?(l.loading||(l.loading="eager"),l.fetchpriority||(l.fetchpriority="high")):(l.loading||(l.loading="lazy"),l.decoding||(l.decoding="async")),l.alt===""&&(l.role||(l.role="presentation")),i?t?e?console.error("Ignoring aspectRatio because width and height are both set"):e=t/i:e?t=e*i:n!=="fullWidth"&&console.error("When aspectRatio is set, either width or height must also be set"):t&&e?i=t/e:n!=="fullWidth"&&console.error("Either aspectRatio or both width and height must be set"),a&&f==="auto"){const v=i?Math.round(U/i):void 0,w=a({url:g,width:U,height:v});w&&(f=w.toString())}const $={width:t,height:e,aspectRatio:i,layout:n,objectFit:u,background:f};if(a){l.sizes||(l.sizes=Nt(t,n)),l.style={...At($),...l.style},l.srcset=Rt({src:g,width:t,height:e,aspectRatio:i,layout:n,breakpoints:d,transformer:a,cdn:o});const v=a({url:g,width:t,height:e});v&&(g=v),(n==="fullWidth"||n==="constrained")&&(t=void 0,e=void 0)}return{...l,src:g.toString(),width:t,height:e}}const Ct=C(D(()=>F(()=>import("./q-77206e94.js"),["build/q-77206e94.js","build/q-b4025d6c.js","build/q-3396b8e1.js","build/q-d05399d6.js"]),"s_W1wZaAVNrf0"));export{Ct as I,zt as t};