<template>
  <nut-form :model-value="values" :rules="rules" :style="style">
    <render :body="body" :data="data" :callback="callback" />
  </nut-form>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  values?: object,
  rules?: any,
  style?: CSS.Properties<string | number>,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { values, rules, style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
