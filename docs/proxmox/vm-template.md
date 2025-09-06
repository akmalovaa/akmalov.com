---
sidebar_position: 3
title: VM template
---

# VM Template Ubuntu Cloud Init

Выбрать образ Ubuntu Cloud Init и скачать его на свой сервер

Сайт: [<u>Ubuntu Cloud Images</u>](https://cloud-images.ubuntu.com/)

Дальниейшие команды выполнять на самом сервере Proxmox

Скачать образ:

```bash
cd /tmp
wget https://cloud-images.ubuntu.com/noble/current/noble-server-cloudimg-amd64.img
```

Изменить базовый размер диска

```bash
qemu-img resize noble-server-cloudimg-amd64.img 15G
```

Создать VM с нужными параметрами:

```bash
qm create 2000 --name "ubuntu-template" --ostype l26 --memory 4096 --agent 1 --bios ovmf --machine q35 --efidisk0 local-lvm:0,pre-enrolled-keys=0 --cpu x86-64-v2-AES --cores 2 --vga serial0 --serial0 socket --net0 virtio,bridge=vmbr0
```

- `--cpu x86-64-v2-AES` - желательно или `x86-64-v4` (по умолчанию kvm64 - максимальная совместимость)
- `--ostype l26` - тип ОС Linux 2.6/3.x/4.x/5.x
- `--agent` - включить QEMU Guest Agent
- `--machine q35` - использовать современную модель машины Q35
- `--bios ovmf` - использовать UEFI BIOS
- `--efidisk0` - создать EFI диск для UEFI загрузки
- `--vga serial0 --serial0 socket` - использовать консоль через serial (полезно для серверов без GUI)

Импортировать диск с ОС и подключить Cloud Init диск:

```bash
qm importdisk 2000 /tmp/noble-server-cloudimg-amd64.img local-lvm
qm set 2000 --scsihw virtio-scsi-pci --virtio0 local-lvm:vm-2000-disk-1,discard=on
qm set 2000 --boot order=virtio0
qm set 2000 --scsi1 local-lvm:cloudinit
```

Создать файл с настройками сети для Cloud Init, где команды на обновление пакетов и установку QEMU Guest Agent

```bash
nano /var/lib/vz/snippets/ubuntu.yaml
```

Вставить содержимое файла:

```config
#cloud-config
timezone: Asia/Yekaterinburg
package_upgrade: true
package_reboot_if_required: true
packages:
  - qemu-guest-agent
  - net-tools
  - curl
runcmd:
  - systemctl start qemu-guest-agent
```

Настроить Cloud Init параметры для VM:

```bash
qm set 2000 --cicustom "vendor=local:snippets/ubuntu.yaml"
qm set 2000 --ciuser root --cipassword '12345'
qm set 2000 --tags ubuntu
qm set 2000 --sshkeys ~/.ssh/ansible.pub
qm set 2000 --ipconfig0 ip=dhcp
qm set 2000 --nameserver "8.8.8.8 1.1.1.1"
qm set 2000 --searchdomain "local"
```

Превратить VM в шаблон:

```bash
qm template 2000
```

Теперь можно создавать новые VM из этого шаблона

```bash
qm clone 2000 2001 --name ubuntu-vm1 --full --description "host1"
```

Если нужно поменять на статический IP и включить автозапуск:

```bash
qm set 2001 --ipconfig0 ip=10.100.0.201/24,gw=10.100.0.1
qm set 2001 --onboot 1
```
