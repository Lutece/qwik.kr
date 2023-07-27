import{h as r,F as o,H as n,x as a}from"./q-3396b8e1.js";const i=[{text:"Partytown",id:"partytown",level:1},{text:"Usage",id:"usage",level:2},{text:"Advanced",id:"advanced",level:2}],d={title:"Partytown | Integrations",meta:[{name:"keywords",content:"third party scripts, google analytics, 3rd party, scripts, performance"}],styles:[],links:[],frontmatter:{contributors:["manucorporat","leifermendez","shairez","pamenary","reemardelarosa","mhevery"]}},h={title:"Partytown | Integrations",keywords:"third party scripts, google analytics, 3rd party, scripts, performance",contributors:["manucorporat","leifermendez","shairez","pamenary","reemardelarosa","mhevery"]};function s(l){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",div:"div",pre:"pre",code:"code"},l.components);return n(a,{children:[n(e.h1,{id:"partytown",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#partytown",children:n(e.span,{class:"icon icon-link"})}),"Partytown"]}),`
`,n(e.p,{children:"Third party scripts slow down your initial page load substantially by blocking the main thread."}),`
`,n(e.p,{children:[`Partytown is a tool that allows you to defer third party scripts like Google Analytics, Facebook Pixel, etc off the main thread by using a web worker.
For more information about this tool visit the `,n(e.a,{href:"https://partytown.builder.io/",children:"Partytown docs"}),"."]}),`
`,n(e.h2,{id:"usage",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#usage",children:n(e.span,{class:"icon icon-link"})}),"Usage"]}),`
`,n(e.p,{children:"You can add Partytown easily by using the following Qwik starter script:"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:n(e.pre,{"data-language":"shell","data-theme":"default",children:n(e.code,{"data-language":"shell","data-theme":"default",children:n(e.span,{class:"line",children:[n(e.span,{style:{color:"#DCDCAA"},children:"npm"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"run"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"qwik"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"add"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"partytown"})]})})})}),`
`,n(e.p,{children:["The previous command updates your app and sets the correct configuration in ",n(e.code,{children:"vite.config.ts"}),"."]}),`
`,n(e.p,{children:["It also adds new files inside to your ",n(e.code,{children:"components"})," folder."]}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:[n(e.div,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"default",children:"src/root.tsx"}),n(e.pre,{"data-language":"tsx","data-theme":"default",children:n(e.code,{"data-language":"tsx","data-theme":"default",children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"import"}),n(e.span,{style:{color:"#D4D4D4"},children:" { "}),n(e.span,{style:{color:"#9CDCFE"},children:"QwikPartytown"}),n(e.span,{style:{color:"#D4D4D4"},children:" } "}),n(e.span,{style:{color:"#C586C0"},children:"from"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"'./components/partytown/partytown'"}),n(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,n(e.span,{class:"line",children:" "}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"export"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#C586C0"},children:"default"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"component$"}),n(e.span,{style:{color:"#D4D4D4"},children:"(() "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#C586C0"},children:"return"}),n(e.span,{style:{color:"#D4D4D4"},children:" ("})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#4EC9B0"},children:"QwikCityProvider"}),n(e.span,{style:{color:"#808080"},children:">"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"      "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#569CD6"},children:"head"}),n(e.span,{style:{color:"#808080"},children:">"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"        "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#569CD6"},children:"meta"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#9CDCFE"},children:"charSet"}),n(e.span,{style:{color:"#D4D4D4"},children:"="}),n(e.span,{style:{color:"#CE9178"},children:'"utf-8"'}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#808080"},children:"/>"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"        "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#4EC9B0"},children:"QwikPartytown"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#9CDCFE"},children:"forward"}),n(e.span,{style:{color:"#D4D4D4"},children:"="}),n(e.span,{style:{color:"#569CD6"},children:"{"}),n(e.span,{style:{color:"#D4D4D4"},children:"["}),n(e.span,{style:{color:"#CE9178"},children:"'dataLayer.push'"}),n(e.span,{style:{color:"#D4D4D4"},children:"]"}),n(e.span,{style:{color:"#569CD6"},children:"}"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#808080"},children:"/>"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"        "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#569CD6"},children:"script"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"          "}),n(e.span,{style:{color:"#9CDCFE"},children:"async"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"          "}),n(e.span,{style:{color:"#9CDCFE"},children:"type"}),n(e.span,{style:{color:"#D4D4D4"},children:"="}),n(e.span,{style:{color:"#CE9178"},children:'"text/partytown"'})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"          "}),n(e.span,{style:{color:"#9CDCFE"},children:"src"}),n(e.span,{style:{color:"#D4D4D4"},children:"="}),n(e.span,{style:{color:"#CE9178"},children:'"https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"'})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"        "}),n(e.span,{style:{color:"#808080"},children:"/>"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"      "}),n(e.span,{style:{color:"#808080"},children:"</"}),n(e.span,{style:{color:"#569CD6"},children:"head"}),n(e.span,{style:{color:"#808080"},children:">"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"      "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#569CD6"},children:"body"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#9CDCFE"},children:"lang"}),n(e.span,{style:{color:"#D4D4D4"},children:"="}),n(e.span,{style:{color:"#CE9178"},children:'"en"'}),n(e.span,{style:{color:"#808080"},children:"></"}),n(e.span,{style:{color:"#569CD6"},children:"body"}),n(e.span,{style:{color:"#808080"},children:">"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#808080"},children:"</"}),n(e.span,{style:{color:"#4EC9B0"},children:"QwikCityProvider"}),n(e.span,{style:{color:"#808080"},children:">"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"  );"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"});"})})]})})]}),`
`,n(e.h2,{id:"advanced",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#advanced",children:n(e.span,{class:"icon icon-link"})}),"Advanced"]}),`
`,n(e.p,{children:["To further configure Partytown with more options, please visit the ",n(e.a,{href:"https://partytown.builder.io/configuration",children:"Partytown Documentation"})]})]})}function c(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(s,l)})):s(l)}const p=()=>r(o,{children:r(c,{},3,null)},3,"o83KqTex");export{p as default,h as frontmatter,d as head,i as headings};
