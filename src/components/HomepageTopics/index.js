import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Linux',
    Svg: require('@site/static/img/topics/linux.svg').default,
  },
  {
    title: 'Python',
    Svg: require('@site/static/img/topics/python.svg').default,
  },
  {
    title: 'DevOps',
    Svg: require('@site/static/img/topics/devops.svg').default,
  },
  {
    title: 'Network',
    Svg: require('@site/static/img/topics/network.svg').default,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--2')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageTopics() {
  return (
    <div className="hero--primary"> 
      <div className="features_src-components-HomepageFeatures-styles-module">
            <div className="container">
          {/* <h2 className="hero__subtitle2"> Темы записей </h2> */}
          <h2 className="hero__subtitle2 text--center">Основные темы записей</h2>
            </div>
      </div>
      <section className={styles.features}>
        
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        </section>
    </div>
  );
}
