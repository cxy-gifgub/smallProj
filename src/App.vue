<template>
  <div id="app">
  <keep-alive exclude="detail,smallTags,cart,search">
  <router-view v-if="isRouterAlive"></router-view>
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
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(()=>{
        this.isRouterAlive = true;
      })
    }
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  #app{
    height: 100%;
    width: 100%;
  }
</style>
