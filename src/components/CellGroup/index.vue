<template>
  <nut-cell-group
    :style="style"
    :title="title"
    :desc="desc"
  >
    <render :body="body" :data="data" :callback="callback" />
  </nut-cell-group>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  title?: string,
  desc?: string,
  style?: CSS.Properties<string | number>,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { title, desc, style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
