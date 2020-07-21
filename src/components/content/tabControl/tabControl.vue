<template>
  <div class="tab-control-box">
      <div v-for="(item,index) in titles" class="tab-control-item" :class="{active:index === currentIndex}" @click="itemclick(index)" :key="index">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemclick(index){
            this.currentIndex = index;
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
    .tab-control-box{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 1rem;
        background-color: #fff;
        color: #505050;
    }
    .tab-control-item{
        flex: 1;
        height: 3rem;
        line-height: 3rem;
    }
    .tab-control-item span{
        padding: 0.5rem 0.8rem;
    }
    .active{
        color: teal;
    }
    .active span{
        border-bottom: 3px solid teal;
    }
</style>