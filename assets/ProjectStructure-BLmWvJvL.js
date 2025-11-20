import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-B7tNCeqj.js";import{ah as o}from"./chunk-NUUEMKO5-2YHU3AHY.js";import"./index-CjmQ2z5u.js";import"./iframe-BwBut0uK.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Documentation/Project Structure - XB-Core"}),`
`,n.jsx(e.h1,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"xb-core"})," library is the foundation of the Xobito ecosystem. It provides essential shared components, core APIs, and logic that support the functionality of the ",n.jsx(e.code,{children:"xobito-fe"})," frontend and other microservices like ",n.jsx(e.code,{children:"account-fe"})," and ",n.jsx(e.code,{children:"setting-fe"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"purpose",children:"Purpose"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"To act as the backbone of the Xobito ecosystem by centralizing foundational components and APIs."}),`
`,n.jsx(e.li,{children:"To enable a consistent development approach across the platform."}),`
`,n.jsx(e.li,{children:"To promote reusability and reduce redundancy in code."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"responsibilities",children:"Responsibilities"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Core APIs:"})," Provides essential APIs like authentication and user management."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Core Components:"})," Supplies base UI components such as modals, navigation bars, and headers."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Shared Logic:"})," Implements reusable tools and utilities for common functionalities."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-structure",children:"Folder Structure"}),`
`,n.jsxs(e.p,{children:["Below is the detailed folder structure of the ",n.jsx(e.code,{children:"xb-core"})," library."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`xb-core/\r
├── .husky/\r
├── .storybook/\r
├── dist/\r
├── node_modules/\r
├── public/\r
├── src/\r
│   ├── api/\r
│   │   ├── auth/\r
│   │   │   ├── index.ts\r
│   │   │   ├── interface/\r
│   │   │   │   ├── index.ts\r
│   │   ├── index.ts\r
│   ├── component/\r
│   │   ├── navigation/\r
│   │   │   ├── index.tsx\r
│   │   │   ├── config/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   │   ├── modal/\r
│   │   │   ├── index.tsx\r
│   │   │   ├── config/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   │   ├── index.ts\r
│   ├── hook/\r
│   │   ├── useAuth/\r
│   │   │   ├── index.ts\r
│   │   │   ├── interface/\r
│   │   │   │   ├── index.ts\r
│   │   ├── useFetch/\r
│   │   │   ├── index.ts\r
│   │   │   ├── interface/\r
│   │   │   │   ├── index.ts\r
│   │   ├── index.ts\r
│   ├── util/\r
│   │   ├── debounce/\r
│   │   │   ├── index.ts\r
│   │   ├── index.ts\r
│   ├── index.ts\r
│   ├── vite-env.d.ts\r
├── .eslintrc.json\r
├── .gitignore\r
├── .npmrc\r
├── .prettierrc\r
├── README.md\r
├── package.json\r
├── tsconfig.json\r
├── vite.config.ts
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-descriptions",children:"Folder Descriptions"}),`
`,n.jsx(e.h3,{id:"srcapi",children:n.jsx(e.code,{children:"/src/api"})}),`
`,n.jsx(e.p,{children:"Manages all core APIs shared across the platform."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Subfolders:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"auth"}),": Authentication-related API logic and interfaces."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Files:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": Centralized exports for all APIs."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"srccomponent",children:n.jsx(e.code,{children:"/src/component"})}),`
`,n.jsx(e.p,{children:"Provides foundational UI components."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Subfolders:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"navigation"}),": Navigation bar components with associated configurations and interfaces."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"modal"}),": Modal components with reusable configurations."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Files:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": Centralized exports for components."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"srchook",children:n.jsx(e.code,{children:"/src/hook"})}),`
`,n.jsx(e.p,{children:"Implements reusable hooks for shared logic."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Subfolders:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useAuth"}),": Handles authentication logic."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useFetch"}),": A custom hook for API data fetching."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Files:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": Centralized exports for hooks."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"srcutil",children:n.jsx(e.code,{children:"/src/util"})}),`
`,n.jsx(e.p,{children:"Provides reusable utility functions."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Subfolders:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"debounce"}),": Contains a utility function for debouncing logic."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Files:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": Centralized exports for utility functions."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reusable APIs and Components:"})," Core APIs and components like navigation bars and modals are available for reuse."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Custom Hooks:"})," Includes essential hooks like ",n.jsx(e.code,{children:"useAuth"})," for managing user sessions and ",n.jsx(e.code,{children:"useFetch"})," for API calls."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Utility Functions:"})," Provides tools like debounce for optimized performance."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Always import components, hooks, and utilities from their respective ",n.jsx(e.code,{children:"index.ts"})," files to maintain consistency."]}),`
`,n.jsx(e.li,{children:"Document any new API, component, or utility function using Storybook."}),`
`,n.jsx(e.li,{children:"Follow semantic versioning to ensure backward compatibility."}),`
`]})]})}function f(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{f as default};
