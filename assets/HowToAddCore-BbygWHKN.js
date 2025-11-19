import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as o}from"./index-B7tNCeqj.js";import{ah as s}from"./chunk-NUUEMKO5-BJr7MVF1.js";import"./index-CjmQ2z5u.js";import"./iframe-CP3Bl1OB.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function t(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/How to Add Core Features"}),`
`,e.jsx(r.h1,{id:"how-to-add-core-features-in-xb-core",children:"How to Add Core Features in xb-core"}),`
`,e.jsxs(r.p,{children:["This document outlines how to add features like hooks, guards, or contexts in the ",e.jsx(r.code,{children:"core"})," folder."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"folder-structure",children:e.jsx(r.strong,{children:"Folder Structure"})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`└── 📁core\r
    └── 📁context\r
        └── 📁user\r
            └── index.tsx\r
    └── 📁guard\r
        └── 📁auth\r
            └── index.tsx\r
    └── 📁hook\r
        └── index.ts
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"example-adding-a-user-context",children:e.jsx(r.strong,{children:"Example: Adding a User Context"})}),`
`,e.jsx(r.h4,{id:"file-corecontextuserindextsx",children:e.jsxs(r.strong,{children:["File: ",e.jsx(r.code,{children:"core/context/user/index.tsx"})]})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { createContext, useContext, useState } from 'react';\r
\r
const UserContext = createContext();\r
\r
const UserContextProvider = ({ children }) => {\r
  const [user, setUser] = useState(null);\r
\r
  return (\r
    <UserContext.Provider value={{ user, setUser }}>\r
      {children}\r
    </UserContext.Provider>\r
  );\r
};\r
\r
export const useUserContext = () => useContext(UserContext);\r
export { UserContextProvider };
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"best-practices",children:e.jsx(r.strong,{children:"Best Practices"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Keep context and guards modular."}),`
`,e.jsx(r.li,{children:"Use React hooks for shared state management."}),`
`]})]})}function C(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{C as default};
