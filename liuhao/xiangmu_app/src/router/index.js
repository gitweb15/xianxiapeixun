import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '',
		redirect: '/qd'
	},
	{
		path: '/qd',
		component: () => import('@/components/login/stat')
	},
	{
		path: '/Login',
		component: () => import('@/components/login')
	},
	{
		path: '/kc',
		component: () => import('@/components/Kecheng')
	},
	{
		path: '/xzxq',
		component: () => import('@/components/xiaoqu/xzxq')
	},
	{
		path: '/wfd',
		component: () => import('@/components/fudao/gxwfd')
	},
	{
		path: '/zmjp',
		component: () => import('@/components/fudao/zmjpb')
	},
	{
		path: '/ydy',
		component: () => import('@/components/fudao/ydykc')
	},
	{
		path: '/hdkc',
		component: () => import('@/components/zhengckc') //正常课程
	},
	{
		path: '/xiaox',
		component: () => import('@/components/xiaoxi')
	},
	{
		path: '/xiaoxx',
		component: () => import('@/components/xiaoxi/index2')
	},
	{
		path: '/grzx',
		component: () => import('@/components/grzx')
	},
	{
		path: '/dzf',
		component: () => import('@/components/pay/daizf')
	},
	{
		path: '/xxz',
		component: () => import('@/components/xuexiz') //学习中
	},
	{
		path: '/jies',
		component: () => import('@/components/Kecheng/jskc') //结束课程
	},
	{
		path: '/qb',
		component: () => import('@/components/pay/sydd')
	},
	{
		path: '/xygl',
		component: () => import('@/components/students/Xygl')
	},
	{
		path: '/ss',
		component: () => import('@/components/ss') //搜索
	},
	{
		path: '/jg',
		component: () => import('@/components/ss/ssjg') //搜索结果
	},
	{
		path: '/kcgm',
		component: () => import('@/components/pay/kcgm') //课程购买
	},
	{
		path: '/xzxy',
		component: () => import('@/components/students/xuanxy')
	},
	{
		path: '/cg',
		component: () => import('@/components/pay/zfcg')
	},
	{
		path: '/xz',
		component: () => import('@/components/students/xyxz') //新增学员
	},
	{
		path: '/App/Tab/YouHuiQuan',
		component: () => import('@/components/yhj') //优惠卷
	},
	{
		path: '/App/Tab/About',
		component: () => import('@/components/zhu/about')
	},
	{
		path: '/App/Tab/ZiXun',
		component: () => import('@/components/zhu/ljzx')
	},
	{
		path: '/App/Tab/Register',
		component: () => import('@/components/login/phonezc')
	},
	{
		path: '/xzjsc',
		component: () => import('@/components/xzjs')
	},
	{
		path: '/jszc',
		component: () => import('@/components/login/jsdl') //教师登录
	},
	{
		path: '/rc',
		component: () => import('@/components/rc')
	},
	{
		path: '/KeKaoQin',
		component: () => import('@/components/kckq')
	},
	{
		path: '/KaoQin',
		component: () => import('@/components/kqzl')
	},
	{
		path: '/rczx',
		component: () => import('@/components/rczx')
	},
	{
		path: '/password',
		component: () => import('@/components/login/pwxiu')
	}


]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
