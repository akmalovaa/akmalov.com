"use strict";(self.webpackChunkakmalov_com=self.webpackChunkakmalov_com||[]).push([[1769],{9182:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var r=o(4848),c=o(8453);const d={sidebar_position:2,title:"Proxmox commands"},i=void 0,t={id:"proxmox/commands",title:"Proxmox commands",description:"Proxmox Directory",source:"@site/docs/proxmox/commands.md",sourceDirName:"proxmox",slug:"/proxmox/commands",permalink:"/docs/proxmox/commands",draft:!1,unlisted:!1,editUrl:"https://github.com/akmalovaa/akmalov.com/tree/main/docs/proxmox/commands.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Proxmox commands"},sidebar:"tutorialSidebar",previous:{title:"Proxmox",permalink:"/docs/category/proxmox"},next:{title:"NFS",permalink:"/docs/proxmox/nfs"}},s={},l=[{value:"Proxmox Directory",id:"proxmox-directory",level:2},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0438 LXC",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0438-lxc",level:3},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0438 VM",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0438-vm",level:3},{value:"Proxmox Backup",id:"proxmox-backup",level:2},{value:"Backup \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e",id:"backup-\u0432-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e",level:3},{value:"Proxmox Storage",id:"proxmox-storage",level:2},{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e (\u043a\u0430\u0442\u0430\u043b\u043e\u0433, \u043f\u0430\u043f\u043a\u0443) \u043a LXC",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e-\u043a\u0430\u0442\u0430\u043b\u043e\u0433-\u043f\u0430\u043f\u043a\u0443-\u043a-lxc",level:3},{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0434\u0438\u0441\u043a \u043a VM",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c-\u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439-\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439-\u0434\u0438\u0441\u043a-\u043a-vm",level:3},{value:"fstab auto mount",id:"fstab-auto-mount",level:3}];function x(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"proxmox-directory",children:"Proxmox Directory"}),"\n",(0,r.jsx)(n.h3,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0438-lxc",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0438 LXC"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/etc/pve/lxc/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0438-vm",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0438 VM"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/etc/pve/qemu-server/\n"})}),"\n",(0,r.jsx)(n.h2,{id:"proxmox-backup",children:"Proxmox Backup"}),"\n",(0,r.jsx)(n.h3,{id:"backup-\u0432-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e",children:"Backup \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"vzdump 200 --dumpdir /mnt/backup \n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041c\u043e\u0436\u043d\u043e \u0442\u0430\u043a \u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0438\u043f:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"--mode suspend\n--mode snapshot\n"})}),"\n",(0,r.jsx)(n.h2,{id:"proxmox-storage",children:"Proxmox Storage"}),"\n",(0,r.jsx)(n.h3,{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e-\u043a\u0430\u0442\u0430\u043b\u043e\u0433-\u043f\u0430\u043f\u043a\u0443-\u043a-lxc",children:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e (\u043a\u0430\u0442\u0430\u043b\u043e\u0433, \u043f\u0430\u043f\u043a\u0443) \u043a LXC"}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u0440\u043e\u0431\u0440\u043e\u0441 \u043f\u0430\u043f\u043a\u0438 \u0441 PVE \u043d\u0430 LXC."}),"\n",(0,r.jsx)(n.p,{children:"\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nano /etc/pve/lxc/110.conf\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u044e \u0441\u0442\u0440\u043e\u043a\u0443 (Mount Point)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mp0: /\u043a\u0430\u0442\u0430\u043b\u043e\u0433 PVE(Node), mp=/\u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043d\u0430 LXC\n\nmp0: /home/dirPVE,mp=/mnt/dirLXC\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c-\u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439-\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439-\u0434\u0438\u0441\u043a-\u043a-vm",children:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0434\u0438\u0441\u043a \u043a VM"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ls -l /dev/disk/by-id\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041a\u043e\u043f\u0438\u0440\u0443\u044e ID \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e \u0434\u0438\u0441\u043a\u0430 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"qm set  592  -scsi2 /dev/disk/by-id/ata-ST3000DM001-1CH166_Z1F41BLC\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fstab-auto-mount",children:"fstab auto mount"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043e\u0437\u0434\u0430\u044e \u043f\u0430\u043f\u043a\u0443"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mkdir /mnt/nextcloud\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0412\u044b\u0432\u043e\u0436\u0443 \u0438 \u043a\u043e\u043f\u0438\u0440\u0443\u044e UUID \u0434\u0438\u0441\u043a\u0430"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"blkid\nnano /etc/fstab\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 UUID \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u0434\u0438\u0441\u043a\u0430:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"UUID=9d022d03-a7c1-40a5-92f0-cb6245e93b60 /mnt/nextcloud ext4 defaults 0 0\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041c\u043e\u043d\u0442\u0438\u0440\u0443\u044e \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mount -a\nlsblk\n"})})]})}function m(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>t});var r=o(6540);const c={},d=r.createContext(c);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);