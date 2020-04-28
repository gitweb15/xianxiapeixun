import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/css/index.css'
import echarts from 'echarts'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
