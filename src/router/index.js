import Vue from 'vue'
import Router from 'vue-router'
import home from '@/main/home'
import myhead from '@/components/myhead'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/myhead',
      name: 'myhead',
      component: myhead
    }
  ]
})
