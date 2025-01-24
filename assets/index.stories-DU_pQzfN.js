import{F as a}from"./index-BH7J9u6C.js";import{I as l}from"./index-BjdNQuuc.js";import"./index-CjmQ2z5u.js";import"./i18next-8U-VCFEF.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./SearchOutlined-Bbj-V6vO.js";import"./reactNode-Br-Lxy6K.js";import"./pickAttrs-Cx3WwzQX.js";import"./jsx-runtime-CLpGMVip.js";const P={title:"Components/InputOTP",component:l,argTypes:{option:{control:"object",description:"Configuration options for the InputOTP.",defaultValue:{name:"otp",label:"OTP",placeholder:"Enter OTP",length:6,mask:"*"}},callBack:{action:"callBack",description:"Callback function for handling value changes."}}},e={args:{option:{name:"otp",label:"OTP",placeholder:"Enter OTP",length:3,mask:"*",validation:[{required:!0,message:"OTP is required"}]},callBack:r=>console.log("InputOTP Event:",{type:a.FIELD_CHANGE,...r})}};var n,o,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const E=["Playground"];export{e as Playground,E as __namedExportsOrder,P as default};
