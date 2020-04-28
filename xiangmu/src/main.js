import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
<<<<<<< HEAD
import '../public/css/index.css'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'vue-beauty/package/style/vue-beauty.min.css'
import vueBeauty from 'vue-beauty'

    

Vue.use(vueBeauty)
Vue.use(ElementUI)
Vue.use(ViewUI);
Vue.config.productionTip = false
<<<<<<< HEAD
Vue.prototype.$echarts = echarts 
=======

Vue.config.productionTip = false
Vue.use(ElementUI);
>>>>>>> add
=======
>>>>>>> qq

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
