import{F as t}from"./index-BH7J9u6C.js";import{T as s}from"./index-DpNBrREU.js";import"./index-CjmQ2z5u.js";import"./i18next-8U-VCFEF.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./SearchOutlined-Bbj-V6vO.js";import"./reactNode-Br-Lxy6K.js";import"./pickAttrs-Cx3WwzQX.js";import"./jsx-runtime-CLpGMVip.js";const T={title:"Components/TextInput",component:s,argTypes:{option:{control:"object",description:"Configuration options for the TextInput.",defaultValue:{name:"username",label:"Username",placeholder:"Enter your username"}},callBack:{action:"callBack",description:"Callback function for handling value changes."}}},e={args:{option:{name:"username",label:"Username",placeholder:"Enter your username",validation:[{required:!0,message:"Username is required"}]},callBack:a=>console.log("TextInput Event:",{type:t.FIELD_CHANGE,...a})}};var n,r,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    option: {
      name: 'username',
      label: 'Username',
      placeholder: 'Enter your username',
      validation: [{
        required: true,
        message: 'Username is required'
      }]
    },
    callBack: (event: any): void => console.log('TextInput Event:', {
      type: FORM_EVENT.FIELD_CHANGE,
      ...event
    })
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const f=["Playground"];export{e as Playground,f as __namedExportsOrder,T as default};
