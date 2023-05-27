<template>
	<view :style="style">
		<view v-if="navBar">
		</view>
		<view>
			<render :body="this.content" />
		</view>
	</view>
</template>

<script>
	/**
	 * Page
	 */
	import Engine from '@/components/render/render.vue';
	
	export default {
		name: 'Page',
		props: {
			navBar: {
				type: [Object],
				default: null
			},
			tabBar: {
				type: [Boolean,Object],
				default: null
			},
			content: {
				type: [String, Number, Object],
				default: ''
			},
			style: {
				type: [String, Object],
				default () {
					return {}
				}
			}
		},
		data() {
			return {};
		}
	};
</script>

<style lang="scss" >
</style>
