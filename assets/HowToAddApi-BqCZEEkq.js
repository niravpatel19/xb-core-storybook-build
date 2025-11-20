import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as s}from"./index-B7tNCeqj.js";import{ah as o}from"./chunk-NUUEMKO5-Bq6dn-AP.js";import"./index-CjmQ2z5u.js";import"./iframe-D4GH8nI3.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Documentation/How to Add an API"}),`
`,n.jsx(e.h1,{id:"how-to-add-an-api-in-xb-core",children:"How to Add an API in xb-core"}),`
`,n.jsxs(e.p,{children:["This document provides steps for adding a new API module in the ",n.jsx(e.code,{children:"api"})," folder of the project."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-structure",children:n.jsx(e.strong,{children:"Folder Structure"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`└── 📁api\r
    └── 📁<module-name>\r
        └── index.ts\r
    └── index.ts
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"steps",children:n.jsx(e.strong,{children:"Steps"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Create a folder"})," inside the ",n.jsx(e.code,{children:"api"})," directory for the new module."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Create an ",n.jsx(e.code,{children:"index.ts"})," file"]})," inside the new folder."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Extend the ",n.jsx(e.code,{children:"BaseAPI"})," class"]})," and initialize the ",n.jsx(e.code,{children:"AxiosHelper"}),"."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"example-adding-accountapi",children:n.jsxs(e.strong,{children:["Example: Adding ",n.jsx(e.code,{children:"AccountAPI"})]})}),`
`,n.jsx(e.h4,{id:"file-apiaccountindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"api/account/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Utility\r
import { AxiosHelper } from '@library/axios';\r
\r
// API\r
import { BaseAPI } from '../base';\r
\r
// Config\r
import * as environment from 'src/environment/api';\r
\r
/**\r
 * Class for interacting with the Account API.\r
 * Utilizes AxiosHelper for making HTTP requests.\r
 */\r
class AccountAPI extends BaseAPI {\r
  constructor() {\r
    super();\r
    this.axiosHelper = new AxiosHelper({\r
      baseURL: \`\${environment.BASE_URL}/account/api/\${environment.API_VERSION}\`,\r
    });\r
  }\r
}\r
\r
export { AccountAPI };
`})}),`
`,n.jsx(e.h4,{id:"file-apiindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"api/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export * from './account';
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"best-practices",children:n.jsx(e.strong,{children:"Best Practices"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"BaseAPI"})," for all API classes to maintain consistency."]}),`
`,n.jsxs(e.li,{children:["Keep ",n.jsx(e.code,{children:"baseURL"})," configurable through the environment variables."]}),`
`]})]})}function A(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{A as default};
