import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(Router)
Vue.use(iView)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/mhome',
          name: 'mhome',
          component: () => import('./views/mhome.vue')
        }
      ]
    }
  ]
})
