<template>
  <view :style="style">
    <view v-if="navbar">
      <render :body="navbar" :data="data" :callback="callback" />
    </view>
    <view>
      <render :body="content" :data="data" :callback="callback" />
    </view>
    <view v-if="tabbar">
      <render :body="tabbar" :data="data" :callback="callback" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  navbar?: object,
  tabbar?: boolean | object,
  content?: string | number | object,
  style?: CSS.Properties<string | number>,
  data?: any,
  callback?: Function | object,
}>()

const { navbar, tabbar, content, style, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
