<template>
  <nut-indicator
    :style="style"
    :current="current"
    :size="size"
    :block="block"
    :align="align"
    :fillZero="fillZero"
  >
    <render :body="body" :data="data" :callback="callback" />
  </nut-indicator>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  current?: number,
  size?: number,
  block?: boolean,
  align?: string,
  fillZero?: boolean,
  style?: CSS.Properties<string | number>,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { current, size, block, align, fillZero, style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
