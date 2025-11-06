import{j as r}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-B7tNCeqj.js";import{ah as o}from"./chunk-NUUEMKO5-0FOIIcJ8.js";import"./index-CjmQ2z5u.js";import"./iframe-DWQLQptx.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function t(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(o,{title:"Documentation/How to Add a Library"}),`
`,r.jsx(e.h1,{id:"how-to-add-a-library-in-xb-core",children:"How to Add a Library in xb-core"}),`
`,r.jsxs(e.p,{children:["This document describes how to add a new utility or component library in the ",r.jsx(e.code,{children:"library"})," folder."]}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"folder-structure",children:r.jsx(e.strong,{children:"Folder Structure"})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{children:`└── 📁library\r
    └── 📁axios\r
        └── index.ts\r
    └── 📁theme\r
        └── index.ts
`})}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h3,{id:"example-adding-a-theme-library",children:r.jsx(e.strong,{children:"Example: Adding a Theme Library"})}),`
`,r.jsx(e.h4,{id:"file-librarythemeindexts",children:r.jsxs(e.strong,{children:["File: ",r.jsx(e.code,{children:"library/theme/index.ts"})]})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import { Button } from 'antd';\r
\r
export const ThemeButton = ({ theme, onClick }) => (\r
  <Button onClick={onClick} type={theme === 'dark' ? 'primary' : 'default'}>\r
    {theme === 'dark' ? 'Dark Theme' : 'Light Theme'}\r
  </Button>\r
);
`})}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h3,{id:"best-practices",children:r.jsx(e.strong,{children:"Best Practices"})}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"Keep libraries modular and reusable."}),`
`,r.jsx(e.li,{children:"Test all library features before integration."}),`
`]})]})}function b(n={}){const{wrapper:e}={...i(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(t,{...n})}):t(n)}export{b as default};
