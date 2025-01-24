import{F as n}from"./index-BH7J9u6C.js";import{P as t}from"./index-SqJVX6bv.js";import"./index-CjmQ2z5u.js";import"./i18next-8U-VCFEF.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./SearchOutlined-Bbj-V6vO.js";import"./reactNode-Br-Lxy6K.js";import"./pickAttrs-Cx3WwzQX.js";import"./jsx-runtime-CLpGMVip.js";const P={title:"Components/Password",component:t,argTypes:{option:{control:"object",description:"Configuration options for the Password input.",defaultValue:{name:"password",label:"Password",placeholder:"Enter your password"}},callBack:{action:"callBack",description:"Callback function for handling value changes."}}},o={args:{option:{name:"password",label:"Password",placeholder:"Enter your password",validation:[{required:!0,message:"Password is required"}]},callBack:s=>console.log("Password Event:",{type:n.FIELD_CHANGE,...s})}};var r,a,e;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    option: {
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      validation: [{
        required: true,
        message: 'Password is required'
      }]
    },
    callBack: (event: any): void => console.log('Password Event:', {
      type: FORM_EVENT.FIELD_CHANGE,
      ...event
    })
  }
}`,...(e=(a=o.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};const y=["Playground"];export{o as Playground,y as __namedExportsOrder,P as default};
