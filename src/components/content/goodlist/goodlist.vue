<template>
  <div>
      <div class="list-box">
          <div class="list-item" v-for="item in goodlist" :key="item.bvid" @click="toDetail(item.bvid)">
              <div class="good-item-img"><img :src="item.pic" alt=""></div>
              <div class="good-title">{{item.title}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goodlist:Array
    },
    methods:{
        toDetail(bvid){
            console.log(bvid,'我是bvid');
            this.$router.push({
                path:'/detail/',
                query:{bvid:bvid}
                }).catch(err => err)
        }
    },
}
</script>

<style>
    .list-box{
        width: 100%;
        display: flex;
        background-color: #fff;
        flex-wrap: wrap;
        align-items:center;
    }
    .list-item{
        flex: 1;
        min-width: 40%;
        padding: 0.1rem;
        margin: 0.2rem;
        height: 10rem;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 3.2vw;
        color: #212121;
        letter-spacing: 2px;
    }
    .good-item-img{
        width: 100%;
    }
    .good-title{
        flex: 1;
        max-height: 2rem;
        overflow: hidden;
    }
    .good-item-img img{
        width: 100%;
        height: 7rem;
        border-radius: 3px;
    }
</style>