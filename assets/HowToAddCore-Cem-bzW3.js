import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as o}from"./index-B7tNCeqj.js";import{ah as s}from"./chunk-NUUEMKO5-DzaG07bs.js";import"./index-CjmQ2z5u.js";import"./iframe-Dcht65_9.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/How to Add Core Features"}),`
`,e.jsx(n.h1,{id:"how-to-add-core-features-in-xb-core",children:"How to Add Core Features in xb-core"}),`
`,e.jsxs(n.p,{children:["This document outlines how to add features like hooks, guards, or contexts in the ",e.jsx(n.code,{children:"core"})," folder."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"folder-structure",children:e.jsx(n.strong,{children:"Folder Structure"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`└── 📁core
    └── 📁context
        └── 📁user
            └── index.tsx
    └── 📁guard
        └── 📁auth
            └── index.tsx
    └── 📁hook
        └── index.ts
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"example-adding-a-user-context",children:e.jsx(n.strong,{children:"Example: Adding a User Context"})}),`
`,e.jsx(n.h4,{id:"file-corecontextuserindextsx",children:e.jsxs(n.strong,{children:["File: ",e.jsx(n.code,{children:"core/context/user/index.tsx"})]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
export { UserContextProvider };
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"best-practices",children:e.jsx(n.strong,{children:"Best Practices"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep context and guards modular."}),`
`,e.jsx(n.li,{children:"Use React hooks for shared state management."}),`
`]})]})}function C(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{C as default};
