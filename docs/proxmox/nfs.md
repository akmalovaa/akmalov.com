---
sidebar_position: 4
---

# NFS

Заметки для быстрого создания NFS доступа c Promox LXC

```
FOLDER=/mnt/data
```
```
apt install -y nfs-kernel-server
```

```
chown nobody:nogroup $FOLDER
```

```
echo "$FOLDER 10.6.0.0/24(rw,sync,no_subtree_check)" >> /etc/exports
```
```
systemctl restart nfs-kernel-server
```
```
/usr/share/nginx/html
```
```
/mnt/nginx 10.6.0.0/24(rw,sync,no_subtree_check) >> /etc/exports
```
```
systemctl status nfs-kernel-server
```

```bash
cat /etc/exports

# /etc/exports: the access control list for filesystems which may be exported

# to NFS clients.  See exports(5)

#

# Example for NFSv2 and NFSv3

# /srv/homes       hostname1(rw,sync,no_subtree_check) hostname2(ro,sync,no_subtree_check)

#

# Example for NFSv4

# /srv/nfs4        gss/krb5i(rw,sync,fsid=0,crossmnt,no_subtree_check)

# /srv/nfs4/homes  gss/krb5i(rw,sync,no_subtree_check)

#

/mnt/data 10.6.6.6/24(rw,sync,no_subtree_check)
/mnt/nginx 10.6.6.6/24(rw,sync,no_subtree_check)
/mnt/django 10.6.6.6/24(rw,sync,no_subtree_check,no_root_squash)
```