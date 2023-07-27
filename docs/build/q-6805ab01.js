import{h as o,F as r,H as t,x as i}from"./q-3396b8e1.js";const l=[{text:"Example",id:"example",level:3}],s={title:"Lazy Loading Closures | Tutorial",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat","adamdbradley","wmertens"]}},h={title:"Lazy Loading Closures | Tutorial",contributors:["manucorporat","adamdbradley","wmertens"]};function a(n){const e=Object.assign({p:"p",code:"code",h3:"h3",a:"a",span:"span"},n.components);return t(i,{children:[t(e.p,{children:["A closure can be converted into a lazy-loaded reference using the ",t(e.code,{children:"$()"})," function. This generates a ",t(e.code,{children:"QRL<Function>"})," type. A QRL is a lazy-loadable reference of the closure. In our case, we have extracted the closure associated with the ",t(e.code,{children:"onInput"})," event into the component body. Because it is no longer inlined we need to change how the JSX refers to it from ",t(e.code,{children:"onInput$"})," to ",t(e.code,{children:"onInputQrl"}),"."]}),`
`,t(e.p,{children:["Notice that our closure closes over the ",t(e.code,{children:"store"})," that is captured by the Optimizer and then restored as needed."]}),`
`,t(e.h3,{id:"example",children:[t(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#example",children:t(e.span,{class:"icon icon-link"})}),"Example"]}),`
`,t(e.p,{children:["In this example, we would like to demonstrate how easy it is to lazy-load behavior in Qwik. Let's lazy load the code that is executed when the ",t(e.code,{children:"Enter"})," key is pressed. Wrap the code associated with ",t(e.code,{children:"Enter"})," with ",t(e.code,{children:"$()"})," to mark it for lazy loading. The resulting ",t(e.code,{children:"QRL<()=>void>"})," can then be lazy-invoked with ",t(e.code,{children:".invoke()"})," and the result can be awaited with ",t(e.code,{children:"await"})," keyword."]}),`
`,t(e.p,{children:["Look at the ",t(e.code,{children:"Symbols"})," tab to see how the code was broken up into pieces."]})]})}function d(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(a,n)})):a(n)}const u=()=>o(r,{children:o(d,{},3,null)},3,"e-wB5GmP");export{u as default,h as frontmatter,s as head,l as headings};
