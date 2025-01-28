import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-B7tNCeqj.js";import{ah as s}from"./chunk-NUUEMKO5-DzaG07bs.js";import"./index-CjmQ2z5u.js";import"./iframe-Dcht65_9.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Documentation/How to Add a Component"}),`
`,n.jsx(e.h1,{id:"how-to-add-a-component-in-xb-core",children:"How to Add a Component in xb-core"}),`
`,n.jsxs(e.p,{children:["This document outlines the steps to add a new component in the ",n.jsx(e.code,{children:"component"})," folder."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-structure",children:n.jsx(e.strong,{children:"Folder Structure"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`└── 📁component
    └── 📁<component-name>
        └── 📁component
            └── index.tsx
        └── 📁config
            └── 📁enum
            └── 📁interface
            └── index.ts
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';
import { Alert as AntAlert } from 'antd';
import { IAlert } from '../config';

/**
 * Alert component for displaying messages.
 *
 * @param {IAlert} props - Props for the Alert component.
 * @returns {JSX.Element} - Rendered Alert component.
 */
const Alert: React.FC<IAlert> = ({ callBack, option }: IAlert): React.JSX.Element => {
  return (
    <AntAlert
      type={option.type}
      message={option.message}
      closable={option.closable}
      showIcon={option.showIcon}
      onClick={callBack}
    />
  );
};

export { Alert };
`})}),`
`,n.jsx(e.h4,{id:"file-componentalertindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"component/alert/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export * from './component';
export * from './config';
`})}),`
`,n.jsx(e.h4,{id:"file-componentindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"component/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export * from './alert';
export * from './avatar';
export * from './button';
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"best-practices",children:n.jsx(e.strong,{children:"Best Practices"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Always write components as reusable functional components."}),`
`,n.jsx(e.li,{children:"Use TypeScript for strict type definitions and clarity."}),`
`]})]})}function g(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{g as default};
