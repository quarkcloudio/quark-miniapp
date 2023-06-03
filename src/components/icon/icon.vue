<template>
  <IconFont
    :style="style"
    :name="name"
    :color="color"
    :size="size"
    :tag="tag"
  />
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  name?: string,
  color?: string,
  size?: string | object,
  tag?: string,
  style?: CSS.Properties<string | number>,
}>()

const { name, color, size, tag, style }	= toRefs(props)
</script>

<style lang="scss" ></style>
