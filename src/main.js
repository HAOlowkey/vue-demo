import Vue from 'vue'
import App from './App.vue'

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

new Vue({
  render: h => h(App),
}).$mount('#app')
