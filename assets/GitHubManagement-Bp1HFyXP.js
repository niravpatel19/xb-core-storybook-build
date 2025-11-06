import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-B7tNCeqj.js";import{ah as l}from"./chunk-NUUEMKO5-CwxPReyq.js";import"./index-CjmQ2z5u.js";import"./iframe-B9gwkfpw.js";import"../sb-preview/runtime.js";import"./index-BMe7z94d.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./react-18-CIa3mfoj.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Documentation/GitHub Management"}),`
`,e.jsx(n.h1,{id:"github-and-branch-management",children:"GitHub and Branch Management"}),`
`,e.jsx(n.p,{children:"This document outlines the guidelines and rules for managing GitHub branches in the project. It includes information about base branches, branch creation conventions, merge workflows, and best practices to ensure efficient collaboration and deployment processes."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"base-branches",children:"Base Branches"}),`
`,e.jsx(n.p,{children:"The project uses three key base branches, each with a distinct purpose:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"develop:"})," The primary branch containing the latest and final code.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Usage:"})," All feature and hotfix branches are merged into this branch after approval."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"dev:"})," The deployment branch for the dev server/environment.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Usage:"})," Changes from the ",e.jsx(n.code,{children:"develop"})," branch are merged here for deployment to the dev environment using CI/CD pipelines."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"deployment:"})," The deployment branch for the live server/environment.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Usage:"})," Changes from the ",e.jsx(n.code,{children:"develop"})," branch are merged here for deployment to the production environment using CI/CD pipelines."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"branch-creation-guidelines",children:"Branch Creation Guidelines"}),`
`,e.jsx(n.p,{children:"The project enforces strict branch naming conventions and hierarchical structures:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Feature Branches"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Format:"})," ",e.jsx(n.code,{children:"feat/feature-name"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Source:"})," Must always be created from the ",e.jsx(n.code,{children:"develop"})," branch."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Purpose:"})," Used for developing new features or modules."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Hotfix Branches"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Format:"})," ",e.jsx(n.code,{children:"hotfix/feature-name"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Source:"})," Must always be created from the corresponding feature branch (",e.jsx(n.code,{children:"feat/feature-name"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Purpose:"})," Used for fixing bugs or issues related to a specific feature."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"merge-workflow-and-restrictions",children:"Merge Workflow and Restrictions"}),`
`,e.jsx(n.p,{children:"Direct merges into base branches are strictly prohibited. All changes must go through a pull request (PR) and be approved before merging. The following sequence must be followed for merging changes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`hotfix/feature-name -> feat/feature-name -> develop -> dev -> deployment
`})}),`
`,e.jsx(n.h3,{id:"merge-workflow-example",children:"Merge Workflow Example"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hotfix Branch:"})," Implement bug fixes in ",e.jsx(n.code,{children:"hotfix/feature-name"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Feature Branch:"})," Merge ",e.jsx(n.code,{children:"hotfix/feature-name"})," into ",e.jsx(n.code,{children:"feat/feature-name"})," after a PR approval."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Develop Branch:"})," Merge ",e.jsx(n.code,{children:"feat/feature-name"})," into ",e.jsx(n.code,{children:"develop"})," after a PR approval."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dev Branch:"})," Merge ",e.jsx(n.code,{children:"develop"})," into ",e.jsx(n.code,{children:"dev"})," for deployment to the dev server."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Deployment Branch:"})," Merge ",e.jsx(n.code,{children:"develop"})," into ",e.jsx(n.code,{children:"deployment"})," for deployment to the live server."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"pull-request-workflow",children:"Pull Request Workflow"}),`
`,e.jsx(n.p,{children:"All merges must go through a PR with the following requirements:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Include a detailed description of the changes made."}),`
`,e.jsx(n.li,{children:"At least one reviewer must approve the PR before merging."}),`
`,e.jsx(n.li,{children:"Resolve any conflicts locally before merging."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"branch-management-rules",children:"Branch Management Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Branch Naming:"})," Always follow the defined naming conventions (",e.jsx(n.code,{children:"feat/"})," and ",e.jsx(n.code,{children:"hotfix/"})," prefixes)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Source Branch:"})," Create branches from the correct source:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Feature branches from ",e.jsx(n.code,{children:"develop"}),"."]}),`
`,e.jsx(n.li,{children:"Hotfix branches from the corresponding feature branch."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Commit Guidelines:"})," Write meaningful commit messages using the ",e.jsx(n.a,{href:"https://www.conventionalcommits.org/",rel:"nofollow",children:"Conventional Commits"})," specification:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"feat: implement user login functionality"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep Branches Updated:"})," Regularly pull changes from ",e.jsx(n.code,{children:"develop"})," to your feature or hotfix branches to avoid conflicts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Testing:"})," Test all changes locally and ensure automated tests pass before creating a PR."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"commit-code-using-cmd",children:"Commit Code Using CMD"}),`
`,e.jsx(n.p,{children:"To commit code following the Conventional Commits rules, use the following steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Stage your changes:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`git add .
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Create a commit message:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`git commit -m "<type>: <subject>"
`})}),`
`,e.jsxs(n.p,{children:["Replace ",e.jsx(n.code,{children:"<type>"})," with one of the allowed types:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"feat"}),": A new feature."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fix"}),": A bug fix."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"docs"}),": Documentation changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style"}),": Code style changes (e.g., formatting)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"refactor"}),": Code restructuring without changing functionality."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"test"}),": Adding or fixing tests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"chore"}),": Maintenance tasks (e.g., build changes)."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Replace ",e.jsx(n.code,{children:"<subject>"})," with a concise summary of the changes."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`git commit -m "feat: add user authentication flow"
`})}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"example-workflow",children:"Example Workflow"}),`
`,e.jsx(n.p,{children:"Below is an example of creating and merging branches:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Create a Feature Branch:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`git checkout develop\r
git checkout -b feat/user-authentication
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Create a Hotfix Branch:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`git checkout feat/user-authentication\r
git checkout -b hotfix/authentication-bugfix
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Merging Hotfix into Feature:"})," Submit a PR to merge ",e.jsx(n.code,{children:"hotfix/authentication-bugfix"})," into ",e.jsx(n.code,{children:"feat/user-authentication"}),". After approval:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`git merge hotfix/authentication-bugfix
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Merging Feature into Develop:"})," Submit a PR to merge ",e.jsx(n.code,{children:"feat/user-authentication"})," into ",e.jsx(n.code,{children:"develop"}),". After approval:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`git merge feat/user-authentication
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Merging Develop into Dev and Deployment:"})," Submit PRs to merge ",e.jsx(n.code,{children:"develop"})," into ",e.jsx(n.code,{children:"dev"})," and ",e.jsx(n.code,{children:"deployment"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"enforcement",children:"Enforcement"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use GitHub branch protection rules to enforce restrictions, such as requiring PR approvals and passing CI checks before merging."}),`
`,e.jsx(n.li,{children:"Ensure all team members are trained on these guidelines to maintain consistency and quality."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"conclusion",children:"Conclusion"}),`
`,e.jsx(n.p,{children:"Adhering to these branching and merging guidelines ensures a clean, conflict-free, and efficient workflow, enabling seamless collaboration and deployment processes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{})})]})}function p(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{p as default};
