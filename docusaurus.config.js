// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

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
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Блог про DevOps, SRE, AI, Docker, Kubernetes, Linux, Python, MikroTik и homelab — гайды, туториалы и заметки из практики.',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Artur Akmalov',
        url: 'https://akmalov.com',
        description: 'Блог про DevOps, SRE, AI, Docker, Kubernetes, Linux, Python, MikroTik и homelab — гайды, туториалы и заметки из практики.',
        inLanguage: 'ru',
        author: {
          '@type': 'Person',
          name: 'Artur Akmalov',
          alternateName: 'Артур Акмалов',
          url: 'https://akmalov.com/about',
          jobTitle: 'Product Engineer',
          sameAs: [
            'https://github.com/akmalovaa',
            'https://linkedin.com/in/akmalov-artur/',
            'https://t.me/AAkmalov',
          ],
        },
      }),
    },
  ],

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
          onInlineAuthors: 'warn',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Artur Akmalov`,
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
        sitemap: {
          lastmod: 'date',
          changefreq: null,
          priority: null,
        },
        ...(process.env.GOOGLE_ANALYTICS_TAG_ID && {
          gtag: {
            trackingID: process.env.GOOGLE_ANALYTICS_TAG_ID,
            anonymizeIP: true,
          },
        }),
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
      ...(process.env.ALGOLIA_APP_ID && {
        algolia: {
          appId: process.env.ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_API_KEY,
          indexName: process.env.ALGOLIA_INDEX_NAME,
          searchParameters: {},
        },
      }),
      prism: {
        additionalLanguages: ['bash', 'diff', 'json'],
        darkTheme: darkTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
  plugins: [
    require('./plugins/tailwind-plugin'),
  ]
};

module.exports = config;
