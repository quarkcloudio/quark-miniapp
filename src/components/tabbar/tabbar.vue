<template>
	<nut-tabbar :style="style" :bottom="bottom" @tab-switch="tabSwitch">
    <nut-tabbar-item v-for="item in items" :tab-title="item.tabTitle">
      <template #icon>
				<IconFont :name="item.icon"></IconFont>
			</template>
    </nut-tabbar-item>
	</nut-tabbar>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import Taro from '@tarojs/taro'
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

// 切换事件
const tabSwitch = (item, index)=> {
  let getItem = getItemByName(index)
  if(getItem.href) {
    Taro.switchTab({
      url: getItem.href
    })
    return
  }
  if(getItem.to) {
    Taro.switchTab({
      url: getItem.to
    })
    return
  }
}

// 根据name获取Item
const getItemByName = (name) => {
  let currentItem:any = {}
  items?.value?.forEach?.((item, index) => {
    if(item.name) {
      if(item.name === name) {
        currentItem = item
      }
    } else {
      if(index === name) {
        currentItem = item
      }
    }
  });

  return currentItem
}

</script>

<style lang="scss" ></style>