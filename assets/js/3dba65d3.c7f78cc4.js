"use strict";(self.webpackChunkakmalov_com=self.webpackChunkakmalov_com||[]).push([[8901],{8523:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>a});var r=s(4848),o=s(8453);const t={sidebar_position:4},c="NFS",i={id:"proxmox/nfs",title:"NFS",description:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438 \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f NFS \u0434\u043e\u0441\u0442\u0443\u043f\u0430 c Promox LXC",source:"@site/docs/proxmox/nfs.md",sourceDirName:"proxmox",slug:"/proxmox/nfs",permalink:"/docs/proxmox/nfs",draft:!1,unlisted:!1,editUrl:"https://github.com/akmalovaa/akmalov.com/tree/main/docs/proxmox/nfs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Proxmox commands",permalink:"/docs/proxmox/commands"},next:{title:"Cloud",permalink:"/docs/category/cloud"}},d={},a=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nfs",children:"NFS"}),"\n",(0,r.jsx)(n.p,{children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438 \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f NFS \u0434\u043e\u0441\u0442\u0443\u043f\u0430 c Promox LXC"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"FOLDER=/mnt/data\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apt install -y nfs-kernel-server\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"chown nobody:nogroup $FOLDER\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'echo "$FOLDER 10.6.0.0/24(rw,sync,no_subtree_check)" >> /etc/exports\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"systemctl restart nfs-kernel-server\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/usr/share/nginx/html\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/mnt/nginx 10.6.0.0/24(rw,sync,no_subtree_check) >> /etc/exports\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"systemctl status nfs-kernel-server\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cat /etc/exports\n\n# /etc/exports: the access control list for filesystems which may be exported\n\n# to NFS clients.  See exports(5)\n\n#\n\n# Example for NFSv2 and NFSv3\n\n# /srv/homes       hostname1(rw,sync,no_subtree_check) hostname2(ro,sync,no_subtree_check)\n\n#\n\n# Example for NFSv4\n\n# /srv/nfs4        gss/krb5i(rw,sync,fsid=0,crossmnt,no_subtree_check)\n\n# /srv/nfs4/homes  gss/krb5i(rw,sync,no_subtree_check)\n\n#\n\n/mnt/data 10.6.6.6/24(rw,sync,no_subtree_check)\n/mnt/nginx 10.6.6.6/24(rw,sync,no_subtree_check)\n/mnt/django 10.6.6.6/24(rw,sync,no_subtree_check,no_root_squash)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(6540);const o={},t=r.createContext(o);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);