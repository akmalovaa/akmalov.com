"use strict";(self.webpackChunkakmalov_com=self.webpackChunkakmalov_com||[]).push([[8531],{61:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const c={sidebar_position:4},o="Kafka",r={id:"misc/kafka",title:"Kafka",description:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438",source:"@site/docs/misc/kafka.md",sourceDirName:"misc",slug:"/misc/kafka",permalink:"/docs/misc/kafka",draft:!1,unlisted:!1,editUrl:"https://github.com/akmalovaa/akmalov.com/tree/main/docs/misc/kafka.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bash",permalink:"/docs/misc/bash"},next:{title:"WireGuard",permalink:"/docs/misc/wireguard"}},a={},l=[{value:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438",id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u043f\u0440\u043e-\u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438",level:2}];function d(n){const e={blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"kafka",children:"Kafka"}),"\n",(0,s.jsx)(e.h2,{id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u043f\u0440\u043e-\u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438",children:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u0422\u043e \u0435\u0441\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440 \u0432\u0438\u0434\u0438\u0442 \u043d\u0435 \u0432\u0441\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0442\u043e\u043f\u0438\u043a\u0435, \u0430 \u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0443 \u0447\u0430\u0441\u0442\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043f\u0430\u043b\u0430 \u0432 \u0435\u0433\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044e?"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u0414\u0430, \u044d\u0442\u043e \u0442\u0430\u043a. \u041a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440 \u0432 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440-\u0433\u0440\u0443\u043f\u043f\u0435 \u0447\u0438\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0441\u0432\u043e\u0435\u0439 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0442\u043e\u043f\u0438\u043a\u0430.\n\u0415\u0441\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u043e\u0432 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u0432 \u0442\u043e\u043f\u0438\u043a\u0435, \u0442\u043e \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0441\u0432\u043e\u0435\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438, \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u0435\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f\u0445."}),"\n",(0,s.jsx)(e.p,{children:"\u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043c\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0434\u043b\u044f \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u043e\u0432."}),"\n",(0,s.jsx)(e.p,{children:"\u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u043e\u0432 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439, \u0442\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430\u043c\u0438.\n\u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e, \u0435\u0441\u043b\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u0447\u0435\u043c \u0434\u0440\u0443\u0433\u0438\u0435."}),"\n",(0,s.jsx)(e.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0441\u0442\u044c, \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0443 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430\u043c\u0438 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"\u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u044b \u0432\u0438\u0434\u0435\u043b\u0438 \u0432\u0441\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0442\u043e\u043f\u0438\u043a\u0435, \u0442\u043e \u043e\u043d\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432 \u043e\u0434\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435?"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u041d\u0435\u0442. \u0415\u0441\u043b\u0438 \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u0435\u0449\u0451 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443, \u0442\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438.\n\u0421\u043a\u0430\u0436\u0435\u043c, \u0443 \u043d\u0430\u0441 3 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438. c1(consumer1) \u0442\u0435\u043f\u0435\u0440\u044c \u0431\u0443\u0434\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0438\u0437 \u043f\u0435\u0440\u0432\u043e\u0439 \u0438 \u0432\u0442\u043e\u0440\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438, \u0430 c2 \u2014 \u0438\u0437 \u0442\u0440\u0435\u0442\u044c\u0435\u0439. \u0414\u043e\u0431\u0430\u0432\u0438\u0432 \u0435\u0449\u0451 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430 (c3), \u043c\u044b \u0434\u043e\u0431\u044c\u0451\u043c\u0441\u044f \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438, \u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u043e\u0432 \u0432 \u044d\u0442\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u0431\u0443\u0434\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043e\u0434\u043d\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438.\n\u0410 \u0432\u043e\u0442 \u0435\u0441\u043b\u0438 \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u0432 \u0433\u0440\u0443\u043f\u043f\u0443 \u0435\u0449\u0451 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430 (c4), \u0442\u043e \u043e\u043d \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u043d \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0432\u043e\u043e\u0431\u0449\u0435."}),"\n",(0,s.jsx)(e.p,{children:"\u0412\u0430\u0436\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u044c: \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440-\u0433\u0440\u0443\u043f\u043f\u044b \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u0441\u044f \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u0430\u043c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),"\n",(0,s.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u044b \u043d\u0435 \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441 \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u043e\u0431\u044a\u0451\u043c\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044e \u0432 \u0442\u043e\u043f\u0438\u043a. \u0422\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440 c4 \u043d\u0430\u0447\u043d\u0451\u0442 \u0441\u0432\u043e\u044e \u0440\u0430\u0431\u043e\u0442\u0443."}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"\u0415\u0441\u043b\u0438 \u0432 \u043e\u0434\u0438\u043d \u0442\u043e\u043f\u0438\u043a \u043f\u0438\u0448\u0443\u0442\u0441\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u043e\u0432 \u0438 \u043e\u043d\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442 \u043d\u0443\u0436\u043d\u043e\u0435 \u0438\u043c \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 uuid \u0438 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u044b \u043d\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0432 \u0433\u0440\u0443\u043f\u043f\u0443, \u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0440\u043e\u0447\u0442\u0435\u0442 \u0441\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0438 \u0442\u043a \u0435\u0433\u043e \u043f\u0440\u043e\u0447\u0442\u0443\u0442 \u043d\u0435 \u0432\u0441\u0435 \u043a\u043e\u043d\u0441\u044c\u044e\u043c\u0435\u0440\u044b, \u0442\u043e \u043e\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043b\u0435\u0436\u0430\u0442\u044c \u0432 \u0442\u043e\u043f\u0438\u043a\u0435, \u043f\u043e\u043a\u0430 \u043d\u0435 \u0432\u044b\u0439\u0434\u0435\u0442 \u0435\u0433\u043e \u0432\u0440\u0435\u043c\u044f \u0436\u0438\u0437\u043d\u0438 \u0438 \u041a\u0430\u0444\u043a\u0430 \u0441\u0430\u043c\u0430 \u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u0447\u0438\u0441\u0442\u0438\u0442?"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 1 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f, \u0433\u0434\u0435 \u043b\u0435\u0436\u0430\u0442 \u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0440\u043e\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0435, \u0442\u043e\u0433\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u043a\u043e\u043d\u0441\u044e\u043c\u0435\u0440-\u0433\u0440\u0443\u043f\u043f\u044b \u043f\u043e\u0434 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439, \u043b\u0438\u0431\u043e \u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u0442\u043e\u043f\u0438\u043a\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f. \u0414\u0430, \u043a\u0430\u0444\u043a\u0430 \u0443\u0434\u0430\u043b\u0438\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 retention \u043f\u0435\u0440\u0438\u043e\u0434\u0430"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var s=t(6540);const i={},c=s.createContext(i);function o(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);