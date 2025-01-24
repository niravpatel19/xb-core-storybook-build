import{j as r}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as e}from"./index-B7tNCeqj.js";import{ah as m}from"./chunk-NUUEMKO5-4mrWzxjr.js";import"./index-CjmQ2z5u.js";import"./iframe-DFb6COPX.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...e(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Documentation/Import Sequence"}),`
`,r.jsx(n.h1,{id:"import-sequence-documentation",children:"Import Sequence Documentation"}),`
`,r.jsx(n.p,{children:"This story documents the import sequence used in the project. The import paths below are for reference purposes and are not validated or resolved in this documentation."}),`
`,r.jsx(n.hr,{}),`
`,r.jsx(n.h2,{id:"import-sequence",children:"Import Sequence"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-plaintext",children:`// React Internal Library\r
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
import { IAPIRequest } from '../../../../core/hook/api/interface/index';\r
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
// Redux\r
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
\r
// Style\r
import '@style/global/style.css';\r
\r
// Asset\r
import { Icon } from '../../../asset';
`})})]})}function y(t={}){const{wrapper:n}={...e(),...t.components};return n?r.jsx(n,{...t,children:r.jsx(o,{...t})}):o(t)}export{y as default};
