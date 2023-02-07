export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Layouts',
    items: [
      {
        name: 'Nested Layouts',
        slug: 'demo/layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Grouped Layouts',
        slug: 'demo/route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Streaming with Suspense',
        slug: 'demo/streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'loading.js',
        slug: 'demo/loading',
        description:
          'Create meaningful loading UI for specific parts of an app',
      },
      {
        name: 'error.js',
        slug: 'demo/error-handling',
        description: 'Create error UI for specific parts of an app',
      },
      {
        name: 'head.js',
        slug: 'demo/head',
        description: 'Configure the <head> tag of a route segment',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Static-Site Generation',
        slug: 'demo/ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Server-Side Rendering',
        slug: 'demo/ssr',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'demo/isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      // TODO: Re-add this page once hooks have been updated.
      // {
      //   name: 'Hooks',
      //   slug: 'demo/hooks',
      //   description:
      //     'Preview the hooks available for Client and Server Components',
      // },
      {
        name: 'Client Context',
        slug: 'demo/context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'Styling',
    items: [
      {
        name: 'CSS and CSS-in-JS',
        slug: 'demo/styling',
        description: 'Preview the supported styling solutions',
      },
    ],
  },
];
