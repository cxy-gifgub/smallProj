<template>
  <div id="catalogy">
      <div class="recommendBox1">
          <div class="recommendItem" v-for="item in catalogyList" :key="item.aid">
                <div class="item-img">
                    <img :src="item.pic">
                </div>
                <div class="item-title">{{item.tname}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        catalogyList:Array
    },
    created(){
        console.log(typeof(this.catalogyList),'我是cata组件了');
    }
}
</script>

<style>
    #catalogy{
        margin-top:1rem;
        padding: 0.5rem 0;
        background-color: #fff;
    }
    .recommendBox1{
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        flex-wrap: wrap;
        
    }
    .recommendItem{
        display: flex;
        flex: 1;
        background-color: #fff;
        height: 100%;
        flex-direction:column;
        align-items: center;
        max-width: 25%;
        min-width: 25%;
    }
    .item-img{
        height: 4.5rem;
        width: 4.5rem;
        border-radius: 50%;
    }
    .item-img img{
        height: 4.5rem;
        width: 4.5rem;
        border-radius: 50%;
    }
    .item-title{
        color: #444;
        margin-top: 0.3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>