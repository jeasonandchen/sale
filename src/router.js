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
      name: '包含顶部和底部的容器',
      component: Home,
      children: [
        {
          path: '/mhome',
          name: '包含搜索的容器',
          component: () => import('./views/mhome.vue'),
          children: [
            {
              path: 'homepage',
              name: '主页',
              component: () => import('./views/homepage.vue')
            }
          ]
        }
      ]
    }
  ]
})
