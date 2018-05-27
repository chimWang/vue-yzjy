import 'babel-polyfill' //ES6转译
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick' //解决移动端三秒延迟
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.withCredentials = true
Vue.prototype.$http = axios

import 'common/stylus/index.styl'
import VueCordova from 'vue-cordova'

Vue.use(VueCordova)
Vue.use(ElementUI)
Vue.config.productionTip = false

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  data(){
    return {}
  },
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
