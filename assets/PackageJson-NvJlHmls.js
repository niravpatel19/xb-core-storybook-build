import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-B7tNCeqj.js";import{ah as t}from"./chunk-NUUEMKO5-BAaHlDYi.js";import"./index-CjmQ2z5u.js";import"./iframe-DtfWdyIT.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function i(s){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Documentation/PackageJson"}),`
`,e.jsx(n.h1,{id:"how-xbcore-packagejson-works",children:"How @xb/core Package.json Works"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"package.json"})," file is a central configuration file for the ",e.jsx(n.strong,{children:"@xb/core"})," library. It acts as the backbone of the project, defining the scripts, dependencies, devDependencies, and other metadata necessary for development, testing, and production. This document provides a comprehensive breakdown of each section to help developers understand its functionality and purpose."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"scripts",children:"Scripts"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"scripts"})," section contains custom commands that can be executed using ",e.jsx(n.code,{children:"npm run <script-name>"}),". These commands automate repetitive tasks like starting a development server, building the project, running linting checks, formatting code, and more."]}),`
`,e.jsx(n.h3,{id:"available-commands",children:"Available Commands"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{\r
  "dev": "vite --port=3001",\r
  "build": "tsc && tsc-alias && tailwindcss -i ./src/style/global/style.css -o ./dist/tailwind.css --minify && copyfiles -u 1 src/asset/image/png/* dist/ && copyfiles -u 1 src/style/global/* dist/",\r
  "preview": "tsc && tsc-alias && vite build && vite preview --port=3001 --strictPort",\r
  "lint": "eslint --ext .js,.jsx,.ts,.tsx src/",\r
  "lint:fix": "eslint src/ --fix",\r
  "prettier": "prettier --check src/**/*.{js,jsx,ts,tsx,json,md}",\r
  "storybook": "storybook dev -p 6006",\r
  "build-storybook": "storybook build"\r
}
`})}),`
`,e.jsx(n.h3,{id:"command-details",children:"Command Details"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"dev"}),":"]})," Starts the development server using Vite on port 3001.",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Use case:"})," Developers use this to preview changes in real time as they code."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"build"}),":"]})," A comprehensive command that:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Compiles TypeScript files (",e.jsx(n.code,{children:"tsc"}),")."]}),`
`,e.jsxs(n.li,{children:["Handles module path aliases (",e.jsx(n.code,{children:"tsc-alias"}),")."]}),`
`,e.jsxs(n.li,{children:["Processes Tailwind CSS into a production-ready CSS file (",e.jsx(n.code,{children:"tailwindcss"}),")."]}),`
`,e.jsxs(n.li,{children:["Copies necessary assets and styles to the ",e.jsx(n.code,{children:"dist"})," directory.",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Use case:"})," Prepares the library for distribution or production use."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"preview"}),":"]})," Builds the project and starts a preview server to simulate production behavior.",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Use case:"})," Used to ensure the build behaves as expected before deployment."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"lint"}),":"]})," Runs ESLint on the project to identify potential code quality issues.",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Use case:"})," Helps maintain code quality and adherence to coding standards."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"prettier"}),":"]})," Checks the formatting of code files to ensure consistency.",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Use case:"})," Enforces consistent formatting across the project."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"storybook"}),":"]})," Launches Storybook to visualize and test UI components in isolation.",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Use case:"})," Enables developers to build and test UI components without integrating them into the full application."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(n.p,{children:["These are the packages required at runtime for the application or library to function correctly. They are installed when you run ",e.jsx(n.code,{children:"npm install"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{\r
  "@types/node": "^22.10.2",\r
  "@xb/utility": "^0.0.1",\r
  "antd": "^5.22.4",\r
  "axios": "^1.7.9",\r
  "i18next": "^24.1.0",\r
  "react": "^19.0.0",\r
  "react-dom": "^19.0.0",\r
  "react-router-dom": "^7.0.2"\r
}
`})}),`
`,e.jsx(n.h3,{id:"dependency-details",children:"Dependency Details"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"@types/node"}),":"]})," Provides TypeScript definitions for Node.js, enabling type-checking for server-side code."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"@xb/utility"}),":"]})," A custom utility library for shared logic across projects within the @xb ecosystem."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"antd"}),":"]})," A UI library that provides ready-to-use components styled with Ant Design principles."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"axios"}),":"]})," A promise-based HTTP client for making API calls and handling responses."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"i18next"}),":"]})," A powerful library for managing internationalization (i18n) in applications."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"react"}),":"]})," The core library for building user interfaces in React."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"react-router-dom"}),":"]})," Handles client-side routing in React applications."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"devdependencies",children:"DevDependencies"}),`
`,e.jsx(n.p,{children:"These are tools and libraries required only during development. They are not included in the production build."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{\r
  "eslint": "^8.8.0",\r
  "husky": "^8.0.0",\r
  "prettier": "^3.4.2",\r
  "tailwindcss": "^3.4.16",\r
  "typescript": "~5.6.2",\r
  "vite": "^6.0.6"\r
}
`})}),`
`,e.jsx(n.h3,{id:"devdependency-details",children:"DevDependency Details"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"eslint"}),":"]})," A static analysis tool that identifies problematic patterns in JavaScript/TypeScript code."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"husky"}),":"]})," Helps enforce pre-commit hooks, ensuring code quality checks are run before committing."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"prettier"}),":"]})," Formats code to ensure consistency and readability across the project."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"tailwindcss"}),":"]})," A utility-first CSS framework for rapid UI development."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"typescript"}),":"]})," Enables static typing for JavaScript, improving maintainability and reducing errors."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"vite"}),":"]})," A modern build tool and development server optimized for speed."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"conclusion",children:"Conclusion"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"package.json"})," file for ",e.jsx(n.strong,{children:"@xb/core"})," is meticulously configured to ensure smooth development, testing, and production workflows. By understanding each script and dependency, developers can maximize productivity and maintain high standards of code quality."]})]})}function g(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{g as default};
