---
sidebar_position: 2
title: K8s commands
---

## k8s resources usage
Просмотр потребления ресурсов контейнеров внутри пода
```
kubectl -n name-space top pod --containers _
```

Просмотр ресурсов node
```
kubectl top node --sort-by=cpu
```


in container usage show
```
cat /sys/fs/cgroup/memory/memory.usage_in_bytes
```
limits
```
cat /sys/fs/cgroup/memory/memory.memsw.limit_in_bytes
```

## k8s top script
Просмотр ресурсов подов выбранного сервиса
```
for pod in $(kubectl -n name-space get po | grep dialogs | awk '{print $1}'); do echo "top ${pod}"; kubectl -n name-space top pod $pod; done
```


## kubectl logs
```
kubectl -n name-space logs -l app=app_name --all-containers --tail=1 -f --max-log-requests=45 | grep -v health
```

kubectl resources container
```
kubectl -n name-space top pod --containers container-5c5968d4f9-bbvrm
```

keydb logs pod
```
kubectl -n name-space logs -l app=app_name --all-containers --tail=1 -f --max-log-requests=45 | grep -v health
```

