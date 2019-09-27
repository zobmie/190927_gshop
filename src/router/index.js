/*
  路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home'
import Search from '../pages/search/Search'
import Money from '../pages/money/Money'
import Order from '../pages/order/Order'
import Profile from '../pages/profile/Profile'
import Login from '../pages/login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  //配置所有路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/money',
      component: Money,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
