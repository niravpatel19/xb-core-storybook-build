import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as o}from"./index-B7tNCeqj.js";import{ah as t}from"./chunk-NUUEMKO5-Bq6dn-AP.js";import"./index-CjmQ2z5u.js";import"./iframe-D4GH8nI3.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/How to Add New Features"}),`
`,n.jsx(e.h1,{id:"how-to-add-a-new-component-control-api-or-configuration-in-xb-core",children:"How to Add a New Component, Control, API, or Configuration in xb-core"}),`
`,n.jsxs(e.p,{children:["This document outlines the steps for adding new components, controls, APIs, or configurations in the ",n.jsx(e.code,{children:"xb-core"})," project. The examples strictly follow the folder structure and coding patterns provided."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"adding-a-new-api",children:n.jsx(e.strong,{children:"Adding a New API"})}),`
`,n.jsx(e.h3,{id:"folder-structure",children:n.jsx(e.strong,{children:"Folder Structure"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`\r
└── 📁api\r
└── 📁<module-name>\r
└── index.ts\r
└── index.ts\r

`})}),`
`,n.jsx(e.h3,{id:"steps",children:n.jsx(e.strong,{children:"Steps"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Create a folder"})," inside the ",n.jsx(e.code,{children:"api"})," directory for your API module (e.g., ",n.jsx(e.code,{children:"billing"})," or ",n.jsx(e.code,{children:"organization"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Create an ",n.jsx(e.code,{children:"index.ts"})," file"]})," in the new folder."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Extend the ",n.jsx(e.code,{children:"BaseAPI"})," class"]})," and initialize the ",n.jsx(e.code,{children:"AxiosHelper"})," with the appropriate ",n.jsx(e.code,{children:"baseURL"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example-adding-accountapi",children:n.jsxs(e.strong,{children:["Example: Adding ",n.jsx(e.code,{children:"AccountAPI"})]})}),`
`,n.jsx(e.h4,{id:"file-apiaccountindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"api/account/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Utility\r
import { AxiosHelper } from '@library/axios';\r
\r
// Api\r
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
}\r
\r
export { AccountAPI };
`})}),`
`,n.jsx(e.h4,{id:"file-apiindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"api/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export * from './account';
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"adding-a-new-component",children:n.jsx(e.strong,{children:"Adding a New Component"})}),`
`,n.jsx(e.h3,{id:"folder-structure-1",children:n.jsx(e.strong,{children:"Folder Structure"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`└── 📁component\r
    └── 📁<component-name>\r
        └── 📁component\r
            └── index.tsx\r
        └── 📁config\r
            └── 📁enum\r
                └── index.ts\r
            └── 📁interface\r
                └── index.ts\r
            └── index.ts\r
        └── index.ts
`})}),`
`,n.jsx(e.h3,{id:"steps-1",children:n.jsx(e.strong,{children:"Steps"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Create a folder"})," inside the ",n.jsx(e.code,{children:"component"})," directory for your component."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Add subfolders"})," such as ",n.jsx(e.code,{children:"component"}),", ",n.jsx(e.code,{children:"config"}),", and ",n.jsx(e.code,{children:"interface"})," as required."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Implement the component logic"})," in ",n.jsx(e.code,{children:"component/index.tsx"})," and export it from the ",n.jsx(e.code,{children:"index.ts"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example-adding-an-alert-component",children:n.jsx(e.strong,{children:"Example: Adding an Alert Component"})}),`
`,n.jsx(e.h4,{id:"file-componentalertcomponentindextsx",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"component/alert/component/index.tsx"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// React Internal Library\r
import React from 'react';\r
\r
// External Library\r
import { Alert as AntAlert } from 'antd';\r
import classNames from 'classnames';\r
import { t } from 'i18next';\r
\r
// Config\r
import { AlertType, IAlert } from '../config';\r
\r
/**\r
 * Alert component for displaying messages using Ant Design styles.\r
 *\r
 * @param {IAlert} props - Props for the Alert component\r
 * @returns {JSX.Element} - Rendered Alert component\r
 */\r
const Alert: React.FC<IAlert> = ({ callBack, option }: IAlert): React.JSX.Element => {\r
  const { type, className, message } = option;\r
  const closable = option.closable === undefined ? true : option.closable;\r
  const showIcon = option.showIcon === undefined ? true : option.showIcon;\r
\r
  // Handle custom click event\r
  const onClickEvent = (): void => {\r
    callBack?.(option);\r
  };\r
\r
  return (\r
    <AntAlert\r
      type={type || AlertType.success}\r
      closable={closable}\r
      message={typeof message === 'string' ? t(message as string) : message}\r
      className={classNames('[&_.ant-alert]:!w-full', className)}\r
      showIcon={showIcon}\r
      onClick={onClickEvent}\r
    />\r
  );\r
};\r
\r
export { Alert };
`})}),`
`,n.jsx(e.h4,{id:"file-componentalertindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"component/alert/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export * from './component';\r
export * from './config';
`})}),`
`,n.jsx(e.h4,{id:"file-componentindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"component/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export * from './alert';\r
export * from './avatar';\r
export * from './button';\r
export * from './form';\r
export * from './loader';\r
export * from './table';
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"adding-a-new-hook",children:n.jsx(e.strong,{children:"Adding a New Hook"})}),`
`,n.jsx(e.h3,{id:"folder-structure-2",children:n.jsx(e.strong,{children:"Folder Structure"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`└── 📁core\r
    └── 📁hook\r
        └── index.ts\r
        └── 📁api\r
            └── index.ts\r
            └── 📁interface\r
                └── index.ts
`})}),`
`,n.jsx(e.h3,{id:"steps-2",children:n.jsx(e.strong,{children:"Steps"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Create a new file inside the ",n.jsx(e.code,{children:"core/hook"})," directory for your hook."]}),`
`,n.jsxs(e.li,{children:["Write the hook logic and export it from the main ",n.jsx(e.code,{children:"index.ts"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example-adding-a-useapi-hook",children:n.jsxs(e.strong,{children:["Example: Adding a ",n.jsx(e.code,{children:"useAPI"})," Hook"]})}),`
`,n.jsx(e.h4,{id:"file-corehookapiindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"core/hook/api/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// React internal library\r
import { useState } from 'react';\r
\r
// Interfaces\r
import { IAPICallback, IAPIRequest } from './interface';\r
\r
/**\r
 * Custom hook for uploading files to a specified URL.\r
 *\r
 * @param {Object} params - Parameters for API call.\r
 * @param {any} params.service - The service for API call.\r
 * @param {string} params.url - The URL to which the file will be uploaded.\r
 * @returns {IAPICallback} - The API call state and functions.\r
 */\r
const useAPI = ({ service, method, url, skipExtraHeader }: IAPIRequest): IAPICallback => {\r
  const [response, setResponse] = useState(null);\r
  const [error, setError] = useState(null);\r
  const [success, setSuccess] = useState(null);\r
  const [loading, setLoading] = useState(false);\r
\r
  /**\r
   * Gets a service to call APIs.\r
   */\r
  const getService = (): any => {\r
    return service;\r
  };\r
\r
  /**\r
   * Uploads a file to the specified URL.\r
   *\r
   * @param {File} file - The file to be uploaded.\r
   */\r
  const apiCall = async ({ data }: any): Promise<any> => {\r
    setLoading(true);\r
    reset();\r
    try {\r
      const response = await getService().common({\r
        method,\r
        url,\r
        data,\r
        skipExtraHeader,\r
      });\r
\r
      setResponse(response.data);\r
      setSuccess(response.message);\r
      return response.data || response;\r
    } catch (err: any) {\r
      setSuccess(null);\r
      setError(err?.message || err);\r
      setResponse(null);\r
    } finally {\r
      setLoading(false);\r
    }\r
    return null;\r
  };\r
\r
  const reset = (): void => {\r
    setSuccess(null);\r
    setError(null);\r
  };\r
\r
  return {\r
    apiCall,\r
    response,\r
    success,\r
    error,\r
    setSuccess,\r
    reset,\r
    setError,\r
    loading,\r
  };\r
};\r
\r
export { useAPI };
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"adding-a-new-configuration",children:n.jsx(e.strong,{children:"Adding a New Configuration"})}),`
`,n.jsx(e.h3,{id:"folder-structure-3",children:n.jsx(e.strong,{children:"Folder Structure"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`└── 📁config\r
    └── 📁constant\r
        └── index.ts\r
    └── 📁enum\r
        └── index.ts\r
    └── 📁interface\r
        └── index.ts\r
    └── index.ts
`})}),`
`,n.jsx(e.h3,{id:"steps-3",children:n.jsx(e.strong,{children:"Steps"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Add the constants, enums, or interfaces inside the respective folder."}),`
`,n.jsxs(e.li,{children:["Export the new configuration from the main ",n.jsx(e.code,{children:"index.ts"}),"."]}),`
`]}),`
`,n.jsx(e.h4,{id:"example-adding-a-new-constant",children:n.jsx(e.strong,{children:"Example: Adding a New Constant"})}),`
`,n.jsx(e.h4,{id:"file-configconstantindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"config/constant/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const DEFAULT_THEME = 'light';
`})}),`
`,n.jsx(e.h4,{id:"file-configindexts",children:n.jsxs(e.strong,{children:["File: ",n.jsx(e.code,{children:"config/index.ts"})]})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export * from './constant';\r
export * from './enum';\r
export * from './interface';
`})})]})}function g(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{g as default};
