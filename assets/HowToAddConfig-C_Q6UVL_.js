import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-B7tNCeqj.js";import{ah as t}from"./chunk-NUUEMKO5-Bq6dn-AP.js";import"./index-CjmQ2z5u.js";import"./iframe-D4GH8nI3.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/How to Add a Config"}),`
`,n.jsx(e.h1,{id:"how-to-add-a-config-in-xb-core",children:"How to Add a Config in xb-core"}),`
`,n.jsxs(e.p,{children:["This document provides steps for adding configurations like constants, enums, or interfaces in the ",n.jsx(e.code,{children:"config"})," folder."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-structure",children:n.jsx(e.strong,{children:"Folder Structure"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`└── 📁config\r
    └── 📁constant\r
    └── 📁enum\r
    └── 📁interface\r
    └── index.ts
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"steps",children:n.jsx(e.strong,{children:"Steps"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Add the constant, enum, or interface in its respective folder."}),`
`,n.jsxs(e.li,{children:["Export it from the folder’s ",n.jsx(e.code,{children:"index.ts"})," file and the main ",n.jsx(e.code,{children:"config/index.ts"}),"."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"example-adding-a-constant",children:n.jsx(e.strong,{children:"Example: Adding a Constant"})}),`
`,n.jsx(e.h4,{id:"file-configconstantindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"config/constant/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const DEFAULT_THEME = 'light';
`})}),`
`,n.jsx(e.h4,{id:"file-configindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"config/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export * from './constant';\r
export * from './enum';\r
export * from './interface';
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"best-practices",children:n.jsx(e.strong,{children:"Best Practices"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Organize constants, enums, and interfaces in their respective folders."}),`
`,n.jsx(e.li,{children:"Use descriptive names for constants and enums."}),`
`]})]})}function g(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{g as default};
