---
sidebar_position: 2
---

# Rollback

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
