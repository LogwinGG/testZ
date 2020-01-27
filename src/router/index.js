import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All'
import Favorite from '../views/Favorite'
import Deleted from '../views/Deleted'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component: All
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: Favorite
  },
  {
    path: '/deleted',
    name: 'deleted',
    component: Deleted

   }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
