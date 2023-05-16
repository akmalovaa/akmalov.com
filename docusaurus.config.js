const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Artur Akmalov',
  tagline: 'Блог ',
  favicon: 'img/favicon.ico',
  url: 'https://dev.akmalov.com',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'akmalovaa', 
  projectName: 'akmalov.com',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/akmalovaa/akmalov.com/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
          editUrl:
            'https://github.com/akmalovaa/akmalov.com/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      navbar: {
        title: 'Akmalov Artur',
        // style: 'primary',
        // hideOnScroll: true,
        logo: {
          alt: 'Akmalov Artur',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
          { to: "/about", label: "About", position: "right" },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Akmalov Artur`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      sidebar: {
        hideable: false,
      },
      algolia: {
        appId: 'TX89NNWRFT',
        apiKey: '504e88ecd6f2adbeb56f34a358dd0cba',
        indexName: 'akmalov.com',
        contextualSearch: true,
        placeholder: "Search...",
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
