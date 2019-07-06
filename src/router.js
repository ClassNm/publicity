import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// 登录页面
import Login from './components/common/Login.vue'
// 注册页面
import Register from './components/common/Register.vue'
// 答题页面
import Answer from  './components/common/Answer.vue'

// 测试
// import test from './components/common/test.vue'

// 报告表
import Reported from './components/common/Reported.vue'


export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      //登录
      path: '/login',
      component: Login,
      meta: {
        isLogin: false
      }
    },
    {
      //注册
      path: '/register',
      component: Register,
      meta: {
        isLogin: false
      }
    },
    {
      //答题
      path: '/answer',
      component: Answer,
      meta: {
        isLogin: true
      },
    },
    {
      //报告
      path: '/reported',
      component: Reported,
      meta: {
        // isLogin: true
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
