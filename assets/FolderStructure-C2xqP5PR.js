import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-B7tNCeqj.js";import{ah as t}from"./chunk-NUUEMKO5-CwxPReyq.js";import"./index-CjmQ2z5u.js";import"./iframe-B9gwkfpw.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function s(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/Folder Structure"}),`
`,n.jsx(r.h1,{id:"complete-folder-structure",children:"Complete Folder Structure"}),`
`,n.jsxs(r.p,{children:["The following documentation outlines the structure of the ",n.jsx(r.code,{children:"src"})," folder and provides a detailed understanding of its purpose. It also offers best practices for structuring a new project, ensuring scalability, maintainability, and clarity."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`├── src\r
│   ├── App.tsx\r
│   ├── index.ts\r
│   ├── index.tsx\r
│   ├── vite-env.d.ts\r
│   ├── api/\r
│   │   ├── index.ts\r
│   │   ├── account/\r
│   │   │   ├── index.ts\r
│   │   ├── base/\r
│   │   │   ├── index.ts\r
│   │   ├── biiling/\r
│   │   │   ├── index.ts\r
│   │   ├── master/\r
│   │   │   ├── index.ts\r
│   │   ├── organization/\r
│   │   │   ├── index.ts\r
│   │   ├── setting/\r
│   │   │   ├── index.ts\r
│   ├── asset/\r
│   │   ├── index.ts\r
│   │   ├── icon/\r
│   │   │   ├── index.ts\r
│   │   │   ├── svg/\r
│   │   │   │   ├── afrikaan-flag.tsx\r
│   │   │   │   ├── albanian-flag.tsx\r
│   │   │   │   ├── dust-bin.tsx\r
│   │   │   │   ├── edit.tsx\r
│   │   │   │   ├── eye.tsx\r
│   │   │   │   ├── half-moon.tsx\r
│   │   │   │   ├── indian-flag.tsx\r
│   │   │   │   ├── loaderDot.tsx\r
│   │   │   │   ├── portuguese-flag.tsx\r
│   │   │   │   ├── sort-arrow-blank.tsx\r
│   │   │   │   ├── sort-arrow.tsx\r
│   │   │   │   ├── spanish-flag.tsx\r
│   │   │   │   ├── sun.tsx\r
│   │   │   │   ├── three-dot.tsx\r
│   │   │   │   ├── usa-flag.tsx\r
│   │   ├── image/\r
│   │   │   ├── index.ts\r
│   │   │   ├── png/\r
│   │   │   │   ├── flag.png\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── logo.png\r
│   ├── component/\r
│   │   ├── index.ts\r
│   │   ├── alert/\r
│   │   │   ├── index.ts\r
│   │   │   ├── component/\r
│   │   │   │   ├── index.tsx\r
│   │   │   ├── config/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── enum/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   │   ├── avatar/\r
│   │   │   ├── index.tsx\r
│   │   │   ├── interface/\r
│   │   │   │   ├── index.ts\r
│   │   ├── button/\r
│   │   │   ├── index.ts\r
│   │   │   ├── component/\r
│   │   │   │   ├── index.tsx\r
│   │   │   ├── config/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── enum/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   │   ├── form/\r
│   │   │   ├── index.ts\r
│   │   │   ├── component/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── control/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── input/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   │   │   ├── otp/\r
│   │   │   │   │   │   │   ├── index.tsx\r
│   │   │   │   │   │   │   ├── interface/\r
│   │   │   │   │   │   │   │   ├── index.ts\r
│   │   │   │   │   │   ├── password/\r
│   │   │   │   │   │   │   ├── index.tsx\r
│   │   │   │   │   │   ├── text-input/\r
│   │   │   │   │   │   │   ├── index.tsx\r
│   │   │   │   ├── layout/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── form/\r
│   │   │   │   │   │   ├── index.tsx\r
│   │   │   │   │   │   ├── config/\r
│   │   │   │   │   │   │   ├── index.ts\r
│   │   │   │   │   │   │   ├── interface/\r
│   │   │   │   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── form-item/\r
│   │   │   │   │   │   ├── index.tsx\r
│   │   │   ├── config/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── constant/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── layout/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── enum/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── form/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── layout/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── api/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── base/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── form-item/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── validation/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   ├── util/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── base/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── layout/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── validation/\r
│   │   │   │   │   ├── index.ts\r
│   │   ├── loader/\r
│   │   │   ├── index.tsx\r
│   │   ├── table/\r
│   │   │   ├── index.tsx\r
│   │   │   ├── component/\r
│   │   │   │   ├── footer/\r
│   │   │   │   │   ├── index.tsx\r
│   │   │   │   │   ├── interface/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── header/\r
│   │   │   │   │   ├── index.tsx\r
│   │   │   │   │   ├── enum/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── interface/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   ├── constant/\r
│   │   │   │   ├── index.ts\r
│   │   │   ├── enum/\r
│   │   │   │   ├── index.ts\r
│   │   │   ├── hook/\r
│   │   │   │   ├── index.tsx\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   ├── interface/\r
│   │   │   │   ├── index.ts\r
│   │   │   ├── util/\r
│   │   │   │   ├── index.tsx\r
│   ├── config/\r
│   │   ├── index.ts\r
│   │   ├── constant/\r
│   │   │   ├── index.ts\r
│   │   ├── enum/\r
│   │   │   ├── index.ts\r
│   │   ├── interface/\r
│   │   │   ├── index.ts\r
│   │   │   ├── user/\r
│   │   │   │   ├── index.ts\r
│   ├── core/\r
│   │   ├── index.ts\r
│   │   ├── context/\r
│   │   │   ├── index.ts\r
│   │   │   ├── org-user/\r
│   │   │   │   ├── index.tsx\r
│   │   │   │   ├── config/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── interface/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   ├── theme/\r
│   │   │   │   ├── index.tsx\r
│   │   │   │   ├── config/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── interface/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   ├── user/\r
│   │   │   │   ├── index.tsx\r
│   │   │   │   ├── config/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── interface/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   ├── guard/\r
│   │   │   ├── index.ts\r
│   │   │   ├── auth/\r
│   │   │   │   ├── index.tsx\r
│   │   │   ├── no-auth/\r
│   │   │   │   ├── index.tsx\r
│   │   │   ├── org-auth/\r
│   │   │   │   ├── index.tsx\r
│   │   ├── hook/\r
│   │   │   ├── index.ts\r
│   │   │   ├── api/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   ├── environment/\r
│   │   ├── index.ts\r
│   │   ├── api/\r
│   │   │   ├── index.ts\r
│   ├── library/\r
│   │   ├── index.ts\r
│   │   ├── axios/\r
│   │   │   ├── index.ts\r
│   │   │   ├── config/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   ├── helper/\r
│   │   │   │   ├── index.ts\r
│   │   ├── i18n/\r
│   │   │   ├── index.ts\r
│   │   │   ├── component/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── lang-selector/\r
│   │   │   │   │   ├── index.tsx\r
│   │   │   ├── init/\r
│   │   │   │   ├── index.ts\r
│   │   ├── theme/\r
│   │   │   ├── index.ts\r
│   │   │   ├── component/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── theme-selector/\r
│   │   │   │   │   ├── index.tsx\r
│   │   │   ├── config/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── constant/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── color/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── tailwind/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── enum/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   │   ├── theme/\r
│   │   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   ├── util/\r
│   │   │   │   ├── index.ts\r
│   │   │   │   ├── ant/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── color/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── common/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── tailwind/\r
│   │   │   │   │   ├── index.ts\r
│   ├── style/\r
│   │   ├── global/\r
│   │   │   ├── style.css
`})}),`
`,n.jsx(r.h1,{id:"enhanced-folder-structure-documentation",children:"Enhanced Folder Structure Documentation"}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"complete-folder-structure-1",children:"Complete Folder Structure"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`├── src\r
│   ├── App.tsx\r
│   ├── index.ts\r
│   ├── index.tsx\r
│   ├── vite-env.d.ts\r
│   ├── api/\r
│   ├── asset/\r
│   ├── component/\r
│   ├── config/\r
│   ├── core/\r
│   ├── environment/\r
│   ├── library/\r
│   ├── style/
`})}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"folder-descriptions",children:"Folder Descriptions"}),`
`,n.jsxs(r.h3,{id:"1-api-folder",children:["1. ",n.jsx(r.code,{children:"api/"})," Folder"]}),`
`,n.jsxs(r.p,{children:["The ",n.jsx(r.code,{children:"api/"})," folder is responsible for managing all API-related modules. Each module is organized into a subfolder with an ",n.jsx(r.code,{children:"index.ts"})," file for centralized exports."]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Purpose:"})," Encapsulates API request logic."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Structure:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`api/\r
├── account/\r
├── base/\r
├── billing/\r
├── master/\r
├── organization/\r
├── setting/\r
├── index.ts
`})}),`
`]}),`
`]}),`
`,n.jsxs(r.h3,{id:"2-asset-folder",children:["2. ",n.jsx(r.code,{children:"asset/"})," Folder"]}),`
`,n.jsxs(r.p,{children:["The ",n.jsx(r.code,{children:"asset/"})," folder stores all the static assets, including icons, images, and other media resources."]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Purpose:"})," Centralizes static assets for easier management."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Structure:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`asset/\r
├── icon/\r
│   ├── svg/\r
├── image/\r
│   ├── png/\r
├── index.ts
`})}),`
`]}),`
`]}),`
`,n.jsxs(r.h3,{id:"3-component-folder",children:["3. ",n.jsx(r.code,{children:"component/"})," Folder"]}),`
`,n.jsxs(r.p,{children:["The ",n.jsx(r.code,{children:"component/"})," folder is the core of the UI development process. Each component is organized with supporting ",n.jsx(r.code,{children:"enum"}),", ",n.jsx(r.code,{children:"interface"}),", and ",n.jsx(r.code,{children:"config"})," folders."]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Purpose:"})," Contains reusable UI components with proper modularization."]}),`
`]}),`
`,n.jsxs(r.li,{children:[`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Structure:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`component/\r
├── alert/\r
│   ├── component/\r
│   ├── enum/\r
│   ├── interface/\r
│   ├── index.ts\r
├── form/\r
├── table/\r
├── index.ts
`})}),`
`]}),`
`,n.jsxs(r.li,{children:[`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Best Practices:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["Define ",n.jsx(r.strong,{children:"enums"})," in ",n.jsx(r.code,{children:"enum/"}),"."]}),`
`,n.jsxs(r.li,{children:["Define ",n.jsx(r.strong,{children:"interfaces"})," in ",n.jsx(r.code,{children:"interface/"}),"."]}),`
`,n.jsxs(r.li,{children:["Use ",n.jsx(r.code,{children:"config/"})," for component-specific configurations and constants."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(r.h3,{id:"4-config-folder",children:["4. ",n.jsx(r.code,{children:"config/"})," Folder"]}),`
`,n.jsxs(r.p,{children:["The ",n.jsx(r.code,{children:"config/"})," folder manages application-wide configuration such as constants, enums, and interfaces."]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Purpose:"})," Centralizes reusable configurations across the application."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Structure:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`config/\r
├── constant/\r
├── enum/\r
├── interface/\r
├── index.ts
`})}),`
`]}),`
`]}),`
`,n.jsxs(r.h3,{id:"5-core-folder",children:["5. ",n.jsx(r.code,{children:"core/"})," Folder"]}),`
`,n.jsxs(r.p,{children:["The ",n.jsx(r.code,{children:"core/"})," folder contains foundational modules such as hooks, contexts, and guards."]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Purpose:"})," Provides shared logic and utilities for the application."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Structure:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`core/\r
├── context/\r
├── guard/\r
├── hook/\r
├── index.ts
`})}),`
`]}),`
`]}),`
`,n.jsxs(r.h3,{id:"6-environment-folder",children:["6. ",n.jsx(r.code,{children:"environment/"})," Folder"]}),`
`,n.jsxs(r.p,{children:["The ",n.jsx(r.code,{children:"environment/"})," folder defines environment-specific configurations."]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Purpose:"})," Separates development, staging, and production configurations."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Structure:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`environment/\r
├── api/\r
├── index.ts
`})}),`
`]}),`
`]}),`
`,n.jsxs(r.h3,{id:"7-library-folder",children:["7. ",n.jsx(r.code,{children:"library/"})," Folder"]}),`
`,n.jsxs(r.p,{children:["The ",n.jsx(r.code,{children:"library/"})," folder contains reusable utilities such as Axios configuration, i18n setup, and theming utilities."]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Purpose:"})," Provides libraries for shared logic and styling."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Structure:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`library/\r
├── axios/\r
├── i18n/\r
├── theme/\r
├── index.ts
`})}),`
`]}),`
`]}),`
`,n.jsxs(r.h3,{id:"8-style-folder",children:["8. ",n.jsx(r.code,{children:"style/"})," Folder"]}),`
`,n.jsxs(r.p,{children:["The ",n.jsx(r.code,{children:"style/"})," folder contains global CSS or SCSS files for styling."]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Purpose:"})," Maintains application-wide styles."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Structure:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`style/\r
├── global/\r
│   ├── style.css
`})}),`
`]}),`
`]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"best-practices-for-a-new-project-folder-structure",children:"Best Practices for a New Project Folder Structure"}),`
`,n.jsx(r.p,{children:"When starting a new development project, consider the following base folder structure:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-plaintext",children:`├── src\r
│   ├── api/\r
│   │   ├── index.ts\r
│   ├── asset/\r
│   │   ├── icon/\r
│   │   ├── image/\r
│   ├── component/\r
│   │   ├── component-name/\r
│   │   │   ├── component/\r
│   │   │   │   ├── index.tsx\r
│   │   │   ├── enum/\r
│   │   │   │   ├── index.ts\r
│   │   │   ├── interface/\r
│   │   │   │   ├── index.ts\r
│   │   │   ├── index.ts\r
│   ├── config/\r
│   │   ├── constant/\r
│   │   ├── enum/\r
│   │   ├── interface/\r
│   │   ├── index.ts\r
│   ├── core/\r
│   │   ├── hook/\r
│   │   ├── guard/\r
│   │   ├── context/\r
│   │   ├── index.ts\r
│   ├── environment/\r
│   │   ├── index.ts\r
│   ├── library/\r
│   │   ├── axios/\r
│   │   ├── theme/\r
│   │   ├── i18n/\r
│   ├── style/\r
│   │   ├── global/\r
│   │   │   ├── style.css\r
│   ├── App.tsx\r
│   ├── index.ts\r
│   ├── index.tsx\r
│   ├── vite-env.d.ts
`})}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h3,{id:"key-principles-for-structuring-a-new-project",children:"Key Principles for Structuring a New Project"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Separation of Concerns:"})," Group related logic, assets, and styles together."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Reusable Components:"})," Create modular, reusable UI components."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Centralized Configuration:"})," Use a ",n.jsx(r.code,{children:"config/"})," folder for constants, enums, and interfaces."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Global Styles:"})," Define global CSS/SCSS in a ",n.jsx(r.code,{children:"style/"})," folder."]}),`
`]}),`
`,n.jsx(r.p,{children:"This structure ensures scalability, consistency, and ease of maintenance for future development."}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{})})]})}function f(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{f as default};
