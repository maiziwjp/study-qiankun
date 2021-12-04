import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

Vue.use(ElementUI);

const apps = [
  {
    name: 'vueApp',
    entry: 'http://localhost:10000', // 默认会加载这个html，解析里面的js动态执行（子应用必须支持跨域）
    container: '#vue',
    activeRule: '/vue'
  },
  {
    name: 'reactApp',
    entry: 'http://localhost:20000', // 默认会加载这个html，解析里面的js动态执行（子应用必须支持跨域）
    container: '#react',
    activeRule: '/react'
  }
];
registerMicroApps(apps);
start();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
