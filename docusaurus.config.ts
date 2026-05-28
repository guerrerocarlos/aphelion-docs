import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Aphelion',
  tagline: 'Install and operate a governed personal agent from Telegram.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: process.env.DOCUSAURUS_URL ?? 'https://guerrerocarlos.github.io',
  baseUrl: process.env.DOCUSAURUS_BASE_URL ?? '/aphelion-docs/',

  organizationName: 'guerrerocarlos',
  projectName: 'aphelion-docs',

  onBrokenLinks: 'throw',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://api.fontshare.com',
        crossorigin: 'anonymous',
      },
    },
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap',
    'https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,900&display=swap',
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/guerrerocarlos/aphelion-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Aphelion',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/idolum-ai/aphelion',
          label: 'Aphelion',
          position: 'right',
        },
        {
          href: 'https://github.com/guerrerocarlos/aphelion-docs',
          label: 'Docs GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Start Here',
              to: '/docs/',
            },
            {
              label: 'Install',
              to: '/docs/getting-started/install',
            },
            {
              label: 'Examples',
              to: '/docs/examples/first-requests',
            },
          ],
        },
        {
          title: 'Operations',
          items: [
            {
              label: 'Telegram Commands',
              to: '/docs/operations/telegram',
            },
            {
              label: 'Maintenance',
              to: '/docs/operations/maintenance',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/operations/troubleshooting',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Aphelion Source',
              href: 'https://github.com/idolum-ai/aphelion',
            },
            {
              label: 'Docs Source',
              href: 'https://github.com/guerrerocarlos/aphelion-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aphelion Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
