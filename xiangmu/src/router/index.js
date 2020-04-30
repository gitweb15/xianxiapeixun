import Vue from 'vue'
import VueRouter from 'vue-router'
import lunboRoter from '../views/轮播图管理/lunbo.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/subject',
		name: 'subject',
		component: () => import('../views/subject.vue'),
		// children: [{
		// 		path: '/movie/city',
		// 		component: () => import('../components/City'),
		// 	},
		// 	{
		// 		path: '/movie/nowPlaying',
		// 		component: () => import('../components/NowPlaying'),
		// 	},
		// 	{
		// 		path: '/movie/comingSoon',
		// 		component: () => import('../components/ComingSoon'),
		// 	},
		// 	{
		// 		path: '/movie/search',
		// 		component: () => import('../components/Search.vue'),
		// 	},
		// 	{
		// 		path: '/movie',
		// 		redirect: "/movie/nowPlaying"
		// 	}
		// ]
	}, {
		path: '/class',
		name: 'class',
		component: () => import('../views/class.vue'),
	}, {
		path: '/course',
		name: 'course',
		component: () => import('../views/course.vue'),
	},
	{
		path: '/xitong',
		name: 'xitong',
		component: () => import('../views/xitong.vue'),
	},
	{
		path: '/file',
		name: 'file',
		component: () => import('../views/班级课程活动管理/active.vue'),
	},
	{
		path: '/study',
		name: 'study',
		component: () => import('../views/班级课程试学管理/study.vue'),
	},
	{
		path: '/',
		redirect: "/xitong"
	},
	{
		path: '/click',
		name: 'click',
		component: () => import('../views/click.vue'),
	},
	{
		path: '/consume',
		name: 'consume',
		component: () => import('../views/班级课程消耗/consume.vue'),
	},
	{
		path: '/lunbo',
		name: 'lunbo',
		component: lunboRoter
	},
]


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
