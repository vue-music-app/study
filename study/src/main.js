// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import scroll from '@/base/scroll'
import axios from 'axios'
import '@/assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.component(scroll.name, scroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
