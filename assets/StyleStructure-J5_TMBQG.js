import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-B7tNCeqj.js";import{ah as t}from"./chunk-NUUEMKO5-4mrWzxjr.js";import"./index-CjmQ2z5u.js";import"./iframe-DFb6COPX.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/Style Structure"}),`
`,n.jsx(e.h1,{id:"styling-guide-for-project-using-tailwind-css-and-ant-design",children:"Styling Guide for Project Using Tailwind CSS and Ant Design"}),`
`,n.jsxs(e.p,{children:["This document provides guidelines for implementing responsive designs using Tailwind CSS and Ant Design (AntD) in the project. It ensures consistency with the configured ",n.jsx(e.code,{children:"tailwind.config.js"})," file and proper integration with the project’s branding, dark mode, and theming structure."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"general-rules-for-styling",children:"General Rules for Styling"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use Tailwind Classes:"})," Always use classes defined in the ",n.jsx(e.code,{children:"tailwind.config.js"})," file. Avoid custom classes, inline styles, or external CSS unless strictly necessary."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Rem-Based Design:"})," Use ",n.jsx(e.code,{children:"rem"})," units for all spacing, sizes, and fonts, aligning with the Tailwind configuration."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Adding New Theme Colors or Variables:"})," Update the necessary files when introducing new colors or variables."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsive Design:"})," Follow screen sizes defined in ",n.jsx(e.code,{children:"tailwind.config.js"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ant Design Overrides:"})," Use Tailwind classes for AntD components and follow project guidelines for global overrides."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"tailwind-configuration",children:"Tailwind Configuration"}),`
`,n.jsx(e.h3,{id:"example-tailwind-usage",children:"Example Tailwind Usage"}),`
`,n.jsx(e.h4,{id:"spacing",children:"Spacing"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="p-61 md:p-200 lg:p-300">\r
  <!-- Padding uses Tailwind spacing values -->\r
</div>
`})}),`
`,n.jsx(e.h4,{id:"colors",children:"Colors"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<button class="bg-theme-primary text-theme-white-100 hover:bg-theme-primary-light">\r
  Click Me\r
</button>
`})}),`
`,n.jsx(e.h4,{id:"responsive-design",children:"Responsive Design"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="text-theme-grey-600 md:text-theme-grey-400 lg:text-theme-black">\r
  Responsive Text\r
</div>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"adding-new-theme-colors",children:"Adding New Theme Colors"}),`
`,n.jsx(e.h3,{id:"steps-to-add-a-new-color",children:"Steps to Add a New Color"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Update ",n.jsx(e.code,{children:"src/library/theme/constant/color/index.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`baseColors: {\r
  wp_msg_btn_bg: '#ffffff',\r
},\r
lightColors: {\r
  wp_msg_btn_bg: '#ffffff',\r
},\r
darkColors: {\r
  wp_msg_btn_bg: '#202C33',\r
},
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Update ",n.jsx(e.code,{children:"src/library/theme/interface/index.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export interface ThemeConfig {\r
  wp_msg_btn_bg: string;\r
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Update ",n.jsx(e.code,{children:"src/library/theme/util/tailwind/index.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`--theme-wp-msg-btn-bg: hexToRgb(config.wp_msg_btn_bg);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Use the new color in Tailwind:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<button class="bg-theme-wp-msg-btn-bg">\r
  Button\r
</button>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"external-css-rules",children:"External CSS Rules"}),`
`,n.jsxs(e.p,{children:["If Tailwind classes cannot handle a specific design requirement, external CSS can be added in ",n.jsx(e.code,{children:"src/style/global"}),". Follow the formatting standards below:"]}),`
`,n.jsx(e.h3,{id:"formatting-standards",children:"Formatting Standards"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* Buttons */\r
.button {\r
  border-radius: var(--theme-border-radius-10);\r
  background-color: var(--theme-primary);\r
}\r
\r
/* Typography */\r
.header {\r
  font-size: var(--theme-font-size-13);\r
  color: var(--theme-grey-800);\r
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"ant-design-customization",children:"Ant Design Customization"}),`
`,n.jsx(e.h3,{id:"common-overrides",children:"Common Overrides"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const colorVariablesAnt = (config: any): ThemeConfig => ({\r
  token: {\r
    fontFamily,\r
    colorPrimary: config.primary,\r
    boxShadow: config.boxShadow,\r
  },\r
  components: {\r
    Button: {\r
      borderRadius: config.borderRadiusSM,\r
      padding: config.spacing_61,\r
    },\r
    Input: {\r
      colorBgContainer: config.white_100,\r
    },\r
  },\r
});
`})}),`
`,n.jsx(e.h3,{id:"example-ant-design-tailwind-integration",children:"Example Ant Design Tailwind Integration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="[&_.ant-input]:bg-theme-white-100 [&_.ant-input]:border-theme-input-border">\r
  <input class="ant-input" placeholder="Enter text" />\r
</div>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"prohibited-practices",children:"Prohibited Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Avoid inline CSS unless absolutely necessary."}),`
`,n.jsx(e.li,{children:"Do not use custom classes unless approved."}),`
`,n.jsxs(e.li,{children:["Avoid using ",n.jsx(e.code,{children:"!important"})," unless strictly required."]}),`
`,n.jsxs(e.li,{children:["Always use Tailwind spacing and colors defined in ",n.jsx(e.code,{children:"tailwind.config.js"}),"."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"example-responsive-component",children:"Example Responsive Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="p-61 bg-theme-grey-100 md:p-200 lg:p-300">\r
  <h1 class="text-theme-black md:text-theme-blue-100 lg:text-theme-primary">\r
    Responsive Header\r
  </h1>\r
  <button class="bg-theme-green-100 text-theme-white-100 hover:bg-theme-green-200">\r
    Submit\r
  </button>\r
</div>
`})})]})}function u(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{u as default};
