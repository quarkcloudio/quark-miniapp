<template>
  <nut-button
    :style="style"
    :type="type"
    :formType="formType"
    :size="size"
    :shape="shape"
    :color="color"
    :plain="plain"
    :disabled="disabled"
    :block="block"
    :loading="loading"
    :openType="openType"
    :hoverClass="hoverClass"
    :hoverStartTime="hoverStartTime"
    :hoverStayTime="hoverStayTime"
    :appParameter="appParameter"
    :scope="scope"
    :hoverStopPropagation="hoverStopPropagation"
    :lang="lang"
    :sessionFrom="sessionFrom"
    :sendMessageTitle="sendMessageTitle"
    :sendMessagePath="sendMessagePath"
    :sendMessageImg="sendMessageImg"
    :showMessageCard="showMessageCard"
    :publicId="publicId"
    :templateId="templateId"
    :subscribeId="subscribeId"
    :groupId="groupId"
    :guildId="guildId"
    :shareType="shareType"
    :shareMode="shareMode"
    :ariaLabel="ariaLabel"
    :openId="openId"
    :shareMessageFriendInfo="shareMessageFriendInfo"
    :shareMessageTitle="shareMessageTitle"
    :shareMessageImg="shareMessageImg"
    @click="click"
  >
  {{label}}
  </nut-button>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import * as CSS from 'csstype'
import Taro from '@tarojs/taro'

// 组件属性
const props = defineProps<{
  label?: string,
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger',
  formType?: 'button' | 'submit' | 'reset',
  size?: 'large' | 'normal' | 'small' | 'mini',
  shape?: 'square' | 'round',
  color?: string,
  plain?: boolean,
  disabled?: boolean,
  block?: boolean,
  loading?: boolean,

  openType?: string,
  hoverClass?: string,
  hoverStartTime?: number,
  hoverStayTime?: number,
  appParameter?: string,
  scope?: string,
  hoverStopPropagation?: boolean,
  lang?: string,

  sessionFrom?: string,
  sendMessageTitle?: string,
  sendMessagePath?: string,
  sendMessageImg?: string,
  showMessageCard?: boolean,
  publicId?: string,
  templateId?: Array<string>,
  subscribeId?: string,
  groupId?: string,
  guildId?: string,
  shareType?: string,
  shareMode?: string,
  ariaLabel?: string,
  openId?: string,
  shareMessageFriendInfo?: string,
  shareMessageTitle?: string,
  shareMessageImg?: string,

  actionType?: string,
  href?: string,
  target?: string,
  popup?: any,
  drawer?: any,
  confirmTitle?: string,
  confirmText?: string,
  confirmType?: string,
  api?: string,
  apiType?: string,
  reload?: string,
  withLoading?: boolean,

  style?: CSS.Properties<string | number>,
  body?: any,
  data?: any,
  callback?: Function,
}>()

const { 
  label,
  type,
  formType,
  size,
  shape,
  color,
  plain,
  disabled,
  block,
  loading,
  openType,
  hoverClass,
  hoverStartTime,
  hoverStayTime,
  appParameter,
  scope,
  hoverStopPropagation,
  lang,
  sessionFrom,
  sendMessageTitle,
  sendMessagePath,
  sendMessageImg,
  showMessageCard,
  publicId,
  templateId,
  subscribeId,
  groupId,
  guildId,
  shareType,
  shareMode,
  ariaLabel,
  openId,
  shareMessageFriendInfo,
  shareMessageTitle,
  shareMessageImg,
  actionType,
  href,
  target,
  popup,
  drawer,
  confirmTitle,
  confirmText,
  confirmType,
  api,
  apiType,
  reload,
  withLoading,
  style,
  callback
 }	= toRefs(props)

const click = () => {
  if (actionType?.value == "link" &&  href?.value) {
    switch (target?.value) {
      case "switchTab":
        Taro.switchTab({
          url: href.value
        })
        break;
      case "reLaunch":
        Taro.reLaunch({
          url: href.value
        })
        break;
      case "redirectTo":
        Taro.redirectTo({
          url: href.value
        })
        break;
      case "navigateTo":
        Taro.navigateTo({
          url: href.value
        })
        break;
      default:
        Taro.navigateTo({
          url: href.value
        })
        break;
    }
    return
  }

  if(actionType?.value == "submit") {
    callback?.value?.()
  }
}

</script>

<style lang="scss" ></style>
