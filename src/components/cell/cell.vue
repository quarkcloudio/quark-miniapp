<template>
  <nut-cell
    :style="style"
    :title="title"
    :subTitle="subTitle"
    :desc="desc"
    :descTextAlign="descTextAlign"
    :isLink="isLink"
    :roundRadius="roundRadius"
    :center="center"
    :size="size"
    @click="click"
  >
  </nut-cell>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import * as CSS from 'csstype'
import Taro from '@tarojs/taro'

// 组件属性
const props = defineProps<{
  title?: string,
  subTitle?: string,
  desc?: string,
  descTextAlign?: string,
  isLink?: boolean,
  roundRadius?: number,
  center?: boolean,
  size?: string,
  url?: string,
  to?: string,
  style?: CSS.Properties<string | number>,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { title, subTitle, desc, descTextAlign, isLink, roundRadius, center, size, url, to, style }	= toRefs(props)
const click = () => {
  if (url?.value) {
    Taro.redirectTo({
      url: url.value
    })
    return
  }
  if (to?.value) {
    Taro.redirectTo({
      url: to.value
    })
    return
  }
}

</script>

<style lang="scss" ></style>
