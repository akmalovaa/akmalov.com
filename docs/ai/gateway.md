---
sidebar_position: 2
title: Gateway
description: Обзор AI Gateway — агрегаторы LLM-моделей с единым API. Сравнение OpenRouter, LiteLLM, Portkey, Polza.AI, One API.
keywords: [ai gateway, llm gateway, llm proxy, openrouter, litellm, portkey, polza ai, one api, llm router, api шлюз, агрегатор моделей]
---

# Gateway

**AI Gateway** (он же LLM Gateway, Proxy, Router) — агрегатор моделей, предоставляющий единый API для доступа к языковым моделям разных провайдеров. Вместо интеграции с каждым провайдером отдельно, вы подключаете один шлюз и переключаетесь между моделями, меняя только название модели в запросе.

## Зачем нужен

- **Единый API** — один формат запросов для OpenAI, Anthropic, Google, DeepSeek и сотен других моделей
- **Fallback** — если провайдер упал, запрос автоматически уходит к другому
- **Экономия** — выбор провайдера с лучшей ценой за конкретную модель
- **Контроль расходов** — бюджеты, лимиты, трекинг стоимости по ключам и командам
- **Наблюдаемость** — логи, аналитика, трассировка запросов в одном месте
- **Кэширование** — повторные запросы отдаются из кэша без обращения к модели

## Сравнение

| Шлюз | Тип | Моделей | Open Source | Кэш | Guardrails | Цена |
|---|---|---|---|---|---|---|
| [OpenRouter](https://openrouter.ai) | Облачный | 300+ | Нет | Нет | Нет | По токенам + наценка |
| [LiteLLM](https://litellm.ai) | Self-hosted / Cloud | 100+ | Да | Да | Да | Бесплатно (OSS) / Enterprise |
| [Portkey](https://portkey.ai) | SaaS + Self-hosted | 1600+ | Да | Да | Да | Free tier / платные планы |
| [Polza.AI](https://polza.ai) | Облачный (РФ) | 400+ | Нет | Нет | Нет | По токенам, оплата в ₽ |
| [One API](https://github.com/songquanpeng/one-api) | Self-hosted | — | Да | Нет | Нет | Бесплатно (OSS) |

---

## OpenRouter

> [openrouter.ai](https://openrouter.ai) — облачный LLM-агрегатор с 300+ моделями от 60+ провайдеров.

Самый простой способ получить доступ ко всем популярным моделям через один API-ключ. Оплата по кредитам, без подписок.

**Ключевые особенности:**
- Полная совместимость с OpenAI SDK — достаточно поменять `base_url`
- Автоматический выбор провайдера с лучшей ценой/доступностью
- Fallback между провайдерами при сбоях
- 5M+ пользователей, 70T токенов/месяц

**Пример использования с OpenAI SDK:**

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="OPENROUTER_API_KEY",
)

response = client.chat.completions.create(
    model="anthropic/claude-sonnet-4",
    messages=[{"role": "user", "content": "Привет!"}],
)
```

**Когда подходит:** быстрый старт, доступ к максимуму моделей, не хочется поднимать инфраструктуру.

---

## LiteLLM

> [litellm.ai](https://docs.litellm.ai) — open-source прокси и Python SDK для унифицированного доступа к 100+ LLM-провайдерам.

Два режима работы: Python-библиотека (встраивается в код) и Proxy Server (self-hosted gateway с UI).

**Ключевые особенности:**
- Self-hosted — данные не покидают вашу инфраструктуру
- Виртуальные ключи с бюджетами и лимитами на команду/пользователя
- Балансировка нагрузки и fallback между деплойментами
- Guardrails, кэширование, observability (Langfuse, MLflow, Helicone)
- Admin UI для мониторинга и управления

**Запуск прокси:**

```bash
pip install 'litellm[proxy]'
litellm --model openai/gpt-4o
# Proxy на http://0.0.0.0:4000
```

**Пример через OpenAI SDK:**

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://0.0.0.0:4000",
    api_key="any-key",
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Привет!"}],
)
```

**Когда подходит:** self-hosted, контроль над данными, нужны бюджеты и управление ключами для команд.

---

## Portkey

> [portkey.ai](https://portkey.ai) — production-платформа для управления LLM: gateway + observability + guardrails + prompt management.

Самый функциональный вариант для команд, которым важны governance и наблюдаемость.

**Ключевые особенности:**
- 1600+ моделей, 250+ провайдеров
- Real-time observability с дашбордом
- Guardrails: PII-редакция, контент-фильтрация, валидация
- Prompt Engineering Studio — версионирование и A/B тестирование промптов
- RBAC, SSO, аудит-логи (enterprise)
- MCP Gateway для централизованного управления MCP-серверами

**Интеграция в 3 строки:**

```javascript
import Portkey from "portkey-ai";

const portkey = new Portkey();

const completion = await portkey.chat.completions.create({
  messages: [{ role: "user", content: "Привет!" }],
  model: "@openai/gpt-4o",
});
```

**Когда подходит:** production-окружения, enterprise, нужны guardrails и полная наблюдаемость.

---

## Polza.AI

> [polza.ai](https://polza.ai) — российский LLM-агрегатор с 400+ моделями. Оплата в рублях, работает без VPN.

Аналог OpenRouter для российского рынка. Доступ к OpenAI, Anthropic, Google, DeepSeek, YandexGPT и другим моделям через единый API с оплатой российской банковской картой.

**Ключевые особенности:**
- 400+ моделей: текст, код, изображения, аудио, видео
- OpenAI-совместимый API — работает с привычными SDK
- Оплата в рублях, без конвертации валют
- Работает без VPN и прокси из России
- Fallback при сбоях провайдеров
- Playground для тестирования моделей в браузере

**Пример использования:**

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.polza.ai/v1",
    api_key="POLZA_API_KEY",
)

response = client.chat.completions.create(
    model="openai/gpt-4o",
    messages=[{"role": "user", "content": "Привет!"}],
)
```

**Когда подходит:** работаете из России, нужна оплата в рублях без VPN.

---

## One API

> [github.com/songquanpeng/one-api](https://github.com/songquanpeng/one-api) — open-source шлюз для управления LLM-ключами, популярен в китайском сообществе.

Лёгкий self-hosted gateway с веб-интерфейсом для управления каналами (провайдерами) и токенами.

**Ключевые особенности:**
- Поддержка OpenAI, Anthropic, Google Gemini, локальных моделей
- Управление множеством API-ключей и балансировка между ними
- Квоты и ограничения на пользователей
- Простой веб-интерфейс
- Лёгкий деплой через Docker

**Когда подходит:** нужен простой self-hosted прокси для распределения ключей между пользователями.