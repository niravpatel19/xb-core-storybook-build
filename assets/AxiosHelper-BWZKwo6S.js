import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-B7tNCeqj.js";import{ah as t}from"./chunk-NUUEMKO5-BJr7MVF1.js";import"./index-CjmQ2z5u.js";import"./iframe-CP3Bl1OB.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Library/Axios/AxiosHelper"}),`
`,e.jsx(r.h1,{id:"axioshelper-class",children:"AxiosHelper Class"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"AxiosHelper"})," class is a utility wrapper for the Axios HTTP client, providing enhanced functionality for making API requests with built-in interceptors, token handling, and support for advanced features like file uploads."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Interceptors"}),": Automatically appends authentication tokens and organization headers to every request."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Token Refresh"}),": Automatically refreshes the access token when it expires."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Error Handling"}),": Handles various error scenarios, including validation errors and server errors."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"File Upload"}),": Supports file uploads with multipart form data."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Extensibility"}),": Can be extended to create API-specific helper classes."]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"using-axioshelper-directly",children:e.jsx(r.strong,{children:"Using AxiosHelper Directly"})}),`
`,e.jsx(r.h4,{id:"instantiation",children:"Instantiation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { AxiosHelper } from '@library/axios';\r
\r
const axiosHelper = new AxiosHelper({\r
  baseURL: 'https://api.example.com',\r
  skipExtraHeader: false,\r
});
`})}),`
`,e.jsx(r.h4,{id:"example-get-request",children:"Example: GET Request"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`axiosHelper\r
  .get({\r
    url: '/endpoint',\r
    params: { key: 'value' },\r
  })\r
  .then((response) => console.log(response))\r
  .catch((error) => console.error(error));
`})}),`
`,e.jsx(r.h4,{id:"example-file-upload",children:"Example: File Upload"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`axiosHelper\r
  .upload({\r
    url: '/upload',\r
    file: myFile, // File object from input\r
    data: { key: 'value' },\r
  })\r
  .then((response) => console.log(response))\r
  .catch((error) => console.error(error));
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"extending-axioshelper",children:e.jsx(r.strong,{children:"Extending AxiosHelper"})}),`
`,e.jsxs(r.p,{children:["You can extend ",e.jsx(r.code,{children:"AxiosHelper"})," to create API-specific classes for organizing your API requests."]}),`
`,e.jsx(r.h4,{id:"example-accountapi-class",children:"Example: AccountAPI Class"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`// Utility\r
import { AxiosHelper } from '@library/axios';\r
\r
// API\r
import { BaseAPI } from '../base';\r
\r
// Config\r
import * as environment from 'src/environment/api';\r
\r
/**\r
 * Class for interacting with the Account API.\r
 * Utilizes AxiosHelper for making HTTP requests.\r
 */\r
class AccountAPI extends BaseAPI {\r
  /**\r
   * Private constructor to initialize AxiosHelper with the Account API URL.\r
   */\r
  constructor() {\r
    super();\r
    this.axiosHelper = new AxiosHelper({\r
      baseURL: \`\${environment.BASE_URL}/account/api/\${environment.API_VERSION}\`,\r
    });\r
  }\r
\r
  /**\r
   * Fetch account details.\r
   */\r
  async getAccountDetails() {\r
    return this.axiosHelper.get({\r
      url: '/details',\r
    });\r
  }\r
\r
  /**\r
   * Update account details.\r
   */\r
  async updateAccountDetails(data: Record<string, any>) {\r
    return this.axiosHelper.post({\r
      url: '/update',\r
      data,\r
    });\r
  }\r
}\r
\r
export { AccountAPI };
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(r.h3,{id:"constructor",children:"Constructor"}),`
`,e.jsxs(r.p,{children:[`| Name              | Type      | Description                                       | Required |\r
| ----------------- | --------- | ------------------------------------------------- | -------- |\r
| `,e.jsx(r.code,{children:"baseURL"}),"         | ",e.jsx(r.code,{children:"string"}),`  | The base URL for the Axios instance.              | Yes      |\r
| `,e.jsx(r.code,{children:"headers"}),"         | ",e.jsx(r.code,{children:"object"}),`  | Common headers sent with every request.           | No       |\r
| `,e.jsx(r.code,{children:"skipExtraHeader"})," | ",e.jsx(r.code,{children:"boolean"})," | Whether to skip custom headers. Default: ",e.jsx(r.code,{children:"false"}),". | No       |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"request-methods",children:"Request Methods"}),`
`,e.jsxs(r.p,{children:[`| Method   | Description                              | Parameters                     |\r
| -------- | ---------------------------------------- | ------------------------------ |\r
| `,e.jsx(r.code,{children:"get"}),"    | Sends a GET request.                     | ",e.jsx(r.code,{children:"{ url, params, headers }"}),`     |\r
| `,e.jsx(r.code,{children:"post"}),"   | Sends a POST request.                    | ",e.jsx(r.code,{children:"{ url, data, headers }"}),`       |\r
| `,e.jsx(r.code,{children:"put"}),"    | Sends a PUT request.                     | ",e.jsx(r.code,{children:"{ url, data, headers }"}),`       |\r
| `,e.jsx(r.code,{children:"patch"}),"  | Sends a PATCH request.                   | ",e.jsx(r.code,{children:"{ url, data, headers }"}),`       |\r
| `,e.jsx(r.code,{children:"delete"})," | Sends a DELETE request.                  | ",e.jsx(r.code,{children:"{ url, headers }"}),`             |\r
| `,e.jsx(r.code,{children:"upload"})," | Uploads a file with multipart/form-data. | ",e.jsx(r.code,{children:"{ url, file, data, headers }"})," |"]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"integration-with-baseapi",children:"Integration with BaseAPI"}),`
`,e.jsxs(r.p,{children:["In larger applications, ",e.jsx(r.code,{children:"AxiosHelper"})," is often integrated into a base API class to standardize API communication across the application. Here's how it works:"]}),`
`,e.jsx(r.h3,{id:"baseapi-example",children:"BaseAPI Example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`// Utility\r
import { AxiosHelper } from '@library/axios';\r
\r
class BaseAPI {\r
  protected axiosHelper: AxiosHelper;\r
\r
  constructor(baseURL: string) {\r
    this.axiosHelper = new AxiosHelper({ baseURL });\r
  }\r
}\r
\r
export { BaseAPI };
`})}),`
`,e.jsx(r.h3,{id:"accountapi-example",children:"AccountAPI Example"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"AccountAPI"})," extends ",e.jsx(r.code,{children:"BaseAPI"})," to define account-specific API methods."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { BaseAPI } from '../base';\r
\r
/**\r
 * Class for interacting with the Account API.\r
 */\r
class AccountAPI extends BaseAPI {\r
  constructor() {\r
    super(\`\${environment.BASE_URL}/account/api/\${environment.API_VERSION}\`);\r
  }\r
\r
  /**\r
   * Fetch account details.\r
   */\r
  async getAccountDetails() {\r
    return this.axiosHelper.get({ url: '/details' });\r
  }\r
\r
  /**\r
   * Update account details.\r
   */\r
  async updateAccountDetails(data: Record<string, any>) {\r
    return this.axiosHelper.post({ url: '/update', data });\r
  }\r
}\r
\r
export { AccountAPI };
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsxs(r.p,{children:["This documentation focuses on the use of ",e.jsx(r.code,{children:"AxiosHelper"})," within a base API structure, providing extensibility and scalability. Let me know if you need any further refinements!"]})]})}function A(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{A as default};
