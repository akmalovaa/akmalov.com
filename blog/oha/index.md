---
slug: oha
title: Генератор http трафика - oha
description: Генератор HTTP-нагрузки, аналог rakyll/hey с анимацией tui.
image: ./logo.png
tags: [networks, tools]
keywords: [http, https, load testing, stress testing, cli, command line, terminal, generator]
date: 2025-09-06
---

Генератор HTTP запросов альтернатива rakyll/hey

[![oha](./logo.png)](/blog/oha)
<!--truncate-->

## Введение

Простой кроссплатформенный инструмент командной строки для генерации HTTP-нагрузки

Использовал для проверки автоскейлинга в k8s, когда задал ресурсы в nginx, и нужно было создать нагрузку, этот инструмент отлично подошел. Получилось быстро нагенерировать запросы и посмотреть как ведет себя кластер.

- поддержка HTTP/1.1, HTTP/2 и экспериментальная HTTP/3
- красивый интерактивный TUI с анимацией в реальном времени  
- высокая производительность благодаря Rust
- простота использования CLI
- гибкие настройки запросов (заголовки, методы, тело и т.д.)
- поддержка burst-режима и rate limiting
- вывод результатов в разных форматах (text, JSON, CSV)

Репозиторий [**Github**](https://github.com/hatoo/oha)

### Установка

macOS:

```bash
brew install oha
```

Debian/Ubuntu:

```bash
echo "deb [signed-by=/usr/share/keyrings/azlux-archive-keyring.gpg] http://packages.azlux.fr/debian/ stable main" | sudo tee /etc/apt/sources.list.d/azlux.list
sudo wget -O /usr/share/keyrings/azlux-archive-keyring.gpg https://azlux.fr/repo.gpg
apt update
apt install oha
```

### Пример использования

![oha](https://github.com/hatoo/oha/blob/master/demo.gif?raw=true)

Базовый тест на 1 минуту:

```bash
oha -z 1m https://akmalov.com
```

Тест с 10 одновременными соединениями и 1000 запросами:

```bash
oha -c 10 -n 1000 https://akmalov.com
```

POST запрос с JSON данными:

```bash
oha -m POST -H "Content-Type: application/json" -d '{"test": "data"}' https://httpbin.org/post
```

### Основные параметры

- `-z` — продолжительность теста (например, `10s`, `2m`, `1h`)
- `-n` — количество запросов
- `-c` — количество одновременных соединений
- `-m` — HTTP метод (GET, POST, PUT, DELETE)
- `-H` — заголовки HTTP
- `-d` — тело запроса
- `--json` — вывод результатов в формате JSON

### Альтернативы

- **hey** — популярный инструмент на Go
- **wrk** — легковесный инструмент на C
- **ab** (Apache Bench) — классический инструмент
- **siege** — продвинутый инструмент нагрузочного тестирования

**Преимущество oha:** красивая анимация в реальном времени и высокая производительность благодаря Rust.
