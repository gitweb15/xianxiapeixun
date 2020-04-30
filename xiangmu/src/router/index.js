import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '../views/Course'


Vue.use(VueRouter)

const routes = [
  {
    path: '/fb',
    component: () => import('../components/Teacher/TeaManage')
  },
  {
    path: '/',
    component: Course,
    children: [
      {
        path: '/sel',
        component: () => import('../components/WFD/WFDSelect')
      },
      {
        path: '',
        redirect: '/sel'
      },
      {
        path: '/manage',
        component: () => import('../components/WFD/WFDManage')
      }
    ]
  }, {
    path: '/Pay',
    component: () => import('../views/Pay'),
    children: [
      {
        path: '',
        redirect: '/sel2'
      },
      {
        path: '/sel2',
        component: () => import('../components/WFD/WFDManage')
      }
    ]
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
