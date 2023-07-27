import{h as s,F as r,H as l,x as o}from"./q-3396b8e1.js";const t=[{text:"Best Practices",id:"best-practices",level:1},{text:"Inline operations in templates",id:"inline-operations-in-templates",level:2},{text:"Avoid registering DOM events in useVisibleTask$()",id:"avoid-registering-dom-events-in-usevisibletask",level:2},{text:"Avoid accessing the location from the window object",id:"avoid-accessing-the-location-from-the-window-object",level:2},{text:"Exception",id:"exception",level:3}],d={title:"Best Practices | Guides",meta:[],styles:[],links:[],frontmatter:{contributors:["mhevery","the-r3aper7","manucorporat","jakovljevic-mladen","kerbelp","wfairclough","cunzaizhuyi","reemardelarosa","un33k","egmaleta","mugan86"]}},D={title:"Best Practices | Guides",contributors:["mhevery","the-r3aper7","manucorporat","jakovljevic-mladen","kerbelp","wfairclough","cunzaizhuyi","reemardelarosa","un33k","egmaleta","mugan86"]};function c(n){const e=Object.assign({h1:"h1",a:"a",span:"span",h2:"h2",p:"p",div:"div",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3",blockquote:"blockquote"},n.components);return l(o,{children:[l(e.h1,{id:"best-practices",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#best-practices",children:l(e.span,{class:"icon icon-link"})}),"Best Practices"]}),`
`,l(e.h2,{id:"inline-operations-in-templates",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#inline-operations-in-templates",children:l(e.span,{class:"icon icon-link"})}),"Inline operations in templates"]}),`
`,l(e.p,{children:"Qwik optimizer can better optimize the reactivity of the application if the operations are inlined in the template."}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:[l(e.div,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"default",children:"Suboptimal implementation"}),l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:l(e.span,{style:{color:"#6A9955"},children:"// Don't do this!"})}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#C586C0"},children:"default"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#DCDCAA"},children:"component$"}),l(e.span,{style:{color:"#D4D4D4"},children:"(() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"signal"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#DCDCAA"},children:"useSignal"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#B5CEA8"},children:"0"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"isBiggerThanZero"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#9CDCFE"},children:"signal"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"value"}),l(e.span,{style:{color:"#D4D4D4"},children:" > "}),l(e.span,{style:{color:"#B5CEA8"},children:"0"}),l(e.span,{style:{color:"#D4D4D4"},children:" ? "}),l(e.span,{style:{color:"#CE9178"},children:"'Bigger than zero'"}),l(e.span,{style:{color:"#D4D4D4"},children:" : "}),l(e.span,{style:{color:"#CE9178"},children:"'Smaller than zero'"}),l(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#C586C0"},children:"return"}),l(e.span,{style:{color:"#D4D4D4"},children:" ("})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#808080"},children:"<"}),l(e.span,{style:{color:"#569CD6"},children:"div"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"      "}),l(e.span,{style:{color:"#808080"},children:"<"}),l(e.span,{style:{color:"#569CD6"},children:"button"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"onClick$"}),l(e.span,{style:{color:"#D4D4D4"},children:"="}),l(e.span,{style:{color:"#569CD6"},children:"{"}),l(e.span,{style:{color:"#D4D4D4"},children:"() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"signal"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"value"}),l(e.span,{style:{color:"#D4D4D4"},children:"++"}),l(e.span,{style:{color:"#569CD6"},children:"}"}),l(e.span,{style:{color:"#808080"},children:">"}),l(e.span,{style:{color:"#D4D4D4"},children:"+"}),l(e.span,{style:{color:"#808080"},children:"</"}),l(e.span,{style:{color:"#569CD6"},children:"button"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"      "}),l(e.span,{style:{color:"#808080"},children:"<"}),l(e.span,{style:{color:"#569CD6"},children:"button"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"onClick$"}),l(e.span,{style:{color:"#D4D4D4"},children:"="}),l(e.span,{style:{color:"#569CD6"},children:"{"}),l(e.span,{style:{color:"#D4D4D4"},children:"() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"signal"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"value"}),l(e.span,{style:{color:"#D4D4D4"},children:"--"}),l(e.span,{style:{color:"#569CD6"},children:"}"}),l(e.span,{style:{color:"#808080"},children:">"}),l(e.span,{style:{color:"#D4D4D4"},children:"-"}),l(e.span,{style:{color:"#808080"},children:"</"}),l(e.span,{style:{color:"#569CD6"},children:"button"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"      "}),l(e.span,{style:{color:"#808080"},children:"<"}),l(e.span,{style:{color:"#569CD6"},children:"div"}),l(e.span,{style:{color:"#808080"},children:">"}),l(e.span,{style:{color:"#569CD6"},children:"{"}),l(e.span,{style:{color:"#9CDCFE"},children:"isBiggerThanZero"}),l(e.span,{style:{color:"#569CD6"},children:"}"}),l(e.span,{style:{color:"#D4D4D4"},children:" - Current value: "}),l(e.span,{style:{color:"#569CD6"},children:"{"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"signal"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"value"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"}"}),l(e.span,{style:{color:"#808080"},children:"</"}),l(e.span,{style:{color:"#569CD6"},children:"div"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#808080"},children:"</"}),l(e.span,{style:{color:"#569CD6"},children:"div"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"  );"})}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"});"})})]})})]}),`
`,l(e.p,{children:["The above implementation will cause the whole template to be re-rendered when the signal changes. This is because the ",l(e.code,{children:"isBiggerThanZero"})," is not inlined in the template."]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:[l(e.div,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"default",children:"Optimal Implementation"}),l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#C586C0"},children:"default"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#DCDCAA"},children:"component$"}),l(e.span,{style:{color:"#D4D4D4"},children:"(() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"signal"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#DCDCAA"},children:"useSignal"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#B5CEA8"},children:"0"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#C586C0"},children:"return"}),l(e.span,{style:{color:"#D4D4D4"},children:" ("})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#808080"},children:"<"}),l(e.span,{style:{color:"#569CD6"},children:"div"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"      "}),l(e.span,{style:{color:"#808080"},children:"<"}),l(e.span,{style:{color:"#569CD6"},children:"button"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"onClick$"}),l(e.span,{style:{color:"#D4D4D4"},children:"="}),l(e.span,{style:{color:"#569CD6"},children:"{"}),l(e.span,{style:{color:"#D4D4D4"},children:"() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"signal"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"value"}),l(e.span,{style:{color:"#D4D4D4"},children:"++"}),l(e.span,{style:{color:"#569CD6"},children:"}"}),l(e.span,{style:{color:"#808080"},children:">"}),l(e.span,{style:{color:"#D4D4D4"},children:"+"}),l(e.span,{style:{color:"#808080"},children:"</"}),l(e.span,{style:{color:"#569CD6"},children:"button"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"        "}),l(e.span,{style:{color:"#808080"},children:"<"}),l(e.span,{style:{color:"#569CD6"},children:"button"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"onClick$"}),l(e.span,{style:{color:"#D4D4D4"},children:"="}),l(e.span,{style:{color:"#569CD6"},children:"{"}),l(e.span,{style:{color:"#D4D4D4"},children:"() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"signal"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"value"}),l(e.span,{style:{color:"#D4D4D4"},children:"--"}),l(e.span,{style:{color:"#569CD6"},children:"}"}),l(e.span,{style:{color:"#808080"},children:">"}),l(e.span,{style:{color:"#D4D4D4"},children:"-"}),l(e.span,{style:{color:"#808080"},children:"</"}),l(e.span,{style:{color:"#569CD6"},children:"button"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"        "}),l(e.span,{style:{color:"#808080"},children:"<"}),l(e.span,{style:{color:"#569CD6"},children:"div"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"          "}),l(e.span,{style:{color:"#569CD6"},children:"{"}),l(e.span,{style:{color:"#9CDCFE"},children:"signal"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"value"}),l(e.span,{style:{color:"#D4D4D4"},children:" > "}),l(e.span,{style:{color:"#B5CEA8"},children:"0"}),l(e.span,{style:{color:"#D4D4D4"},children:" ? "}),l(e.span,{style:{color:"#CE9178"},children:"'Bigger than zero'"}),l(e.span,{style:{color:"#D4D4D4"},children:" : "}),l(e.span,{style:{color:"#CE9178"},children:"'Smaller than zero'"}),l(e.span,{style:{color:"#569CD6"},children:"}"}),l(e.span,{style:{color:"#D4D4D4"},children:" - Current"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"          value: "}),l(e.span,{style:{color:"#569CD6"},children:"{"}),l(e.span,{style:{color:"#9CDCFE"},children:"signal"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"value"}),l(e.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"        "}),l(e.span,{style:{color:"#808080"},children:"</"}),l(e.span,{style:{color:"#569CD6"},children:"div"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#808080"},children:"</"}),l(e.span,{style:{color:"#569CD6"},children:"div"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"  );"})}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"});"})})]})})]}),`
`,l(e.h2,{id:"avoid-registering-dom-events-in-usevisibletask",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#avoid-registering-dom-events-in-usevisibletask",children:l(e.span,{class:"icon icon-link"})}),"Avoid registering DOM events in ",l(e.code,{children:"useVisibleTask$()"})]}),`
`,l(e.p,{children:["Qwik allows to register event listeners in a declarative way, using the ",l(e.code,{children:"useOn()"})," or using JSX."]}),`
`,l(e.p,{children:["When using ",l(e.code,{children:"useVisibleTask"})," to programmatically register events, we are downloading and executing JavaScript eagerly, even if the event is not triggered."]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:[l(e.div,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"default",children:"Suboptimal implementation"}),l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:l(e.span,{style:{color:"#6A9955"},children:"// Don't do this!"})}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#DCDCAA"},children:"useVisibleTask$"}),l(e.span,{style:{color:"#D4D4D4"},children:"(({ "}),l(e.span,{style:{color:"#9CDCFE"},children:"cleanup"}),l(e.span,{style:{color:"#D4D4D4"},children:" }) "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#DCDCAA"},children:"listener"}),l(e.span,{style:{color:"#D4D4D4"},children:" = ("}),l(e.span,{style:{color:"#9CDCFE"},children:"event"}),l(e.span,{style:{color:"#D4D4D4"},children:") "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"mouseEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#9CDCFE"},children:"event"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#C586C0"},children:"as"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4EC9B0"},children:"MouseEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#9CDCFE"},children:"console"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"log"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"mouseEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"x"}),l(e.span,{style:{color:"#D4D4D4"},children:", "}),l(e.span,{style:{color:"#9CDCFE"},children:"mouseEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"y"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"  };"})}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#9CDCFE"},children:"document"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"addEventListener"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#CE9178"},children:"'mousemove'"}),l(e.span,{style:{color:"#D4D4D4"},children:", "}),l(e.span,{style:{color:"#9CDCFE"},children:"listener"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,l(e.span,{class:"line",children:" "}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#DCDCAA"},children:"cleanup"}),l(e.span,{style:{color:"#D4D4D4"},children:"(() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#9CDCFE"},children:"document"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"removeEventListener"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#CE9178"},children:"'mousemove'"}),l(e.span,{style:{color:"#D4D4D4"},children:", "}),l(e.span,{style:{color:"#9CDCFE"},children:"listener"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"  });"})}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"});"})})]})})]}),`
`,l(e.p,{children:"The above implementation causes more JavaScript to load eagerly, rather than responding precisely to user events. Increased upfront JavaScript loading results in slower app performance."}),`
`,l(e.p,{children:["Instead, use the ",l(e.code,{children:"useOnDocument()"})," hook to register events on the ",l(e.code,{children:"document"})," object, this way Qwik will not execute any JS until the event is triggered."]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:[l(e.div,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"default",children:"Optimal Implementation"}),l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:[l(e.span,{style:{color:"#DCDCAA"},children:"useOnDocument"}),l(e.span,{style:{color:"#D4D4D4"},children:"("})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#CE9178"},children:"'mousemove'"}),l(e.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#DCDCAA"},children:"$"}),l(e.span,{style:{color:"#D4D4D4"},children:"(("}),l(e.span,{style:{color:"#9CDCFE"},children:"event"}),l(e.span,{style:{color:"#D4D4D4"},children:") "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"mouseEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#9CDCFE"},children:"event"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#C586C0"},children:"as"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4EC9B0"},children:"MouseEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#9CDCFE"},children:"console"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"log"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"mouseEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"x"}),l(e.span,{style:{color:"#D4D4D4"},children:", "}),l(e.span,{style:{color:"#9CDCFE"},children:"mouseEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"y"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#6A9955"},children:"// No manual clean up required!"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"  })"})}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:");"})})]})})]}),`
`,l(e.p,{children:["When in doubt, instead of ",l(e.code,{children:"useVisibleTask$()"})," use:"]}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:[l(e.code,{children:"useOn()"}),": listen to events on the root element of ",l(e.code,{children:"the current component"}),"."]}),`
`,l(e.li,{children:[l(e.code,{children:"useOnWindow()"}),": listen to events on the ",l(e.code,{children:"window"})," object."]}),`
`,l(e.li,{children:[l(e.code,{children:"useOnDocument()"}),": listen to events on the ",l(e.code,{children:"document"})," object."]}),`
`]}),`
`,l(e.h2,{id:"avoid-accessing-the-location-from-the-window-object",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#avoid-accessing-the-location-from-the-window-object",children:l(e.span,{class:"icon icon-link"})}),"Avoid accessing the location from the ",l(e.code,{children:"window"})," object"]}),`
`,l(e.p,{children:["Don't access ",l(e.code,{children:"window.location"})," directly, use ",l(e.code,{children:"useLocation()"})," hook instead."]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:[l(e.div,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"default",children:"Suboptimal implementation"}),l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:l(e.span,{style:{color:"#6A9955"},children:"// Don't do this!"})}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#DCDCAA"},children:"useVisibleTask$"}),l(e.span,{style:{color:"#D4D4D4"},children:"(()"}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#C586C0"},children:"if"}),l(e.span,{style:{color:"#D4D4D4"},children:" ("}),l(e.span,{style:{color:"#9CDCFE"},children:"window"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"location"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"href"}),l(e.span,{style:{color:"#D4D4D4"},children:")."}),l(e.span,{style:{color:"#DCDCAA"},children:"includes"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#CE9178"},children:"'foo'"}),l(e.span,{style:{color:"#D4D4D4"},children:") {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"        "}),l(e.span,{style:{color:"#6A9955"},children:"//... do the thing"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"    }"})}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"})"})}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#6A9955"},children:"// or"})}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"if"}),l(e.span,{style:{color:"#D4D4D4"},children:" ("}),l(e.span,{style:{color:"#569CD6"},children:"typeof"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"window"}),l(e.span,{style:{color:"#D4D4D4"},children:" !== "}),l(e.span,{style:{color:"#CE9178"},children:'"undefined"'}),l(e.span,{style:{color:"#D4D4D4"},children:") {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"queryParams"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#569CD6"},children:"new"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#DCDCAA"},children:"URLSearchParams"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"window"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"location"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"search"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"query"}),l(e.span,{style:{color:"#D4D4D4"},children:": "}),l(e.span,{style:{color:"#4EC9B0"},children:"Record"}),l(e.span,{style:{color:"#D4D4D4"},children:"<"}),l(e.span,{style:{color:"#4EC9B0"},children:"string"}),l(e.span,{style:{color:"#D4D4D4"},children:", "}),l(e.span,{style:{color:"#4EC9B0"},children:"string"}),l(e.span,{style:{color:"#D4D4D4"},children:"> = {};"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#9CDCFE"},children:"queryParams"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"forEach"}),l(e.span,{style:{color:"#D4D4D4"},children:"(("}),l(e.span,{style:{color:"#9CDCFE"},children:"value"}),l(e.span,{style:{color:"#D4D4D4"},children:", "}),l(e.span,{style:{color:"#9CDCFE"},children:"key"}),l(e.span,{style:{color:"#D4D4D4"},children:") "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"        "}),l(e.span,{style:{color:"#9CDCFE"},children:"query"}),l(e.span,{style:{color:"#D4D4D4"},children:"["}),l(e.span,{style:{color:"#9CDCFE"},children:"key"}),l(e.span,{style:{color:"#D4D4D4"},children:"] = "}),l(e.span,{style:{color:"#9CDCFE"},children:"value"}),l(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"    })"})}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"    "}),l(e.span,{style:{color:"#DCDCAA"},children:"doTheThing"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"query"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"}"})})]})})]}),`
`,l(e.p,{children:"Many actions related to location information can be executed during the initial server-side render, resulting in pure HTML without any JavaScript overhead."}),`
`,l(e.p,{children:"By forcing this logic to run on the client side, it introduces increased upfront JavaScript and leads to eager loading."}),`
`,l(e.p,{children:["Using the ",l(e.code,{children:'if typeof window !== "undefined"'})," pattern may cause the code to be skipped. On the server, the code block will be skipped since the window is always undefined."]}),`
`,l(e.p,{children:"While developers may be accustomed to code running twice, Qwik eliminates this necessity by providing a more efficient approach."}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:[l(e.div,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"default",children:"Optimal Implementation"}),l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:l(e.span,{style:{color:"#6A9955"},children:"// Do this!"})}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"location"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#DCDCAA"},children:"useLocation"}),l(e.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,l(e.span,{class:"line",children:" "}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"if"}),l(e.span,{style:{color:"#D4D4D4"},children:" ("}),l(e.span,{style:{color:"#9CDCFE"},children:"location"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"url"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"href"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"includes"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#CE9178"},children:"'foo'"}),l(e.span,{style:{color:"#D4D4D4"},children:")) {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#6A9955"},children:"// Do the thing"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"}"})}),`
`,l(e.span,{class:"line",children:" "}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#DCDCAA"},children:"doTheThing"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"location"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"url"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"searchParams"}),l(e.span,{style:{color:"#D4D4D4"},children:");"})]})]})})]}),`
`,l(e.h3,{id:"exception",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#exception",children:l(e.span,{class:"icon icon-link"})}),"Exception"]}),`
`,l(e.p,{children:"When using SSG for purely static files, it's inevitable to rely on the server without current location information during the build time."}),`
`,l(e.p,{children:"However, exercise caution! If the required information (such as query parameters) isn't needed until a user event occurs, incorporate the check within your event handling code."}),`
`,l(e.p,{children:"This approach helps to prevent eager loading of JavaScript and improves performance."}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:["See: ",l(e.a,{href:"/docs/api/#uselocation",children:"useLocation() Docs"})]}),`
`]})]})}function i(n={}){const{wrapper:e}=n.components||{};return e?l(e,Object.assign({},n,{children:l(c,n)})):c(n)}const h=()=>s(r,{children:s(i,{},3,null)},3,"FWE6kWSL");export{h as default,D as frontmatter,d as head,t as headings};
