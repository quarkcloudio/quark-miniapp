<template>
  <render :body="body" />
</template>

<script setup lang="ts">
import { ref, onMounted, onActivated, defineProps } from 'vue'
import Taro from '@tarojs/taro'
import { get } from "@/services/action"

// 组件属性
const props = defineProps<{
  api?: string
}>()

// 组件数据
let body = ref({})

// 获取数据
const getComponents = async (api: string ) => {
  let result = await get({
    url: api,
  })

  if(!result) {
    Taro.showToast({
      title: "接口错误！"
    })
    return
  }

  // 设置标题
  Taro.setNavigationBarTitle({
    title: result.title
  });

  // 设置组件数据
  body.value = result;
};

// 挂载时候调用，只执行一次
onMounted(() => {
  if (!props.api) {
    Taro.showToast({
      title: "接口不能为空"
    })
  } else {
    getComponents(props.api)
  }
})

// 进入组件调用，多次执行
onActivated(() => {
  if (!props.api) {
    Taro.showToast({
      title: "接口不能为空"
    })
  } else {
    getComponents(props.api)
  }
})
</script>

<style lang="scss"></style>
