/* 
管理搜索模块相关数据的vuex模块
*/
import { reqProductList } from "@/api";

const state = {
  productList: {},
};
const mutations = {
  /* 
  接收保存新的商品列表数据
  */
  RECEIVE_PRODUCT_LIST(state, productList) {
    state.productList = productList;
  },
};
const actions = {
  /* 
  获取商品列表数据的异步action
  */
  async getProductList({ commit }, searchParams) {
    const result = await reqProductList(searchParams);
    if (result.code === 200) {
      const productList = result.data;
      commit("RECEIVE_PRODUCT_LIST", productList);
    }
  },
};
const getters = {
  trademarkList(state) {
    // 当前模块的state
    return state.productList.trademarkList || [];
  },

  attrsList(state) {
    return state.productList.attrsList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
