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
      title: '首页',
      api:'/api/mix/page/index/index'
    }
  },
  setup() {
    return {
      Engine,
    }
  }
}
</script>

<style lang="scss">
  @import "./index.scss";
</style>
