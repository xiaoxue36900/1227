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
  },
  mounted() {
    if (this.carouselList.length > 0) {
      this.initSwiper();
    }
  },
  watch: {
    carouselList(value) {
      console.log("watch carouselList", value.length);
      if (value.length > 0) {
        this.$nextTick(() => {
          this.initSwiper();
        });
      }
    },
  },

  methods: {
    /* 
      创建swiper实例对象: 必须在列表数据显示之后创建才有正常轮播效果
      */
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
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
