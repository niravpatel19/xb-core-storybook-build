import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as t}from"./index-B7tNCeqj.js";import{ah as s}from"./chunk-NUUEMKO5-2YHU3AHY.js";import"./index-CjmQ2z5u.js";import"./iframe-BwBut0uK.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function o(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Documentation/How to Add a Component"}),`
`,n.jsx(e.h1,{id:"how-to-add-a-component-in-xb-core",children:"How to Add a Component in xb-core"}),`
`,n.jsxs(e.p,{children:["This document outlines the steps to add a new component in the ",n.jsx(e.code,{children:"component"})," folder."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-structure",children:n.jsx(e.strong,{children:"Folder Structure"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`└── 📁component\r
    └── 📁<component-name>\r
        └── 📁component\r
            └── index.tsx\r
        └── 📁config\r
            └── 📁enum\r
            └── 📁interface\r
            └── index.ts\r
        └── index.ts
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"steps",children:n.jsx(e.strong,{children:"Steps"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Create a folder"})," inside the ",n.jsx(e.code,{children:"component"})," directory for your component."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Add subfolders"})," like ",n.jsx(e.code,{children:"component"}),", ",n.jsx(e.code,{children:"config"}),", and ",n.jsx(e.code,{children:"interface"})," as needed."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Implement the component logic"})," in ",n.jsx(e.code,{children:"component/index.tsx"}),"."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"example-adding-an-alert-component",children:n.jsx(e.strong,{children:"Example: Adding an Alert Component"})}),`
`,n.jsx(e.h4,{id:"file-componentalertcomponentindextsx",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"component/alert/component/index.tsx"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import { Alert as AntAlert } from 'antd';\r
import { IAlert } from '../config';\r
\r
/**\r
 * Alert component for displaying messages.\r
 *\r
 * @param {IAlert} props - Props for the Alert component.\r
 * @returns {JSX.Element} - Rendered Alert component.\r
 */\r
const Alert: React.FC<IAlert> = ({ callBack, option }: IAlert): React.JSX.Element => {\r
  return (\r
    <AntAlert\r
      type={option.type}\r
      message={option.message}\r
      closable={option.closable}\r
      showIcon={option.showIcon}\r
      onClick={callBack}\r
    />\r
  );\r
};\r
\r
export { Alert };
`})}),`
`,n.jsx(e.h4,{id:"file-componentalertindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"component/alert/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export * from './component';\r
export * from './config';
`})}),`
`,n.jsx(e.h4,{id:"file-componentindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"component/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export * from './alert';\r
export * from './avatar';\r
export * from './button';
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"best-practices",children:n.jsx(e.strong,{children:"Best Practices"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Always write components as reusable functional components."}),`
`,n.jsx(e.li,{children:"Use TypeScript for strict type definitions and clarity."}),`
`]})]})}function g(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{g as default};
