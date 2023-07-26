// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Artur Akmalov',
  tagline: 'Personal Blog',
  favicon: 'img/favicon.ico',
  url: 'https://akmalov.com',
  baseUrl: '/',
  organizationName: 'akmalovaa',
  projectName: 'akmalov.com',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
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
            'https://github.com/akmalovaa/akmalov.com/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
          editUrl: 'https://github.com/akmalovaa/akmalov.com/tree/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        // gtag: {
        //   // trackingID: process.env.GOOGLE_ANALYTICS_TAG_ID,
        //   anonymizeIP: true,
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
          {
            href: "https://github.com/akmalovaa",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub",
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Akmalov Artur`,
      },
      // algolia: {
      //   appId: process.env.ALGOLIA_APP_ID,
      //   apiKey: process.env.ALGOLIA_API_KEY,
      //   indexName: process.env.ALGOLIA_INDEX_NAME,
      //   searchParameters: {},
      // },
      prism: {
        theme: darkCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
  plugins: [
    [
      'docusaurus-plugin-sass',
      /** @type {import('docusaurus-plugin-sass').Options} */
      {}
    ],
    ['docusaurus-plugin-yandex-metrica', {
      counterID: '91073403',
    }],
  ]
};

module.exports = config;
