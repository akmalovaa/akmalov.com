"use strict";(self.webpackChunkakmalov_com=self.webpackChunkakmalov_com||[]).push([[8709],{8718:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var a=r(4848),i=r(8453);const o={slug:"nginx-proxy-manager",title:"NGINX Proxy Manager",description:"NGINX Proxy Manager - \u0441\u0435\u0440\u0432\u0438\u0441 (WEB GUI) \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 NGINX",image:"./nginx-proxy-manager-logo.png",tags:["docker","homelab","nginx"],keywords:["nginx","proxy","manager","web","gui","docker","docker-compose"],date:new Date("2022-01-08T00:00:00.000Z")},s=void 0,t={permalink:"/blog/nginx-proxy-manager",editUrl:"https://github.com/akmalovaa/akmalov.com/tree/main/blog/nginx-proxy-manager/index.md",source:"@site/blog/nginx-proxy-manager/index.md",title:"NGINX Proxy Manager",description:"NGINX Proxy Manager - \u0441\u0435\u0440\u0432\u0438\u0441 (WEB GUI) \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 NGINX",date:"2022-01-08T00:00:00.000Z",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"homelab",permalink:"/blog/tags/homelab"},{label:"nginx",permalink:"/blog/tags/nginx"}],readingTime:3.705,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"nginx-proxy-manager",title:"NGINX Proxy Manager",description:"NGINX Proxy Manager - \u0441\u0435\u0440\u0432\u0438\u0441 (WEB GUI) \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 NGINX",image:"./nginx-proxy-manager-logo.png",tags:["docker","homelab","nginx"],keywords:["nginx","proxy","manager","web","gui","docker","docker-compose"],date:"2022-01-08T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Image generator",permalink:"/blog/image-generator-python-flask-docker"},nextItem:{title:"Adguard Home",permalink:"/blog/adguard-home"}},l={image:r(2379).A,authorsImageUrls:[]},c=[{value:"NGINX Proxy Manager",id:"nginx-proxy-manager",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 NGINX Proxy Manager",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-nginx-proxy-manager",level:3},{value:"1. \u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0441\u0440\u0435\u0434\u044b",id:"1-\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u0441\u0440\u0435\u0434\u044b",level:4},{value:"2. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 docker-compose.yaml",id:"2-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-docker-composeyaml",level:4},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 NGINX Proxy Manager",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-nginx-proxy-manager",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Host Proxy NGINX",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-host-proxy-nginx",level:3},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"Dashboard \u0434\u043b\u044f nginx proxy manager",id:"dashboard-\u0434\u043b\u044f-nginx-proxy-manager",level:3},{value:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 404 \u0434\u043b\u044f nginx proxy manager",id:"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430-404-\u0434\u043b\u044f-nginx-proxy-manager",level:3},{value:"\u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0439 docker-compose",id:"\u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0439-docker-compose",level:3},{value:"\u0418\u0442\u043e\u0433\u0438",id:"\u0438\u0442\u043e\u0433\u0438",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"NGINX Proxy Manager - \u0441\u0435\u0440\u0432\u0438\u0441 (WEB GUI) \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 NGINX. \u0418\u0434\u0435\u0442 \u043a\u0430\u043a \u0433\u043e\u0442\u043e\u0432\u044b\u0439 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0435 \u0438 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c\u0438 \u0431\u0430\u0437\u043e\u0432\u044b\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 NGINX."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/blog/nginx-proxy-manager",children:(0,a.jsx)(e.img,{alt:"nginx logo",src:r(8284).A+"",width:"1500",height:"500"})})}),"\n",(0,a.jsx)(e.h2,{id:"nginx-proxy-manager",children:"NGINX Proxy Manager"}),"\n",(0,a.jsxs)(e.p,{children:["Open Source \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 ",(0,a.jsx)(e.a,{href:"https://github.com/NginxProxyManager/nginx-proxy-manager",children:"Github"})," \u0438 ",(0,a.jsx)(e.a,{href:"https://nginxproxymanager.com/",children:"\u041e\u0444\u0444 \u0441\u0430\u0439\u0442"})]}),"\n",(0,a.jsx)(e.p,{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 web \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"}),"\n",(0,a.jsx)(e.li,{children:"\u041b\u0435\u0433\u043a\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0431\u0435\u0437 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f nginx config \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,a.jsx)(e.li,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438, \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0438 \u0436\u0443\u0440\u043d\u0430\u043b \u0430\u0443\u0434\u0438\u0442\u0430"}),"\n",(0,a.jsx)(e.li,{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u0438\u043b\u0438 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c SSL \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b"}),"\n",(0,a.jsx)(e.li,{children:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043d\u044b\u0435 \u0430\u0434\u0440\u0435\u0441 \u043b\u0438\u0441\u0442\u044b."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u044d\u0442\u043e \u043f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e URL \u0434\u043e\u043c\u0435\u043d\u0430."}),"\n",(0,a.jsx)(e.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u043c\u0435\u044e\u0442\u0441\u044f 3 \u0434\u043e\u043c\u0435\u043d\u0430:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"akmalov.com"}),"\n",(0,a.jsx)(e.li,{children:"test.akmalov.com"}),"\n",(0,a.jsx)(e.li,{children:"lvl.akmalov.com"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u0412\u0441\u0435 \u0434\u043e\u043c\u0435\u043d\u044b \u043e\u0431\u0440\u0430\u0449\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0432\u043d\u0435\u0448\u043d\u0435\u043c\u0443 IP \u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\n\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0434\u0443\u0442 \u043d\u0430 80 \u0438\u043b\u0438 443 \u043f\u043e\u0440\u0442 \u043d\u0430 NGINX Proxy Manager\nNGINX \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0434\u043e\u043c\u0435\u043d\u0430 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, VM, Container \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438. \u041f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043c\u0438."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"nginx exmaple shema",src:r(8437).A+"",title:"\u0421\u0445\u0435\u043c\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f NGINX Poroxy Manager",width:"2718",height:"1597"})}),"\n",(0,a.jsx)(e.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-nginx-proxy-manager",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 NGINX Proxy Manager"}),"\n",(0,a.jsx)(e.h4,{id:"1-\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u0441\u0440\u0435\u0434\u044b",children:"1. \u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0441\u0440\u0435\u0434\u044b"}),"\n",(0,a.jsx)(e.p,{children:"\u0411\u0443\u0434\u0443 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043d\u0430 LXC Proxmox"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"OS: Ubuntu 22.02"}),"\n",(0,a.jsx)(e.li,{children:"CPU: 2"}),"\n",(0,a.jsx)(e.li,{children:"RAM: 1 Gb"}),"\n",(0,a.jsx)(e.li,{children:"Disk: 10 Gb"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 docker"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"apt update && apt upgrade -y\napt install -y docker.io docker-compose\n"})}),"\n",(0,a.jsx)(e.h4,{id:"2-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-docker-composeyaml",children:"2. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 docker-compose.yaml"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-YAML",children:"version: \"3\"\nservices:\n  nginx-proxy-manager:\n    image: 'jc21/nginx-proxy-manager:latest'\n    restart: unless-stopped\n    ports:\n      - '80:80' # HTTP port\n      - '443:443' # HTTPS port\n      - '81:81' # Admin web port\n    volumes:\n      - ./data:/data\n      - ./letsencrypt:/etc/letsencrypt\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0444\u0430\u0439\u043b\u043e\u0432\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 SQLite - ",(0,a.jsx)(e.code,{children:"data/database.sqlite"}),"\n\u0415\u0441\u0442\u044c \u0442\u0430\u043a \u0436\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 MySQL \u043d\u0430 \u043e\u0444\u0444.\u0441\u0430\u0439\u0442\u0435.\n\u0412 \u043c\u043e\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0438 SQLite \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0441 \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u043c \u0437\u0430\u043f\u0430\u0441\u043e\u043c"]}),"\n",(0,a.jsx)(e.p,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"docker-compose up -d\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0430\u043d\u0435\u043b\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"http://YOUR-IP:81/"})}),"\n",(0,a.jsx)(e.p,{children:"\u041b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Email: admin@example.com\nPassword: changeme\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u041f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0430\u0434\u043c\u0438\u043d\u0441\u043a\u0443\u044e \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c \u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),"\n",(0,a.jsx)(e.h3,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-nginx-proxy-manager",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 NGINX Proxy Manager"}),"\n",(0,a.jsxs)(e.p,{children:["\u0422\u0430\u043a \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e GUI \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u044d\u043a\u0440\u0430\u043d\u0430 (\u0412\u0441\u0435 \u043f\u043e \u043d\u0443\u043b\u044f\u043c \u0442.\u043a. \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0438 \u0435\u0449\u0435)\n",(0,a.jsx)(e.img,{alt:"nginx proxy manager web",src:r(1051).A+"",title:"gui nginx proxy manager web",width:"1222",height:"633"})]}),"\n",(0,a.jsxs)(e.p,{children:["SSL \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Let'Encrypt \u0432 \u043e\u0434\u043d\u043e \u043d\u0430\u0436\u0430\u0442\u0438\u0435 \u0438\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b\n",(0,a.jsx)(e.img,{alt:"nginx proxy manager ssl",src:r(4573).A+"",title:"\u041f\u0430\u043d\u0435\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430 SSL",width:"1218",height:"626"})]}),"\n",(0,a.jsx)(e.h3,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-host-proxy-nginx",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Host Proxy NGINX"}),"\n",(0,a.jsxs)(e.p,{children:["\u0412\u0441\u0435 \u0442\u0430\u043a\u0436\u0435 \u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e \u043f\u043e\u043d\u0442\u044f\u043d\u043e, \u043f\u0440\u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e \u0434\u043e\u043c\u0435\u043d, \u043f\u043e\u0440\u0442, \u0435\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e  \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 SSL \u0434\u043b\u044f HTTPS\n",(0,a.jsx)(e.img,{alt:"nginx proxy manager proxy host1",src:r(4797).A+"",title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 proxy host",width:"493",height:"546"}),"\n",(0,a.jsx)(e.img,{alt:"nginx proxy manager proxy host3",src:r(8072).A+"",title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 proxy host",width:"495",height:"551"})]}),"\n",(0,a.jsx)(e.p,{children:"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0434\u043e\u043c\u0435\u043d\u043e\u0432 \u0438\u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432 DNS \u0434\u043e\u043c\u0435\u043d\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0432 Proxy Host \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0430 \u0430\u0434\u0440\u0435\u0441 NGINX Proxy Manager"}),"\n",(0,a.jsx)(e.p,{children:"\u0412 \u043e\u0431\u0449\u0435\u043c \u0438 \u0446\u0435\u043b\u043e\u043c \u044d\u0442\u043e\u0433\u043e \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043f\u0438\u0441\u0430\u043b \u0432\u044b\u0448\u0435. \u0425\u043e\u0442\u044c \u0438 \u043a\u043e\u043d\u0444\u0438\u0433 \u0431\u044b\u043b \u0431\u044b \u043d\u0435 \u0442\u0430\u043a\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0439, \u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u044d\u0442\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043c\u043e\u0436\u043d\u043e \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u0438\u043a\u043e\u0432."}),"\n",(0,a.jsx)(e.h2,{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,a.jsx)(e.p,{children:"\u0420\u0430\u0441\u043f\u0438\u0448\u0443 \u0435\u0449\u0435 \u043a\u043e\u0435 \u043a\u0430\u043a\u0438\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0444\u0438\u0447\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u0443 \u0441\u0435\u0431\u044f"}),"\n",(0,a.jsx)(e.h3,{id:"dashboard-\u0434\u043b\u044f-nginx-proxy-manager",children:"Dashboard \u0434\u043b\u044f nginx proxy manager"}),"\n",(0,a.jsx)(e.p,{children:"\u041f\u0440\u043e\u0435\u043a\u0442 \u043e\u0442\u043d\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u0432\u0435\u0436\u0438\u0439 \u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/xavier-hernandez/goaccess-for-nginxproxymanager",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 Git \u0430\u0432\u0442\u043e\u0440\u0430"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"nginx proxy manager dashboard",src:r(585).A+"",title:"nginx proxy manager \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433",width:"1848",height:"926"})}),"\n",(0,a.jsx)(e.p,{children:"\u041a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043b\u043e\u0433\u043e\u0432, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443, \u043e\u0446\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0443. \u041d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043d\u0430 Go \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e, \u0434\u0430\u0436\u0435 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043e\u0431\u044a\u0435\u043c\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u0442 \u043c\u043d\u043e\u0433\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432."}),"\n",(0,a.jsx)(e.p,{children:"\u0412 docker-compose \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0443\u0442\u044c \u043a \u043b\u043e\u0433\u0430\u043c \u043e\u0442 nginx proxy manager"}),"\n",(0,a.jsx)(e.h3,{id:"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430-404-\u0434\u043b\u044f-nginx-proxy-manager",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 404 \u0434\u043b\u044f nginx proxy manager"}),"\n",(0,a.jsxs)(e.p,{children:["Nginx \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0438 404 \u0441\u0434\u0435\u043b\u0430\u0442\u044c redirect \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0434\u0440\u0443\u0433\u043e\u0439 \u0445\u043e\u0441\u0442 \u0438\u043b\u0438 \u0434\u0430\u0436\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0432\u043e\u0439 HTML \u043a\u043e\u0434\n",(0,a.jsx)(e.img,{alt:"nginx proxy manager custom 404",src:r(9572).A+"",title:"nginx proxy manager 404",width:"1215",height:"582"})]}),"\n",(0,a.jsx)(e.p,{children:"\u0412\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0441\u044c Redirect \u0438 \u0441\u0434\u0435\u043b\u0430\u044e \u043a\u0440\u0430\u0441\u0438\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0434\u043b\u044f 404"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://hub.docker.com/r/kale5/rickroll",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 Docker Hub \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"nginx proxy manager custom 404",src:r(39).A+"",title:"nginx proxy manager 404 rickroll",width:"1500",height:"785"})}),"\n",(0,a.jsx)(e.p,{children:"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u043c\u0435\u0441\u0442\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043e\u0448\u0438\u0431\u043e\u043a \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0430 \u044d\u0442\u043e\u0442 URL, \u0441 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0432\u0438\u0434\u0435\u043e"}),"\n",(0,a.jsx)(e.h3,{id:"\u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0439-docker-compose",children:"\u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0439 docker-compose"}),"\n",(0,a.jsx)(e.p,{children:"\u0412 \u0438\u0442\u043e\u0433\u0435 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 docker-compose \u0443 \u043c\u0435\u043d\u044f \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-YAML",children:"version: \"3\"\nservices:\n  nginx-proxy-manager:\n    image: 'jc21/nginx-proxy-manager:latest'\n    restart: unless-stopped\n    ports:\n      - '80:80' # HTTP Port\n      - '443:443' # HTTPS Port\n      - '81:81' # Admin Web Port\n    volumes:\n      - ./data:/data\n      - ./letsencrypt:/etc/letsencrypt\n\n  npm-monitoring:\n    image: xavierh/goaccess-for-nginxproxymanager:latest\n    restart: always\n    environment:\n        - TZ=Asia/Yekaterinburg\n        - SKIP_ARCHIVED_LOGS=True #optional\n        - EXCLUDE_IPS=127.0.0.1 #optional\n        - LOG_TYPE=NPM\n    ports:\n        - '82:7880'\n    volumes:\n        - ./data/logs:/opt/log\n  \n  error-page-404:\n    image: 'kale5/rickroll:latest'\n    restart: unless-stopped\n    ports:\n      - '83:80'\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u0438\u0442\u043e\u0433\u0438",children:"\u0418\u0442\u043e\u0433\u0438"}),"\n",(0,a.jsx)(e.p,{children:"\u041c\u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u044d\u0442\u043e\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u043b\u0435\u0433\u043a\u043e \u043f\u043e\u0434\u043d\u044f\u0442\u044c \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c NGINX,  \u043a\u0430\u043a\u0438\u0445-\u0442\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043d\u0438\u043c \u043d\u0435 \u0431\u044b\u043b\u043e, \u0441\u0430\u043c \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b, \u043e\u0434\u043d\u0438\u043c \u0441\u043b\u043e\u0432\u043e\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043b \u0438 \u0437\u0430\u0431\u044b\u043b \u0438 \u0438\u043d\u043e\u0433\u0434\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0445\u043e\u0434\u0438\u043b \u0438 \u0447\u0435\u0440\u0435\u0437 web \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b \u043d\u043e\u0432\u044b\u0435 \u0445\u043e\u0441\u0442\u044b \u0432 2-3 \u043a\u043b\u0438\u043a\u0430."}),"\n",(0,a.jsx)(e.p,{children:"\u0422\u0430\u043a \u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043d\u0430\u043b\u043e\u0433 - Traefik, \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0435\u0433\u043e \u0438\u0437\u0443\u0447\u0430\u044e, \u043d\u043e \u0442\u0430\u043c \u043d\u0435\u0442 \u0443\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0438 \u0432\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0438, \u0442.\u043a. \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u043e\u0433\u0440\u0443\u0436\u0430\u044e\u0441\u044c \u0432 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044e \u0438 \u043c\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0434\u043e \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c, \u0431\u043e\u043b\u044c\u0448\u0435 \u0443\u043f\u043e\u0440 \u0438\u043c\u0435\u043d\u043d\u043e \u043d\u0430 traefik \u0438\u0434\u0435\u0442."})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},2379:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/nginx-proxy-manager-logo-64566577a59f79263974a6414ef6e40a.png"},9572:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/404-host-a094256c722a2dee19eebe110f3f3dca.png"},4797:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/add-host1-44d2bd3007026bc3329ba8f4c6f9677c.png"},8072:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/add-host3-c49311a2c450714d3212ad14b95feae7.png"},585:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/monitoring-2136b527537d051311459dc10e6bd514.png"},8437:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/nginx-exmaple-shema-9e346cf88863918b5d0dfd255e8fca27.png"},8284:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/nginx-proxy-manager-logo-64566577a59f79263974a6414ef6e40a.png"},39:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/rick-b1743da214da0566ee8467baaf6b2e73.jpeg"},4573:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/ssl-generate-4c702e1f95344f0a5062bd3d2c1d8128.png"},1051:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/web-main-3c4b79fb2ba7ddefec458443c6aa14bd.png"},8453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>t});var a=r(6540);const i={},o=a.createContext(i);function s(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);