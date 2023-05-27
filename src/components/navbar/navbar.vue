<template>
  <nut-navbar :style="style" :title="this.title" :desc="this.desc">
    <render :body="this.body" :data="this.data" :callback="this.callback" />
  </nut-navbar>
</template>

<script>
import Engine from '@/components/render/render.vue';

export default {
  name: 'Navbar',
  props: {
    title: {
      type: [String],
      default: ''
    },
    desc: {
      type: [String],
      default: ''
    },
    body: {
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
