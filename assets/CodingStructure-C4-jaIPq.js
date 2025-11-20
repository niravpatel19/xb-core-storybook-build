import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as s}from"./index-B7tNCeqj.js";import{ah as o}from"./chunk-NUUEMKO5-Bq6dn-AP.js";import"./index-CjmQ2z5u.js";import"./iframe-D4GH8nI3.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Documentation/Coding Structure"}),`
`,n.jsx(e.h1,{id:"coding-structure-and-best-practices",children:"Coding Structure and Best Practices"}),`
`,n.jsxs(e.p,{children:["This document outlines the ideal coding structure and practices for all components in your project. It includes detailed guidelines for organizing imports, hooks, state management, and function declarations to ensure ",n.jsx(e.strong,{children:"consistency"}),", ",n.jsx(e.strong,{children:"scalability"}),", and ",n.jsx(e.strong,{children:"maintainability"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"purpose",children:"Purpose"}),`
`,n.jsx(e.p,{children:"The purpose of this guide is to establish a standardized structure for coding practices across the project, ensuring:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Readable and clean code."}),`
`,n.jsx(e.li,{children:"Easy debugging and scalability."}),`
`,n.jsx(e.li,{children:"A consistent developer experience."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"responsibilities",children:"Responsibilities"}),`
`,n.jsx(e.h3,{id:"developer-responsibilities",children:"Developer Responsibilities:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Follow the coding structure in this document to ensure project maintainability."}),`
`,n.jsx(e.li,{children:"Always group hooks, variables, and functions logically as described."}),`
`,n.jsx(e.li,{children:"Ensure clear documentation and comments for critical pieces of code."}),`
`]}),`
`,n.jsx(e.h3,{id:"project-structure-responsibilities",children:"Project Structure Responsibilities:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Enable seamless collaboration between developers."}),`
`,n.jsx(e.li,{children:"Maintain modular and reusable components."}),`
`,n.jsx(e.li,{children:"Simplify onboarding for new developers."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"import-sequence",children:"Import Sequence"}),`
`,n.jsx(e.h3,{id:"purpose-1",children:"Purpose:"}),`
`,n.jsx(e.p,{children:"To maintain readability and structure in the imports of your files."}),`
`,n.jsx(e.h3,{id:"guidelines",children:"Guidelines:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Organize imports into blocks:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"React internal libraries."}),`
`,n.jsx(e.li,{children:"External libraries."}),`
`,n.jsx(e.li,{children:"Project-specific modules."}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Keep the sequence consistent across all files."}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// React Internal Library\r
import React, { JSX } from 'react';\r
\r
// External Library\r
import { Button as AntButton } from 'antd';\r
import classNames from 'classnames';\r
import { StorageUtil } from '@xb/utility';\r
\r
// i18n\r
import { t } from 'i18next';\r
import { changeLanguage } from '../../../i18n';\r
\r
// Context\r
import { useThemeContext } from '@context/theme';\r
\r
// Hook\r
import useFieldOption from '../../hook/control-option';\r
\r
\r
// Layout\r
import FormItem from '../../../layout/form-item';\r
\r
// Core\r
import { IAPIRequest } from '../../../../core/index';\r
\r
// Service\r
import { IAPIRequest } from '../../../../service/index';\r
\r
// Util\r
import LayoutUtil from '../../../util/layout';\r
\r
// Helper\r
import LayoutUtil from '../../../helper';\r
\r
// Component\r
import Component from '@module/Component';\r
\r
// Modal\r
import Modal from '@module/Modal';\r
\r
// Route\r
import Route from '@module/Route';\r
\r
// Config\r
import { LayoutStyle, IButton, ButtonType} from '../../config/layout';\r
import { IAuthSlider } from '../config/interface';\r
\r
// Style\r
import '@style/global/style.css';\r
\r
// Asset\r
import { Icon } from '../../../asset';
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"recommended-hook-grouping",children:"Recommended Hook Grouping"}),`
`,n.jsx(e.h3,{id:"purpose-2",children:"Purpose:"}),`
`,n.jsx(e.p,{children:"To ensure hooks are logically grouped based on their responsibility and usage."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"external-api-hooks",children:"External API Hooks"}),`
`,n.jsx(e.p,{children:"These hooks are used for external dependencies like APIs, forms, and translations."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const form = Form.useFormInstance();\r
const { t } = useTranslation();\r
const { theme, setTheme } = useThemeContext();
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"custom-hooks",children:"Custom Hooks"}),`
`,n.jsx(e.p,{children:"Custom hooks encapsulate reusable logic to avoid redundancy and maintain a cleaner codebase."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const verifyAPI = useAPI({\r
  service: AccountAPI.getInstance(),\r
  method: 'post',\r
  url: '/login/verify/code',\r
});\r
\r
const { state, loading, tableApiCall, setState } = useTableData({\r
  option,\r
  advanceFilters,\r
  column,\r
});
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"react-hooks",children:"React Hooks"}),`
`,n.jsx(e.p,{children:"React hooks are used for managing local state, side effects, memoization, and callbacks."}),`
`,n.jsx(e.h4,{id:"examples",children:"Examples:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"State Management"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const [step, setStep] = useState<LoginStep>(LoginStep.EMAIL);\r
const [data, setData] = useState<object>({});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"References"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const advanceFilters = useRef<any[]>([]);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Side Effects"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`useEffect(() => {\r
  initializeI18n(customTranslations, LocalStorageUtil.get('i18nextLng') || 'en');\r
}, []);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Memoized Values"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const activeKey = useMemo(() => location.pathname.split('/')[1] || 'my-feed', [location]);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Memoized Callbacks"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const handleLayoutSelect = useCallback(\r
  (layoutId: string, isSelected?: boolean) => {\r
    setSelectedLayoutId(layoutId);\r
    if (isSelected) {\r
      setLoading(true);\r
      fetchLayoutById(layoutId);\r
    }\r
  },\r
  [fetchLayoutById],\r
);
`})}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"function-declarations",children:"Function Declarations"}),`
`,n.jsx(e.h3,{id:"purpose-3",children:"Purpose:"}),`
`,n.jsx(e.p,{children:"Organizing functions ensures a clear separation of concerns and improves readability."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"html-related-functions",children:"HTML-Related Functions"}),`
`,n.jsx(e.p,{children:"These functions handle UI interactions such as button clicks or table events."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const handleButtonClick = (): void => {\r
  console.log('Button clicked');\r
};\r
\r
const handleTableChange = (_pagination: any, _filters: any, sorter: any): void => {\r
  const sorterField = sorter?.field;\r
  const sorterOrder =\r
    sorter?.order === 'ascend' ? SortOrder.Ascend : sorter?.order === 'descend' ? SortOrder.Descend : undefined;\r
\r
  if (sorterField) {\r
    _tableApiCall(sorterField, sorterOrder);\r
    setState((prevState: any) => ({\r
      ...prevState,\r
      sortBy: sorterField,\r
      sortType: sorterOrder,\r
    }));\r
  }\r
};
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"internal-functions",children:"Internal Functions"}),`
`,n.jsxs(e.p,{children:["Internal functions, prefixed with ",n.jsx(e.code,{children:"_"}),", handle backend interaction or complex private logic."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const _tableApiCall = async (sortBy?: string, sortOrder?: string): Promise<any> => {\r
  try {\r
    setLoading(true);\r
    const response = await apiCall({ sortBy, sortOrder });\r
    setLoading(false);\r
    if (response?.data) {\r
      console.log('API Response:', response.data);\r
    }\r
  } catch (error) {\r
    console.error('API Call Error:', error);\r
    setLoading(false);\r
  }\r
};
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"example-component-structure",children:"Example Component Structure"}),`
`,n.jsx(e.h3,{id:"purpose-4",children:"Purpose:"}),`
`,n.jsx(e.p,{children:"To demonstrate how all guidelines come together in a well-structured component."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const ExampleComponent = () => {\r
  /**\r
   * 1. React States\r
   */\r
  const [step, setStep] = useState<LoginStep>(LoginStep.EMAIL);\r
  const [data, setData] = useState<object>({});\r
\r
  /**\r
   * 2. External Hooks\r
   */\r
  const form = Form.useFormInstance();\r
  const { t } = useTranslation();\r
  const { theme, setTheme } = useThemeContext();\r
\r
  /**\r
   * 3. Custom Hooks\r
   */\r
  const verifyAPI = useAPI({\r
    service: AccountAPI.getInstance(),\r
    method: 'post',\r
    url: '/login/verify/code',\r
  });\r
\r
  const { state, loading, tableApiCall, setState } = useTableData({\r
    option,\r
    advanceFilters,\r
    column,\r
  });\r
\r
  /**\r
   * 4. React Use Refs\r
   */\r
  const advanceFilters = useRef<any[]>([]);\r
  const counter = useRef<number>(0);\r
\r
  /**\r
   * 5. Variables\r
   */\r
  const activeKey = useMemo(() => location.pathname.split('/')[1] || 'my-feed', [location]);\r
\r
  const { className, htmlType, type, disabled, icon, loading, label, props } = option;\r
  const controlClass = classNames(className);\r
\r
  /**\r
   * 6. Use Effects\r
   */\r
  useEffect(() => {\r
    initializeI18n(customTranslations, LocalStorageUtil.get('i18nextLng') || 'en');\r
  }, []);\r
\r
  /**\r
   * 7. Use Callbacks\r
   */\r
  const handleLayoutSelect = useCallback(\r
    (layoutId: string, isSelected?: boolean) => {\r
      setSelectedLayoutId(layoutId);\r
      if (isSelected) {\r
        setLoading(true);\r
        fetchLayoutById(layoutId);\r
      }\r
    },\r
    [fetchLayoutById],\r
  );\r
\r
  /**\r
   * 8. HTML-Related Functions\r
   */\r
  const handleButtonClick = (): void => {\r
    console.log('Button clicked');\r
  };\r
\r
  const handleTableChange = (_pagination: any, _filters: any, sorter: any): void => {\r
    const sorterField = sorter?.field;\r
    const sorterOrder =\r
      sorter?.order === 'ascend' ? SortOrder.Ascend : sorter?.order === 'descend' ? SortOrder.Descend : undefined;\r
\r
    if (sorterField) {\r
      _tableApiCall(sorterField, sorterOrder);\r
      setState((prevState: any) => ({\r
        ...prevState,\r
        sortBy: sorterField,\r
        sortType: sorterOrder,\r
      }));\r
    }\r
  };\r
\r
  /**\r
   * 9. Internal Functions\r
   */\r
  const _tableApiCall = async (sortBy?: string, sortOrder?: string): Promise<any> => {\r
    try {\r
      setLoading(true);\r
      const response = await apiCall({ sortBy, sortOrder });\r
      setLoading(false);\r
      if (response?.data) {\r
        console.log('API Response:', response.data);\r
      }\r
    } catch (error) {\r
      console.error('API Call Error:', error);\r
      setLoading(false);\r
    }\r
  };\r
\r
  /**\r
   * 10. Render JSX\r
   */\r
  return (\r
    <div className={controlClass}>\r
      <button onClick={handleButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">\r
        Click Me\r
      </button>\r
    </div>\r
  );\r
};
`})})]})}function j(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{j as default};
