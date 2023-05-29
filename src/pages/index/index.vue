<template>
	<engine :api="api" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Taro from '@tarojs/taro'

let api = ref('/api/miniapp/page/index/index')
const taroInstance = Taro.getCurrentInstance()

// 初始化api
if(taroInstance.router !== null) {
  const params = taroInstance.router.params
  if (params?.api !== undefined) {
    api.value = params.api
  }
}
</script>

<style lang="scss">
  @import "./index.scss";
</style>
