import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import bokeui from './components/index';
import './assets/style/index.scss';
const app = createApp(App);
app.use(ElementPlus, {
  locale, // 语言设置
});
app.use(bokeui);
console.log(import.meta.env);
app.mount('#app');
