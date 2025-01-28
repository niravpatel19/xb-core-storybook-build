import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-B7tNCeqj.js";import{ah as o}from"./chunk-NUUEMKO5-DzaG07bs.js";import"./index-CjmQ2z5u.js";import"./iframe-Dcht65_9.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function t(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Documentation/How to Add a Library"}),`
`,e.jsx(r.h1,{id:"how-to-add-a-library-in-xb-core",children:"How to Add a Library in xb-core"}),`
`,e.jsxs(r.p,{children:["This document describes how to add a new utility or component library in the ",e.jsx(r.code,{children:"library"})," folder."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"folder-structure",children:e.jsx(r.strong,{children:"Folder Structure"})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`└── 📁library
    └── 📁axios
        └── index.ts
    └── 📁theme
        └── index.ts
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"example-adding-a-theme-library",children:e.jsx(r.strong,{children:"Example: Adding a Theme Library"})}),`
`,e.jsx(r.h4,{id:"file-librarythemeindexts",children:e.jsxs(r.strong,{children:["File: ",e.jsx(r.code,{children:"library/theme/index.ts"})]})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Button } from 'antd';

export const ThemeButton = ({ theme, onClick }) => (
  <Button onClick={onClick} type={theme === 'dark' ? 'primary' : 'default'}>
    {theme === 'dark' ? 'Dark Theme' : 'Light Theme'}
  </Button>
);
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"best-practices",children:e.jsx(r.strong,{children:"Best Practices"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Keep libraries modular and reusable."}),`
`,e.jsx(r.li,{children:"Test all library features before integration."}),`
`]})]})}function b(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{b as default};
