import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// import Home from '../views/Home.vue'
// {
//   path: '/',            path是路由参数 当路径匹配到当前路由参数时,就会跳转component所对应的组件
//   name: 'Home',
//   component: Home   component两种写法  一种是先导入import Home from '../views/Home.vue' 然后component: Home   另一种是直接用箭头函数 component: () => import('../views/Home.vue')
//   redirect: 'HelloWorld' 路由重定向  如果你进入的是home页面我就让你跳转到HelloWorld页面
//   children:[]       子路由
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'HelloWorld',
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history', // history模式访问路径不带#  hash模式访问路径中带#
  base: process.env.BASE_URL, // 配置单页应用的基路径. 默认为'/'   base: '/app/' 那么所有的请求都会在url之后加上/app/
  routes
})

export default router
