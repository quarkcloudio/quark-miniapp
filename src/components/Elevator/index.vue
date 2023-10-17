<template>
  <nut-elevator
    :style="style"
    :height="height"
    :acceptKey="acceptKey"
    :indexList="indexList"
    :isSticky="isSticky"
    :spaceHeight="spaceHeight"
    :titleHeight="titleHeight"
  />
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  height?: number | string,
  acceptKey?: string,
  indexList?: Array<any>,
  isSticky?: boolean,
  spaceHeight?: number,
  titleHeight?: number,
  style?: CSS.Properties<string | number>,
}>()

const { height, acceptKey, indexList, isSticky, spaceHeight, titleHeight, style}	= toRefs(props)
</script>

<style lang="scss" ></style>
