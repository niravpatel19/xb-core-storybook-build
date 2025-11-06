import{j as b}from"./jsx-runtime-CLpGMVip.js";import{e as p,r as $}from"./index-CjmQ2z5u.js";import"./index-De8qenIh.js";import{i as F}from"./index-BDBfIv68.js";import"./index-CvnUYslp.js";import{m as g,n as h,s as C,o as x,p as k,q as D,t as E,F as c,v as y,w as f,x as A,y as u,D as S,z as B,A as T}from"./reactNode-qhLQ1VKY.js";import"./i18next-BVq_Fi8G.js";import"./usa-flag-C2aWW-QM.js";import"./index-DnZ6lhxI.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./button-bNFFCPpI.js";const v=e=>{const r=e!=null&&e.algorithm?g(e.algorithm):g(h),l=Object.assign(Object.assign({},C),e==null?void 0:e.token);return x(l,{override:e==null?void 0:e.token},r,k)};function j(e){const{sizeUnit:r,sizeStep:l}=e,a=l-2;return{sizeXXL:r*(a+10),sizeXL:r*(a+6),sizeLG:r*(a+2),sizeMD:r*(a+2),sizeMS:r*(a+1),size:r*a,sizeSM:r*a,sizeXS:r*(a-1),sizeXXS:r*(a-1)}}const z=(e,r)=>{const l=r??h(e),a=l.fontSizeSM,_=l.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},l),j(r??e)),D(a)),{controlHeight:_}),E(Object.assign(Object.assign({},l),{controlHeight:_})))},o=(e,r)=>new c(e).setA(r).toRgbString(),m=(e,r)=>new c(e).lighten(r).toHexString(),P=e=>{const r=y(e,{theme:"dark"});return{1:r[0],2:r[1],3:r[2],4:r[3],5:r[6],6:r[5],7:r[4],8:r[6],9:r[5],10:r[4]}},M=(e,r)=>{const l=e||"#000",a=r||"#fff";return{colorBgBase:l,colorTextBase:a,colorText:o(a,.85),colorTextSecondary:o(a,.65),colorTextTertiary:o(a,.45),colorTextQuaternary:o(a,.25),colorFill:o(a,.18),colorFillSecondary:o(a,.12),colorFillTertiary:o(a,.08),colorFillQuaternary:o(a,.04),colorBgSolid:o(a,.95),colorBgSolidHover:o(a,1),colorBgSolidActive:o(a,.9),colorBgElevated:m(l,12),colorBgContainer:m(l,8),colorBgLayout:m(l,0),colorBgSpotlight:m(l,26),colorBgBlur:o(a,.04),colorBorder:m(l,26),colorBorderSecondary:m(l,19)}},O=(e,r)=>{const l=Object.keys(f).map(_=>{const n=y(e[_],{theme:"dark"});return new Array(10).fill(1).reduce((s,d,i)=>(s[`${_}-${i+1}`]=n[i],s[`${_}${i+1}`]=n[i],s),{})}).reduce((_,n)=>(_=Object.assign(Object.assign({},_),n),_),{}),a=r??h(e);return Object.assign(Object.assign(Object.assign({},a),l),A(e,{generateColorPalettes:P,generateNeutralColorPalettes:M}))};function I(){const[e,r,l]=B();return{theme:e,token:r,hashId:l}}const H={defaultSeed:u.token,useToken:I,defaultAlgorithm:h,darkAlgorithm:O,compactAlgorithm:z,getDesignToken:v,defaultConfig:u,_internalContext:S},L={white_400:"#EDF2F4",white:"#ffffff",black_50:"#8696A0",cyan:"#E6F5FB",red:"#DC3545",red_100:"#EE404C",orange:"#FE7A00",blue:"#ECF4FF",blue_100:"#45BEEE",blue_200:"#78D0F2",blue_300:"#009AD7",blue_400:"#1677ff",blue_500:"#027EB5",pink:"#F8285A",pink_100:"#FFEEF3",pink_200:"#FFA1A3",pink_300:"#FAE8ED",grey_500:"#545F70",grey_600:"#A9ACB4",grey_700:"#DDE0E8",grey_800:"#EDF0F2",green:"#26A69A",green_50:"#EEF7F3",green_100:"#17C653",green_200:"#DFFFEA",green_400:"#52AA80",green_500:"#4CAF50",limegreen:"#4DD964",purple:"#6560F0",purple_50:"#FDF2FF",purple_70:"#F6F1FF",purple_100:"#B246CE",yellow:"#F9A825",yellow_100:"#FFF7E8",yellow_200:"#AFB42B",primary:"#47B772",primary_light:"#F4FDF3",primary_100:"#D1EDDC",modal_overlay:"#000000"},X={boxShadow:"0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",white_fg:"",white:"#ffffff",white_100:"#ffffff",white_200:"#EFF0F6",white_300:"#EFF0F6",black:"#000000",black_100:"#67686A",black_200:"#17181A",black_300:"#1C1D1F",grey_50:"#687180",grey_100:"#F5F6FB",grey_200:"#D3D9E5",grey_300:"#858F99",grey_400:"#393F49",grey_500:"#2E353A",grey_900:"#202224",green_300:"#ECFFF6",green_600:"#075F58",green_700:"#09AD8A",blue_50:"#519CC4",red_100:"#E30000",active:"#E1F0F8",main_gredient:"#f5f6fb",gredient_border:"linear-gradient(to bottom, rgb(255, 255, 255) 30%, rgb(255, 255, 255, 0) 100%)",drawer_grediant:"linear-gradient(to bottom right, rgba(255, 100, 236, 0.05) 25%, rgba(0, 154, 214, 0.05) 50%, rgba(255, 100, 236, 0.05) 75%, rgba(0, 154, 214, 0.05) 100%)",blur:"#ffffff",main_gradient:"#f5f6fb",dropdown_bg:"#f4f5f6",slider_dots:"#D3D9E5",input_border:"#D3D9E5",box_shadow_100:"20px 8px 50px 0 rgba(255,255,255,0.05)",box_shadow_200:"2px 2px 10px 0 rgba(0,0,0,0.1)",auth_white:"#ffffff",auth_black:"#393F49",auth_blue_100:"#45BEEE",auth_blue_200:"#009AD7",auth_blue_300:"#009AD7",auth_grey_100:"#858F99",auth_modal_overlay:"#000000",wp_mobile_hdr_bg:"#008069",wp_mobile_otr:"#e8eef2",wp_mobile_inr:"#f5f6f8",wp_mobile_ft_bg:"#ffffff",wp_mobile_ft_clr:"#a7acb0",wp_msg_bg:"#D9FDD3",wp_msg_bg_inr:"#d1f4cc",wp_msg_txt_clr:"#111B21",wp_msg_time_clr:"#667781",wp_msg_btn_bg:"#ffffff",wp_msg_mic_bg:"#09AD8A"},R={boxShadow:"0 0 18px 0 rgba(255, 255, 255, 0.04), 0 0 6px -4px rgba(255, 255, 255, 0.08), 0 0 28px 8px rgba(255, 255, 255, 0.04)",white_fg:"#191c2280",white:"#ffffff",white_100:"#111B21",white_200:"#22263e",white_300:"#2e3352",black:"#ffffff",black_100:"#67686A",black_200:"#17181A",black_300:"#1C1D1F",grey_50:"#687180",grey_100:"#0D0F13",grey_200:"#393F49",grey_300:"#C4CDD5",grey_400:"#889bab",grey_500:"#ffffff",grey_900:"#202224",green_300:"#31493d",green_600:"#075F58",green_700:"#09AD8A",red_100:"#E30000",blue_50:"#519CC4",active:"#293241",main_gredient:"#0d0f13",gredient_border:"linear-gradient(to bottom, rgba(57, 67, 79, 1) 0%, rgba(67, 79, 94, 1) 47%, rgba(0, 0, 0, 0) 100%)",drawer_grediant:"linear-gradient(to bottom right, rgba(255, 100, 236, 0.025) 25%, rgba(0, 154, 214, 0.025) 50%, rgba(255, 100, 236, 0.025) 75%, rgba(0, 154, 214, 0.025) 100%)",blur:"#191C22",main_gradient:"#0d0f13",dropdown_bg:"#191C22",slider_dots:"#73767a",input_border:"#3C4952",box_shadow_100:"20px 8px 50px 0 rgba(0,0,0,0.05)",box_shadow_200:"2px 2px 10px 0 rgba(255,255,255,0.1)",auth_white:"#111B21",auth_black:"#ffffff",auth_blue_100:"#0C688C",auth_blue_200:"#009AD7",auth_blue_300:"#009AD7",auth_grey_100:"#C4CDD5",auth_modal_overlay:"#000000",primary:"#47B772",primary_light:"#162A29",primary_100:"#31513D",wp_mobile_hdr_bg:"#111B21",wp_mobile_otr:"#3c4952",wp_mobile_inr:"#202c33",wp_mobile_ft_bg:"#202c33",wp_mobile_ft_clr:"#a4afb6",wp_msg_bg:"#005C4B",wp_msg_bg_inr:"#025144",wp_msg_txt_clr:"#E9EDEF",wp_msg_time_clr:"#99beb7",wp_msg_btn_bg:"#202C33"},V=e=>{const r=e==null?void 0:e.startsWith("dark");return{...L,...r?R:X}},W=e=>`
  :root {
    --theme-white: ${t(e.white)};
    --theme-white-100: ${t(e.white_100)}; 
    --theme-white-200: ${t(e.white_200)}; 
    --theme-white-300: ${t(e.white_300)}; 
    --theme-white-400: ${t(e.white_400)}; 

    --theme-black: ${t(e.black)};
    --theme-black-50: ${t(e.black_50)};
    --theme-black-100: ${t(e.black_100)};
    --theme-black-200: ${t(e.black_200)};
    --theme-black-300: ${t(e.black_300)};

    --theme-cyan: ${t(e.cyan)};

    --theme-red: ${t(e.red)};
    --theme-red-100: ${t(e.red_100)};

    --theme-orange: ${t(e.orange)};

      /* blue shades */
    --theme-blue: ${t(e.blue)};
    --theme-blue-50: ${t(e.blue_50)};
    --theme-blue-100: ${t(e.blue_100)};
    --theme-blue-400: ${t(e.blue_400)};
    --theme-blue-500: ${t(e.blue_500)};
    
    --theme-pink: ${t(e.pink)};
    --theme-pink-100: ${t(e.pink_100)};
    --theme-pink-200: ${t(e.pink_200)};
    --theme-pink-300: ${t(e.pink_300)};

  
    /* grey shades */
    --theme-grey-50: ${t(e.grey_50)};
    --theme-grey-100: ${t(e.grey_100)};
    --theme-grey-200: ${t(e.grey_200)};
    --theme-grey-300: ${t(e.grey_300)};
    --theme-grey-400: ${t(e.grey_400)};
    --theme-grey-500: ${t(e.grey_500)};
    --theme-grey-600: ${t(e.grey_600)};
    --theme-grey-700: ${t(e.grey_700)};
    --theme-grey-800: ${t(e.grey_800)};
    --theme-grey-900: ${t(e.grey_900)};

    --theme-green: ${t(e.green)};
    --theme-green-50: ${t(e.green_50)};
    --theme-green-100: ${t(e.green_100)};
    --theme-green-200: ${t(e.green_200)};
    --theme-green-300: ${t(e.green_300)};
    --theme-green-400: ${t(e.green_400)};
    --theme-green-500: ${t(e.green_500)};
    --theme-green-600: ${t(e.green_600)};
    --theme-green-700: ${t(e.green_700)};
    
    --theme-limegreen: ${t(e.limegreen)};
    
    --theme-active: ${t(e.active)};

    --theme-primary: ${t(e.primary)};
    --theme-primary-light: ${t(e.primary_light)};
    --theme-primary-100: ${t(e.primary_100)};
    
    --theme-purple: ${t(e.purple)};
    --theme-purple_50: ${t(e.purple_50)};
    --theme-purple_70: ${t(e.purple_70)};
    --theme-purple_100: ${t(e.purple_100)};

    --theme-yellow: ${t(e.yellow)};
    --theme-yellow_100: ${t(e.yellow_100)};
    --theme-yellow_200: ${t(e.yellow_200)};

    --theme-main-gredient: ${t(e.main_gredient)};

    --theme-gredient-border: ${e.gredient_border};

    --theme-drawer-grediant: ${e.drawer_grediant};

    

    --theme-blur: ${t(e.blur)};
    --theme-main-gradient: ${t(e.main_gradient)};
    --theme-dropdown-bg: ${t(e.dropdown_bg)};
    --theme-slider-dots: ${t(e.slider_dots)};
    --theme-input-border: ${t(e.input_border)};
    --theme-box-shadow-100: ${e.box_shadow_100};
    --theme-box-shadow-200: ${e.box_shadow_200};
    --theme-auth-white: ${t(e.auth_white)};
    --theme-auth-black: ${t(e.auth_black)};
    --theme-auth-blue-100: ${t(e.auth_blue_100)};
    --theme-auth-blue-200: ${t(e.auth_blue_200)};
    --theme-auth-blue-300: ${t(e.auth_blue_300)};
    --theme-auth-grey-100: ${t(e.auth_grey_100)};
    --theme-auth-modal-overlay: ${t(e.auth_modal_overlay)};

    --theme-wp-mobile-hdr-bg: ${t(e.wp_mobile_hdr_bg)}; 
    --theme-wp-mobile-otr: ${t(e.wp_mobile_otr)};
    --theme-wp-mobile-inr: ${t(e.wp_mobile_inr)};
    --theme-wp-mobile-ft-bg: ${t(e.wp_mobile_ft_bg)};
    --theme-wp-mobile-ft-clr: ${t(e.wp_mobile_ft_clr)};
    --theme-wp-msg-bg: ${t(e.wp_msg_bg)};
    --theme-wp-msg-bg-inr: ${t(e.wp_msg_bg_inr)};
    --theme-wp-msg-txt-clr: ${t(e.wp_msg_txt_clr)};
    --theme-wp-msg-time-clr: ${t(e.wp_msg_time_clr)};
    --theme-wp-msg-btn-bg: ${t(e.wp_msg_btn_bg)};
  }
`,q='"DM Sans", sans-serif',t=e=>{let r=e.startsWith("#")?e.slice(1):e,l=!1;r.length===3?r=r.split("").map(i=>i+i).join(""):r.length===8&&(l=!0);const a=parseInt(r,16),_=a>>>(l?24:16),n=(a&(l?16711680:65280))>>>(l?16:8),s=(a&(l?65280:255))>>>(l?8:0),d=l?`, ${(a&255)/255}`:"";return`${_}, ${n}, ${s}${d}`},w=async(e,r)=>{document.documentElement.className="",document.documentElement.classList.add(e);const l=await V(e);return r(l)},G=async e=>new Promise(r=>{(async()=>{const a="tailwind-vars";let _=document.getElementById(a);const n=await w(e,W);_?_.innerHTML=n:(_=document.createElement("style"),_.id=a,_.innerHTML=n,document.head.appendChild(_));const s={algorithm:e!=null&&e.startsWith("dark")?H.darkAlgorithm:void 0,...await w(e,N)};r(s)})()}),N=e=>({token:{fontFamily:q,colorPrimary:e.primary,boxShadow:e.boxShadow},components:{Collapse:{contentPadding:"8px",headerPadding:"10px"},Dropdown:{colorText:e.grey_400,colorPrimary:e.primary},Pagination:{itemSize:28,borderRadius:4,fontSize:10},Layout:{siderBg:e.white_fg,headerBg:"transparent",lightSiderBg:e.white_fg},Popover:{zIndexPopup:999},Table:{headerBg:"transparent",colorBgContainer:"transparent",borderColor:e.grey_200,headerSplitColor:"transparent",margin:10,paddingXS:6},Checkbox:{controlInteractiveSize:14,borderRadiusSM:2},Tabs:{verticalItemPadding:"0",itemColor:e.grey_400},Drawer:{colorBgElevated:e.drawer_grediant},Input:{colorBgContainer:e.white_100},Select:{colorBgContainer:e.white_100}}}),Q=({children:e})=>{const[r,l]=p.useState();return $.useEffect(()=>{(async()=>{const a=await G("light");l(a)})()},[]),p.useEffect(()=>{F([])},[]),b.jsx(T,{theme:r,children:e})},ne={decorators:[e=>b.jsx(Q,{children:b.jsx(e,{})})],parameters:{docs:{autodocs:!0},options:{storySort:{method:"configure",order:["Documentation",["Project Structure - XB-Core","Coding Structure","Folder Structure","Import Sequence","GitHub Management","PackageJson","Plugins Information","ESLint Rules Configuration","Style Structure","How to api call"]]}}},tags:["autodocs"]};export{ne as default};
