<template>
  <nut-swiper
    :style="style"
    :width="width"
    :height="height"
    :direction="direction"
    :paginationVisible="paginationVisible"
    :paginationColor="paginationColor"
    :loop="loop"
    :duration="duration"
    :autoPlay="autoPlay"
    :initPage="initPage"
    :touchable="touchable"
    :isPreventDefault="isPreventDefault"
    :isStopPropagation="isStopPropagation"
  >
    <nut-swiper-item v-for="item in body" :style="item.style">
      <render :body="item.body" :data="data" :callback="callback" />
    </nut-swiper-item>
  </nut-swiper>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  width?: string | number,
  height?: string | number,
  direction?: string,
  paginationVisible?: boolean,
  paginationColor?: string,
  loop?: boolean,
  duration?: string | number,
  autoPlay?: string | number,
  initPage?: string | number,
  touchable?: boolean,
  isPreventDefault?: boolean,
  isStopPropagation?: boolean,
  style?: CSS.Properties<string | number>,
  body?: string | number | object | Array<any>,
  data?: string | number | object,
  callback?: Function | object,
}>()

const { width, height, direction, paginationVisible, paginationColor, loop, duration, autoPlay, initPage, touchable, isPreventDefault, isStopPropagation, style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
