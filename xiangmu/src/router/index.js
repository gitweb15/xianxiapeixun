import Vue from 'vue'
import VueRouter from 'vue-router'
import ClassMoney from '../components/BaoBan/BaoBNum'
import Header from '../views/ClassMoney'
import Bar from '../components/Bar'
import  WFD from '../views/WFD'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    component:WFD,
    children:[
      {
        path:'/sel',
        component:()=> import('../components/WFD/WFDSelect')
      },
      {
        path:'',
        redirect:'/sel'
      },
      {
        path:'/manage',
        component:()=> import('../components/WFD/WFDManage')
      }
    ]
  },
  {
    path:'/classMoney',
    name:'ClassMoney',
    component:ClassMoney
  },
  {
    path:'/header',
    component:Header
  },
  {
    path:'/bar',
    component:Bar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
