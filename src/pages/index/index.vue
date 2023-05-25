<template>
  <view class="banner">
    <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item>
        <img class="swiperItem" src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img class="swiperItem" src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img class="swiperItem" src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img class="swiperItem" src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
      </nut-swiper-item>
    </nut-swiper>
  </view>
  <view>
    <nut-tabbar bottom="false" safe-area-inset-bottom="true" @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="首页" :icon="Home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" :icon="Category"> </nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" :icon="My"></nut-tabbar-item>
    </nut-tabbar>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Home, Category, My } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro'
export default {
  name: 'Index',
  components: {
    Home,
    Category,
    My
  },
  setup() {
    const state = reactive({
      type: 'text',
      show: false,
    });

    return {
      ...toRefs(state),
      Home,
      Category,
      My
    }
  }
}
</script>

<style lang="scss">
  @import "./index.scss";
</style>
