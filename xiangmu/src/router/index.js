import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
import ClassMoney from '../components/BaoBan/BaoBNum'
import Header from '../views/ClassMoney'
import Bar from '../components/Bar'
import  WFD from '../views/WFD'
=======
import ClassMoney from '../views/ClassMoney'
import cdgl from '../views/lh/kbgl.vue'
>>>>>>> qq

Vue.use(VueRouter)

  const routes = [
  {
<<<<<<< HEAD
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
=======
    path: '/',
	component:cdgl
>>>>>>> qq
  },
  {
    path:'/classMoney',
    name:'ClassMoney',
    component:ClassMoney
<<<<<<< HEAD
  },
  {
    path:'/header',
    component:Header
  },
  {
    path:'/bar',
    component:Bar
=======
>>>>>>> qq
  }
=======
import classRoter from '../views/stu.vue'
import stuRoter from '../views/class.vue'
import lookRoter from '../views/courselook.vue'
import xitongRouter from '../views/xitong.vue'
import fileRouter from '../views/班级课程活动管理/new_file.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/stu',
		name: 'stu',
		component: classRoter
	},
	{
		path: '/class',
		name: 'class',
		component: stuRoter
	},
	{
		path: '/look',
		name: 'look',
		component: lookRoter
	},
	{
		path: '/xitong',
		name: 'xitong',
		component: xitongRouter
	},
	{
		path: '/file',
		name: 'file',
		component: fileRouter
	}
>>>>>>> add
]


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
