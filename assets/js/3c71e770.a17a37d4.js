"use strict";(self.webpackChunkakmalov_com=self.webpackChunkakmalov_com||[]).push([[6652],{3357:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=s(4848),c=s(8453);const o={sidebar_position:3},t="Bash",r={id:"misc/bash",title:"Bash",description:"Lograte log gz",source:"@site/docs/misc/bash.md",sourceDirName:"misc",slug:"/misc/bash",permalink:"/docs/misc/bash",draft:!1,unlisted:!1,editUrl:"https://github.com/akmalovaa/akmalov.com/tree/main/docs/misc/bash.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Misc",permalink:"/docs/category/misc"},next:{title:"Kafka",permalink:"/docs/misc/kafka"}},i={},l=[{value:"Lograte log gz",id:"lograte-log-gz",level:2},{value:"Check port",id:"check-port",level:2},{value:"SSH menu",id:"ssh-menu",level:2},{value:"iptables",id:"iptables",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"bash",children:"Bash"}),"\n",(0,a.jsx)(n.h2,{id:"lograte-log-gz",children:"Lograte log gz"}),"\n",(0,a.jsx)(n.p,{children:"\u043e\u0431\u044b\u0447\u043d\u0430\u044f \u0430\u0440\u0445\u0438\u0432\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat access.log | gzip -c -9 > /home/access.log-20220815.gz\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u0410\u0440\u0445\u0438\u0432\u0430\u0446\u0438\u044f \u0441 PV (\u043a\u0440\u0430\u0441\u0438\u0432\u043e, \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e \u0441 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u0431\u0430\u0440\u043e\u043c)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat access.log | pv -s $(ls -la /var/log/nginx/access.log | awk '{print $5}') | gzip -c -9 > /home/access.log-20220815.gz\n"})}),"\n",(0,a.jsx)(n.h2,{id:"check-port",children:"Check port"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nc -zv <host> <port>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ssh-menu",children:"SSH menu"}),"\n",(0,a.jsx)(n.p,{children:"\u041a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0441\u0442\u0430\u044f \u043c\u0435\u043d\u044e\u0448\u043a\u0430 \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c"}),"\n",(0,a.jsxs)(n.p,{children:["\u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0441\u043a\u0440\u0438\u043f\u0442 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0434\u043e\u043c\u0435\u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u043e\u0434 \u043a\u0430\u043a\u0438\u043c \u043b\u043e\u0433\u0438\u043d\u043e\u043c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f ",(0,a.jsx)(n.code,{children:"user"})," \u0438\u043b\u0438 ",(0,a.jsx)(n.code,{children:"admin"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# !/bin/bash\necho `clear`\nUSER=\"user\"\nADMUSER=\"admin\"\nCOLUMNS=1\nPS3='Please select server: '\nSERVERS=(\n    'Sentry       srv-sentry'\n    'Prometheus   srv-mon'\n    'Nginx        srv-nginx'\n    'Example1     srv-admin1'\n    'Example2     srv-admin2'\n    )\nselect opt in \"${SERVERS[@]}\"\ndo\n    case $opt in\n        *admin1 |*admin2 )   # admin login\n            echo \"Connecting ${ADMUSER}@${opt##*}\"\n            ssh $ADMUSER@${opt##* }.akmalov.com\n            break\n            ;;\n        *sentry |*mon | *nginx )  #user login \n            echo \"Connecting ${USER}@${opt##*}\"\n            echo \"Message for USER\"\n            ssh $USER@${opt##* }.akmalov.com\n            break\n            ;;\n        *)\n            break\n            ;;\n    esac\ndone\n"})}),"\n",(0,a.jsx)(n.h2,{id:"iptables",children:"iptables"}),"\n",(0,a.jsx)(n.p,{children:"\u0412\u044b\u0432\u043e\u0434 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"iptables -S -t nat\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u0421\u043f\u0438\u0441\u043e\u043a nat"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"iptables -vL -t nat\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var a=s(6540);const c={},o=a.createContext(c);function t(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);