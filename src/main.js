import Vue from 'vue'
import App from './App'
import less from 'less'
import router from './router'
import ElementUI from 'element-ui'; //UI框架
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/element-#C82126/index.css'; //自定义主题

Vue.use(less)
Vue.use(ElementUI)

import axios from 'axios'
import qs from 'qs'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
