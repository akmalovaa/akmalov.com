---
sidebar_position: 2
---

# Tips and Tricks

Всякие мелочи


## Mikrotik узнать внешний IP адрес

Иногда возникает необходимость на удаленном устройстве быстро посмотреть внешний IP адрес.

```
/tool fetch url="https://wtfismyip.com/text" keep-result=yes; delay 1s; :put [file get text contents]
```

Одна строка, включает 3 команды.

- GET запрос и сохранение результата
- Задержка для сохранения файла
- Вывод содержимого


## Mikrotik отправить сообщение Telegram

Нужен ТОКЕН бота (создается через @Botfather по инструкции)

Token выглядит примерно так: `1064657353:AAFH1MioTXgrmHGZмAr-XcGE18BShD5ud0Y`

Дальше нужно получить chatID

```
https://api.telegram.org/bot*API_token*/getUpdates
```

Открыть в браузере, где необходимо найти строку **chat id**:

Например:
- API Token: 1064657353:AAFH1MioTXgrmHGZмAr-XcGE18BShD5ud0Y
- chat id: :268900781

**Отправка сообщения через микротик тест бота**

Команда для проверки работоспособности:
```
/tool fetch url="https://api.telegram.org/botAPI_TOKEN/sendMessage\?chat_id=CHAT_ID&text=test"
```

(Подставить свои API_TOKEN и CHAT_ID) 

>failure: closing connection: <400 Bad Request>

При такой ошибке надо проверять синтаксис команды


Для использования кириллицы (использовать русские буквы) в Router OS можно использовать UTF кодирование.

Например:
**Упал канал** — `%D0%A3%D0%BF%D0%B0%D0%BB+%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB`


Онлайн кодирование [ссылка](http://www.codenet.ru/services/urlencode-urldecode/)


## Выполнение скрипта (команды) ежемесячно на Router OS

Данный скрипт я использую чтобы ежемесячно стирать накопленный трафик на вкладке Queues. 

Сброс или обнуление счетчика трафика simple queues

**Описание**

Скрипт каждый день проверяет какое сегодня число и если сегодня «первое» число то выполняет команду

Узнать какой сегодня день (создает глобальную переменную с актуальной датой):
```
:global day [:pick [/system clock get date] 4 6]
```

Условие «если сегодня первое число» то сбросить все счётчики в /queue simple

```
:if ($day="01") do={/queue simple reset-counters-all}
```

Добавляю этот скрипт в расписание **system -> schedule** и запускаю в 00:00:01 с интервалом в один день.

Когда вариант с **schedule** с интервалом в 30d меня не устраивает, и нужно именно каждый новый месяц
