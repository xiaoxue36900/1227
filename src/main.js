/* 
入口js
*/
import Vue from "vue";
import "swiper/css/swiper.min.css";
import App from "@/App";
import router from "./router";
import store from "./store";
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
import "./mock/mockServer";
// 去掉不是生产环境的提示
Vue.config.productionTip = false;

// 注册全局组件
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);
Vue.component("Pagination", Pagination);
new Vue({
  beforeCreate() {
    // 给Vue原型对象指定事件总线对象(当前vm对象)
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  // 配置路由器  所有组件对象都可以通过$router属性得到router对象
  router,
  // 配置vuex的store  所有组件对象都可以通过$store属性得到store对象
  store,
}).$mount("#app");
