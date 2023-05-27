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
      <page :style="body.style" :navbar="body.navbar" :tabbar="body.tabbar" :content="this.body.content" :data="this.data"
        :callback="this.callback" />
    </view>
    <view v-if="body.component === 'navbar'">
      <navbar :style="body.style" :title="body.title" :desc="body.desc" :body="this.body.body" :data="this.data"
        :callback="this.callback" />
    </view>
    <view v-if="body.component === 'tabbar'">
      <tabbar :style="body.style" :bottom="this.body.bottom" :items="this.body.items" :data="this.data" :callback="this.callback" />
    </view>
  </view>
  <view v-else>
    <view v-for="item in this.body">
      <render :body="item" :data="this.data" :callback="this.callback" />
    </view>
  </view>
</template>

<script>
import Engine from '@/components/engine/engine.vue';
import Page from '@/components/page/page.vue';
import Navbar from '@/components/navbar/navbar.vue';
import Tabbar from '@/components/tabbar/tabbar.vue';

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