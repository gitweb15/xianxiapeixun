import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
<<<<<<< HEAD

Vue.config.productionTip = false
=======
import '../public/css/index.css'
import echarts from 'echarts'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
