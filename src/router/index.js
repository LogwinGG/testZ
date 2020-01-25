import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All'
import Elect from '../views/Elect'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component: All
  },
  {
    path: '/elect',
    name: 'elect',
    component: Elect
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
