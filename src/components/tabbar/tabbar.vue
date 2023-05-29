<template>
	<nut-tabbar :style="style" :bottom="bottom">
		<nut-tabbar-item tab-title="首页">
			<template #icon>
				<IconFont name="home"></IconFont>
			</template>
		</nut-tabbar-item>
		<nut-tabbar-item tab-title="分类">
			<template #icon>
				<IconFont name="category"></IconFont>
			</template>
		</nut-tabbar-item>
		<nut-tabbar-item tab-title="我的">
			<template #icon>
				<IconFont name="my"></IconFont>
			</template>
		</nut-tabbar-item>
	</nut-tabbar>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
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

const bottom = computed(() => props.bottom)
const items = computed(() => props.items)
const style = computed(() => props.style)
</script>

<style lang="scss" ></style>