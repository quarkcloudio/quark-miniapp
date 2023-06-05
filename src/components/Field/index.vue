<template>
  <nut-form-item :label="label" :prop="prop" :rules="rules">
    <nut-input placeholder="请输入姓名" type="text" />
  </nut-form-item>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  label?: string,
  prop?: string,
  rules?: any,
  style?: CSS.Properties<string | number>,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { label, prop, rules }	= toRefs(props)
</script>

<style lang="scss" ></style>
