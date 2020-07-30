<template>
  <div class="tab-control-box">
      <div v-for="(item,index) in titles" class="tab-control-item" :class="{active:index === currentIndex}" @click="itemclick(index,item)" :key="index">
          <span class="item-title">{{item}}</span>
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
        itemclick(index,item){
            this.currentIndex = index;
            this.$emit('tabClick',item)
        }
    }
}
</script>

<style scoped>
    .tab-control-box{
        display: flex;
        align-items: center;
        /* justify-content: center; */
        text-align: center;
        font-size: 1rem;
        background-color: #fff;
        color: #505050;
        overflow-x: scroll;
        
    }
    .tab-control-item{
        flex: 1;
        height: 3rem;
        line-height: 3rem;
    }
    .tab-control-item span{
        padding: 0.5rem 0.8rem;
    }
    .item-title{
        word-break: keep-all;
        white-space:nowrap;
    }
    .active{
        color: teal;
    }
    .active span{
        border-bottom: 3px solid teal;
    }
</style>