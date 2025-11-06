import{j as n}from"./jsx-runtime-CLpGMVip.js";import{I as l}from"./index-BWoCq88W.js";import{P as s}from"./index-B6270yGN.js";import{T as m}from"./index-DTnZDP1J.js";import{b as i,a as c}from"./index-D4upi21E.js";import{B as u,a as p}from"./index-l5fvKOel.js";import"./reactNode-qhLQ1VKY.js";import"./index-CjmQ2z5u.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./i18next-BVq_Fi8G.js";import"./index-DnZ6lhxI.js";import"./button-bNFFCPpI.js";import"./pickAttrs-DemhUc0k.js";import"./SearchOutlined-f36bSWKA.js";import"./usa-flag-C2aWW-QM.js";const F={title:"Components/FormBase",component:i,argTypes:{option:{control:"object",description:"Form layout options including name, layout, and label alignment.",defaultValue:{name:"DemoForm",layout:"vertical",labelAlign:"right",className:{form:"custom-form-class"}}},value:{control:"object",description:"Initial form values.",defaultValue:{username:"JohnDoe",password:"",otp:""}},callBack:{action:"callBack",description:"Callback function for handling form events."},form:{control:!1}}},o={args:{form:void 0,value:{username:"JohnDoe",password:"",otp:""},callBack:e=>console.log("Form Event:",e),option:{name:"DemoForm",layout:"vertical",labelAlign:"right",className:{form:"custom-form-class"}},children:n.jsxs(n.Fragment,{children:[n.jsx(m,{option:{name:"username",label:"Username",placeholder:"Enter your username",validation:[{required:!0,message:"Username is required"}]},callBack:e=>console.log("TextInput Event:",e)}),n.jsx(s,{option:{name:"password",label:"Password",placeholder:"Enter your password",validation:[{required:!0,message:"Password is required"}]},callBack:e=>console.log("Password Event:",e)}),n.jsx(l,{option:{name:"otp",label:"OTP",placeholder:"Enter OTP",length:6,mask:"*",validation:[{required:!0,message:"OTP is required"}]},callBack:e=>console.log("InputOTP Event:",e)}),n.jsx(c,{option:{name:"submit",noStyle:!0},children:n.jsx(u,{option:{type:p.primary,label:"Submit",className:"w-full",htmlType:"submit"},callBack:()=>console.log("Submit button clicked")})})]})}};var a,r,t;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    form: undefined,
    value: {
      username: 'JohnDoe',
      password: '',
      otp: ''
    },
    callBack: (event: any): void => console.log('Form Event:', event),
    option: {
      name: 'DemoForm',
      layout: 'vertical',
      labelAlign: 'right',
      className: {
        form: 'custom-form-class'
      }
    },
    children: <>\r
        <TextInput option={{
        name: 'username',
        label: 'Username',
        placeholder: 'Enter your username',
        validation: [{
          required: true,
          message: 'Username is required'
        }]
      }} callBack={event => console.log('TextInput Event:', event)} />\r
        <Password option={{
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        validation: [{
          required: true,
          message: 'Password is required'
        }]
      }} callBack={event => console.log('Password Event:', event)} />\r
        <InputOTP option={{
        name: 'otp',
        label: 'OTP',
        placeholder: 'Enter OTP',
        length: 6,
        mask: '*',
        validation: [{
          required: true,
          message: 'OTP is required'
        }]
      }} callBack={event => console.log('InputOTP Event:', event)} />\r
        <FormItem option={{
        name: 'submit',
        noStyle: true
      }}>\r
          <Button option={{
          type: ButtonType.primary,
          label: 'Submit',
          className: 'w-full',
          htmlType: 'submit'
        }} callBack={() => console.log('Submit button clicked')} />\r
        </FormItem>\r
      </>
  }
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const O=["Playground"];export{o as Playground,O as __namedExportsOrder,F as default};
