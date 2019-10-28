import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Personal from './views/Personal.vue'
import Mylog from './views/Mylog.vue'
import Myreg from './views/Myreg.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path: '/personal',
      name: 'personal',
      component:Personal
    },
    {
      path: '/personal',
      name: 'personal',
      component:Personal
    },
    {
      path: '/mylog',
      name: 'mylog',
      component:Mylog
    },
    {
      path: '/myreg',
      name: 'myreg',
      component:Myreg
    }
  ]
})
