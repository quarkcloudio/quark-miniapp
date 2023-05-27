<template>
	<view :style="style">
		<view v-if="navbar">
			<render :body="this.navbar" />
		</view>
		<view>
			<render :body="this.content" />
		</view>
		<view v-if="tabbar">
			<render :body="this.tabbar" />
		</view>
	</view>
</template>

<script>
import Engine from '@/components/render/render.vue';

export default {
	name: 'Page',
	props: {
		navbar: {
			type: [Object],
			default: null
		},
		tabbar: {
			type: [Boolean, Object],
			default: null
		},
		content: {
			type: [String, Number, Object],
			default: ''
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
