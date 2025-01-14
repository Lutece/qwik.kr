import{h as o,F as r,H as n,x as a}from"./q-3396b8e1.js";const d=[{text:"Serialization",id:"serialization",level:2}],l={title:"Storing State | Tutorial",meta:[],styles:[],links:[],frontmatter:{contributors:["adamdbradley","manucorporat","mhevery"]}},h={title:"Storing State | Tutorial",contributors:["adamdbradley","manucorporat","mhevery"]};function i(t){const e=Object.assign({p:"p",ol:"ol",li:"li",code:"code",blockquote:"blockquote",strong:"strong",a:"a",h2:"h2",span:"span",em:"em"},t.components);return n(a,{children:[n(e.p,{children:"Applications need to store state to be useful, otherwise they're just static pages."}),`
`,n(e.p,{children:"Qwik tracks application state for two reasons:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:"To serialize data when the application pauses on the server, and deserialize as the application resumes on the client."}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"To create subscriptions on stores so that Qwik knows which components to re-render. If Qwik didn't track subscriptions, it would have to re-render the whole application - which would defeat the purpose of lazy-loading."}),`
`]}),`
`]}),`
`,n(e.p,{children:["The component on the right doesn't work yet because ",n(e.code,{children:"counter"})," is just a plain object with no subscriptions. As a result, Qwik doesn't know when ",n(e.code,{children:"counter.count"})," changes, and therefore doesn't know to re-render the ",n(e.code,{children:"<App>"})," component."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Your task:"})," Wrap ",n(e.code,{children:"counter"})," in ",n(e.a,{href:"/docs/components/state/#usestore",children:n(e.code,{children:"useStore()"})})," to enable dependency tracking and automatic re-rendering."]}),`
`]}),`
`,n(e.h2,{id:"serialization",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#serialization",children:n(e.span,{class:"icon icon-link"})}),"Serialization"]}),`
`,n(e.p,{children:["Open the ",n(e.em,{children:"HTML"})," tab to see what information is serialized by the server. Look in the ",n(e.code,{children:'<script type="qwik/json">'})," block for serialization information and notice that:"]}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[n(e.code,{children:"{count: 0}"})," is in the serialized state."]}),`
`,n(e.li,{children:["At the end of the serialized state are ",n(e.code,{children:"subs"})," which contain ",n(e.code,{children:'"count"'}),". These subscriptions tell Qwik which component to re-render as the state changes."]}),`
`]}),`
`,n(e.p,{children:"Qwik state is in no way tied to the component that created it. The state can be passed to any component in the application and Qwik creates the needed subscriptions and re-renders only the affected components."})]})}function c(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(i,t)})):i(t)}const p=()=>o(r,{children:o(c,{},3,null)},3,"DWXuKTBG");export{p as default,h as frontmatter,l as head,d as headings};
