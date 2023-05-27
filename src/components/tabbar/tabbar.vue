<template>
	<nut-tabbar :style="style" :bottom="bottom" @tab-switch="tabSwitch">
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

<script>
import Engine from '@/components/render/render.vue';
import { IconFont } from '@nutui/icons-vue-taro';

export default {
	name: 'Tabbar',
	components: { IconFont },
	props: {
		bottom: {
			type: [Boolean],
			default: false
		},
		items: {
			type: [Object],
			default: null
		},
		style: {
			type: [String, Object],
			default() {
				return {}
			}
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" ></style>
