<template>
	<view v-if="typeof body === 'string' || typeof body === 'number'">
		{{ body }}
	</view>
	<view v-else-if="body.hasOwnProperty('component')">
		<view v-if="body.component === 'view'">
			<view :style="body.style">
				<render :body="this.body.body" :data="this.data" :callback="this.callback" />
			</view>
		</view>
		<view v-if="body.component === 'page'">
			page
		</view>
	</view>
	<view v-else>
		<view v-for="item in this.body">
			<render :body="item" :data="this.data" :callback="this.callback" />
		</view>
	</view>
</template>

<script>
/**
 * Render
 */
import Engine from '@/components/engine/engine.vue';

export default {
	name: "Render",
	props: {
		body: {
			type: String[String, Number, Object],
			default: ""
		},
		data: {
			type: Object,
			default() {
				return {};
			}
		},
		callback: {
			type: [Object, Function],
			default() {
				return {};
			}
		}
	},
	data() {
		return {};
	}
};
</script>