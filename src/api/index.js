import ajax from "./ajax";
import mockAjax from "./mockAjax";

export function reqBaseCategoryList() {
  return ajax({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
}

export function reqLogin(mobile, password) {
  return ajax({
    method: "POST",
    url: "/user/passport/login",
    data: { mobile, password },
  });
}

/* mock接口对应的接口请求函数 */
export const reqBanners = () => mockAjax("/banners");
export const reqFloors = () => mockAjax("/floors");

/* 
根据搜索的条件参数对象获取商品列表数据
*/
export const reqProductList = (searchParams) =>
  ajax({
    url: "/list",
    method: "POST",
    data: searchParams,
  });
