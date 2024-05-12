---
sidebar_position: 3
---

# Bash

## Lograte log gz

обычная архивация

```bash
cat access.log | gzip -c -9 > /home/access.log-20220815.gz
```

Архивация с PV (красиво, наглядно с прогресс баром)
```bash
cat access.log | pv -s $(ls -la /var/log/nginx/access.log | awk '{print $5}') | gzip -c -9 > /home/access.log-20220815.gz
```

Копирование c PV
```bash
pv file.zip | cat > /mnt/storage/file.zip
```


## Check port

```bash
nc -zv <host> <port>
```

## Curl

### curl response time
```bash
curl -o /dev/null -s -w 'Total: %{time_total}s\n' https://test.com
```


## SSH menu

Консольная простая менюшка для быстрого подключения к часто используемым серверам

В примере скрипт в зависимости от домена сервера заранее определяет под каким логином подключаться `user` или `admin`

```bash
# !/bin/bash
echo `clear`
USER="user"
ADMUSER="admin"
COLUMNS=1
PS3='Please select server: '
SERVERS=(
    'Sentry       srv-sentry'
    'Prometheus   srv-mon'
    'Nginx        srv-nginx'
    'Example1     srv-admin1'
    'Example2     srv-admin2'
    )
select opt in "${SERVERS[@]}"
do
    case $opt in
        *admin1 |*admin2 )   # admin login
            echo "Connecting ${ADMUSER}@${opt##*}"
            ssh $ADMUSER@${opt##* }.akmalov.com
            break
            ;;
        *sentry |*mon | *nginx )  #user login 
            echo "Connecting ${USER}@${opt##*}"
            echo "Message for USER"
            ssh $USER@${opt##* }.akmalov.com
            break
            ;;
        *)
            break
            ;;
    esac
done
```

## iptables
Вывод формате команд

```
iptables -S -t nat
```

Список nat
```
iptables -vL -t nat
```