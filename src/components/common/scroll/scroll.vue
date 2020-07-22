<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            scroll:true
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:3,
        click:true,
        pullUpLoad:this.pullUpLoad
        })

        this.scroll.on('scroll',(position)=>{
            // console.log(position);
        })
        this.scroll.scrollTo(0,0);
        this.scroll.on('pullingUp',()=>{
            // console.log('上拉加载');
            this.$emit('pullingUp')
        })
    }
}
</script>

<style>

</style>