"use strict";(self.webpackChunkakmalov_com=self.webpackChunkakmalov_com||[]).push([[8595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),k=a,f=s["".concat(l,".").concat(k)]||s[k]||m[k]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},c="Kafka",i={unversionedId:"misc/kafka",id:"misc/kafka",title:"Kafka",description:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438",source:"@site/docs/misc/kafka.md",sourceDirName:"misc",slug:"/misc/kafka",permalink:"/docs/misc/kafka",draft:!1,editUrl:"https://github.com/akmalovaa/akmalov.com/tree/main/docs/misc/kafka.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bash",permalink:"/docs/misc/bash"},next:{title:"WireGuard",permalink:"/docs/misc/wireguard"}},l={},p=[{value:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438",id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u043f\u0440\u043e-\u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kafka"},"Kafka"),(0,a.kt)("h2",{id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u043f\u0440\u043e-\u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438"},"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0422\u043e \u0435\u0441\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440 \u0432\u0438\u0434\u0438\u0442 \u043d\u0435 \u0432\u0441\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0442\u043e\u043f\u0438\u043a\u0435, \u0430 \u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0443 \u0447\u0430\u0441\u0442\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043f\u0430\u043b\u0430 \u0432 \u0435\u0433\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044e?")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u0414\u0430, \u044d\u0442\u043e \u0442\u0430\u043a. \u041a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440 \u0432 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440-\u0433\u0440\u0443\u043f\u043f\u0435 \u0447\u0438\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0441\u0432\u043e\u0435\u0439 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0442\u043e\u043f\u0438\u043a\u0430.\n\u0415\u0441\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u043e\u0432 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u0432 \u0442\u043e\u043f\u0438\u043a\u0435, \u0442\u043e \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0441\u0432\u043e\u0435\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438, \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u0435\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f\u0445. "),(0,a.kt)("p",{parentName:"blockquote"},"\u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043c\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0434\u043b\u044f \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u043e\u0432."),(0,a.kt)("p",{parentName:"blockquote"},"\u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u043e\u0432 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439, \u0442\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430\u043c\u0438.\n\u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e, \u0435\u0441\u043b\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u0447\u0435\u043c \u0434\u0440\u0443\u0433\u0438\u0435."),(0,a.kt)("p",{parentName:"blockquote"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0441\u0442\u044c, \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0443 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430\u043c\u0438 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u044b \u0432\u0438\u0434\u0435\u043b\u0438 \u0432\u0441\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0442\u043e\u043f\u0438\u043a\u0435, \u0442\u043e \u043e\u043d\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432 \u043e\u0434\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435?")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u041d\u0435\u0442. \u0415\u0441\u043b\u0438 \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u0435\u0449\u0451 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443, \u0442\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438.\n\u0421\u043a\u0430\u0436\u0435\u043c, \u0443 \u043d\u0430\u0441 3 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438. c1(consumer1) \u0442\u0435\u043f\u0435\u0440\u044c \u0431\u0443\u0434\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0438\u0437 \u043f\u0435\u0440\u0432\u043e\u0439 \u0438 \u0432\u0442\u043e\u0440\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438, \u0430 c2 \u2014 \u0438\u0437 \u0442\u0440\u0435\u0442\u044c\u0435\u0439. \u0414\u043e\u0431\u0430\u0432\u0438\u0432 \u0435\u0449\u0451 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430 (c3), \u043c\u044b \u0434\u043e\u0431\u044c\u0451\u043c\u0441\u044f \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438, \u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u043e\u0432 \u0432 \u044d\u0442\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u0431\u0443\u0434\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043e\u0434\u043d\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438.\n\u0410 \u0432\u043e\u0442 \u0435\u0441\u043b\u0438 \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u0432 \u0433\u0440\u0443\u043f\u043f\u0443 \u0435\u0449\u0451 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430 (c4), \u0442\u043e \u043e\u043d \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u043d \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0432\u043e\u043e\u0431\u0449\u0435."),(0,a.kt)("p",{parentName:"blockquote"},"\u0412\u0430\u0436\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u044c: \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440-\u0433\u0440\u0443\u043f\u043f\u044b \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u0441\u044f \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430\u043c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438."),(0,a.kt)("p",{parentName:"blockquote"},"\u0415\u0441\u043b\u0438 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u044b \u043d\u0435 \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441 \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u043e\u0431\u044a\u0451\u043c\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044e \u0432 \u0442\u043e\u043f\u0438\u043a. \u0422\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440 c4 \u043d\u0430\u0447\u043d\u0451\u0442 \u0441\u0432\u043e\u044e \u0440\u0430\u0431\u043e\u0442\u0443.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u0415\u0441\u043b\u0438 \u0432 \u043e\u0434\u0438\u043d \u0442\u043e\u043f\u0438\u043a \u043f\u0438\u0448\u0443\u0442\u0441\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u043e\u0432 \u0438 \u043e\u043d\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442 \u043d\u0443\u0436\u043d\u043e\u0435 \u0438\u043c \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 uuid \u0438 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u044b \u043d\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0432 \u0433\u0440\u0443\u043f\u043f\u0443, \u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0440\u043e\u0447\u0442\u0435\u0442 \u0441\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0438 \u0442\u043a \u0435\u0433\u043e \u043f\u0440\u043e\u0447\u0442\u0443\u0442 \u043d\u0435 \u0432\u0441\u0435 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u044b, \u0442\u043e \u043e\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043b\u0435\u0436\u0430\u0442\u044c \u0432 \u0442\u043e\u043f\u0438\u043a\u0435, \u043f\u043e\u043a\u0430 \u043d\u0435 \u0432\u044b\u0439\u0434\u0435\u0442 \u0435\u0433\u043e \u0432\u0440\u0435\u043c\u044f \u0436\u0438\u0437\u043d\u0438 \u0438 \u041a\u0430\u0444\u043a\u0430 \u0441\u0430\u043c\u0430 \u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u0447\u0438\u0441\u0442\u0438\u0442?")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u0415\u0441\u043b\u0438 1 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f, \u0433\u0434\u0435 \u043b\u0435\u0436\u0430\u0442 \u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0440\u043e\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0435, \u0442\u043e\u0433\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u043a\u043e\u043d\u0441\u044e\u043c\u0435\u0440-\u0433\u0440\u0443\u043f\u043f\u044b \u043f\u043e\u0434 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439, \u043b\u0438\u0431\u043e \u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u0442\u043e\u043f\u0438\u043a\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f. \u0414\u0430, \u043a\u0430\u0444\u043a\u0430 \u0443\u0434\u0430\u043b\u0438\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 retention \u043f\u0435\u0440\u0438\u043e\u0434\u0430")))}m.isMDXComponent=!0}}]);