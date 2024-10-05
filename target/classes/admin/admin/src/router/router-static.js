import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import caipuxinxi from '@/views/modules/caipuxinxi/list'
    import zhigongkaohe from '@/views/modules/zhigongkaohe/list'
    import youerqingjia from '@/views/modules/youerqingjia/list'
    import ziyuanxinxi from '@/views/modules/ziyuanxinxi/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import huiyijilu from '@/views/modules/huiyijilu/list'
    import daibanshixiang from '@/views/modules/daibanshixiang/list'
    import ertongtijian from '@/views/modules/ertongtijian/list'
    import jiaofeixinxi from '@/views/modules/jiaofeixinxi/list'
    import youerxinxi from '@/views/modules/youerxinxi/list'
    import gongzuorizhi from '@/views/modules/gongzuorizhi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import qingjiaxinxi from '@/views/modules/qingjiaxinxi/list'
    import yuanliaoxinxi from '@/views/modules/yuanliaoxinxi/list'
    import banjixinxi from '@/views/modules/banjixinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/caipuxinxi',
        name: '菜谱信息',
        component: caipuxinxi
      }
          ,{
	path: '/zhigongkaohe',
        name: '职工考核',
        component: zhigongkaohe
      }
          ,{
	path: '/youerqingjia',
        name: '幼儿请假',
        component: youerqingjia
      }
          ,{
	path: '/ziyuanxinxi',
        name: '资源信息',
        component: ziyuanxinxi
      }
          ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
          ,{
	path: '/huiyijilu',
        name: '会议记录',
        component: huiyijilu
      }
          ,{
	path: '/daibanshixiang',
        name: '待办事项',
        component: daibanshixiang
      }
          ,{
	path: '/ertongtijian',
        name: '儿童体检',
        component: ertongtijian
      }
          ,{
	path: '/jiaofeixinxi',
        name: '缴费信息',
        component: jiaofeixinxi
      }
          ,{
	path: '/youerxinxi',
        name: '幼儿信息',
        component: youerxinxi
      }
          ,{
	path: '/gongzuorizhi',
        name: '工作日志',
        component: gongzuorizhi
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/qingjiaxinxi',
        name: '请假信息',
        component: qingjiaxinxi
      }
          ,{
	path: '/yuanliaoxinxi',
        name: '原料信息',
        component: yuanliaoxinxi
      }
          ,{
	path: '/banjixinxi',
        name: '班级信息',
        component: banjixinxi
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
