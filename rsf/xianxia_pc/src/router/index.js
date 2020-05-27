import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 测试路由
  {
    path: '/fb',
    component: () => import('@/components/App/StuXuan')
  },
  // 以下是 app 的 路由及 app 的子路由
  {
    path: '/App',
    redirect: '/App/Qi'
  },
  {
    // 启动页
    path: '/App/Qi',
    component: () => import('@/components/App/Qi.vue')
  },
  {
    // 登录
    path: '/App/Login',
    component: () => import('@/components/App/Pay/index.vue')
  },
  {
    // 登录2
    path: '/App/TeaLogin',
    component: () => import('@/components/App/TeaLogin')
  },
  {
    // 个人中心
    path: '/App/User',
    redirect: '/App/Tab'
  },
  {
    path: '/App/Tab',
    component: () => import('@/components/App/TabBar'),
    children: [
      {
        path: '',
        redirect: 'user'
      },
      {
        path: 'user',
        component: () => import('@/components/App/User')
      },
      {
        // 优惠券
        path: 'YouHuiQuan',
        component: () => import('@/components/App/YouHuiQuan')
      },
      {
        // 学员管理
        path: 'StuGuan',
        component: () => import('@/components/App/StuGuan')
      },
      {
        // 新增学员
        path: 'StuInsert/:num',
        component: () => import('@/components/App/StuInsert')
      },
      {
        // 立即咨询
        path: 'ZiXun',
        component: () => import('@/components/App/ZiXun')
      },
      {
        // 关于我们
        path: 'About',
        component: () => import('@/components/App/About')
      },
      {
        // 注册
        path: 'Register',
        component: () => import('@/components/App/Register')
      },
      {
        // 待支付
        path: 'DaiZhiFu',
        component: () => import('@/components/App/DaiZhiF')
      },
      {
        // 学习中
        path: 'XueXiZhong',
        component: () => import('@/components/App/XueXiZhong')
      },
      {
        // 已结束
        path: 'YiJieShu',
        component: () => import('@/components/App/YiJieShu')
      },
      {
        // 高效晚辅导
        path: 'GaoXiaoWFD',
        component: () => import('@/components/App/GaoXiaoWfd')
      },
      {
        // 周末精品课
        path: 'jing',
        component: () => import('@/components/App/jing')
      },
      {
        // 个性化一对一
        path: 'ydy',
        component: () => import('@/components/App/ydy')
      },
      {
        // 活动课程
        path: 'HuoDong',
        component: () => import('@/components/App/HuoDong')
      },
      {
        // 考勤总览
        path: 'KaoQin',
        component: () => import('@/components/App/KaoQin')
      },
      {
        // 课程
        path: 'KeCheng',
        component: () => import('@/components/App/KeCheng')
      },
      {
        // 课程购买
        path: 'KeGouMai',
        component: () => import('@/components/App/KeGouMai')
      },
      {
        // 课程考勤
        path: 'KeKaoQin',
        component: () => import('@/components/App/KeKaoQin')
      },
      {
        // 修改密码
        path: 'Pass',
        component: () => import('@/components/App/Pass')
      },
      {
        // 试学课程详情
        path: 'ShiXue',
        component: () => import('@/components/App/ShiXue')
      },
      {
        // 收款
        path: 'Bivector',
        component: () => import('@/components/App/Bivector')
      },
      {
        // 所有订单
        path: 'SuoYou',
        component: () => import('@/components/App/SuoYou')
      },
      {
        // 消息
        path: 'XiaoXi',
        component: () => import('@/components/App/XiaoXi')
      },
      {
        // 学员列表
        path: 'StuTab',
        component: () => import('@/components/App/StuTab')
      },
      {
        // 新用户来源
        path: 'NewUser',
        component: () => import('@/components/App/NewUser')
      },
      {
        // 选择教师
        path: 'XuanTea',
        component: () => import('@/components/App/XuanTea')
      },
      {
        // 选择学校
        path: 'XiaoXuan',
        component: () => import('@/components/App/XiaoXuan')
      },
      {
        // 学员主页
        path: 'StuZhu',
        component: () => import('@/components/App/StuZhu')
      },
      {
        // 正常课程详情
        path: 'ZhengChang',
        component: () => import('@/components/App/ZhengChang')
      },
      {
        // 转校申请
        path: 'ZhuanXiao',
        component: () => import('@/components/App/ZhuanXiao')
      },
      {
        // 学员详情
        path: 'StuXiang',
        component: () => import('@/components/App/StuXiang')
      },
      {
        // 学员
        path: 'Stu',
        component: () => import('@/components/App/Stu')
      },
      {
        // 选择学员
        path: 'StuXuan',
        component: () => import('@/components/App/StuXuan')
      },
      {
        // 选择学员1
        path: 'StuXuan1',
        component: () => import('@/components/App/StuXuan/index1.vue')
      },
      {
        // 搜索
        path: 'sousuo',
        component: () => import('@/components/App/Search')
      },
      {
        // 搜索一对一
        path: 'ydysousuo',
        component: () => import('@/components/App/ydySearch')
      },
      {
        // 日程
        path: 'riCheng',
        component: () => import('@/components/App/riCheng')
      }
    ]
  },
  {
    // 支付成功
    path: '/zfcg',
    component: () => import('@/components/App/Pay/zfcg.vue')
  },
  {
    // 支付失败
    path: '/zfsb',
    component: () => import('@/components/App/Pay/zfsb.vue')
  },
  
  // 以下是 pc 的路由及 pc 的子路由
  {

    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    component: () => import('@/components/Login')
  },
  {
    path: '/Course',
    component: () => import('@/views/Course'),
    children: [
      {
        path: '',
        redirect: 'bjk'
      },
      {
        path: 'kchd',
        component: () => import('@/components/Course/WFDHuoGuan')
      },
      {
        path: 'wfdkcgl',
        component: () => import('@/components/Course/WFDManage')
      },
      {
        path: 'hdkc',
        component: () => import('@/components/Course/banHuoGuan')
      },
      {
        path: 'sxgl',
        component: () => import('@/components/Course/ShiXueGuan')
      },
      {
        // 一对一活动课程管理
        path: 'ydyhd',
        component: () => import('@/components/Course/ydyShi')
      },
      {
        path: 'wfdSel',
        component: () => import('@/components/Course/WFDSelect')
      },
      {
        // 晚辅导课程活动管理
        path: 'sxwfd',
        component: () => import('@/components/Course/wfdShi')
      },
      {
        path: 'bjk',
        component: () => import('@/components/Course/ban')
      },
      {
        path: 'ydy',
        component: () => import('@/components/Course/Ydy')
      },
      {
        path: 'bxiao',
        component: () => import('@/components/Course/XiaoHao')
      },
      {
        path: 'wxiao',
        component: () => import('@/components/Course/WXiaoHao')
      },
      {
        path: 'YdyXiaoHao',
        component: () => import('@/components/Course/YdyXiaoHao')
      },
      {
        path: 'sxbj',
        component: () => import('@/components/Course/BanJiKe')
      },
      {
        path: 'sxydy',
        component: () => import('@/components/Course/BanJiKe')
      }
    ]
  },
  {
    path: '/Class',
    component: () => import('@/views/Class'),
    children: [
      {
        path: '',
        redirect: 'fbgl'
      },
      {
        path: 'fbgl',
        component: () => import('@/components/Class/FenBan/FenBanGuanLi')
      },
      {
        // 选择调课管理
        path: 'xztkgl',
        component: () => import('@/components/Class/XuanTiao')
      },
      {
        path: 'jsgl',
        component: () => import('@/components/Class/JiaoShiGuan')
      },
      {
        path: 'ksgl',
        component: () => import('@/components/Class/KeShiGuan')
      },
      {
        path: 'kbgl',
        component: () => import('@/components/Class/KeBiaoGuan')
      },
      {
        path: 'tkgl',
        component: () => import('@/components/Class/TiaoKeGuan')
      },
      {
        path: 'tkglzi',
        component: () => import('@/components/Class/TiaoKeZi')
      }
    ]
  },
  {
    path: '/Student',
    component: () => import('@/views/Student'),
    children: [
      {
        path: '',
        redirect: 'xylb'
      },
      {
        path: 'xygl',
        component: () => import('@/components/Student/StuGuan')
      },
      {
        path: 'xylb',
        component: () => import('@/components/Student/StuTab')
      }
    ]
  },
  {
    path: '/Order',
    component: () => import('@/views/Order'),
    children: [
      {
        path: '',
        redirect: 'ddgl'
      },
      {
        path: 'ddgl',
        component: () => import('@/components/Order/DingGuan')
      },
      {
        path: 'tfgl',
        component: () => import('@/components/Order/TuiGuan')
      },
      {
        path: 'zxgl',
        component: () => import('@/components/Order/ZhuanGuan')
      }
    ]
  },
  {
    // 退费管理
    path: '/tfck',
    component: () => import('@/components/Order/TuiSel')
  },
  {
    // 请选择需转校的订单
    path: '/xz',
    component: () => import('@/components/Order/XuanZhuan')
  },
  {
    // 转校
    path: '/zhuansel',
    component: () => import('@/components/Order/ZhuanSel')
  },
  {
    // 转校
    path: '/sheng',
    component: () => import('@/components/Order/sheng')
  },
  {
    path: '/Statis',
    component: () => import('@/views/Statis'),
    children: [
      {
        path: '',
        redirect: 'kqls'
      },
      {
        path: 'bbje',
        component: () => import('@/components/Statis/ClassMoney')
      },
      {
        path: 'bbl',
        component: () => import('@/components/Statis/BaoBan/BaoBNum')
      },
      {
        path: 'kqls',
        component: () => import('@/components/Statis/KaoMoney')
      },
      {
        path: 'xyzf',
        component: () => import('@/components/Statis/StuMoney')
      },
      {
        path: 'tea',
        component: () => import('@/components/Statis/TeaMoney')
      }
    ]
  },
  {
    path: '/Teacher',
    component: () => import('@/views/Teacher'),
    children: [
      {
        path: '',
        redirect: 'xqgl'
      },
      {
        path: 'xqgl',
        component: () => import('@/components/Teacher/XiaoQu')
      },
      {
        path: 'jsgl',
        component: () => import('@/components/Teacher/Teacher/TeaManage')
      }
    ]
  },
  {
    path: '/Pay',
    component: () => import('@/views/Pay'),
    children: [
      {
        path: '',
        redirect: 'yhq'
      }, {
        path: 'yhq',
        component: () => import('@/components/Pay/YouHuiQ')
      }
    ]
  }
  ,
  {
    path: '/System',
    component: () => import('@/views/System'),
    children: [
      {
        path: '',
        redirect: 'jzzh'
      },
      {
        path: 'jzzh',
        component: () => import('@/components/System/JiaZhang/JiaZhangTab')
      },
      {
        path: 'jszh',
        component: () => import('@/components/System/TeacherGuan')
      },
      {
        path: 'cdgl',
        component: () => import('@/components/System/SysPei/CaiDan')
      },
      {
        path: 'qxgl',
        component: () => import('@/components/System/SysPei/QuanXian')
      },
      {
        path: 'zzjg',
        component: () => import('@/components/System/SysPei/JiaGou')
      },
      {
        path: 'tzgl',
        component: () => import('@/components/System/SysData/TongZhi')
      },
      {
        path: 'jgtz',
        component: () => import('@/components/System/SysData/JiGou')
      },
      {
        path: 'lungl',
        component: () => import('@/components/System/lunGuan')
      },
      {
        path: 'sytj',
        component: () => import('@/components/System/shouYe')
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
