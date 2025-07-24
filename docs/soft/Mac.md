---
sidebar_position: 4
---

# MacOS

## Первоначальная настройка

### Настройки мышки
Первым делом убираю естественный скроллинг т.к. использую мышку (Logitech MX Master 3S)


### Сочетания клавиш

Системные настройки - Клавиатура - Сочетания клавиш

- Поменять сочетания клавиш для поиска **Spotlight** (Alt + Пробел)
- Поменять сочетания клавиш для смены языка ввода Источники ввода (Cmd + Пробел)

### Finder

**Настройки:**
- Окно по умолчанию на папку пользователя
- Настроить элементы бокового меню
- Убрать тэги
- Показывать расширения
- Поиск - Искать в текущей папке

**Вид:**
- Показать строку пути
- Показать строку состояния

### Рабочий стол и Dock

Урбрать лишнее
Урбрать показывать недавнее
Автоматически скрывать dock


Настроить размер
Убрать Показывать рабочий стол при нажатии на обоях
Двойное нажатие убирать в Dock

Активные углы + Shift
- Misson controll
- Lauchpad (Правый верхний угол)
- Desktop (правый нижний угол)

Lauchpad - Внутри все красиво раскидать по папкам



Пункт управления (Системные настройки)
Настроить иконки под свои предпочтения убрать лишнее

### Установка NAS

Finder - cmd+K (Добавить URL) 
Добавлить подключение в автозапуск - Системные Настройки -> Объекты входа и расширения

### Soft

Установить homebrew

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Установка Applite (UI Homebrew)

```shell
brew install --cask applite
```

Obsidian
```shell
brew install --cask obsidian
```

Telegram
```
brew install --cask telegram-desktop
```


### App Store

- Pixea - просмотр картинок 
- Windows APP - RDP Client
- Disk Speed - Тест скорости диска


### Development

Терминал использую Tabby 
```shell
brew install --cask tabby

# omy zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

VSCode

```shell
brew install --cask visual-studio-code
```


Python UV Astral
```shell
brew install uv
```

Orbstack аналог Docker + Docker Desktop
Лучшее приложение для работы с контейнерами на MacOS
```shell
brew install --cask orbstack
```

k8s UI
```
brew install --cask freelens
```

### Photo Video редакторы

- [GIMP](https://formulae.brew.sh/cask/gimp#default)
- [OBS](https://formulae.brew.sh/cask/obs#default)
- [Recut](https://formulae.brew.sh/cask/recut#default)
- [Davinchi](https://apps.apple.com/ru/app/davinci-resolve/id571213070?mt=12)

### Misc

Возможно интересные и полезные приложения

- [Raycast](https://formulae.brew.sh/cask/raycast#default) - замена spotlight, расширенный поиск + скрипты
- [Rectangle](https://formulae.brew.sh/cask/rectangle#default) - управление окнами
- [Stats](https://formulae.brew.sh/cask/stats#default) - мониторинг системы (статусы в трее)
- [Ice](https://formulae.brew.sh/cask/jordanbaird-ice#default) - menu bar (что показать в трее, что убрать)
- [Appcleaner](https://formulae.brew.sh/cask/appcleaner) - удаление приложений
- [Maccy](https://formulae.brew.sh/cask/maccy#default) - расширенный буфер копирования
- [PDF gear](https://www.pdfgear.com/) - работа с pdf
- [Clop](https://formulae.brew.sh/cask/clop#default) - оптимизация изображений 
- [Dropover](https://apps.apple.com/us/app/dropover-easier-drag-drop/id1355679052?mt=12) - упростить перетаскивание
- [Hand mirror](https://apps.apple.com/us/app/hand-mirror/id1502839586?mt=12) - удобная проверка веб-камеры
- [balena](https://formulae.brew.sh/cask/balenaetcher#default) - Запись установочных(загрузочных) флеш
- [Reminders MenuBar](https://formulae.brew.sh/cask/reminders-menubar#default) - напоминания в трее
- [DeskPad](https://formulae.brew.sh/cask/deskpad#default) - виртуальный монитор (рабочий стол для шаринга)
- [shottr](https://formulae.brew.sh/cask/shottr#default) - более функциональные скриншоты
- Amphetamine - настройка событий для предотвращение перехода Mac в спящий режим



