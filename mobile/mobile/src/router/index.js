import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../views/First.vue'
import Login from '../views/login.vue'
import Self from '../views/Self.vue'
import Push from '../views/Push.vue'
import del from '../views/del.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first',
    component: First
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },
  {
    path: '/push',
    name: 'push',
    component:Push
  },
  {
    path: '/self',
    name: 'self',
    component:Self
  },
  {
    path: '/del',
    name: 'del',
    component:del
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
