import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TopicsSection from '../components/home/TopicsSection';
import HomeHeader from "../components/home/HomeHero";
import AboutSite from "../components/home/AboutSite";

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Personal Blog ${siteConfig.title}`}
      description="Акмалов Артур - личный блог для записей по темам Devops, Python, Linux, Homelab, k8s">
      {/* <HomepageHeader /> */}
      <HomeHeader />
      {/* <main> */}
        {/* <HomepageFeatures /> */}

      {/* </main> */}
      <TopicsSection />
      <AboutSite />
    </Layout>
  );
}
