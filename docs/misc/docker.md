---
sidebar_position: 2
title: Docker
---

# Docker

- [Docker Hub](https://hub.docker.com/)

Зеркало docker hub если есть ограничения или проблемы с доступом

```
mirror.gcr.io/traefik:3.5.0
```

## Commands

Частые команды

Fast install docker

```shell
apt update && apt upgrade -y && apt install curl
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Docker run exec or have entry point use: --entry-point=/bin/bash

```bash
docker run --rm -it image-name sh
```

### Build args

```bash
docker build . -t myimage --build-arg USER=$USER --build-arg PASSWORD=$PASSWORD
```

### Docker run rm exec

```bash
docker run --rm -it tg_webhook_exporter bash
```

### Docker overlay who use (need install jq)

```bash
 docker inspect $(docker ps -qa) |  jq -r 'map([.Name, .GraphDriver.Data.MergedDir]) | .[] | "\(.[0])\t\(.[1])"'
```

### Docker image size

```bash
docker ps --format '{{.Names}}\n{{.Image}}:{{.Size}}\n' -s
```

### Docker cp

```bash
docker cp <containerId>:/file/path/within/container /host/path/target
```

### Retag for own registory

Скачать необходимый image docker pull

```bash
docker pull nginx:1.23.1
```

Изменить tag

```bash
docker tag nginx:1.23.1 registry.gitlab.example.com/test/nginx:1.23.1
```

Push в свой registry

```bash
docker push registry.gitlab.example.com/test/nginx:1.23.1
```

### Docker compose dump run

Запуск тупой команды чтоб контейнер не падал, иногда бывает нужно для дебага

```yaml
services:
  chatops:
    image: registry.gitlab.example.com/test/myubuntu-image:v.0.1
    command: tail -F /dev/null
```

### Docker context remote

Создание контекста для удаленного сервера

```bash
docker context create vps --docker "host=ssh://me@example.com"
docker context use vps
```

## Logging

### Пример конфигурации

```yaml
version: '3.8'

x-logging:
  &default-logging
  driver: "json-file"
  options:
    max-size: "1m"
    max-file: "1"
    tag: "{{.Name}}"

services:
  nginx-app:
    container_name: nginx-app
    image: nginx
    labels:
      logging: "promtail"
      logging_jobname: "containerlogs"
    ports:
      - 8080:80
    networks:
      - app
    logging: *default-logging
```

### Docker плагин логирования

Установка драйвера логирования loki

```bash
docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all
```

Пример конфигурации docker-compose с логированием в loki

```yaml
services:
  myservice:
    image: myimage
    logging:
      driver: loki
      options:
        loki-url: "http://loki:3100/loki/api/v1/push"
        loki-external-labels: job=dockerlogs
```
