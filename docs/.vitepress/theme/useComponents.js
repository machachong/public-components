// import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
// import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import Demo from '../../plugin/vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from '../../plugin/vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
export function useComponents(app) {
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
}
