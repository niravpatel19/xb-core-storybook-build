import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as s}from"./index-B7tNCeqj.js";import{ah as t}from"./chunk-NUUEMKO5-4mrWzxjr.js";import"./index-CjmQ2z5u.js";import"./iframe-DFb6COPX.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/Project Structure and Management Xobito Ecosystem"}),`
`,n.jsx(e.h1,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The Xobito ecosystem is a modular and scalable architecture designed for a multi-microservice environment. It consists of a primary frontend project (",n.jsx(e.code,{children:"xobito-fe"}),"), multiple micro-frontends like ",n.jsx(e.code,{children:"account-fe"})," and ",n.jsx(e.code,{children:"setting-fe"}),", and three base libraries: ",n.jsx(e.code,{children:"xb-core"}),", ",n.jsx(e.code,{children:"xb-utility"}),", and ",n.jsx(e.code,{children:"xb-shared"}),". These components work together to ensure a clean separation of concerns, reusability, and ease of maintenance."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"project-structures",children:"Project Structures"}),`
`,n.jsxs(e.h3,{id:"xobito-front-end-xobito-fe",children:["Xobito Front-End (",n.jsx(e.code,{children:"xobito-fe"}),")"]}),`
`,n.jsx(e.p,{children:"The primary frontend application acts as the central integration point for all microservices and shared libraries within the Xobito ecosystem."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Folder Structure:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`xobito-fe/\r
├── .husky/\r
├── .vscode/\r
├── build/\r
├── node_modules/\r
├── public/\r
├── src/\r
│   ├── asset/\r
│   ├── i18n/\r
│   ├── module/\r
│   ├── style/\r
│   ├── App.tsx\r
│   ├── declarations.d.ts\r
│   ├── index.tsx\r
│   ├── vite-env.d.ts\r
├── .env.example\r
├── .eslintrc.json\r
├── .gitignore\r
├── .npmrc\r
├── .prettierrc\r
├── Dockerfile\r
├── package.json\r
├── tailwind.config.js\r
├── tsconfig.json\r
├── vite.config.ts
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"To act as the main entry point for all user-facing functionalities of the Xobito platform."}),`
`,n.jsx(e.li,{children:"To serve as the integration layer for micro-frontends and base libraries."}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Responsibilities:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Hosts the primary user interface and core modules such as dashboards, notifications, and user settings."}),`
`,n.jsxs(e.li,{children:["Acts as the consumer of reusable components and utilities from ",n.jsx(e.code,{children:"xb-core"}),", ",n.jsx(e.code,{children:"xb-utility"}),", and ",n.jsx(e.code,{children:"xb-shared"}),"."]}),`
`,n.jsx(e.li,{children:"Handles global state management, routing, and theming for the entire platform."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h3,{id:"account-front-end-account-fe",children:["Account Front-End (",n.jsx(e.code,{children:"account-fe"}),")"]}),`
`,n.jsx(e.p,{children:"A dedicated micro-frontend responsible for managing account-related functionalities."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Folder Structure:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`account-fe/\r
├── .husky/\r
├── .vscode/\r
├── build/\r
├── node_modules/\r
├── public/\r
├── src/\r
│   ├── asset/\r
│   ├── i18n/\r
│   ├── lang/\r
│   ├── module/\r
│   ├── style/\r
│   ├── app.tsx\r
│   ├── declarations.d.ts\r
│   ├── index.tsx\r
│   ├── vite-env.d.ts\r
├── .env.example\r
├── .eslintrc.json\r
├── .gitignore\r
├── .npmrc\r
├── .prettierrc\r
├── Dockerfile\r
├── package.json\r
├── tailwind.config.js\r
├── tsconfig.json\r
├── vite.config.ts
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"To independently manage account-related operations such as registration, authentication, and user profile management."}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Responsibilities:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Integrates APIs and services for secure user authentication and profile management."}),`
`,n.jsxs(e.li,{children:["Implements reusable UI components and shared logic from ",n.jsx(e.code,{children:"xb-shared"})," and ",n.jsx(e.code,{children:"xb-utility"}),"."]}),`
`,n.jsxs(e.li,{children:["Maintains localization and theming consistent with the main frontend (",n.jsx(e.code,{children:"xobito-fe"}),")."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h3,{id:"setting-front-end-setting-fe",children:["Setting Front-End (",n.jsx(e.code,{children:"setting-fe"}),")"]}),`
`,n.jsx(e.p,{children:"A dedicated micro-frontend for managing application-wide settings and configurations."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Folder Structure:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`setting-fe/\r
├── .husky/\r
├── .vscode/\r
├── build/\r
├── node_modules/\r
├── public/\r
├── src/\r
│   ├── asset/\r
│   ├── i18n/\r
│   ├── lang/\r
│   ├── module/\r
│   ├── style/\r
│   ├── app.tsx\r
│   ├── declarations.d.ts\r
│   ├── index.tsx\r
│   ├── vite-env.d.ts\r
├── .env.example\r
├── .eslintrc.json\r
├── .gitignore\r
├── .npmrc\r
├── .prettierrc\r
├── Dockerfile\r
├── package.json\r
├── tailwind.config.js\r
├── tsconfig.json\r
├── vite.config.ts
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"To independently manage all settings-related functionalities, including user preferences, configurations, and system parameters."}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Responsibilities:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Provides a modular structure to handle specific settings operations, such as themes, notifications, and system configurations."}),`
`,n.jsxs(e.li,{children:["Integrates shared components and utilities from ",n.jsx(e.code,{children:"xb-shared"})," and ",n.jsx(e.code,{children:"xb-utility"}),"."]}),`
`,n.jsx(e.li,{children:"Ensures uniform localization and responsiveness across all devices."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"micro-front-end-structure-standardized",children:"Micro-Front-End Structure (Standardized)"}),`
`,n.jsxs(e.p,{children:["All micro-frontends, including ",n.jsx(e.code,{children:"account-fe"}),", ",n.jsx(e.code,{children:"setting-fe"}),", and future ones, follow the same base structure for consistency and scalability. This standardization allows easy onboarding of new developers and better maintainability."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Standard Folder Structure:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`<micro-frontend>/\r
├── .husky/\r
├── .vscode/\r
├── build/\r
├── node_modules/\r
├── public/\r
├── src/\r
│   ├── asset/\r
│   ├── i18n/\r
│   ├── lang/\r
│   ├── module/\r
│   ├── style/\r
│   ├── app.tsx\r
│   ├── declarations.d.ts\r
│   ├── index.tsx\r
│   ├── vite-env.d.ts\r
├── .env.example\r
├── .eslintrc.json\r
├── .gitignore\r
├── .npmrc\r
├── .prettierrc\r
├── Dockerfile\r
├── package.json\r
├── tailwind.config.js\r
├── tsconfig.json\r
├── vite.config.ts
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"To modularize and encapsulate specific functionalities (e.g., accounts, settings) into their own micro-frontends."}),`
`,n.jsxs(e.li,{children:["To ensure reusability of components and logic through integration with ",n.jsx(e.code,{children:"xb-shared"})," and ",n.jsx(e.code,{children:"xb-utility"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Responsibilities:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Each micro-frontend handles a single responsibility, following the principle of separation of concerns."}),`
`,n.jsx(e.li,{children:"Leverages shared utilities, components, and theming for a consistent user experience."}),`
`,n.jsx(e.li,{children:"Supports independent development, testing, and deployment cycles."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"base-libraries",children:"Base Libraries"}),`
`,n.jsxs(e.h4,{id:"xb-core-xb-core",children:["XB-Core (",n.jsx(e.code,{children:"xb-core"}),")"]}),`
`,n.jsx(e.p,{children:"Provides the foundational components, APIs, and shared logic for the entire ecosystem."}),`
`,n.jsxs(e.h4,{id:"xb-utility-xb-utility",children:["XB-Utility (",n.jsx(e.code,{children:"xb-utility"}),")"]}),`
`,n.jsx(e.p,{children:"A library for utility functions, reusable logic, and configuration management."}),`
`,n.jsxs(e.h4,{id:"xb-shared-xb-shared",children:["XB-Shared (",n.jsx(e.code,{children:"xb-shared"}),")"]}),`
`,n.jsx(e.p,{children:"Contains reusable UI components and assets shared across multiple microservices."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Separation of Concerns:"})," Each micro-frontend and base library has a well-defined responsibility."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reusable Logic and Components:"})," Leverage ",n.jsx(e.code,{children:"xb-shared"})," and ",n.jsx(e.code,{children:"xb-utility"})," to avoid duplication."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistent Folder Structure:"})," Follow the standardized structure for all microservices."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Independent Development:"})," Micro-frontends are independently developed, tested, and deployed."]}),`
`]})]})}function g(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{g as default};
