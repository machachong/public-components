import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  envDir: 'env',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: 'lib',
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './packages/index.ts',
      name: 'boke-ui',
    },
  },
  // css: {
  //   /* CSS 预处理器 */
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "src/assets/styles/variable.scss";',
  //     },
  //   },
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 组件别名
      '#': path.resolve(__dirname, './docs'), // 文档别名
    },
  },
});
