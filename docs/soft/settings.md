---
sidebar_position: 1
---

# Settings

## VSCode

Пример конфига для подключения по SSH key (~/ssh/config)

Remote SSH - Microsoft

```
Host <IP>
  HostName <IP>
  User <USER>
  IdentityFile ~/.ssh/id_rsa
```
maybe rename id_rsa.pub to authorized_keys

## OpenLens

OpenLens extensions (exec and logs)

Для просмотра логов и подключения к контейнерам нужно добавить расширение

```
@alebcay/openlens-node-pod-menu
```

