<template>
  <nut-form :model-value="modelValue" :rules="rules" :style="style">
    <nut-form-item v-for="item in body"
      :label="item.label"
      :required="item.required"
      :prop="item.prop"
      :rules="item.rules"
      :labelWidth="item.labelWidth"
      :labelAlign="item.labelAlign"
      :bodyAlign="item.bodyAlign"
      :errorMessageAlign="item.errorMessageAlign"
      :showErrorLine="item.showErrorLine"
      :showErrorMessage="item.showErrorMessage"
    >
      <view v-if="item.component === 'calendarField'">
        <nut-cell
          :showIcon="true"
          title="选择单个日期"
          :desc="fields[item.name] ? `${fields[item.name]}` : '请选择'"
          @click="openSwitch(item.name+'IsVisible')"
        >
        </nut-cell>
        <nut-calendar
          v-model:visible="isVisible"
          :default-value="fields[item.name]"
          @close="closeSwitch(item.name+'IsVisible')"
          @choose="setChooseValue"
          :start-date="`2022-01-11`"
          :end-date="`2022-11-30`"
        >
        </nut-calendar>
      </view>
      <view v-if="item.component === 'inputField'">
        <nut-input
          v-model="fields[item.name]"
          :type="item.type"
          :placeholder="item.placeholder"
          :inputAlign="item.inputAlign"
          :border="item.border"
          :disabled="item.disabled"
          :readonly="item.readonly"
          :autofocus="item.autofocus"
          :maxLength="item.maxLength"
          :clearable="item.clearable"
          :showClearIcon ="item.showClearIcon"
          :clearSize ="item.clearSize"
          :showWordLimit ="item.showWordLimit"
          :error ="item.error"
          :formatter ="item.formatter"
          :formatTrigger ="item.formatTrigger"
          :confirmType ="item.confirmType"
          :adjustPosition ="item.adjustPosition"
          :alwaysSystem ="item.alwaysSystem"
        />
      </view>
    </nut-form-item>
    <render :body="actions" :data="data" :callback="submit" />
  </nut-form>
</template>

<script setup lang="ts">
import { defineProps, toRefs, reactive } from 'vue'
import * as CSS from 'csstype'
import Taro from '@tarojs/taro'
import { post, get } from '@/services/action';

// 组件属性
const props = defineProps<{
  api?: string,
  apiType?: string,
  modelValue?: object,
  rules?: any,
  actions?: Array<any>,
  style?: CSS.Properties<string | number>,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { api, apiType, modelValue, rules, style, body, data }	= toRefs(props)

// 获取表单的键值对
const getFieldValues = (formFields) => {
  var items = {}
  formFields.map((value) => {
    items[value.name] = value.value;
  });
  return items;
}

let fields:any = reactive({})
const fieldValues = getFieldValues(body.value)
const fieldKeys = Object.keys(fieldValues)

fieldKeys.map((fieldKey) => {
  if (modelValue?.value) {
    if(modelValue?.value?.hasOwnProperty(fieldKey)) {
      fields[fieldKey] = modelValue?.value[fieldKey]
    } else {
      fields[fieldKey] = fieldValues[fieldKey]
    }
  } else {
    fields[fieldKey] = fieldValues[fieldKey]
  }
});

// 提交表单
const submit = async () => {
  let result:any = {}
  if (apiType?.value === 'POST') {
    result = await post({
      url: api?.value,
      data: fields
    })
  } else {
    result = await get({
      url: api?.value,
      data: fields
    })
  }

  if (!result) {
    Taro.showToast({
      title: "接口错误！",
      icon: 'error',
    })
    return
  }

  if (result.status === "error") {
    Taro.showToast({
      title: result.msg,
      icon: 'error',
    })
    return
  }

  Taro.showToast({
    title: result.msg
  })

  if (result.url !== "") {
    Taro.navigateTo({
      url: result.url,
    })
  }
}

const openSwitch = param => {
  fields[`${param}`] = true;
};
const closeSwitch = param => {
  fields[`${param}`] = false;
};
const setChooseValue = param => {
  console.log(param)
};

</script>

<style lang="scss" ></style>
