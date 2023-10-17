<template>
  <render :body="body" />
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import Taro, { useDidShow } from '@tarojs/taro'
import { get } from "@/services/action"

// 组件属性
const props = defineProps<{
  api?: string
}>()

const { api }	= toRefs(props)

// 组件数据
const body = ref({})

// 获取数据
const getComponents = async (api: string ) => {
  let result = await get({
    url: api,
  })

  if(!result) {
    Taro.showToast({
      title: "接口错误！",
      icon: 'error',
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

useDidShow(async () => {
  if (!api?.value) {
    Taro.showToast({
      title: "接口不能为空",
      icon: 'error',
    })
  } else {
    await getComponents(api?.value)
  }
})
</script>

<style lang="scss"></style>
