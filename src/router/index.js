import Vue from 'vue'
import Router from 'vue-router'
import home from '@/main/home' //首页
import myhead from '@/components/myhead' //头部
import myfooter from '@/components/myfooter' //尾部
import constructionList from '@/construction/list' //施工公司列表
import company from '@/construction/details' //施工公司详情页
import comment from '@/public/Comment' //施工公司评价 - 组件
import QaComment from '@/public/QaComment' //问答评论 - 组件
import downloadApp from '@/public/downloadApp' //弹出框APP引导
import designerList from '@/designer/list' //设计师列表
import designer from '@/designer/details' //设计师详情页
import renderingsList from '@/renderings/list' //效果图列表
import raidersList from '@/raiders/list' //查攻略列表
import raiders from '@/raiders/detail' //查攻略详情页
import qaList from '@/qa/list' //查攻略列表
import qa from '@/qa/detail' //查攻略详情页
import user from '@/user/user' //用户中心
import userIndex from '@/user/userIndex' //用户中心首页
import shop from '@/shop/index' //建材城首页
import shopList from '@/shop/list' //建材城列表
import shopdetails from '@/shop/details' //建材城列表
import shopIndex from '@/shop/shopIndex' //店铺主页
import login from '@/login/login' //登录页
import reg from '@/login/reg' //注册页

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
      path: '/constructionList', //施工公司列表
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
      path: '/designerList', //设计师列表
      name: 'designerList',
      component: designerList
    },
    {
      path: '/designer', //设计师详情页
      name: 'designer',
      component: designer
    },
    {
      path: '/downloadApp', //弹出框APP引导
      name: 'downloadApp',
      component: downloadApp
    },
    {
      path: '/renderingsList', //效果图列表
      name: 'renderingsList',
      component: renderingsList
    },
    {
      path: '/raidersList', //查攻略列表
      name: 'raidersList',
      component: raidersList
    },
    {
      path: '/raiders', //查攻略详情
      name: 'raiders',
      component: raiders
    },
    {
      path: '/qaList', //咨询问答列表
      name: 'qaList',
      component: qaList
    },
    {
      path: '/qa', //咨询问答详情
      name: 'qa',
      component: qa,
      children:[
        {
          path: 'QaComment',
          component: QaComment
        }
      ]
    },
    {
      path: '/user', //用户中心
      name: 'user',
      component: user
    },
    {
      path: '/userIndex', //用户中心首页
      name: 'userIndex',
      component: userIndex
    },
    {
      path: '/shop', //建材城首页
      name: 'shop',
      component: shop
    },
    {
      path: '/shopList', //建材城列表
      name: 'shopList',
      component: shopList
    },
    {
      path: '/shopdetails', //建材城详情页
      name: 'shopdetails',
      component: shopdetails
    },
    {
      path: '/shopIndex', //店铺主页
      name: 'shopIndex',
      component: shopIndex
    },
    {
      path: '/login', //登录页
      name: 'login',
      component: login
    },
    {
      path: '/reg', //登录页
      name: 'reg',
      component: reg
    }

  ]
})
