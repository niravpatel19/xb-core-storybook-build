import{j as t}from"./jsx-runtime-CLpGMVip.js";import"./index-BjdNQuuc.js";import"./index-SqJVX6bv.js";import{T as l}from"./index-DpNBrREU.js";import{a as s}from"./index-BH7J9u6C.js";import"./i18next-8U-VCFEF.js";import"./index-CjmQ2z5u.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./SearchOutlined-Bbj-V6vO.js";import"./reactNode-Br-Lxy6K.js";import"./pickAttrs-Cx3WwzQX.js";const T={title:"Components/FormItem",component:s,argTypes:{option:{control:"object",description:"Configuration options for FormItem.",defaultValue:{name:"username",label:"Username",placeholder:"Enter your username",tooltip:"This is your username field.",labelAlign:"right",layout:"horizontal",className:{label:"custom-label-class"}}},children:{control:!1,description:"Child components (like TextInput) within the FormItem."}}},e={args:{option:{name:"username",label:"Username",placeholder:"Enter your username",tooltip:"This is your username field.",labelAlign:"right",layout:"horizontal",className:{label:"custom-label-class"}},children:t.jsx(l,{option:{name:"username",placeholder:"Enter your username",validation:[{required:!0,message:"Username is required."}]},callBack:a=>console.log("TextInput Event:",a)})}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    option: {
      name: 'username',
      label: 'Username',
      placeholder: 'Enter your username',
      tooltip: 'This is your username field.',
      labelAlign: 'right',
      layout: 'horizontal',
      className: {
        label: 'custom-label-class'
      }
    },
    children: <TextInput option={{
      name: 'username',
      placeholder: 'Enter your username',
      validation: [{
        required: true,
        message: 'Username is required.'
      }]
    }} callBack={event => console.log('TextInput Event:', event)} />
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const E=["Playground"];export{e as Playground,E as __namedExportsOrder,T as default};
