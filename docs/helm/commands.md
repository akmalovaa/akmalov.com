---
sidebar_position: 2
title: Helm commands
---

## rollback

История версий (список)
```
helm history podname -n default
```

Откат на выбранную ревизию 

```
helm rollback <release> <revision> -n <namespace>
```

```
helm rollback podname -n default
```
