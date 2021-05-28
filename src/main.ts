import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import demoBlock from './components/demo-block.vue';

import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .component('demoBlock', demoBlock)
  .mount('#app');
