import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.filter('parseTime',function(ts){
  let date = new Date(ts)
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
})
Vue.directive("focus",{
  inserted: function(el){
  el.focus()
  }
})

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import store from './store'
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
