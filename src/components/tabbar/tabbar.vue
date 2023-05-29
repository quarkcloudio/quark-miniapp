<template>
	<nut-tabbar :style="style" :bottom="bottom">
    <nut-tabbar-item  v-for="item in items" :tab-title="item.title">
      <template #icon>
				<IconFont :name="item.icon"></IconFont>
			</template>
    </nut-tabbar-item>
	</nut-tabbar>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import * as CSS from 'csstype'
import { IconFont } from '@nutui/icons-vue-taro';

// 组件属性
const props = defineProps<{
  bottom?: boolean,
  items?: Array<any>,
  style?: CSS.Properties<string | number>,
  data?: string | number | object,
  callback?: Function | object,
}>()

const { bottom, items, style }	= toRefs(props)
</script>

<style lang="scss" ></style>