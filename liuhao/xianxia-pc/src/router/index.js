import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
		path: '/fb'
	},
	{
		path: '/',
		redirect: '/Login'  //页面启动页面
	},
	{
		path:'/tui',
		component:()=>import('@/components/dingdan/tuilook')
	},
	{
		path:'/newdd',
		component:()=>import('@/components/dingdan/newdd')
	},
	{
		path: '/Class/cc',
		component: () => import('@/components/fenban/xztkkc') //跳转调课
	},
	{
		path:'/tuitui',
		component:()=>import('@/components/dingdan/tuitui')
	},
	{
		path:'/Class/tiao',
		component:()=>import('@/components/liu/tk')
	},
	{
		path:'/Login',
		component:()=>import('@/components/Login')
	},
	{
		path: '/Course',  //课表管理
		component: () => import('@/views/Course'),
		children: [{
				path: '',
				redirect: 'bjk' //课表管理初始页面
			},
			{
				path: 'bjk',
				component: () => import('@/components/kecheng/bjkcgl') //班级课程管理
			},
			{
				path: 'wfdkcgl',
				component: () => import('@/components/kecheng/wfdkcgl') //晚辅导课程管理
			},
			{
				path: 'ydy',
				component: () => import('@/components/kecheng/ydykcgl') //一对一课程管理
			},
			{
				path: 'bxiao',
				component: () => import('@/components/kecheng/bjkcxh') //班级课程消耗
			},
			{
				path: 'wxiao',
				component: () => import('@/components/kecheng/wfdkcxh') //晚辅导课程消耗
			},
			{
				path: 'YdyXiaoHao',
				component: () => import('@/components/kecheng/ydykcxh') //一对一课程消耗
			},
			{
				path: 'bjhd',
				component: () => import('@/components/kecheng/bjkchdgl') //班级课程活动管理
			},
			{
				path: 'hdkcc',
				component: () => import('@/components/kecheng/ydyydy') //晚辅导课程活动管理
			},
			{
				path: 'kchd',
				component: () => import('@/components/kecheng/wkchdgl') //活动课程管理
			},
			{
				path:'hdkc',
				component:()=>import('@/components/kecheng/hdkc')
			},
			{
				path:'kcsxgl',
				component:()=>import('@/components/kecheng/bjkcsxgl') //班级课程试学管理
			},
			{
				path:'wsxgl',
				component:()=>import('@/components/kecheng/wsgl')
			},
			{
				path:'onegl',
				component:()=>import('@/components/kecheng/onesgl')
			},
			{
				path:'/click',
				component:()=>import('@/components/kecheng/click') //试学课程管理
			},
		]

	},
	{
		path: '/Class', //班级管理
		component: () => import('@/views/Class'),
		children: [{
				path: '',
				redirect: 'fbgl'
			},
			{
				path: 'fbgl',
				component: () => import('@/components/fenban/fbgl') //分班管理
			},
			{
				path: 'jsgl',
				component: () => import('@/components/fenban/jsgl') //教室管理
			},
			{
				path: 'ksgl',
				component: () => import('@/components/fenban/ksgl') //课时管理
			},
			{
				path: 'tkgl',
				component: () => import('@/components/fenban/tkgl') //课表管理
			},
			{
				path: 'kbgl',
				component: () => import('@/components/fenban/kbgl') //调课管理
			},
		]

	},
	{
		path: '/Student', //学员管理
		component: () => import('@/views/Student'),
		children: [{
				path: '',
				redirect: 'xylb'
			},
			{
				path: 'xylb',
				component: () => import('@/components/xueyuanguanli/xylb') //学员列表
			},
			{
				path: 'xygl',
				component: () => import('@/components/xueyuanguanli/xygl') //学员管理
			}
		]
	},
	{
		path: '/Order', //订单管理
		component: () => import('@/views/Order'),
		children: [{
				path: '',
				redirect: 'ddgl'
			},
			{
				path: 'ddgl',
				component: () => import('@/components/dingdan/xzzx') //订单管理
			},
			{
				path: 'tfgl',
				component: () => import('@/components/dingdan/tfgl') //退费管理
			},
			{
				path: 'zxgl',
				component: () => import('@/components/dingdan/zxgl') //转校管理
			}
		]
	},
	{
		path: '/Statis', //统计分析
		component: () => import('@/views/Statis'),
		children:[
			{
				path:'',
				redirect:'kqls'
			},
			{
				path:'kqls', //考勤流水分析
				component:()=>import('@/components/zjfx/lstjfx')
			},
			{
				path:'bbltj', //报班量统计分析
				component:()=>import('@/components/zjfx/bbltj')
			},
			{
				path:'bbje', //报班金额统计分析
				component:()=>import('@/components/zjfx/bbje')
			},
			{
				path:'jsyw', //教师业务流水分析
				component:()=>import('@/components/zjfx/jsyw')
			},
			{
				path:'xyls', //学员支付流水分析
				component:()=>import('@/components/zjfx/xyzf')
			}
		]
	},
	{
		path: '/Teacher', //教师管理
		component: () => import('@/views/Teacher'),
		children: [{
				path: '',
				redirect: 'xqgl'
			},
			{
				path: 'xqgl',
				component: () => import('@/components/jiaoshigl/xiaoqugl') //校区管理
			},
			{
				path: 'jsgl',
				component: () => import('@/components/jiaoshigl/jsgl') //教师管理
			}
		]

	},
	{
		path: '/Pay', //支付中心
		component: () => import('@/views/Pay'),
		children: [{
				path: '',
				redirect: 'yhjgl'
			},
			{
				path: 'yhjgl', //优惠卷管理
				component: () => import('@/components/zhifu/yhjgl')
			},
		]
	},
	{
		path: '/System',  //系统管理
		component: () => import('@/views/System'),
		children: [
			{
				path: '',
				redirect: 'cdgl'
			},
			{
				path: 'cdgl',
				component: () => import('@/components/xitong/cdgli') //菜单管理
			},
			{
				path: 'tzgl',
				component: () => import('@/components/xitong/tzgl') //通知管理
			},
			{
				path: 'jzzh',
				component: () => import('@/components/xitong/jzzhgl') //家长账号管理
			},
			{
				path: 'jszh',
				component: () => import('@/components/xitong/jszhgl') //教师账号管理
			},
			{
				path: 'qxgl',
				component: () => import('@/components/xitong/qxgl') //权限管理
			},
			{
				path: 'zzjg',
				component: () => import('@/components/xitong/zzjg') //组织架构管理
			},
			{
				path:'jggl',
				component:()=>import('@/components/xitong/jggl') //机构管理
			},
			{
				path:'lun',
				component:()=>import('@/components/xitong/lunbo') //轮播图管理
			},
			{
				path:'tuigl',
				component:()=>import('@/components/xitong/shoutui') //首页推荐管理
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
