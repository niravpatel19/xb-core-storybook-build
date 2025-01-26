import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-B7tNCeqj.js";import{ah as o}from"./chunk-NUUEMKO5-BAaHlDYi.js";import"./index-CjmQ2z5u.js";import"./iframe-DtfWdyIT.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Documentation/How to Make API Calls"}),`
`,e.jsxs(s.h1,{id:"how-to-make-api-calls-useapi-and-commonservice",children:["How to Make API Calls: ",e.jsx(s.code,{children:"useAPI"})," and ",e.jsx(s.code,{children:"CommonService"})]}),`
`,e.jsxs(s.p,{children:["This document provides a comprehensive guide on how to use the ",e.jsx(s.code,{children:"useAPI"})," custom hook and the ",e.jsx(s.code,{children:"CommonService"})," utility for making API calls. It includes examples, interface details, and step-by-step instructions to ensure a clear understanding of their usage."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(s.h3,{id:"purpose",children:"Purpose"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"useAPI"})," custom hook and ",e.jsx(s.code,{children:"CommonService"})," utility provide a consistent, reusable structure for making API calls. They handle:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Request States:"})," Managing loading, success, and error states."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Error Handling:"})," Simplifying the handling of API errors."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Code Reusability:"})," Providing centralized API handling."]}),`
`]}),`
`,e.jsx(s.h3,{id:"features",children:"Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Custom Hook (",e.jsx(s.code,{children:"useAPI"}),"):"]})," Simplifies API calls in React components."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Service Utility (",e.jsx(s.code,{children:"CommonService"}),"):"]})," Centralized management of API requests."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"State Management:"})," Handles loading, success, and error states efficiently."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"interfaces",children:"Interfaces"}),`
`,e.jsxs(s.h3,{id:"1-iapirequest",children:["1. ",e.jsx(s.code,{children:"IAPIRequest"})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`export interface IAPIRequest {\r
  service: any; // Service instance for API call.\r
  method: string; // HTTP method (GET, POST, etc.).\r
  url: string; // API endpoint URL.\r
  skipExtraHeader?: boolean; // Optional: Exclude additional headers.\r
}
`})}),`
`,e.jsx(s.h4,{id:"description",children:"Description:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"service"}),":"]})," The service class responsible for executing the API call."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"method"}),":"]})," The HTTP method (e.g., ",e.jsx(s.code,{children:"GET"}),", ",e.jsx(s.code,{children:"POST"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"url"}),":"]})," The endpoint URL to make the API call."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"skipExtraHeader"}),":"]})," Optional flag to exclude default headers."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"2-iapicallback",children:["2. ",e.jsx(s.code,{children:"IAPICallback"})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`export interface IAPICallback {\r
  apiCall: (data: any) => any; // Function to execute the API call.\r
  response: any; // The response data from the API.\r
  error: any; // Error message or object, if the API call fails.\r
  setError: (error: any) => void; // Function to manually set an error.\r
  success: any; // Success message or data, if the API call succeeds.\r
  setSuccess: (success: any) => void; // Function to manually set success state.\r
  reset: () => void; // Function to reset error and success states.\r
  loading: boolean; // Indicates whether the API call is in progress.\r
}
`})}),`
`,e.jsx(s.h4,{id:"description-1",children:"Description:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"apiCall"}),":"]})," Executes the API call with provided data."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"response"}),":"]})," Holds the API response data."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"error"}),":"]})," Stores error details if the API call fails."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"setError"}),":"]})," Manually sets the error state."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"success"}),":"]})," Stores success messages or data."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"setSuccess"}),":"]})," Manually sets the success state."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"reset"}),":"]})," Resets the error and success states."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"loading"}),":"]})," Tracks the API call's progress state."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"how-to-use-useapi",children:["How to Use ",e.jsx(s.code,{children:"useAPI"})]}),`
`,e.jsx(s.h3,{id:"step-by-step-guide",children:"Step-by-Step Guide"}),`
`,e.jsx(s.h4,{id:"1-import-the-hook",children:"1. Import the Hook"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { useAPI } from './useAPI';
`})}),`
`,e.jsx(s.h4,{id:"2-configure-the-hook",children:"2. Configure the Hook"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const { apiCall, response, error, loading } = useAPI({\r
  service: AccountAPI.getInstance(),\r
  method: 'POST',\r
  url: '/validate/email',\r
});
`})}),`
`,e.jsx(s.h4,{id:"3-call-the-api",children:"3. Call the API"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const onSubmit = async (values: { user_email: string }): Promise<void> => {\r
  const payload = { user_email: values.user_email };\r
  const result = await apiCall({ data: payload });\r
\r
  if (result) {\r
    console.log('Success:', result);\r
  } else {\r
    console.error('Error:', error);\r
  }\r
};
`})}),`
`,e.jsx(s.h4,{id:"4-handle-states-in-jsx",children:"4. Handle States in JSX"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<form onSubmit={onSubmit}>\r
  <input type="email" name="user_email" required />\r
  <button type="submit" disabled={loading}>\r
    {loading ? 'Validating...' : 'Submit'}\r
  </button>\r
  {error && <p className="error">{error}</p>}\r
</form>
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"how-to-use-commonservice",children:["How to Use ",e.jsx(s.code,{children:"CommonService"})]}),`
`,e.jsx(s.h3,{id:"step-by-step-guide-1",children:"Step-by-Step Guide"}),`
`,e.jsx(s.h4,{id:"1-import-the-service",children:"1. Import the Service"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { CommonService } from './CommonService';
`})}),`
`,e.jsxs(s.h4,{id:"2-call-the-common-method",children:["2. Call the ",e.jsx(s.code,{children:"common"})," Method"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const fetchData = async () => {\r
  const response = await CommonService.common({\r
    module: 'account',\r
    url: '/users/list',\r
    method: 'GET',\r
  });\r
\r
  if (response?.data) {\r
    console.log('Data:', response.data);\r
  } else {\r
    console.error('Failed to fetch data');\r
  }\r
};\r
\r
fetchData();
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"summary",children:"Summary"}),`
`,e.jsx(s.h3,{id:"key-takeaways",children:"Key Takeaways"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"useAPI"}),":"]})," A React hook for managing API calls, handling states, and simplifying API interactions."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"CommonService"}),":"]})," A utility for making direct API calls with configurable options."]}),`
`]}),`
`,e.jsx(s.p,{children:"Both tools provide a robust foundation for consistent and reusable API handling in your project."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{})})]})}function g(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{g as default};
