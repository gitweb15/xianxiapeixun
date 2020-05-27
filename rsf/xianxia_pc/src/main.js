import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import "./mock/index" 

import echarts from 'echarts'
// 全局css 
import '@/assets/css/index.css'

Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
