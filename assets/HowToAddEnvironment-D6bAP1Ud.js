import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as s}from"./index-B7tNCeqj.js";import{ah as t}from"./chunk-NUUEMKO5-2YHU3AHY.js";import"./index-CjmQ2z5u.js";import"./iframe-BwBut0uK.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/How to Add Environment Variables"}),`
`,n.jsx(e.h1,{id:"how-to-add-environment-variables-in-xb-core",children:"How to Add Environment Variables in xb-core"}),`
`,n.jsxs(e.p,{children:["This document explains how to add environment variables in the ",n.jsx(e.code,{children:"environment"})," folder."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-structure",children:n.jsx(e.strong,{children:"Folder Structure"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`└── 📁environment\r
    └── 📁api\r
        └── index.ts
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"steps",children:n.jsx(e.strong,{children:"Steps"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Add environment variables in ",n.jsx(e.code,{children:"src/environment/api/index.ts"}),"."]}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"import.meta.env"})," to fetch values dynamically."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"example",children:n.jsx(e.strong,{children:"Example"})}),`
`,n.jsx(e.h4,{id:"file-environmentapiindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"environment/api/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const BASE_URL = import.meta.env.VITE_API_BASE_URL;\r
export const API_VERSION = import.meta.env.VITE_API_VERSION;
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"best-practices",children:n.jsx(e.strong,{children:"Best Practices"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Always retrieve environment variables dynamically using ",n.jsx(e.code,{children:"import.meta.env"}),"."]}),`
`,n.jsx(e.li,{children:"Use descriptive names for environment variables."}),`
`]})]})}function u(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{u as default};
