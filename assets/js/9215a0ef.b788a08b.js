"use strict";(self.webpackChunkakmalov_com=self.webpackChunkakmalov_com||[]).push([[1219],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>y});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=t.createContext({}),c=function(e){var r=t.useContext(g),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(g.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,y=m["".concat(g,".").concat(u)]||m[u]||s[u]||o;return n?t.createElement(y,i(i({ref:r},p),{},{components:n})):t.createElement(y,i({ref:r},p))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var g in r)hasOwnProperty.call(r,g)&&(l[g]=r[g]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6825:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(7462),a=(n(7294),n(3905));const o={slug:"nginx-proxy-manager",title:"NGINX Proxy Manager",description:"NGINX Proxy Manager - \u0441\u0435\u0440\u0432\u0438\u0441 (WEB GUI) \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 NGINX",image:"./nginx-proxy-manager-logo.png",tags:["docker","homelab","nginx"],keywords:["nginx","proxy","manager","web","gui","docker","docker-compose"],date:new Date("2022-01-08T00:00:00.000Z")},i=void 0,l={permalink:"/blog/nginx-proxy-manager",editUrl:"https://github.com/akmalovaa/akmalov.com/tree/main/blog/nginx-proxy-manager/index.md",source:"@site/blog/nginx-proxy-manager/index.md",title:"NGINX Proxy Manager",description:"NGINX Proxy Manager - \u0441\u0435\u0440\u0432\u0438\u0441 (WEB GUI) \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 NGINX",date:"2022-01-08T00:00:00.000Z",formattedDate:"8 \u044f\u043d\u0432\u0430\u0440\u044f 2022 \u0433.",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"homelab",permalink:"/blog/tags/homelab"},{label:"nginx",permalink:"/blog/tags/nginx"}],readingTime:3.705,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"nginx-proxy-manager",title:"NGINX Proxy Manager",description:"NGINX Proxy Manager - \u0441\u0435\u0440\u0432\u0438\u0441 (WEB GUI) \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 NGINX",image:"./nginx-proxy-manager-logo.png",tags:["docker","homelab","nginx"],keywords:["nginx","proxy","manager","web","gui","docker","docker-compose"],date:"2022-01-08T00:00:00.000Z"},prevItem:{title:"Image generator",permalink:"/blog/image-generator-python-flask-docker"},nextItem:{title:"Adguard Home",permalink:"/blog/adguard-home"}},g={image:n(3244).Z,authorsImageUrls:[]},c=[],p={toc:c},m="wrapper";function s(e){let{components:r,...o}=e;return(0,a.kt)(m,(0,t.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NGINX Proxy Manager - \u0441\u0435\u0440\u0432\u0438\u0441 (WEB GUI) \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 NGINX. \u0418\u0434\u0435\u0442 \u043a\u0430\u043a \u0433\u043e\u0442\u043e\u0432\u044b\u0439 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0435 \u0438 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c\u0438 \u0431\u0430\u0437\u043e\u0432\u044b\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 NGINX."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/blog/nginx-proxy-manager"},(0,a.kt)("img",{alt:"nginx logo",src:n(3244).Z,width:"1500",height:"500"}))))}s.isMDXComponent=!0},3244:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/nginx-proxy-manager-logo-64566577a59f79263974a6414ef6e40a.png"}}]);