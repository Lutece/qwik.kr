import{$ as t,h as i,v as l,M as s,c as a,_ as u}from"./q-3396b8e1.js";const d=({input:n,versions:o})=>t("div",null,{class:"output-detail detail-options"},[i(e,{input:n,inputProp:"entryStrategy",label:"Entry Strategy",options:r,[l]:{inputProp:l,label:l,options:l}},3,"QA_0"),i(e,{input:n,inputProp:"buildMode",label:"Mode",options:p,[l]:{inputProp:l,label:l,options:l}},3,"QA_1"),i(e,{input:n,inputProp:"version",isLoading:o.length===0,label:"Version",options:o,[l]:{inputProp:l,label:l}},3,"QA_2")],1,"QA_3"),e=n=>t("label",null,null,[t("span",null,null,s(n,"label"),1,null),t("select",{disabled:!!n.isLoading,onChange$:a(()=>u(()=>import("./q-f3428ef0.js"),["build/q-f3428ef0.js","build/q-3396b8e1.js"]),"s_vMDTKKBOVs4",[n])},null,[n.options.map(o=>t("option",{selected:o===n.input[n.inputProp]?!0:void 0,value:o},null,o,1,o)),n.isLoading?t("option",null,null,"Loading...",3,"QA_4"):null],0,null)],1,"QA_5"),p=["development","production"],r=["component","hook","single","smart","inline","hoist"];export{p as B,r as E,d as R};