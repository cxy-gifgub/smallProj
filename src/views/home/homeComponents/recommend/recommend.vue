<template>
  <div>
      <div class="recommendBox">
          <div class="recommendItem" v-for="item in recommendList" :key="item.sort">
              <a :href="item.link">
                <div class="item-img">
                    <img :src="item.image">
                </div>
                <div class="item-title">{{item.title}}</div>
              </a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommendList:Array
    }
}
</script>

<style>
    .recommendBox{
        display: flex;
        align-items: center;
        height: 6rem;
        padding-top: 0.5rem;
        background-color: #fff;
    }
    .recommendItem{
        display: flex;
        flex: 1;
        background-color: #fff;
        height: 100%;
        flex-direction:column;
        align-items: center;
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
    }
</style>