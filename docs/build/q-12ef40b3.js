import{h as t,F as r,H as n,x as c}from"./q-3396b8e1.js";const d=[{text:"Tracking store changes",id:"tracking-store-changes",level:2},{text:"Cleanup",id:"cleanup",level:2},{text:"Example",id:"example",level:3}],h={title:"useTask$() | Tutorial",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat","adamdbradley","mhevery","zanettin"]}},l={title:"useTask$() | Tutorial",contributors:["manucorporat","adamdbradley","mhevery","zanettin"]};function a(s){const e=Object.assign({p:"p",a:"a",code:"code",h2:"h2",span:"span",h3:"h3"},s.components);return n(c,{children:[n(e.p,{children:["Use ",n(e.a,{href:"/docs/components/tasks/#usetask",children:n(e.code,{children:"useTask$()"})})," to execute a function before the initial render and whenever the tracking values change. The function executes before rendering, but it can't delay rendering, so if ",n(e.a,{href:"/docs/components/tasks/#usetask",children:n(e.code,{children:"useTask$()"})})," is asynchronous, the rendering will happen before the ",n(e.a,{href:"/docs/components/tasks/#usetask",children:n(e.code,{children:"useTask$()"})})," is fully executed."]}),`
`,n(e.h2,{id:"tracking-store-changes",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#tracking-store-changes",children:n(e.span,{class:"icon icon-link"})}),"Tracking store changes"]}),`
`,n(e.p,{children:["The ",n(e.a,{href:"/docs/components/tasks/#usetask",children:n(e.code,{children:"useTask$()"})})," hook receives a ",n(e.code,{children:"track()"})," function used for setting up subscriptions that will automatically rerun the ",n(e.a,{href:"/docs/components/tasks/#usetask",children:n(e.code,{children:"useTask$()"})})," hook. The set of ",n(e.code,{children:"track()"})," properties resets on each ",n(e.a,{href:"/docs/components/tasks/#usetask",children:n(e.code,{children:"useTask$()"})})," execution, therefore it is important to always use ",n(e.code,{children:"track()"})," to set up subscriptions anew. Because of this it is possible for the ",n(e.a,{href:"/docs/components/tasks/#usetask",children:n(e.code,{children:"useTask$()"})})," to subscribe to different properties over time."]}),`
`,n(e.h2,{id:"cleanup",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#cleanup",children:n(e.span,{class:"icon icon-link"})}),"Cleanup"]}),`
`,n(e.p,{children:["The ",n(e.a,{href:"/docs/components/tasks/#usetask",children:n(e.code,{children:"useTask$()"})})," hook can return a cleanup callback. This is useful for cleaning up any resources before new execution."]}),`
`,n(e.h3,{id:"example",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#example",children:n(e.span,{class:"icon icon-link"})}),"Example"]})]})}function o(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(a,s)})):a(s)}const u=()=>t(r,{children:t(o,{},3,null)},3,"hmA_0aJZ");export{u as default,l as frontmatter,h as head,d as headings};
