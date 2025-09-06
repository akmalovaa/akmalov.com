---
sidebar_position: 2
title: Proxmox commands
---


## Proxmox базовые команды

helper-script - https://helper-scripts.com/

Proxmox for windows https://pve.proxmox.com/wiki/Windows_VirtIO_Drivers

## Proxmox Directory

### Конфиги LXC

```bash
/etc/pve/lxc/
```

### Конфиги VM

```bash
/etc/pve/qemu-server/
```

## Proxmox Backup

### Backup в директорию

```bash
vzdump 200 --dumpdir /mnt/backup 
```

Можно так же добавить тип:

```bash
--mode suspend
--mode snapshot
```

## Proxmox Storage

### Подключить директорию (каталог, папку) к LXC

Проброс папки с PVE на LXC.

Открываю конфигурацию контейнера

```bash
nano /etc/pve/lxc/110.conf
```

Добавляю строку (Mount Point)

```bash
mp0: /каталог PVE(Node), mp=/каталог на LXC

mp0: /home/dirPVE,mp=/mnt/dirLXC
```

### Подключить реальный физический диск к VM

```bash
ls -l /dev/disk/by-id
```

Копирую ID необходимого диска и добавляю

```bash
qm set  592  -scsi2 /dev/disk/by-id/ata-ST3000DM001-1CH166_Z1F41BLC
```

### fstab auto mount

Создаю папку

```bash
mkdir /mnt/nextcloud
```

Вывожу и копирую UUID диска

```bash
blkid
nano /etc/fstab
```

Добавляю строку с UUID нужного диска:

```bash
UUID=9d022d03-a7c1-40a5-92f0-cb6245e93b60 /mnt/nextcloud ext4 defaults 0 0
```

Монтирую и проверяю:

```bash
mount -a
lsblk
```

### Proxmox удаление ноды

Удалить ноду в консоли

```bash
pvecm nodes
pvecm delnode {name}
```

Удалить ключ

```bash
nano /etc/pve/priv/authorized_keys
```

Убрать директорию

```bash
mv /etc/pve/nodes/{name} /root/.
```
