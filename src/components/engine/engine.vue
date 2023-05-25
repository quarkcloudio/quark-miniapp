<template>
	<render :body="this.body" />
</template>

<script>
	import { get } from "@/services/action.js"
	import Render from '@/components/render/render.vue';
	
	export default {
		name: 'Engine',
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
				body:{}
			}
		},
		mounted() {
			if (!this.api) {
				Taro.showToast({
					title:"接口不能为空"
				})
			} else {
				this.getComponents(this.api)
			}
		},
		activated() {
			if (!this.api) {
				uni.showToast({
					title:"接口不能为空"
				})
			} else {
				this.getComponents(this.api)
			}
		},
		methods: {
			async getComponents(api) {
				let result = await get({
					url:api,
				})
				
				this.body = result;
				
				Taro.setNavigationBarTitle({
					title: result.title
				});
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
