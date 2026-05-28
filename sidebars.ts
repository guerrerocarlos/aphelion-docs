import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/requirements',
        'getting-started/install',
        'getting-started/quickstart',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/telegram',
        'operations/maintenance',
        'operations/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/first-requests',
        'examples/side-threads',
        'examples/approval-windows',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/configuration',
        'reference/providers',
        'reference/cli',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/architecture',
        'concepts/authority',
        'concepts/durable-children',
      ],
    },
  ],
};

export default sidebars;
