import React from 'react';
import clsx from "clsx";
import styles from './Styles.module.scss';

const consept = [
'Скорость (загрузка страниц не более 1 сек)',
'Надежность (минимальные требования к серверу, легко устанавливать и переносить)',
'Минимализм (без лишних скриптов, рекламы и т.п.)',
'Отсутствие базы данных (упростит хранение и обслуживание)',
'Редактор Markdown (Записи в формате \'.md\', \'.mdx\')',
'Адаптивная верстка (автоматическая подстройка под мобильные устройства)',
'Без погружения в web-разработку (html, css и js)',
'Автоматическое заполнение минимальных SEO полей',
]

export default function AboutSite() {
    return (
        <header className={clsx('hero hero--primary')} >
            <div className="container">
                <h3> Концепция сайта </h3>
                <ul className={styles.list}>
                    {consept.map((use, index) => (
                        <li key={index} className={styles.listItem}>
                            {use}
                        </li>
                    ))}
                </ul>
                {/* <div class="alert alert--secondary margin-top--lg" role="alert">
                    Цель - сделать <strong>быстрый</strong>, <strong>простой</strong> и <strong>надежный</strong> сайт для своих заметок.
                </div> */}
            </div>
        </header>
    );
};