import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeHero from '../components/home/HomeHero';
import TopicsSection from '../components/home/TopicsSection';
import AboutSite from '../components/home/AboutSite';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Personal Blog ${siteConfig.title}`}
      description="Акмалов Артур - личный блог для записей по темам Devops, Python, Linux, Homelab, k8s">
      <HomeHero />
      <TopicsSection />
      <AboutSite />
    </Layout>
  );
}
