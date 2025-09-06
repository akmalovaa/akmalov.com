---
sidebar_position: 4
---

# NFS

Пошаговая инструкция для быстрого создания NFS сервера в Proxmox LXC контейнере.

## Подготовка

### 1. Определяем путь к папке, которую будем расшаривать

Устанавливаем переменную с путем к папке, которую хотим сделать доступной по NFS:

```bash
FOLDER=/mnt/data
```

### 2. Устанавливаем NFS сервер

Устанавливаем пакет `nfs-kernel-server`, который предоставляет функциональность NFS сервера:

```bash
apt install -y nfs-kernel-server
```

### 3. Настраиваем права доступа к папке

Изменяем владельца папки на `nobody:nogroup` для корректной работы NFS:

```bash
chown nobody:nogroup $FOLDER
```

### 4. Добавляем папку в экспорты NFS

Добавляем нашу папку в файл `/etc/exports` с правами доступа для сети `10.6.0.0/24`:

- `rw` - чтение и запись
- `sync` - синхронная запись  
- `no_subtree_check` - отключение проверки поддеревьев для повышения производительности

```bash
echo "$FOLDER 10.6.0.0/24(rw,sync,no_subtree_check)" >> /etc/exports
```

### 5. Перезапускаем службу NFS

Перезапускаем службу NFS для применения изменений:

```bash
systemctl restart nfs-kernel-server
```

## Дополнительные примеры

### Расшаривание папки Nginx

Если нужно расшарить папку с веб-контентом Nginx:

```bash
/usr/share/nginx/html
```

Добавляем её в экспорты:

```bash
echo "/mnt/nginx 10.6.0.0/24(rw,sync,no_subtree_check)" >> /etc/exports
```

### 6. Проверяем статус службы

Проверяем, что служба NFS запущена и работает корректно:

```bash
systemctl status nfs-kernel-server
```

### 7. Просматриваем файл конфигурации экспортов

Проверяем содержимое файла `/etc/exports` для убеждения, что все папки добавлены корректно:

```bash
cat /etc/exports
```

Пример содержимого файла:

```bash
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

## Дополнительные опции

### Опция no_root_squash

Для некоторых приложений (например, Django) может потребоваться опция `no_root_squash`, которая позволяет root пользователю на клиенте иметь root права на сервере.

### Подключение на клиенте

После настройки сервера, на клиентской машине можно подключить NFS папку командой:

```bash
mount -t nfs <IP_сервера>:/mnt/data /local/mount/point
```

Для постоянного монтирования добавьте строку в `/etc/fstab`:

```bash
<IP_сервера>:/mnt/data /local/mount/point nfs defaults 0 0
```
