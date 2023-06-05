<template>
  <nut-form-item
    :label="label"
    :required="required"
    :prop="prop"
    :rules="rules"
    :labelWidth="labelWidth"
    :labelAlign="labelAlign"
    :bodyAlign="bodyAlign"
    :errorMessageAlign="errorMessageAlign"
    :showErrorLine="showErrorLine"
    :showErrorMessage="showErrorMessage"
  >
    <view v-if="component === 'inputField'">
      <nut-input placeholder="请输入姓名" type="text" />
    </view>
  </nut-form-item>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import * as CSS from 'csstype'

// 组件属性
const props = defineProps<{
  component?: string,
  label?: string,
  required?: boolean,
  prop?: string,
  rules?: any,
  labelWidth?: number | string,
  labelAlign?: string,
  bodyAlign?: string,
  errorMessageAlign?: string,
  showErrorLine?: boolean,
  showErrorMessage?: boolean,
  style?: CSS.Properties<string | number>,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { component, label, required, prop, rules, labelWidth, labelAlign, bodyAlign, errorMessageAlign, showErrorLine, showErrorMessage }	= toRefs(props)
</script>

<style lang="scss" ></style>
