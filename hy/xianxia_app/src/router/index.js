import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'login',
    component: () => import('../components/登录/qidongye.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/登录/login.vue')
  },
  {
    path: '/zc',
    name: 'zc',
    component: () => import('../components/登录/zc.vue')
  },

  {
    path: '/TabBar2',
    name: 'TabBar2',
    component: () => import('../components/TabBar2.vue')
  },
  {
    path: '/teacherLogin',
    name: 'teacherLogin',
    component: () => import('../components/登录/teacherLogin.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/登录/register.vue')
  },
  {
    path: '/gerenzhongxi',
    name: 'gerenzhongxi',
    component: () => import('../components/个人中心/gerenzhongxi.vue')
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('../components/密码修改/password.vue')
  },
  {
    path: '/qidongye',
    name: 'qidongye',
    component: () => import('../components/登录/qidongye.vue')
  },

  {
    path: '/xinyonghu',
    name: 'xinyonghu',
    component: () => import('../components/新用户来源/xinyonghu.vue')
  },
  {
    path: '/addStu',
    name: 'addStu',
    component: () => import('../components/新增学员/addStu.vue')
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../components/选择教师/teacher.vue')
  },
  {
    path: '/course',
    name: 'course',
    component: () => import('../components/选择课程/course.vue')
  },
  {
    path: '/stu',
    name: 'stu',
    component: () => import('../components/选择学员/stu.vue')
  },

  {
    path: '/tabbar',
    name: 'tabbar',
    component: () => import('../views/course.vue')
  },
  {
    path: '/kaoqinzonglan',
    name: 'kaoqinzonglan',
    component: () => import('../components/考勤总揽/kaoqinzonglan.vue')
  },
  {
    path: '/weidenglu',
    name: 'weidenglu',
    component: () => import('../views/login.vue')
  },
  {
    path: '/gerenzhongxin1',
    name: 'gerenzhongxin1',
    component: () => import('../views/gerenzhongxin11.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../components/提交成功/success.vue')
  },
  {
    path: '/huodong',
    name: 'huodong',
    component: () => import('../components/活动课程详情/huodong.vue')
  },
  {
    path: '/kecheng',
    name: 'kecheng',
    component: () => import('../components/课程购买/kecheng.vue')
  },
  {
    path: '/kecheng1',
    name: 'kecheng1',
    component: () => import('../components/课程购买/kecheng1.vue'),

  },
  {
    path: '/shoukuan',
    name: 'shoukuan',
    component: () => import('../components/收款/shoukuan.vue')
  },
  {
    path: '/zhixun',
    name: 'zhixun',
    component: () => import('../components/立即咨询/zhixun.vue')
  },
  {
    path: '/shixue',
    name: 'shixue',
    component: () => import('../components/试学课程详情/shixue.vue')
  },
  {
    path: '/dingdan',
    name: 'dingdan',
    component: () => import('../components/所有订单/dingdan.vue')
  },
  {
    path: '/liebiao',
    name: 'liebiao',
    component: () => import('../components/学员列表/liebiao.vue')
  },
  {
    path: '/end',
    name: 'end',
    component: () => import('../components/已结束课程/end.vue')
  },
  {
    path: '/zhengchang',
    name: 'zhengchang',
    component: () => import('../components/正常课程详情/zhengchang.vue')
  },
  {
    path: '/zhifu',
    name: 'zhifu',
    component: () => import('../components/提交成功/zhifu.vue')
  },
  {
    path: '/shoukuansuccess',
    name: 'shoukuansuccess',
    component: () => import('../components/提交成功/shoukuansuccess.vue')
  },
  {
    path: '/shoukuanshiban',
    name: 'shoukuanshiban',
    component: () => import('../components/提交成功/shoukuanshiban.vue')
  },
  {
    path: '/zhifushiban',
    name: 'zhifushiban',
    component: () => import('../components/提交成功/zhifushiban.vue')
  },
  {
    path: '/zhuanxiao',
    name: 'zhuanxiao',
    component: () => import('../components/转校申请/zhuanxiao.vue')
  },
  {
    path: '/daizhifu',
    name: 'daizhifu',
    component: () => import('../components/待支付订单/daizhifu.vue')
  },
  {
    path: '/wanfudao',
    name: 'wanfudao',
    component: () => import('../components/高效晚辅导/wanfudao.vue')
  },
  {
    path: '/zhoumo',
    name: 'zhoumo',
    component: () => import('../components/高效晚辅导/zhoumo.vue')
  },
  {
    path: '/yiduiyi',
    name: 'yiduiyi',
    component: () => import('../components/高效晚辅导/yiduiyi.vue')
  },
  {
    path: '/xueyuan',
    name: 'xueyuan',
    component: () => import('../components/学员详情/xueyuan.vue')
  },
  {
    path: '/sou',
    name: 'sou',
    component: () => import('../components/个人中心/sou.vue')
  },
  {
    path: '/souResult',
    name: 'souResult',
    component: () => import('../components/个人中心/souResult.vue')
  },
  {
    path: '/richeng',
    name: 'richeng',
    component: () => import('../views/richeng1.vue')
  },
  {
    path: '/kaoqing',
    name: 'kaoqing',
    component: () => import('../components/课程考勤/kaoqing.vue')
  },
  {
    path: '/yidao',
    name: 'yidao',
    component: () => import('../components/课程考勤/yidao.vue')
  },
  {
    path: '/kecheng2',
    name: 'kecheng2',
    component: () => import('../views/kecheng.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/info2.vue')
  },
  {
    path: '/info2',
    name: 'info2',
    component: () => import('../views/info3.vue')
  },
  {
    path: '/info1',
    name: 'info1',
    component: () => import('../views/info.vue')
  },
  {
    path: '/infoKC',
    name: 'infoKC',
    component: () => import('../views/infoKC.vue')
  },
  {
    path: '/pwd1',
    name: 'pwd1',
    component: () => import('../views/pwd2.vue')
  },
  {
    path: '/teacherlo/xiaoqu',
    name: '/teacherlo/xiaoqu',
    component: () => import('../components/选择校区/xiaoqu.vue')
  },
  {
    path: '/teacherlo',
    name: 'teacherlo',
    component: () => import('../views/teacherlo2.vue'),
  },
  {
    path: '/yidengLogin',
    name: 'yidengLogin',
    component: () => import('../views/yiLogin.vue')
  },
  {
    path: '/yidengLoginKC',
    name: 'yidengLoginKC',
    component: () => import('../views/yiLoginKC.vue')
  },
  {
    path: '/stu1',
    name: 'stu1',
    component: () => import('../views/stu2.vue')
  },
  {
    path: '/study',
    name: 'study',
    component: () => import('../components/学习中课程/study.vue')
  },
  {
    path: '/guanli',
    name: 'guanli',
    component: () => import('../components/学员管理/guanli.vue')
  },
  {
    path: '/youhuiquan',
    name: 'youhuiquan',
    component: () => import('../components/个人中心/youhuiquan.vue')
  }, {
    path: '/pwd',
    name: 'pwd',
    component: () => import('../views/grzx.vue')
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
