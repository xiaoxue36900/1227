<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// 包文件夹: 根目录下有一个package.json文件
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: {
    carouselList: Array,
    autoplay: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    /* 
      监视carouselList变化的回调函数
      当banners从[]变为[...]
      注意: 默认初始时不调用, 只有数据变化了才调用

      只要更新了数据界面就会自动更新 (称为数据绑定), 但vue更新界面是异步的
      我们更新了数据 ==> 立即同步调用监视的回调函数(界面还没有更新, 列表数据还没有显示)  ==> 异步更新界面
      */
    carouselList: {
      handler(value) {
        // banners通过此方式创建的swiper
        console.log("watch carouselList", value.length);
        // 如果有数据才去创建延迟swiper
        if (value.length > 0) {
          this.$nextTick(() => {
            this.initSwiper();
          });
        }
      },
      immediate: true,
    },
  },
  methods: {
    /* 
      创建swiper实例对象: 必须在列表数据显示之后创建才有正常轮播效果
      */
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        loop: true,
        autoplay: this.autoplay,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
