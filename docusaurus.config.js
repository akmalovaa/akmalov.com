// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Artur Akmalov',
  tagline: 'Personal Blog',
  favicon: 'img/favicon.ico',
  url: 'https://test.akmalov.com',
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
          editUrl:
            'https://github.com/akmalovaa/akmalov.com/tree/main/',
        },
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
    }),
  plugins: [
    [
      'docusaurus-plugin-sass',
      /** @type {import('docusaurus-plugin-sass').Options} */
      {}
    ],
  ]
};

// module.exports = config;
module.exports = {
  url: 'https://test.akmalov.com',
  baseUrl: '/',
  organizationName: 'akmalovaa',
  projectName: 'akmalov.com',
  trailingSlash: false,
};
