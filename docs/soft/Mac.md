---
sidebar_position: 2
description: Настройка macOS и подборка приложений.
---

# macOS

Мои настройки системы и приложения для повседневных задач и разработки. Настройки — дело привычки: ниже мой вариант, а не обязательный набор для всех.

## Первоначальная настройка

Названия пунктов могут отличаться в зависимости от версии macOS.

### Мышь {#настройки-мышки}

В системных настройках мыши отключаю естественную прокрутку.

### Сочетания клавиш

В **Системных настройках → Клавиатура → Сочетания клавиш** меняю:

- **Spotlight** — `Option (Alt) + Пробел`.
- **Источники ввода** — `Command + Пробел` для смены языка.

### Finder

В настройках Finder:

- Открывать новые окна в домашней папке пользователя.
- Оставить нужные элементы бокового меню и убрать теги.
- Показывать расширения файлов.
- При поиске искать в текущей папке.

В меню **Вид** включаю строку пути и строку состояния.

### Рабочий стол и Dock

В **Системных настройках → Рабочий стол и Dock**:

- Убираю лишние приложения из Dock и настраиваю его размер.
- Отключаю показ недавних приложений.
- Включаю автоматическое скрытие Dock.
- Отключаю показ рабочего стола при нажатии на обои, если этот пункт доступен.
- Настраиваю двойное нажатие на заголовок окна для сворачивания в Dock.

Для активных углов использую модификатор `Shift`, чтобы не вызывать действия случайно: Mission Control и показ рабочего стола в правом нижнем углу.

В Пункте управления оставляю только нужные значки.

### Подключение сетевого диска {#установка-nas}

1. В Finder нажать `Command + K`.
2. Ввести адрес общей папки, например `smb://nas.local/share`, заменив сервер и папку на свои.
3. Подключиться и при необходимости добавить подключённый том в объекты входа для автоматического подключения.

## Установка приложений {#soft}

### Homebrew

[Homebrew](https://brew.sh/) — менеджер пакетов для установки приложений и консольных утилит.

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

После установки выполнить шаги из раздела **Next steps**, который выведет установщик. Проверить, что команда доступна:

```shell
brew --version
```

### Основные приложения

- [Obsidian](https://obsidian.md/) — заметки в Markdown и личная база знаний.
- [Telegram](https://desktop.telegram.org/) — мессенджер.

```shell
brew install --cask obsidian telegram-desktop
```

[Applite](https://applite.app/) — необязательный графический интерфейс для установки приложений через Homebrew.

```shell
brew install --cask applite
```

### App Store

- [Pixea](https://apps.apple.com/app/pixea/id1507782672) — просмотр изображений.
- [Windows App](https://learn.microsoft.com/en-us/windows-app/overview) — подключение к удалённым Windows-компьютерам по RDP; на странице Microsoft есть ссылки для установки.

## Разработка {#development}

### Терминал и редактор

- [Tabby](https://eugeny.github.io/tabby/) — терминал, который я использую, в том числе для SSH.
- [Visual Studio Code](https://code.visualstudio.com/) — редактор кода.

```shell
brew install --cask tabby visual-studio-code
```

[Oh My Zsh](https://ohmyz.sh/) — дополнительная настройка оболочки zsh: темы и плагины. Устанавливается отдельно от терминала и не обязателен для работы Tabby.

### Python

[uv](https://docs.astral.sh/uv/) — управление версиями Python, зависимостями и окружениями проектов.

```shell
brew install uv
```

### Контейнеры и Kubernetes

- [OrbStack](https://orbstack.dev/) — запуск контейнеров и Linux-машин на macOS.
- [FreeLens](https://freelens.app/) — графический интерфейс для работы с Kubernetes. Нужен только при работе с кластерами.

```shell
brew install --cask orbstack
```

```shell
brew install --cask freelens
```

### HTTP

[oha](https://github.com/hatoo/oha) — генератор HTTP-нагрузки для проверки производительности сервисов.

```shell
brew install oha
```

## Фото и видео {#photo-video-редакторы}

- [Krita](https://krita.org/) — рисование и редактирование изображений.
- [OBS Studio](https://obsproject.com/) — запись экрана и трансляции.
- [DaVinci Resolve](https://apps.apple.com/ru/app/davinci-resolve/id571213070?mt=12) — монтаж и цветокоррекция видео.

## Полезные утилиты {#misc}

Дополнения под конкретные задачи — устанавливать весь список не нужно.

- [Raycast](https://raycast.com/) — запуск приложений, поиск и быстрые действия.
- [Rectangle](https://rectangleapp.com/) — размещение окон с помощью сочетаний клавиш.
- [Stats](https://github.com/exelban/stats) — показатели нагрузки системы в строке меню.
- [AppCleaner](https://freemacsoft.net/appcleaner/) — удаление приложений вместе со связанными файлами.
- [Maccy](https://maccy.app/) — история буфера обмена.
- [PDFgear](https://www.pdfgear.com/) — работа с PDF.
- [balenaEtcher](https://etcher.balena.io/) — запись образов на USB-накопители.
- [Shottr](https://shottr.cc/) — скриншоты с аннотациями.
