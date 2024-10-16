import { defineConfig } from 'vitepress';
// import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';
import { demoblockPlugin, demoblockVitePlugin } from '../plugin/vitepress-theme-demoblock';
import sidebar from './configs/sidebar.js';
import nav from './configs/nav.js';
const base = process.env.BASE || '/';
export default defineConfig({
  title: 'BOKE-UI',
  lang: 'cn-ZH',
  lastUpdated: true,
  base: base,
  description: '开发组前端组件库', // 描述信息
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
  appearance: true,
  themeConfig: {
    logo: '/logo.svg',
    nav,
    sidebar,
    search: {
      provider: 'local',
    },
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    siteTitle: 'BOKE-UI',
    outline: 3,
    editLinks: true,
    footer: {
      message: 'Released under the boke city.',
      copyright: 'Copyright © 2024-present Data Department',
    },
  },
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => {
      // md.use(demoBlockPlugin);
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom',
      });
      // md.use(demoBlockPlugin, {
      //   cssPreprocessor: 'scss',
      // });
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
});
