<template>
  <div id="app">
  <keep-alive exclude="detail,smallTags">
  <router-view></router-view>
  </keep-alive>
    <maintabbar v-if="!this.$route.meta.navShow"></maintabbar>
  </div>
</template>

<script>

import maintabbar from '@/components/content/Maintabbar/maintabbar'
export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
