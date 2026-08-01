---
sidebar_position: 1
title: Claude Code
description: Кратко полезнst заметки по Claude Code AI Homelab задачи по DevOps SRE Python
keywords: [claude code, claude code guide, ai coding, anthropic, claude cli, claude code команды]
---

# Claude Code

Для моих задач пока лучший вариант

Сравнивал с моделями по подписке:
- ChatGPT - codex
- GLM - z.ai

## Скилы / Плагины

скилы:
- [superpowers](https://github.com/obra/superpowers) (в целом помогает, но иногда как будто бы мешает)
- [python-skill](https://github.com/akmalovaa/python-skill) - самописный скрипт заметки по Python

плагины:
- [skill-creator](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/skill-creator) Plugin · claude-plugins-official
- [claude-md-management](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management) Plugin · claude-plugins-official
- [frontend-design](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design) Plugin · claude-plugins-official
- [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) Plugin · ui-ux-pro-max-skill


## CLI и автоматизация

**Базовые команды**

```bash
claude "prompt"  # запуск с промтом
claude -p "prompt" # print-mode — выполнить и выйти (для скриптов)
claude -c        # продолжить последний разговор
claude --model claude-opus-5 # выбор модели
```

**Пайпы**

```bash
cat error.log | claude -p "объясни"         # подать данные на вход
git diff | claude -p "ревью этих изменений" # ревью через пайп
```

**Флаги**

```bash
claude -p "query"                    # print-mode (для CI/CD)
claude --model sonnet                # выбор модели
claude --add-dir ../apps ../lib      # дополнительные директории
claude --allowedTools "Bash(git:*)"  # разрешить инструменты
claude --output-format json          # JSON-вывод для скриптов
claude --max-turns 3                 # ограничить количество ходов
```

## Полезные ссылки

**Изучение**

- [claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) — 69 лучших практик от команды Anthropic
- [claude-howto](https://github.com/luongnv89/claude-howto) — структурированный курс из 10 модулей
- [claude-quickstarts](https://github.com/anthropics/claude-quickstarts) — официальные примеры проектов
- [learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) — глубокое понимание архитектуры агентов (12 сессий на Python)
- [claude-code-cheat-sheet](https://github.com/Njengah/claude-code-cheat-sheet) — шпаргалка по командам (10 уровней)

**Коллекции**

- [everything-claude-code](https://github.com/affaan-m/everything-claude-code) — всё о Claude Code
- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — коллекция ресурсов
- [awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) — субагенты
- [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) — коллекция скилов
- [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) — расширения
- [MCP Servers](https://github.com/modelcontextprotocol/servers) — каталог MCP-серверов
