<template>
  <nut-tabbar :style="style" :bottom="bottom" @tab-switch="tabSwitch">
    <nut-tabbar-item tab-title="标签" :icon="Home"></nut-tabbar-item>
    <nut-tabbar-item tab-title="标签" :icon="Category"> </nut-tabbar-item>
    <nut-tabbar-item tab-title="标签" :icon="Find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="标签" :icon="Cart"></nut-tabbar-item>
    <nut-tabbar-item tab-title="标签" :icon="My"></nut-tabbar-item>
  </nut-tabbar>
</template>

<script>
	import Engine from '@/components/render/render.vue';
	
	export default {
		name: 'Tabbar',
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
