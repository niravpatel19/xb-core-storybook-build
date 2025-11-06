import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-B7tNCeqj.js";import{ah as l}from"./chunk-NUUEMKO5-0FOIIcJ8.js";import"./index-CjmQ2z5u.js";import"./iframe-DWQLQptx.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Documentation/ESLint Rules Configuration"}),`
`,e.jsx(n.h1,{id:"eslint-rules-configuration",children:"ESLint Rules Configuration"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"environment-configuration",children:"Environment Configuration"}),`
`,e.jsx(n.p,{children:"Defines the runtime environments for the project:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"browser:"})," Enables browser globals like ",e.jsx(n.code,{children:"window"})," and ",e.jsx(n.code,{children:"document"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"es2021:"})," Supports ECMAScript 2021 features like logical assignment operators."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"extends-configuration",children:"Extends Configuration"}),`
`,e.jsx(n.p,{children:"Specifies the base rules and plugins to extend:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"plugin:react/recommended:"})," Best practices for React code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"plugin:react-hooks/recommended:"})," Enforces rules for React Hooks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"plugin:@typescript-eslint/recommended:"})," TypeScript-specific linting rules."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"plugin:prettier/recommended:"})," Integrates Prettier formatting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"prettier:"})," Disables ESLint rules that conflict with Prettier."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"eslint:recommended:"})," Activates core ESLint best practices."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"parser-and-parser-options",children:"Parser and Parser Options"}),`
`,e.jsx(n.p,{children:"Configures the TypeScript parser for the project:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"parser:"})," ",e.jsx(n.code,{children:"@typescript-eslint/parser"})," parses TypeScript files for linting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ecmaFeatures.jsx:"})," Enables JSX parsing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ecmaVersion:"})," Supports modern ECMAScript syntax."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"sourceType:"})," Enables ES module syntax (e.g., ",e.jsx(n.code,{children:"import"}),", ",e.jsx(n.code,{children:"export"}),")."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"plugins",children:"Plugins"}),`
`,e.jsx(n.p,{children:"Extends ESLint capabilities with additional rules:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react:"})," Adds React-specific linting rules."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react-hooks:"})," Enforces React Hooks best practices."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@typescript-eslint:"})," Provides TypeScript-specific linting rules."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"prettier:"})," Enforces Prettier formatting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"simple-import-sort:"})," Organizes imports into logical groups."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"import:"})," Lints and enforces import/export conventions."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"rules",children:"Rules"}),`
`,e.jsx(n.h3,{id:"typescript-specific-rules",children:"TypeScript-Specific Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@typescript-eslint/explicit-function-return-type:"})," Enforces explicit return types for functions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@typescript-eslint/no-non-null-assertion:"})," Disallows non-null assertions (",e.jsx(n.code,{children:"!"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@typescript-eslint/no-unused-vars:"})," Flags unused variables unless prefixed with ",e.jsx(n.code,{children:"_"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@typescript-eslint/no-explicit-any:"})," Disabled to allow ",e.jsx(n.code,{children:"any"})," type where necessary."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@typescript-eslint/no-empty-function:"})," Disabled to allow empty functions where required."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@typescript-eslint/explicit-module-boundary-types:"})," Enforces explicit return types for exported functions and classes, allowing ",e.jsx(n.code,{children:"any"})," for specific arguments."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"react-rules",children:"React Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react/jsx-uses-react:"})," Disabled for React 17+ (no need to import React in JSX files)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react/react-in-jsx-scope:"})," Disabled for React 17+ (JSX runtime)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react-hooks/rules-of-hooks:"})," Ensures hooks are used correctly in functional components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react-hooks/exhaustive-deps:"})," Disabled for leniency in ",e.jsx(n.code,{children:"useEffect"})," dependency management."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react/jsx-filename-extension:"})," Restricts JSX to ",e.jsx(n.code,{children:".tsx"})," files."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react/jsx-props-no-spreading:"})," Disabled to allow prop spreading."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react/prop-types:"})," Disabled for TypeScript projects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react/require-default-props:"})," Disabled for optional props management."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react/no-array-index-key:"})," Disabled for flexibility in list rendering."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"prettier-rules",children:"Prettier Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"prettier/prettier:"})," Enforces Prettier formatting rules."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"semi:"})," Requires semicolons."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"singleQuote:"})," Enforces single quotes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"trailingComma:"})," Adds trailing commas."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"tabWidth:"})," Sets tab width to 2 spaces."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"printWidth:"})," Limits line length to 120 characters."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"endOfLine:"})," Handles line endings automatically."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"code-style-rules",children:"Code Style Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"no-debugger:"})," Disallows ",e.jsx(n.code,{children:"debugger"})," statements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"no-unused-vars:"})," Disabled in favor of TypeScript's ",e.jsx(n.code,{children:"@typescript-eslint/no-unused-vars"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"no-var:"})," Enforces ",e.jsx(n.code,{children:"let"})," or ",e.jsx(n.code,{children:"const"})," instead of ",e.jsx(n.code,{children:"var"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"prefer-const:"})," Suggests using ",e.jsx(n.code,{children:"const"})," for variables that are not reassigned."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"prefer-arrow-callback:"})," Encourages arrow functions in callbacks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"no-multiple-empty-lines:"})," Limits consecutive empty lines to one."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"no-console:"})," Disabled to allow ",e.jsx(n.code,{children:"console.log"})," for debugging purposes."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"import-and-export-rules",children:"Import and Export Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"simple-import-sort/imports:"})," Organizes imports into logical groups."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"import/newline-after-import:"})," Enforces a blank line after import statements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"import/extensions:"})," Disabled to allow flexibility in file extensions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"import/prefer-default-export:"})," Disabled to allow named exports."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"accessibility-rules",children:"Accessibility Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"jsx-a11y/click-events-have-key-events:"})," Disabled for leniency in accessibility rules."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"jsx-a11y/no-static-element-interactions:"})," Disabled to allow interactions on static elements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"jsx-a11y/anchor-is-valid:"})," Disabled to allow flexibility in anchor usage."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"settings",children:"Settings"}),`
`,e.jsx(n.p,{children:"Configures React-specific settings for ESLint:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"react.version:"})," Automatically detects the React version."]}),`
`]})]})}function m(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
