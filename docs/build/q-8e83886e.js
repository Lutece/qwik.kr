import{h as a,F as r,H as e,x as c}from"./q-3396b8e1.js";const i=[{text:"Example",id:"example",level:3}],d={title:"Fallback Content | Tutorial",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat","adamdbradley","forresst"]}},h={title:"Fallback Content | Tutorial",contributors:["manucorporat","adamdbradley","forresst"]};function o(n){const t=Object.assign({p:"p",h3:"h3",a:"a",span:"span"},n.components);return e(c,{children:[e(t.p,{children:"Fallback content allows the child component to display fallback content in case the parent component did not provide content. The fallback content can be done with CSS, it is necessary to add a CSS selector (and the appropriate CSS) on the named Slot in case it is empty."}),`
`,e(t.h3,{id:"example",children:[e(t.a,{"aria-hidden":"true",tabindex:"-1",href:"#example",children:e(t.span,{class:"icon icon-link"})}),"Example"]}),`
`,e(t.p,{children:"In this example, we show three cards, but some of them are not filled with content. Use the right CSS selector to specify the fallback content."})]})}function l(n={}){const{wrapper:t}=n.components||{};return t?e(t,Object.assign({},n,{children:e(o,n)})):o(n)}const p=()=>a(r,{children:a(l,{},3,null)},3,"zkjjM7Hk");export{p as default,h as frontmatter,d as head,i as headings};
