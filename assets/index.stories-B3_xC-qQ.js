import{F as a}from"./index-D4upi21E.js";import{I as i}from"./index-BWoCq88W.js";import"./index-CjmQ2z5u.js";import"./reactNode-qhLQ1VKY.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-DnZ6lhxI.js";import"./button-bNFFCPpI.js";import"./pickAttrs-DemhUc0k.js";import"./SearchOutlined-f36bSWKA.js";import"./jsx-runtime-CLpGMVip.js";import"./i18next-BVq_Fi8G.js";const h={title:"Components/InputOTP",component:i,argTypes:{option:{control:"object",description:"Configuration options for the InputOTP.",defaultValue:{name:"otp",label:"OTP",placeholder:"Enter OTP",length:6,mask:"*"}},callBack:{action:"callBack",description:"Callback function for handling value changes."}}},e={args:{option:{name:"otp",label:"OTP",placeholder:"Enter OTP",length:3,mask:"*",validation:[{required:!0,message:"OTP is required"}]},callBack:r=>console.log("InputOTP Event:",{type:a.FIELD_CHANGE,...r})}};var n,o,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    option: {
      name: 'otp',
      label: 'OTP',
      placeholder: 'Enter OTP',
      length: 3,
      mask: '*',
      validation: [{
        required: true,
        message: 'OTP is required'
      }]
    },
    callBack: (event: any): void => console.log('InputOTP Event:', {
      type: FORM_EVENT.FIELD_CHANGE,
      ...event
    })
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const f=["Playground"];export{e as Playground,f as __namedExportsOrder,h as default};
