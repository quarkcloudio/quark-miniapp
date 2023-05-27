<template>
  <render :body="this.body" />
</template>

<script>
import Taro from '@tarojs/taro'
import Render from '@/components/render/render';
import { get } from "@/services/action"

export default {
  name: 'Engine',
  components: {
    Render,
  },
  props: {
    title: {
      type: String,
      default: '引擎页'
    },
    api: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      body: {}
    }
  },
  mounted() {
    if (!this.api) {
      Taro.showToast({
        title: "接口不能为空"
      })
    } else {
      this.getComponents(this.api)
    }
  },
  activated() {
    if (!this.api) {
      Taro.showToast({
        title: "接口不能为空"
      })
    } else {
      this.getComponents(this.api)
    }
  },
  methods: {
    async getComponents(api) {
      let result = await get({
        url: api,
      })
      this.body = result;
      Taro.setNavigationBarTitle({
        title: result.title
      });
    }
  }
}
</script>

<style lang="scss"></style>
