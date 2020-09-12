import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";
import VueLazyload from "vue-lazyload";

import FastClick from 'fastclick'

import toast from 'components/common/toast'

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = true

Vue.use(toast)

Vue.use(VueLazyload,{
  loading:require('@/assets/img/common/placeholder.png')
})

FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
