<template>
  <nut-navbar :style="style" :title="title" :desc="desc">
    <render :body="body" :data="data" :callback="callback" />
  </nut-navbar>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  title?: string,
  desc?: string,
  style?: CSS.Properties<string | number>,
  body?: string | number | object,
  data?: string | number | object,
  callback?: Function | object,
}>()

const title = computed(() => props.title)
const desc = computed(() => props.desc)
const style = computed(() => props.style)
const body = computed(() => props.body)
const data = computed(() => props.data)
const callback = computed(() => props.callback)
</script>

<style lang="scss" ></style>
