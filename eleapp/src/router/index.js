import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Food from '@/components/Food.vue'
import User from '@/components/User.vue'
import Longin from '@/components/Longin.vue'
import Detail from '@/components/Detail'
import Search from '@/components/Search.vue'
import Account from '@/components/Account.vue'
import Discover from '@/components/Discover.vue'
import Ulike from '@/components/Ulike.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/longin',
      name: 'Longin',
      component: Longin
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/ulike',
      name: 'Ulike',
      component: Ulike
    }
  ]
})
