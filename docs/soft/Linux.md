---
sidebar_position: 1
---

# Linux

## Linux cli tools

Подборка консольных утилит которые мне кажутся удобными и полезными
- Название + ссылка на оффициальный сайт или репозиторий
- Краткое описание
- Скрин (если есть)

### top
 - **htop** - более красивый top для процессов
 - **iotop** - информация по дисковой активности
 - **iftop** - сетевая активность
 - **ctop** - просмотр docker контейнеров


### [jq](https://github.com/jqlang/jq)

Для работы с JSON в CLI

[![jq](./jq.gif)](./jq.gif)


### [yq](https://github.com/mikefarah/yq)

Для работы с YAML в CLI



### [bat](https://github.com/sharkdp/bat)

Альтернатива для `cat` с подсветкой синтаксиса, интеграция с git и много других полезных фич


[![bat](./bat.png)](./bat.png)



### [peco](https://github.com/peco/peco)

Я бы назвал это интерактивным `grep` - принимает на вход список строк и создает меню с удобной навигцей и поиском

[![peco](./peco.gif)](./peco.gif)


### [httpie](https://github.com/httpie/cli)

Обычно пользуюсь `curl`, но когда нужно часто использовать различные API запросы, то этот инструмент кажется более удобным и простым

[![httpie](./httpie.gif)](./httpie.gif)


### [duf](https://github.com/muesli/duf)
Красивая версия `df` подробная информация по дискам
[![duf](./duf.png)](./duf.png)


### [ncdu](https://github.com/drewcrawford/ncdu)
Улучшенный `du` инструмент для анализа дискового пространства. 
[![ncdu](./ncdu.png)](./ncdu.png)



### [frontail](https://github.com/mthenw/frontail)
Для удобного вывода логов по web интерфейсу с полем поиска

Можно не устанавливать и запускать с помощью docker например:
```bash
docker run -d -p 80:9001 -v /var/log:/log mthenw/frontail /log/syslog
```
по IP адресу хоста можно увидеть логи в таком формате:
[![frontail](./frontail.png)](./frontail.png)

Если есть единая точка сбора логов типо ELK, Loki, OpenSearch, то `frontail` врядли пригодиться, но выглядит интересно.

### [iperf](https://github.com/esnet/iperf)

Простой и удобный инструмент для генерации трафика и проверки скорости канала

