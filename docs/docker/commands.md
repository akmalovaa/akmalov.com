---
sidebar_position: 2
title: Docker commands
---

Тут частые команды

Docker run exec or have entry point use: --entry-point=/bin/bash
```
docker run --rm -it image-name sh
```

## Build args


```
docker build . -t myimage --build-arg ARTIFACTORY_USER=$ARTIFACTORY_USER --build-arg ARTIFACTORY_PASSWORD=$ARTIFACTORY_PASSWORD
```


## Docker run rm exec

```
docker run --rm -it tg_webhook_exporter bash
```

## Docker overlay who use (need install jq)

```
 docker inspect $(docker ps -qa) |  jq -r 'map([.Name, .GraphDriver.Data.MergedDir]) | .[] | "\(.[0])\t\(.[1])"'
```

## Docker image size

```
docker ps --format '{{.Names}}\n{{.Image}}:{{.Size}}\n' -s
```

## Docker cp
```
docker cp <containerId>:/file/path/within/container /host/path/target
```


## Retag for own registory

Скачать необходимый image docker pull

```
docker pull nginx:1.23.1
```

Изменить tag

```
docker tag nginx:1.23.1 registry.gitlab.example.com/test/nginx:1.23.1
```

Push в артифактори

```
docker push registry.gitlab.example.com/test/nginx:1.23.1
```

## Docker compose run 

Запуск тупой команды чтоб контейнер не падал, иногда бывает нужно

version: "3.7"
services:
  chatops:
    image: registry.gitlab.example.com/test/myubuntu-image:v.0.1
    command: tail -F anything

