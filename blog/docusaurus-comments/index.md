---
slug: docusaurus-comments
title: Docusaurus комментарии
description: Add commenst docusaurus, добавление коментариев в docusaurus с использованием Giscus
image: ./docusaurus-comments.png
tags: [blog, docusaurus, github, giscus]
date: 2023-06-17
---

Добавить комментарии, обсуждения в записях блога docusaurus

[![docusaurus comments](./docusaurus-comments.png)](/blog/docusaurus-comments)

<!--truncate-->
## Комментарии и обсуждения для блога

На мой взгляд это очень полезная штука. 

- Комментарии дают возможность высказаться и поделиться своим мнением, задать вопросы или дополнить тему статьи.
- Для обсуждения идей и обмена знаниями, могут стимулировать дискуссии и помочь узнать что-то новое.

Искал разные решения и в итоге остановился на **Giscus**

Это opensource проект для добавления обсуждений через Discussions Github

Офф.сайт - [https://giscus.app/ru](https://giscus.app/ru)


## Настройка Github

### Включить обсуждения

Нужно активировать Discussion в настройках репозитория

![Discussion](./discussions-enable.png)

После этого для удобства удалил лишние категории, оставил только Generals

### Установка Giscus App 

Установить для выбранного репозитория Giscus GitHub App

[https://github.com/apps/giscus](https://github.com/apps/giscus)


## Настройка Giscus
Установка пакета
```
npm add @giscus/react
```

Создание компонента
```
npm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap
```

Дання команда создаст файл по пути `src/theme/BlogPostItem/index.js`

Переименовать файл в **BlogPostItem.tsx** и положить уровнем выше в итоге получится `src/theme/BlogPostItem.tsx`

Содержание файла 
```tsx
import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from "@docusaurus/theme-common/internal";
import Giscus from "@giscus/react";

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = useBlogPost();
  if (!isBlogPostPage) {
    return <BlogPostItem {...props} />;
  }
  return (
    <>
      <BlogPostItem {...props} />
      {(
        <div className="docusaurus-blog-comments">
          <Giscus
            repo="akmalovaa/akmalov.com"
            repoId="R_kgDOI0gPCg"
            category="General"
            categoryId="DIC_kwDOI0gPCs4CXR_A"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="dark"
            lang={'ru'}
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}
```

:::tip
Можно сделать лучше и кусок с Giscus перенести в `src/components` а переменные через dotenv файл потдягивать
:::

Пока буду делать просто и топорно, т.к. github Discussion сейчас активно развивается и возможны изменения в API - необходимо будет быстро исправить.


Пройдемся по переменным:
- `repo` тут все понятно автор и репо
- `repoId` нужно будет вытащить через API
- `category` название категории в Discussion
- `categoryId` нужно будет вытащить через API

Удобнее всего ID вытаскивать через GraphQL запрос вытаскивать.
Если уже установлена Github CLI то можно выполнить команду:

```bash
gh api graphql -f query='{ 
  repository(owner: "akmalovaa", name:"akmalov.com"){
    id
    discussionCategories(first:10) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}
'
```

Нужно подставить свои **owner** и repo **name**. В ответ придет json с ID репозитория и категорий.

Можно попробовать через Github API эти данные вытащить, но способ выше показался проще.

## Итого

Вроде без особых сложностей можно добавить комментарии в своем блоге с docusaurus.

Некоторые сервисы (аналоги giscus) используют для комментов `github issue`, но мне кажется `github discussions` лучше для этого подходит и по логике и по функционалу.

