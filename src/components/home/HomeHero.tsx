import React from 'react';
import clsx from "clsx";
import styles from './Styles.module.scss';
import Link from '@docusaurus/Link';


export default function HomeHeader() {
  return (
    <header className={clsx('hero hero--primary')} >
            <div className="container">
              <div className="margin-top--lg">
                    <div className="row">
                        <div className="col col--6">
                            <h1>Добро пожаловать</h1>
                            <h2> Назначение сайта</h2>
                            <p> Личный блог для хранения полезной информации, заметок, часто используемых команд, возможно некоторая информация может оказаться полезной или интересной и другим людям. Кроме этого постараюсь размещать инструкции, полезные программы, обзоры и другие записи по IT теме</p>
                        </div>
                        <div className={clsx("col col--5", styles.avatarContainer)}>
                            <div className={styles.avatar}>
                                <img
                                    alt="hero logo"
                                    // className={styles.avatar}
                                    src="/img/hero.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
  );
};