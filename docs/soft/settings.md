---
sidebar_position: 10
---

# Settings

## VSCode

Пример конфига для подключения по SSH key (~/ssh/config)

Remote SSH - Microsoft

```config
Host <IP>
  HostName <IP>
  User <USER>
  IdentityFile ~/.ssh/id_rsa
```

maybe rename id_rsa.pub to authorized_keys
