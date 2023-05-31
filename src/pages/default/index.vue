<template>
	<engine :api="api" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useDidShow } from '@tarojs/taro'

const router = useRouter()
let api = ref('/api/miniapp/page/index/index')

useDidShow(() => {
  if (router.params?.api !== undefined) {
    api.value = router.params.api
  }
})
</script>

<style lang="scss">
  @import "./index.scss";
</style>
