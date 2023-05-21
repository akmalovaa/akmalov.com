import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import {
    Docker, Linux, Python, Kubernetes, Googlecolab, Googlehome
} from '@icons-pack/react-simple-icons';
import Icon from '@mdi/react';
import { mdiAccessPointNetwork } from '@mdi/js';

import styles from './Styles.module.scss';
import landingSectionStyles from './LandingSection.module.scss';


export default function ClientSection() {
    return (
        <section className={clsx(landingSectionStyles['landing-section'])}>
            <div className='container text--center'>
                <div className='row row--center'>
                    <div className='col margin-top--lg'>
                        <h2>Основные темы</h2>
                        <p>
                        Записи в блоге по тэгам
                        </p>
                    </div>
                </div>

                <div className='row row--center'>
                    <Link
                        to='/blog/tags/linux'
                        className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
                    >
                        <Linux color='#ffffff' size={48} />
                        <div className='margin-top--sm'>Linux</div>
                    </Link>
                    <Link
                        to='/blog/tags/python'
                        className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
                    >
                        <Python color='#ffffff' size={48} />
                        <div className='margin-top--sm'>Python</div>
                    </Link>
                    <Link
                        to='/blog/tags/devops'
                        className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
                    >
                        <Googlecolab color='#ffffff' size={48} />
                        <div className='margin-top--sm'>DevOps</div>
                    </Link>
                    <Link
                        to='/blog/tags/k8s'
                        className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
                    >
                        <Kubernetes color='#ffffff' size={48} />
                        <div className='margin-top--sm'>Kuberneters</div>
                    </Link>
                    <Link
                        to='/blog/tags/docker'
                        className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
                    >
                        <Docker color='#ffffff' size={48} />
                        <div className='margin-top--sm'>Docker</div>
                    </Link>
                    <Link
                        to='/blog/tags/homelab'
                        className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
                    >
                        <Googlehome color='#ffffff' size={48} />
                        <div className='margin-top--sm'>Homelab</div>
                    </Link>
                    <Link
                        to='/blog/tags/networks'
                        className={clsx('col', 'fill--white', styles['client-icon'], 'margin-top--md')}
                    >
                        <Icon path={mdiAccessPointNetwork} size='48px' className='fill-white' />
                        <div className='margin-top--sm'>Networks</div>
                    </Link>
                </div>
            </div>
            <div className={styles.buttons}>
            <Link
                    className="button button--secondary button--lg"
                to="/blog">
                Все записи
            </Link>
            </div>
        </section>
    );
}