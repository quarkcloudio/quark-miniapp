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
        <calendar
          v-model="fields[item.name]"
          :type="item.type"
          :poppable="item.poppable"
          :isAutoBackFill="item.isAutoBackFill"
          :title="item.title"
          :startDate="item.startDate"
          :endDate="item.endDate"
          :showToday="item.showToday"
          :startText="item.startText"
          :endText="item.endText"
          :confirmText="item.confirmText"
          :showTitle="item.showTitle"
          :showSubTitle="item.showSubTitle"
          :toDateAnimation="item.toDateAnimation"
          :firstDayOfWeek="item.firstDayOfWeek"
        />
      </view>
      <view v-if="item.component === 'cascaderField'">
        <cascader
          v-model="fields[item.name]"
          :options="item.options"
          :valueKey="item.valueKey"
          :textKey="item.textKey"
          :childrenKey="item.childrenKey"
          :convertConfig="item.convertConfig"
          :title="item.title"
          :closeIconPosition="item.closeIconPosition"
          :closeable="item.closeable"
          :poppable="item.poppable"
        />
      </view>
      <view v-if="item.component === 'checkboxField'">
        <nut-checkbox-group v-model="fields[item.name]" :max="item.max" :disabled="item.disabled">
          <nut-checkbox
            v-for="subItem in item.options"
            :disabled="subItem.disabled"
            :textPosition="subItem.textPosition"
            :iconSize="subItem.iconSize"
            :label="subItem.value"
            :indeterminate="subItem.indeterminate"
            :shape="subItem.shape"
          >
            {{subItem.label}}
          </nut-checkbox>
        </nut-checkbox-group>
      </view>
      <view v-if="item.component === 'radioField'">
        <nut-cell-group v-model="fields[item.name]" :textPosition="item.textPosition" :direction="item.direction">
          <nut-radio
            v-for="subItem in item.options"
            :disabled="subItem.disabled"
            :iconSize="subItem.iconSize"
            :label="subItem.value"
            :shape="subItem.shape"
          >
            {{subItem.label}}
          </nut-radio>
        </nut-cell-group>
      </view>
      <view v-if="item.component === 'rangeField'">
        <nut-range
          v-model="fields[item.name]"
          :range="item.range"
          :max="item.max"
          :min="item.min"
          :step="item.step"
          :disabled="item.disabled"
          :vertical="item.vertical"
          :hiddenRange="item.hiddenRange"
          :hiddenTag="item.hiddenTag"
          :activeColor="item.activeColor"
          :inactiveColor="item.inactiveColor"
          :buttonColor="item.buttonColor"
          :marks="item.marks"
        >
        </nut-range>
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
      <view v-if="item.component === 'inputNumberField'">
        <nut-input-number
          v-model="fields[item.name]"
          :inputWidth="item.inputWidth"
          :buttonSize="item.buttonSize"
          :min="item.min"
          :max="item.max"
          :step="item.step"
          :decimalPlaces="item.decimalPlaces"
          :disabled="item.disabled"
          :readonly="item.readonly"
        />
      </view>
    </nut-form-item>
    <render :body="actions" :data="data" :callback="submit" />
  </nut-form>
</template>

<script setup lang="ts">
import { toRefs, reactive } from 'vue'
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
</script>

<style lang="scss" ></style>
