<template>
  <nut-menu :style="style" :activeColor="activeColor" :closeOnClickOverlay="closeOnClickOverlay" :scrollFixed="scrollFixed" :lockScroll="lockScroll">
    <nut-menu-item v-for="item in body" :style="item.style" :title="item.title" :options="item.options" :disabled="item.disabled" :cols="item.cols" :direction="item.direction" />
  </nut-menu>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  activeColor?: string,
  closeOnClickOverlay?: boolean,
  scrollFixed?: boolean | string | number,
  lockScroll?: boolean,
  style?: CSS.Properties<string | number>,
  body?: string | number | object | Array<any>,
  data?: string | number | object,
  callback?: Function | object,
}>()

const { activeColor, closeOnClickOverlay, scrollFixed, lockScroll, style, body }	= toRefs(props)
</script>

<style lang="scss" ></style>
