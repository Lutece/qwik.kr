import{h as s,F as c,H as e,x as o}from"./q-3396b8e1.js";const t=[{text:"server$()",id:"server",level:1},{text:"Streaming responses",id:"streaming-responses",level:2},{text:"How does server$() work?",id:"how-does-server-work",level:2}],D={title:"server$ | Qwik City",meta:[],styles:[],links:[],frontmatter:{contributors:["mhevery","manucorporat","AnthonyPAlicea","the-r3aper7"]}},d={title:"server$ | Qwik City",contributors:["mhevery","manucorporat","AnthonyPAlicea","the-r3aper7"]};function r(n){const l=Object.assign({h1:"h1",a:"a",span:"span",code:"code",p:"p",div:"div",pre:"pre",blockquote:"blockquote",h2:"h2"},n.components);return e(o,{children:[e(l.h1,{id:"server",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#server",children:e(l.span,{class:"icon icon-link"})}),e(l.code,{children:"server$()"})]}),`
`,e(l.p,{children:[e(l.code,{children:"server$()"})," allows you to create a function that always execute on the server, making it a great place to access the DB or perform server-only actions."]}),`
`,e(l.p,{children:[e(l.code,{children:"server$"})," is a form of RPC (Remote Procedure Call) mechanism between the client and server, just like a traditional HTTP endpoint but strongly typed thanks to Typescript, and easier to maintain."]}),`
`,e(l.p,{children:[`Your new function will have the following signature:
`,e(l.code,{children:"([AbortSignal, ] ...): Promise<T>"})]}),`
`,e(l.p,{children:[e(l.code,{children:"AbortSignal"}),` is optional, and allows you to cancel a long running request by terminating the connection.
Please note that depending on your server runtime, the function on the server may or may not terminate immediately as it depends on how client disconnections are handled by said runtime.`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{"data-language":"tsx","data-theme":"default",children:e(l.code,{"data-language":"tsx","data-theme":"default",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"import"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#9CDCFE"},children:"component$"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"useSignal"}),e(l.span,{style:{color:"#D4D4D4"},children:" } "}),e(l.span,{style:{color:"#C586C0"},children:"from"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik'"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"import"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#9CDCFE"},children:"server$"}),e(l.span,{style:{color:"#D4D4D4"},children:" } "}),e(l.span,{style:{color:"#C586C0"},children:"from"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik-city'"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#6A9955"},children:"// By wrapping a function with `server$()` we mark it to always"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#6A9955"},children:"// execute on the server. This is a form of RPC mechanism."})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"serverGreeter"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#DCDCAA"},children:"server$"}),e(l.span,{style:{color:"#D4D4D4"},children:"(("}),e(l.span,{style:{color:"#9CDCFE"},children:"firstName"}),e(l.span,{style:{color:"#D4D4D4"},children:": "}),e(l.span,{style:{color:"#4EC9B0"},children:"string"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"lastName"}),e(l.span,{style:{color:"#D4D4D4"},children:": "}),e(l.span,{style:{color:"#4EC9B0"},children:"string"}),e(l.span,{style:{color:"#D4D4D4"},children:") "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"greeting"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#CE9178"},children:"`Hello "}),e(l.span,{style:{color:"#569CD6"},children:"${"}),e(l.span,{style:{color:"#9CDCFE"},children:"firstName"}),e(l.span,{style:{color:"#569CD6"},children:"}"}),e(l.span,{style:{color:"#CE9178"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"${"}),e(l.span,{style:{color:"#9CDCFE"},children:"lastName"}),e(l.span,{style:{color:"#569CD6"},children:"}"}),e(l.span,{style:{color:"#CE9178"},children:"`"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#9CDCFE"},children:"console"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"log"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"'Prints in the server'"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"greeting"}),e(l.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C586C0"},children:"return"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#9CDCFE"},children:"greeting"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"});"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"export"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#C586C0"},children:"default"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"component$"}),e(l.span,{style:{color:"#D4D4D4"},children:"(() "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"firstName"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#DCDCAA"},children:"useSignal"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"''"}),e(l.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"lastName"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#DCDCAA"},children:"useSignal"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"''"}),e(l.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C586C0"},children:"return"}),e(l.span,{style:{color:"#D4D4D4"},children:" ("})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"section"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"label"}),e(l.span,{style:{color:"#808080"},children:">"}),e(l.span,{style:{color:"#D4D4D4"},children:"First name: "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"input"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#9CDCFE"},children:"bind"}),e(l.span,{style:{color:"#D4D4D4"},children:":"}),e(l.span,{style:{color:"#9CDCFE"},children:"value"}),e(l.span,{style:{color:"#D4D4D4"},children:"="}),e(l.span,{style:{color:"#569CD6"},children:"{"}),e(l.span,{style:{color:"#9CDCFE"},children:"firstName"}),e(l.span,{style:{color:"#569CD6"},children:"}"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#808080"},children:"/></"}),e(l.span,{style:{color:"#569CD6"},children:"label"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"label"}),e(l.span,{style:{color:"#808080"},children:">"}),e(l.span,{style:{color:"#D4D4D4"},children:"Last name: "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"input"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#9CDCFE"},children:"bind"}),e(l.span,{style:{color:"#D4D4D4"},children:":"}),e(l.span,{style:{color:"#9CDCFE"},children:"value"}),e(l.span,{style:{color:"#D4D4D4"},children:"="}),e(l.span,{style:{color:"#569CD6"},children:"{"}),e(l.span,{style:{color:"#9CDCFE"},children:"lastName"}),e(l.span,{style:{color:"#569CD6"},children:"}"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#808080"},children:"/></"}),e(l.span,{style:{color:"#569CD6"},children:"label"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"button"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"        "}),e(l.span,{style:{color:"#9CDCFE"},children:"onClick$"}),e(l.span,{style:{color:"#D4D4D4"},children:"="}),e(l.span,{style:{color:"#569CD6"},children:"{async"}),e(l.span,{style:{color:"#D4D4D4"},children:" () "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"          "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"greeting"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#C586C0"},children:"await"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"serverGreeter"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#9CDCFE"},children:"firstName"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"value"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"lastName"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"value"}),e(l.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"          "}),e(l.span,{style:{color:"#DCDCAA"},children:"alert"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#9CDCFE"},children:"greeting"}),e(l.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"        }"}),e(l.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"        greet"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#808080"},children:"</"}),e(l.span,{style:{color:"#569CD6"},children:"button"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#808080"},children:"</"}),e(l.span,{style:{color:"#569CD6"},children:"section"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"  );"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"});"})})]})})}),`
`,e(l.p,{children:[e(l.code,{children:"server$"})," can also read the HTTP cookies, headers, or environment variables, using ",e(l.code,{children:"this"}),". In this case you will need to use a function instead of an arrow function."]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{"data-language":"tsx","data-theme":"default",children:e(l.code,{"data-language":"tsx","data-theme":"default",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#6A9955"},children:"// Notice that the wrapped function is declared as a `async function`"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"addUser"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#DCDCAA"},children:"server$"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#569CD6"},children:"async"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"function"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#9CDCFE"},children:"id"}),e(l.span,{style:{color:"#D4D4D4"},children:": "}),e(l.span,{style:{color:"#4EC9B0"},children:"number"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"fullName"}),e(l.span,{style:{color:"#D4D4D4"},children:": "}),e(l.span,{style:{color:"#4EC9B0"},children:"string"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"address"}),e(l.span,{style:{color:"#D4D4D4"},children:": "}),e(l.span,{style:{color:"#4EC9B0"},children:"Address"}),e(l.span,{style:{color:"#D4D4D4"},children:") {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#6A9955"},children:"// The `this` is the `RequestEvent` object, which contains"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#6A9955"},children:"// the HTTP headers, cookies, and environment variables."})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"db"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#DCDCAA"},children:"createClient"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#569CD6"},children:"this"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"env"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"get"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"'DB_KEY'"}),e(l.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C586C0"},children:"if"}),e(l.span,{style:{color:"#D4D4D4"},children:" ("}),e(l.span,{style:{color:"#569CD6"},children:"this"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"cookie"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"get"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"'user-session'"}),e(l.span,{style:{color:"#D4D4D4"},children:")) {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#C586C0"},children:"await"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#9CDCFE"},children:"db"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#DCDCAA"},children:"from"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"'users'"}),e(l.span,{style:{color:"#D4D4D4"},children:")."}),e(l.span,{style:{color:"#DCDCAA"},children:"insert"}),e(l.span,{style:{color:"#D4D4D4"},children:"({"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#9CDCFE"},children:"id"}),e(l.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#9CDCFE"},children:"fullName"}),e(l.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#9CDCFE"},children:"address"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"    });"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#C586C0"},children:"return"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#9CDCFE"},children:"success:"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"true"}),e(l.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"    }"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"  }"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C586C0"},children:"return"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#9CDCFE"},children:"success:"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"false"}),e(l.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"  }"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"})"})})]})})}),`
`,e(l.blockquote,{children:[`
`,e(l.p,{children:"Server$ can accept any number of arguments and return any value that can be serialized by Qwik, that includes primitives, objects, arrays, bigint, JSX nodes and even Promises, just to name a few."}),`
`]}),`
`,e(l.h2,{id:"streaming-responses",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#streaming-responses",children:e(l.span,{class:"icon icon-link"})}),"Streaming responses"]}),`
`,e(l.p,{children:[e(l.code,{children:"server$"})," can return a stream of data by using an async generator. This is useful for streaming data from the server to the client."]}),`
`,e(l.p,{children:["Terminating the generator on the client side (e.g. by calling ",e(l.code,{children:"return()"})," on the generator, or by breaking out from your async for-loop) will terminate the connection. As with ",e(l.code,{children:"AbortSignal"}),` -
how the generator will terminate on the server side depends on the server runtime and how client disconnects are handled.`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{"data-language":"tsx","data-theme":"default",children:e(l.code,{"data-language":"tsx","data-theme":"default",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"import"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#9CDCFE"},children:"component$"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"useSignal"}),e(l.span,{style:{color:"#D4D4D4"},children:" } "}),e(l.span,{style:{color:"#C586C0"},children:"from"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik'"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"import"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#9CDCFE"},children:"server$"}),e(l.span,{style:{color:"#D4D4D4"},children:" } "}),e(l.span,{style:{color:"#C586C0"},children:"from"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik-city'"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"stream"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#DCDCAA"},children:"server$"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#569CD6"},children:"async"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"function*"}),e(l.span,{style:{color:"#D4D4D4"},children:" () {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C586C0"},children:"for"}),e(l.span,{style:{color:"#D4D4D4"},children:" ("}),e(l.span,{style:{color:"#569CD6"},children:"let"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#9CDCFE"},children:"i"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#B5CEA8"},children:"0"}),e(l.span,{style:{color:"#D4D4D4"},children:"; "}),e(l.span,{style:{color:"#9CDCFE"},children:"i"}),e(l.span,{style:{color:"#D4D4D4"},children:" < "}),e(l.span,{style:{color:"#B5CEA8"},children:"10"}),e(l.span,{style:{color:"#D4D4D4"},children:"; "}),e(l.span,{style:{color:"#9CDCFE"},children:"i"}),e(l.span,{style:{color:"#D4D4D4"},children:"++) {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#C586C0"},children:"yield"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#9CDCFE"},children:"i"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#C586C0"},children:"await"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"new"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4EC9B0"},children:"Promise"}),e(l.span,{style:{color:"#D4D4D4"},children:"(("}),e(l.span,{style:{color:"#9CDCFE"},children:"resolve"}),e(l.span,{style:{color:"#D4D4D4"},children:") "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"setTimeout"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#9CDCFE"},children:"resolve"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#B5CEA8"},children:"1000"}),e(l.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"  }"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"});"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"export"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#C586C0"},children:"default"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"component$"}),e(l.span,{style:{color:"#D4D4D4"},children:"(() "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"message"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#DCDCAA"},children:"useSignal"}),e(l.span,{style:{color:"#D4D4D4"},children:"("}),e(l.span,{style:{color:"#CE9178"},children:"''"}),e(l.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C586C0"},children:"return"}),e(l.span,{style:{color:"#D4D4D4"},children:" ("})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"div"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"button"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"        "}),e(l.span,{style:{color:"#9CDCFE"},children:"onClick$"}),e(l.span,{style:{color:"#D4D4D4"},children:"="}),e(l.span,{style:{color:"#569CD6"},children:"{async"}),e(l.span,{style:{color:"#D4D4D4"},children:" () "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"          "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"response"}),e(l.span,{style:{color:"#D4D4D4"},children:" = "}),e(l.span,{style:{color:"#C586C0"},children:"await"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"stream"}),e(l.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"          "}),e(l.span,{style:{color:"#C586C0"},children:"for"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#C586C0"},children:"await"}),e(l.span,{style:{color:"#D4D4D4"},children:" ("}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#4FC1FF"},children:"i"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#569CD6"},children:"of"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#9CDCFE"},children:"response"}),e(l.span,{style:{color:"#D4D4D4"},children:") {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"            "}),e(l.span,{style:{color:"#9CDCFE"},children:"message"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"value"}),e(l.span,{style:{color:"#D4D4D4"},children:" += "}),e(l.span,{style:{color:"#CE9178"},children:"` "}),e(l.span,{style:{color:"#569CD6"},children:"${"}),e(l.span,{style:{color:"#9CDCFE"},children:"i"}),e(l.span,{style:{color:"#569CD6"},children:"}"}),e(l.span,{style:{color:"#CE9178"},children:"`"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"          }"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"        }"}),e(l.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"        start"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#808080"},children:"</"}),e(l.span,{style:{color:"#569CD6"},children:"button"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"div"}),e(l.span,{style:{color:"#808080"},children:">"}),e(l.span,{style:{color:"#569CD6"},children:"{"}),e(l.span,{style:{color:"#9CDCFE"},children:"message"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"value"}),e(l.span,{style:{color:"#569CD6"},children:"}"}),e(l.span,{style:{color:"#808080"},children:"</"}),e(l.span,{style:{color:"#569CD6"},children:"div"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#808080"},children:"</"}),e(l.span,{style:{color:"#569CD6"},children:"div"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"  );"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"});"})})]})})}),`
`,e(l.p,{children:"This API is actually used to implement QwikGPT streaming responses in our docs site."}),`
`,e(l.h2,{id:"how-does-server-work",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#how-does-server-work",children:e(l.span,{class:"icon icon-link"})}),"How does ",e(l.code,{children:"server$()"})," work?"]}),`
`,e(l.p,{children:["A ",e(l.code,{children:"server$()"})," wraps a function and returns an async proxy to the function. On the server, the proxy function directly calls the wrapped function, and a HTTP endpoint is automatically created by the ",e(l.code,{children:"server$()"})," function."]}),`
`,e(l.p,{children:["On the client, the proxy function invokes the wrapped function via an HTTP request, using ",e(l.code,{children:"fetch()"}),"."]}),`
`,e(l.blockquote,{children:[`
`,e(l.p,{children:["Note: The ",e(l.code,{children:"server$()"})," function must ensure that the server and client have the same version of the code executing. If there is a version skew the behavior is undefined and may result in an error. If version skew is a common problem then a more formal RPC mechanism should be used such as a tRPC or other library."]}),`
`]})]})}function a(n={}){const{wrapper:l}=n.components||{};return l?e(l,Object.assign({},n,{children:e(r,n)})):r(n)}const h=()=>s(c,{children:s(a,{},3,null)},3,"SWH2S9HZ");export{h as default,d as frontmatter,D as head,t as headings};
