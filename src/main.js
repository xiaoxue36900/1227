/* 
入口js
*/
import Vue from 'vue'
// import App from './App.vue'
import App from '@/App'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import './mock/mockServer'

Vue.config.productionTip = false // 去掉不是生产环境的提示

// 注册全局组件
Vue.component('TypeNav', TypeNav)

new Vue({
  // el: '#app'
  render: h => h(App), // 将App组件的对象界面渲染到页面上
  router, // 配置路由器  所有组件对象都可以通过$router属性得到router对象
  store, // 配置vuex的store  所有组件对象都可以通过$store属性得到store对象
}).$mount('#app')
