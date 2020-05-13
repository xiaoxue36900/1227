/* 
用来管理用户数据的vuex模块
*/
import { getUserTempId } from "@/utils";
export default {
  state: {
    userInfo: {},
    // 用户临时ID，获取函数只执行一次
    userTempId: getUserTempId(),
  },
  mutations: {},
  actions: {},
  getters: {},
};
