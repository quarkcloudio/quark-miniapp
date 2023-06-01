<template>
  <view v-if="typeof body === 'string' || typeof body === 'number'">
    {{ body }}
  </view>
  <view v-else-if="body?.hasOwnProperty('component')">
    <view v-if="body.component === 'view'">
      <view :style="body.style">
        <render :body="body.body" :data="data" :callback="callback" />
      </view>
    </view>
    <view v-if="body.component === 'page'">
      <page :style="body.style" :navbar="body.navbar" :tabbar="body.tabbar" :content="body.content" :data="data"
        :callback="callback" />
    </view>
    <view v-if="body.component === 'navbar'">
      <navbar :style="body.style" :title="body.title" :desc="body.desc" :body="body.body" :data="data"
        :callback="callback" />
    </view>
    <view v-if="body.component === 'row'">
      <row :style="body.style" :type="body.type" :justify="body.justify" :align="body.align" :flexWrap="body.flexWrap" :body="body.body" :data="data" :callback="callback" />
    </view>
  </view>
  <view v-else>
    <view v-for="item in body">
      <render :body="item" :data="data" :callback="callback" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  body?: any,
  data?: string | number | object,
  callback?: Function | object,
}>()

const { body, data, callback }	= toRefs(props)
</script>