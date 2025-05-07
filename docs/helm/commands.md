---
sidebar_position: 2
title: Helm commands
---


## Local Helm

local helm repo (~/.config/helm/repositories.yaml)
```shell
helm repo list
```

Обновить репы
```shell
helm repo update
```

Вручную показывает локальные версии доступные для выбранного репозитория (~/.cache/helm/repository)
```shell
repo_name=<repoName>
helm search repo -l $repo_name
```

Показать чарты доступные из определенного репозитория
```shell
helm search repo -l $repo_name | tail -n+2 | cut -f1 | uniq
```

Показать версии для выбранного чарта, в порядке убывания
```shell
full_chart_name=<repoName>/<chartName>
helm search repo -l $repo_name | grep "^$full_chart_name" | awk -F'\t' '{print $2 $1}' | sort -nr
```

## Helm Kubernetes charts

Показать все helm charts установленные в кластере Kubernetes
```shell
helm list -A
```
- release_name - 1 колонка
- release_ns - 2 колонка
- chart_version - 6 колонка

Показать переменные релиза
```shell
helm get values $release_name -n $release_ns
```

Статус релиза
```shell
helm status $release_name -n $release_ns
```

История версий
```shell
helm history $release_name -n $release_ns
```

Откат на выбранную ревизию 
```shell
helm rollback $release_name <revision> -n $release_ns
```

Откат на пред.версию
```shell
helm rollback $release_name -n $release_ns
```

Показать переменные выбранной версии ревизии
```shell
revision=1
helm get values $release_name -n $release_ns --revision=$revision
```

Извлечь метаданные релиза из секрета для конкретной ревизии
```shell
kubectl get secret sh.helm.release.v1.$release_name.v$revision -n $release_ns -o json | jq .data.release | tr -d '"' | base64 -d | base64 -d | gzip -d | jq -r '.chart.metadata'
```










