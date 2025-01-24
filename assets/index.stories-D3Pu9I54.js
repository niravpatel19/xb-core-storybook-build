import{j as o}from"./jsx-runtime-CLpGMVip.js";const y=({userAvatar:l,fullName:s,className:A})=>{var c,m;const e=s?s.split(" "):[],n=e.length>0?(c=e[0][0])==null?void 0:c.toUpperCase():"A",i=e.length>1?(m=e[e.length-1][0])==null?void 0:m.toUpperCase():n,j=`${n}${i||n}`;return l?o.jsx("div",{className:"size-9 shrink-0 flex flex-col items-center justify-center text-center bg-theme-primary overflow-hidden rounded-full",children:o.jsx("img",{src:l,alt:s||"User Avatar",className:`size-full rounded-full object-contain object-center  ${A||""}`})}):o.jsx("div",{className:"size-9 shrink-0 flex flex-col items-center justify-center text-center bg-theme-primary text-white text-xs overflow-hidden rounded-full",children:j})};y.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{userAvatar:{required:!1,tsType:{name:"string"},description:""},fullName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"Components/Avatar",component:y,argTypes:{userAvatar:{control:"text",description:"URL of the user avatar image. If not provided, initials will be displayed.",defaultValue:""},fullName:{control:"text",description:"Full name of the user to generate initials.",defaultValue:"John Doe"},className:{control:"text",description:"Optional className for additional styling.",defaultValue:""}}},a={args:{userAvatar:"",fullName:"John Doe",className:""}},t={args:{userAvatar:"https://via.placeholder.com/150",fullName:"Jane Smith",className:""}},r={args:{userAvatar:"",fullName:"Emily Clark",className:"bg-red-500"}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    userAvatar: '',
    // No avatar to show initials
    fullName: 'John Doe',
    className: ''
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    userAvatar: 'https://via.placeholder.com/150',
    // Replace with a real avatar URL
    fullName: 'Jane Smith',
    className: ''
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,N,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    userAvatar: '',
    // No avatar image provided
    fullName: 'Emily Clark',
    className: 'bg-red-500'
  }
}`,...(x=(N=r.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const w=["Playground","WithAvatarImage","WithInitialsOnly"];export{a as Playground,t as WithAvatarImage,r as WithInitialsOnly,w as __namedExportsOrder,b as default};
