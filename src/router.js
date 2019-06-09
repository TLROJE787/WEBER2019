import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserModel from './views/UserModel.vue'
import ModeratorModel from './views/ModeratorModel.vue'
import MissionModel from './views/MissionModel.vue'
import UserDetail from './views/UserDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HOME',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/home',
      name: 'home2',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/user',
      name:'user',
      component:UserModel
    },
    {
      path:'/moderator',
      name:'moderator',
      component:ModeratorModel
    },
    {
      path:'/mission',
      name:'mission',
      component:MissionModel
    },
    {
      path:'/userD',
      name:'userD',
      component:UserDetail
    }
    
  ]
})
