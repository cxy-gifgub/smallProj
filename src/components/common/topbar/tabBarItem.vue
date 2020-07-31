<template>
  <div class="tab-bar-item" @click="jump">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <div :class="{'active':isActive}">
        <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:"tabBarItem",
    props:{
      path:String
    },
    methods:{
      jump(){
        this.$router.push(this.path).catch(err => err),
        console.log("我是path",this.path);
        
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    }
}
</script>

<style>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
      height: 50%;
      vertical-align: middle;
      margin-bottom: 2px;
  }
  .active{
    color: var(--bili-color);
  }
</style>