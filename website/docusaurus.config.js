/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const projectName = 'typedoc repro'
let baseUrl = '/'

const siteConfig = {
  title: 'Typedoc Repro',
  tagline: 'Test',
  onBrokenLinks: 'log',
  url: `http://localhost:3000/`,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: 'docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
        },
      },
    ],
  ],
  baseUrl, // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.iofooterIcon',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName,

  themeConfig: {
    prism: {
      additionalLanguages: ['bash', 'toml'],
    },
    navbar: {
      title: 'typedoc repro',
      items: [
        {
          to: `docs/api/@repro/cli`,
          label: 'References',
        }
      ],
    },
  },

  plugins: [
    [
      require.resolve('docusaurus-plugin-typedoc'),
      {
        tsconfig: '../tsconfig.solution.json',
        entryPoints: ['../packages/*'],
        entryPointStrategy: 'packages',
        mergeReadme: true,
        cleanOutputDir: true,
        out: './docs/api',
        indexPageTitle: 'References',
      },
    ],
  ],

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],
}

module.exports = siteConfig
