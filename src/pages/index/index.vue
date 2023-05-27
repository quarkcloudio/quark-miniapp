<template>
	<engine :api="api" />
</template>

<script>
import { reactive, toRefs } from 'vue';
import Engine from '@/components/engine/engine';
import Taro from '@tarojs/taro'
export default {
  name: 'Index',
  components: {
    Engine,
  },
  data() {
    return {
      api:'/api/miniapp/page/index/index'
    }
  },
  setup() {
    this.$instance = Taro.getCurrentInstance()
    const params = this.$instance.router.params

    // 初始化api
    if (params?.api != undefined) {
      this.api = params.api
    }

    return {
      Engine,
    }
  }
}
</script>

<style lang="scss">
  @import "./index.scss";
</style>
