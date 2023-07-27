import{h as r,F as s,H as l,x as o}from"./q-3396b8e1.js";const d=[{text:"Creating your APIs with $ suffix",id:"creating-your-apis-with--suffix",level:2},{text:"Example",id:"example",level:3}],i={title:"Creating APIs with $ | Tutorial",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat","adamdbradley"]}},h={title:"Creating APIs with $ | Tutorial",contributors:["manucorporat","adamdbradley"]};function c(n){const e=Object.assign({p:"p",code:"code",div:"div",pre:"pre",span:"span",h2:"h2",a:"a",blockquote:"blockquote",strong:"strong",h3:"h3"},n.components);return l(o,{children:[l(e.p,{children:["A powerful feature of the Optimizer is that you can create your own APIs with a ",l(e.code,{children:"$"})," suffix."]}),`
`,l(e.p,{children:"Imagine that we would like to have a delay method that lazy loads its callback. Normally we would have to write something like this:"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:[l(e.span,{style:{color:"#DCDCAA"},children:"setTimeout"}),l(e.span,{style:{color:"#D4D4D4"},children:"(() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#6A9955"},children:"// I am eagerly loaded, but it would be better if I was lazy-loaded."})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"  ..."})}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"}, "}),l(e.span,{style:{color:"#9CDCFE"},children:"timeout"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]})]})})}),`
`,l(e.p,{children:"The issue with the example above is that the callback has to be downloaded and created eagerly. This may be an issue if the closure is large or if the callback is never executed (or only executed later.)"}),`
`,l(e.p,{children:["A better solution would be to have ",l(e.code,{children:"delay$"})," method that can lazy-load the closure associated with the callback. Something like this."]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:[l(e.span,{style:{color:"#DCDCAA"},children:"delay$"}),l(e.span,{style:{color:"#D4D4D4"},children:"(() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#6A9955"},children:"// I am lazy-loaded only when I need to be executed."})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"  ..."})}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"}, "}),l(e.span,{style:{color:"#B5CEA8"},children:"1000"}),l(e.span,{style:{color:"#D4D4D4"},children:")"})]})]})})}),`
`,l(e.p,{children:["In the above solution, the callback is only downloaded when ",l(e.code,{children:"delay$"})," is ready to execute it."]}),`
`,l(e.h2,{id:"creating-your-apis-with--suffix",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#creating-your-apis-with--suffix",children:l(e.span,{class:"icon icon-link"})}),"Creating your APIs with ",l(e.code,{children:"$"})," suffix"]}),`
`,l(e.p,{children:["Qwik runtime works with ",l(e.code,{children:"QRL"}),"s. For this reason we define a method like so:"]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"function"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#DCDCAA"},children:"delayQrl"}),l(e.span,{style:{color:"#D4D4D4"},children:"<"}),l(e.span,{style:{color:"#4EC9B0"},children:"T"}),l(e.span,{style:{color:"#D4D4D4"},children:">("}),l(e.span,{style:{color:"#9CDCFE"},children:"fn"}),l(e.span,{style:{color:"#D4D4D4"},children:": "}),l(e.span,{style:{color:"#4EC9B0"},children:"QRL"}),l(e.span,{style:{color:"#D4D4D4"},children:"<() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4EC9B0"},children:"T"}),l(e.span,{style:{color:"#D4D4D4"},children:">, "}),l(e.span,{style:{color:"#9CDCFE"},children:"delayInMs"}),l(e.span,{style:{color:"#D4D4D4"},children:": "}),l(e.span,{style:{color:"#4EC9B0"},children:"number"}),l(e.span,{style:{color:"#D4D4D4"},children:"): "}),l(e.span,{style:{color:"#4EC9B0"},children:"Promise"}),l(e.span,{style:{color:"#D4D4D4"},children:"<"}),l(e.span,{style:{color:"#4EC9B0"},children:"T"}),l(e.span,{style:{color:"#D4D4D4"},children:"> {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#C586C0"},children:"return"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"new"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4EC9B0"},children:"Promise"}),l(e.span,{style:{color:"#D4D4D4"},children:"(("}),l(e.span,{style:{color:"#9CDCFE"},children:"res"}),l(e.span,{style:{color:"#D4D4D4"},children:") "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#DCDCAA"},children:"setTimeout"}),l(e.span,{style:{color:"#D4D4D4"},children:"(() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"      "}),l(e.span,{style:{color:"#DCDCAA"},children:"res"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"fn"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"invoke"}),l(e.span,{style:{color:"#D4D4D4"},children:"());"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    }, "}),l(e.span,{style:{color:"#9CDCFE"},children:"delayInMs"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"  });"})}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"}"})})]})})}),`
`,l(e.p,{children:["This method knows how to take a ",l(e.code,{children:"QRL"})," and execute it after a certain delay. The key part here is that the ",l(e.code,{children:"QRL.invoke()"})," method is called when the delay is ready and is therefore lazy."]}),`
`,l(e.p,{children:["The next step is to convert the ",l(e.code,{children:"delayQrl"})," method to a ",l(e.code,{children:"delay$"})," alias. This is done with ",l(e.code,{children:"implicit$FirstArg"})," like so:"]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"delay$"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#DCDCAA"},children:"implicit$FirstArg"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"delayQrl"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]})})})}),`
`,l(e.p,{children:"Here are the types to make it clearer as to what is going on."}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:[l(e.span,{style:{color:"#569CD6"},children:"declare"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"function"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#DCDCAA"},children:"delayQrl"}),l(e.span,{style:{color:"#D4D4D4"},children:"<"}),l(e.span,{style:{color:"#4EC9B0"},children:"T"}),l(e.span,{style:{color:"#D4D4D4"},children:">("}),l(e.span,{style:{color:"#9CDCFE"},children:"fn"}),l(e.span,{style:{color:"#D4D4D4"},children:": "}),l(e.span,{style:{color:"#4EC9B0"},children:"QRL"}),l(e.span,{style:{color:"#D4D4D4"},children:"<() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4EC9B0"},children:"T"}),l(e.span,{style:{color:"#D4D4D4"},children:">, "}),l(e.span,{style:{color:"#9CDCFE"},children:"delayInMs"}),l(e.span,{style:{color:"#D4D4D4"},children:": "}),l(e.span,{style:{color:"#4EC9B0"},children:"number"}),l(e.span,{style:{color:"#D4D4D4"},children:"): "}),l(e.span,{style:{color:"#4EC9B0"},children:"Promise"}),l(e.span,{style:{color:"#D4D4D4"},children:"<"}),l(e.span,{style:{color:"#4EC9B0"},children:"T"}),l(e.span,{style:{color:"#D4D4D4"},children:">;"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#569CD6"},children:"declare"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"function"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#DCDCAA"},children:"delay$"}),l(e.span,{style:{color:"#D4D4D4"},children:"<"}),l(e.span,{style:{color:"#4EC9B0"},children:"T"}),l(e.span,{style:{color:"#D4D4D4"},children:">("}),l(e.span,{style:{color:"#DCDCAA"},children:"fn"}),l(e.span,{style:{color:"#D4D4D4"},children:": () "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4EC9B0"},children:"T"}),l(e.span,{style:{color:"#D4D4D4"},children:", "}),l(e.span,{style:{color:"#9CDCFE"},children:"delayInMs"}),l(e.span,{style:{color:"#D4D4D4"},children:": "}),l(e.span,{style:{color:"#4EC9B0"},children:"number"}),l(e.span,{style:{color:"#D4D4D4"},children:"): "}),l(e.span,{style:{color:"#4EC9B0"},children:"Promise"}),l(e.span,{style:{color:"#D4D4D4"},children:"<"}),l(e.span,{style:{color:"#4EC9B0"},children:"T"}),l(e.span,{style:{color:"#D4D4D4"},children:">;"})]})]})})}),`
`,l(e.p,{children:["The above allows us to use ",l(e.code,{children:"delay$"})," in an inlined fashion, but the Optimizer converts the ",l(e.code,{children:"delay$"})," to ",l(e.code,{children:"delayQrl"})," form."]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:[l(e.strong,{children:"NOTE"})," the two methods must have the same prefix. So a general form is:"]}),`
`]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"SOME_NAME_Qrl"}),l(e.span,{style:{color:"#D4D4D4"},children:" = ...;"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"SOME_NAME_$"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#DCDCAA"},children:"implicit$FirstArg"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"SOME_NAME_Qrl"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]})]})})}),`
`,l(e.h3,{id:"example",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#example",children:l(e.span,{class:"icon icon-link"})}),"Example"]}),`
`,l(e.p,{children:["In our example we are executing ",l(e.code,{children:"store.count++"})," and ",l(e.code,{children:"store.delay++"})," together. Wrap the ",l(e.code,{children:"store.delay"})," in ",l(e.code,{children:"delay$()"})," call so that it updates with a one second delay."]})]})}function a(n={}){const{wrapper:e}=n.components||{};return e?l(e,Object.assign({},n,{children:l(c,n)})):c(n)}const D=()=>r(s,{children:r(a,{},3,null)},3,"mzgIdy8y");export{D as default,h as frontmatter,i as head,d as headings};
