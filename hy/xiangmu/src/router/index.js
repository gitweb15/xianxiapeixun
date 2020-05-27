import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
	{
		path: '/tuilook',
		component: () => import('../components/DingDanGuanLi/tuilook')
	},
	{
		path: '/zhuangxiaolook',
		component: () => import('../components/DingDanGuanLi/zhuangxiaolook')
	},
	{
		path: '/xin',
		component: () => import('../components/BanJiGuanLi/xin')
	},
	{
		path: '/tk',
		component: () => import('../components/BanJiGuanLi/tk')
	},
	// 课程管理
	{
		path: '/',
		component: () => import('../views/Course'),
		children: [{
				path: '',
				redirect: 'Course'
			},
			{
				path: 'Course',
				component: () => import('../components/KeChengGuanLi/Course')
			},
			{
				path: 'banjikechenghuodongguanli',
				component: () => import('../components/KeChengGuanLi/banjikechenghuodongguanli')
			}, {
				path: 'banjikechengxiaohao',
				component: () => import('../components/KeChengGuanLi/banjikechengxiaohao')
			},
			{
				path: 'wanfudao',
				component: () => import('../components/KeChengGuanLi/wanfudao')
			},
			{
				path: 'wanfudaokechenghuodong',
				component: () => import('../components/KeChengGuanLi/wanfudaokechenghuodong')
			},
			{
				path: 'yiduiyiguanli',
				component: () => import('../components/KeChengGuanLi/yiduiyiguanli')
			},
			{
				path: 'yiduiyixiaohao',
				component: () => import('../components/KeChengGuanLi/yiduiyixiaohao')
			},
			{
				path: 'wanfudaokechengxiaohao',
				component: () => import('../components/KeChengGuanLi/wanfudaokechengxiaohao')
			},
			{
				path: 'click',
				component: () => import('../components/KeChengGuanLi/click')
			},
			{
				path: 'click1',
				component: () => import('../components/KeChengGuanLi/click1')
			},
			{
				path: 'yiduiyikechenghuodong',
				component: () => import('../components/KeChengGuanLi/yiduiyikechenghuodong')
			},
			{
				path: 'banjikechengshixueguanli',
				component: () => import('../components/KeChengGuanLi/banjikechengshixueguanli')
			},
			{
				path: 'wanfudaokechengshixue',
				component: () => import('../components/KeChengGuanLi/wanfudaokechengshixue')
			},
			{
				path: 'yiduiyikechengshixue',
				component: () => import('../components/KeChengGuanLi/yiduiyikechengshixue')
			},
		]
	},
	//学员管理
	{
		path: '/',
		component: () => import('../views/Student'),
		children: [{
				path: '',
				redirect: 'Student'
			},
			{
				path: 'Student',
				component: () => import('../components/XueYuanGuanLi/xueyuanliebiao')
			},
			{
				path: 'xueyuanguanli',
				component: () => import('../components/XueYuanGuanLi/xueyuanguanli')
			},
		]
	},
	//统计分析
	{
		path: '/',
		component: () => import('../views/Statis'),
		children: [{
				path: '',
				redirect: 'Statis'
			},
			{
				path: 'Statis',
				component: () => import('../components/TongJiFenXi/kaoqinliushuifenxi')
			},
			{
				path: 'baobanjinertongjifenxi',
				component: () => import('../components/TongJiFenXi/baobanjinertongjifenxi')
			},
			{
				path: 'jiaoshiyewushuiliufenxi',
				component: () => import('../components/TongJiFenXi/jiaoshiyewushuiliufenxi')
			},
			{
				path: 'xueyuanzhifuliushuifenxi',
				component: () => import('../components/TongJiFenXi/xueyuanzhifuliushuifenxi')
			},
			{
				path: 'baobanliangtongjifenxi',
				component: () => import('../components/TongJiFenXi/baobanliangtongjifenxi')
			},
		]
	},
	// 订单管理
	{
		path: '/',
		component: () => import('../views/Order'),
		children: [{
				path: '',
				redirect: 'Order'
			},
			{
				path: 'Order',
				component: () => import('../components/DingDanGuanLi/Order')
			},
			{
				path: 'dingdan',
				component: () => import('../components/DingDanGuanLi/dingdan')
			},
			{
				path: 'tuifei',
				component: () => import('../components/DingDanGuanLi/tuifei')
			},
			{
				path: 'zhuangxiao',
				component: () => import('../components/DingDanGuanLi/zhuangxiao')
			},
			{
				path: 'add',
				component: () => import('../components/DingDanGuanLi/add')
			},
			
		],
		
	},
	
	// 教师管理
	{
		path: '/',
		component: () => import('../views/Teacher'),
		children: [{
				path: '',
				redirect: 'Teacher'
			},
			{
				path: 'Teacher',
				component: () => import('../components/JiaoShiGuanLi/teacher')
			},
			{
				path: 'xiaoqu',
				component: () => import('../components/JiaoShiGuanLi/xiaoqu')
			},
		]
	},

	// 班级管理

	{
		path: '/',
		component: () => import('../views/Class'),
		children: [{
				path: '',
				redirect: 'Class'
			},
			{
				path: 'Class',
				component: () => import('../components/BanJiGuanLi/fenban')
			},
			{
				path: '/fenbanliebiao',
				component: () => import('../components/BanJiGuanLi/fenbanliebiao')
			},
			{
				path: 'jiaoshi',
				component: () => import('../components/BanJiGuanLi/jiaoshi')
			},
			{
				path: 'hour',
				component: () => import('../components/BanJiGuanLi/hour')
			},
			{
				path: 'tiaoke',
				component: () => import('../components/BanJiGuanLi/tiaoke')
			},
			{
				path: 'kebiaoliebiao',
				component: () => import('../components/BanJiGuanLi/kebiaoliebiao')
			},

		]
	},

	//支付中心
	{
		path: '/',
		component: () => import('../views/Pay'),
		children: [{
				path: '',
				redirect: 'Pay'
			},

			{
				path: 'Pay',
				component: () => import('../components/ZhiFuZhongXin/youhuiquan')
			},
			{
				path: 'dingdanguanli',
				component: () => import('../components/ZhiFuZhongXin/dingdanguanli')
			},
			{
				path: 'zhifuzhongxin',
				component: () => import('../components/ZhiFuZhongXin/zhifuzhongxin')
			},
		]
	},
	// 系统管理
	{
		path: '/',
		component: () => import('../views/System'),
		children: [{
				path: '',
				redirect: 'menu'
			},
			{
				path: 'menu',
				component: () => import('../components/XiTongGuanLi/menu')
			},
			{
				path: 'jiazhang',
				component: () => import('../components/XiTongGuanLi/jiazhang')
			},
			{
				path: 'teacher1',
				component: () => import('../components/XiTongGuanLi/teacher1')
			},

			{
				path: 'quanxian',
				component: () => import('../components/XiTongGuanLi/quanxian')
			},
			{
				path: 'tongzhi',
				component: () => import('../components/XiTongGuanLi/tongzhi')
			},
			{
				path: 'zuzhi',
				component: () => import('../components/XiTongGuanLi/zuzhi')
			},
			{
				path: 'rili',
				component: () => import('../components/XiTongGuanLi/riliguanli')
			},
			{
				path: 'shujuzidian',
				component: () => import('../components/XiTongGuanLi/shujuzidian')
			},
			{
				path: 'jigou',
				component: () => import('../components/XiTongGuanLi/jigou')
			},
			{
				path: 'lunbo',
				component: () => import('../components/XiTongGuanLi/lunbo')
			},
			{
				path: 'souye',
				component: () => import('../components/XiTongGuanLi/souye')
			},
		]
	},
	{
		path: '/zc',
		component: () => import('../components/Login/zc.vue') //登录注册
	},
	{
		path: '/login',
		component: () => import('../components/Login/login.vue') //登录
	},

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
