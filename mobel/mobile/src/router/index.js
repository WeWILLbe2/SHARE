import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Push from '../views/Push.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/push',
    component: Push
  },
  {
    path: '/user',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
