import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  el: "#app",
  store ,
  router,
  render: h => h(App)
})
