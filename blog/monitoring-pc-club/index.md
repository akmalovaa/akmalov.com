---
slug: monitoring-pc-club
title: Мониторинг для компьютерного клуба
description: Система мониторинга в компьютерном клубе
image: ./monitoring-pc-club.png
tags: [docker, linux, prometheus, grafana, monitoring]
date: 2023-05-28
---

Система мониторинга дает возможность отслеживать и оперативно узнавать об ошибках в работе и общей нагрузке на оборудование.

[![Releases update info](./monitoring-pc-club.png)](/blog/monitoring-pc-club)

<!--truncate-->
## Зачем мониторинг?

Благодаря мониторингу можно увидеть полноценную картину использования и работоспособности оборудования. 

Позволяет многие технические проблемы решать до их проявления и улучшать качество обслуживания пользователей.


## Что мониторить?

- CPU (нагрузка на процессор, температура)
- GPU (нагрузка на видеокарту, температура)
- RAM (нагрузка на оперативную память)
- SSD, HDD (состояние дисков, свободный объем)
- Любая другая полезная информация, которую необходимо вывести

## Как мониторить?

Основная связка Prometheus + Grafana

Это самые популярные сервисы для мониторинга, быстрые и удобные

### Prometheus

Собирает и хранит все метрики. Сам ходит к каждому компьютеры и собирает нужную информацию 


### Grafana

Берет  данные с Prometheus и позволяет красиво все отобразить. Главная панель мониторинга


### Exporters

**Экспортер** - представляет собой службу, которая собирает информацию о системе и подготавливает ее в формате понятным для Prometheus. На каждом компьютере с которого нужная информация, должен быть запущен exporter

![monitoring](./monitoring.jpg)


## Подготовка сервера

Сервер или виртуалка с Linux (я использовал Ubuntu но для docker разницы нет)

### docker-compose 

Для удобства обслуживания будет использоваться docker-compose

```YAML
version: "3.7"
services:
  prometheus:
    image: prom/prometheus:v2.44.0
    container_name: prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.console.templates=/etc/prometheus/consoles'
      - '--storage.tsdb.retention.time=30d'
      - '--web.enable-lifecycle'
      - '--web.external-url=https://prom.akmalov.com'
    environment:
     - TZ="Asia/Yekaterinburg"
    ports:
    - 9090:9090
    volumes:
    - ./prometheus/config:/etc/prometheus/
    - ./prometheus/data:/prometheus/

    restart: unless-stopped

  grafana:
    image: grafana/grafana:9.5.3-ubuntu
    container_name: grafana
    depends_on:
      - prometheus
    ports:
      - 3000:3000
    volumes:
      - ./grafana/data:/var/lib/grafana
      - ./grafana/provisioning:/etc/grafana/provisioning
    environment:
      - GF_SECURITY_ADMIN_USER=admin
      - GF_SECURITY_ADMIN_PASSWORD=12345
      - GF_USERS_ALLOW_SIGN_UP=false
      - TZ="Asia/Yekaterinburg"
      - BROWSER_TZ="Asia/Yekaterinburg"
    restart: unless-stopped
```

### Конфигурация prometheus

Создать файл конфига по пути:
``` ./prometheus/config/prometheus.yml  ```

В данном примере добавлены 5 ПК, отдельные job для Windows и GPU экспортеров

```
global:
  scrape_interval:     15s
  evaluation_interval: 15s

  - job_name: 'GPU'
    metrics_path: '/metrics'
    scrape_interval: 5s
    static_configs:
      - targets:
        - 192.168.18.11:9835
        - 192.168.18.12:9835
        - 192.168.18.13:9835
        - 192.168.18.14:9835
        - 192.168.18.15:9835
        labels:
          metrics: nvidia

  - job_name: 'Windows'
    metrics_path: '/metrics'
    scrape_interval: 5s
    static_configs:
      - targets:
        - 192.168.18.11:9182
        - 192.168.18.12:9182
        - 192.168.18.13:9182
        - 192.168.18.14:9182
        - 192.168.18.15:9182
        labels:
          metrics: OS
```


Создание config файла можно сильно упросить и автоматизировать с помощью Ansible

## Подготовка компьютеров

В данном случаи понадобиться установить два экспортера:

### [windows exporter](https://github.com/prometheus-community/windows_exporter)

[Windows Exporter](https://github.com/prometheus-community/windows_exporter) - позволяет мониторить состояние операционной системы Windows и собирать метрики для дальнейшей обработки, выводит различные параметры и характеристики Windows, такие как:

- Использование процессора и памяти;
- Загрузка дисков и средств хранения;
- Статистика сетевых интерфейсов;
- Статистика работы служб и сервисов Windows;
- Информация о запущенных процессах и открытых сокетах;
- Информация о состоянии производительности IIS и многие другие параметры.

Использование Windows Exporter позволяет проводить мониторинг и анализ состояния Windows и быстро реагировать на возможные проблемы, такие как ограниченная производительность, низкая доступность ресурсов и другие. Благодаря этому инструменту можно повысить стабильность и надежность работы системы Windows, а также улучшить качество обслуживания пользователей.

### [nvidia gpu exporter](https://github.com/utkuozdemir/nvidia_gpu_exporter)

[Nvidia GPU exporter](https://github.com/utkuozdemir/nvidia_gpu_exporter) - позволяет получать всю информация о видеокарте

## Настройка Grafana

Далее необходимо настроить Grafana (WEB интерфейс доступен по адресу сервера c docker на порту 3000)

`Configuration -> Data source -> Add Prometheus`

![grafana data source](./grafana-data-source.png)

Для того чтобы убедиться что все работает корректно, можно скачать и добавить готовые dashboard в графана

- [Windows exporter dashboard](https://grafana.com/grafana/dashboards/14694-windows-exporter-dashboard/)
- [Nvidia GPU dashboard](https://grafana.com/grafana/dashboards/14574-nvidia-gpu-metrics/)

`Dashboard -> Import -> JSON file`

### Windows exporter dashboard
![Windows exporter dashboard](./windows-exporter.png)

### Nvidia GPU exporter dashboard
![Nvidia GPU exporter dashboard](./nvidia-gpu-exporter.png)

## Создание собственной панели мониторинга

Теперь осталась создать свой dashboard и собрать в удобном виде все необходимые метрики

Для себя выбрал следующий тип отображения (в одну линию все необходимые данные)

![grafana pc dashboard](./grafana-pc-monitoirng.png)


## Итоги

Prometheus и Grafana дают возможность настроить удобный монитиринг для компьютерного клуба.
Легко установить, использовать, обслуживать. 

Для большого числа компьютеров удобнее использовать Ansible для автоматической установки экспортеров и подготовки конфигурационного файла с помощью шаблонизатора. 

Так же экспортеры можно встроить в установку с операционной системой, в таком случаи все новые компьютеры автоматически будут попопадть в систему мониторинга.


