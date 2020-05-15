import Vue from 'vue'
import Router from 'vue-router'
import home from '@/main/home' //首页
import myhead from '@/components/myhead' //头部
import myfooter from '@/components/myfooter' //尾部
import constructionList from '@/construction/list' //施工公司
import company from '@/construction/details' //施工公司
import comment from '@/public/Comment' //施工公司评价组件
import downloadApp from '@/public/downloadApp' //弹出框APP引导

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //首页
      name: 'home',
      component: home
    },
    {
      path: '/myhead', //头部
      name: 'myhead',
      component: myhead
    },
    {
      path: '/myfooter', //尾部
      name: 'myfooter',
      component: myfooter
    },
    {
      path: '/constructionList', //施工公司
      name: 'constructionList',
      component: constructionList
    },
    {
      path: '/company', //施工公司详情页
      name: 'company',
      component: company,
      children:[
        {
          path: 'comment',
          component: comment
        }
      ]
    },
    {
      path: '/downloadApp', //弹出框APP引导
      name: 'downloadApp',
      component: downloadApp
    }
  ]
})
