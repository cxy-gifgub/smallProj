<template>
  <div>
      <div class="list-box">
          <div class="list-item" v-for="(item,index) in goodlist" :key="item.bvid" @click="toDetail(index)">
              <div class="good-item-img">
                  <img :src="item.pic" alt="">
                  <div class="video-info">
                    <div v-if="item.stat"><img class="small-icon" src="@/assets/img/video/views-f.png" >{{item.stat.view>=10000?(item.stat.view/10000).toFixed(2):item.stat.view}}万</div>
                    <!-- <div v-if="item.stat"><img class="small-icon" src="@/assets/img/video/danmaku-f.png" >{{item.stat.danmaku>=10000?(item.stat.danmaku/10000).toFixed(2):item.stat.danmaku}}万</div> -->
                    <div class="video-time">{{(item.duration/60).toFixed(2)}}</div>
                  </div>
              </div>
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
        toDetail(index){
            console.log(this.goodlist[index]);
            this.$router.push({
                path:'/detail/',
                query:{bvid:this.goodlist[index].bvid,
                        aid:this.goodlist[index].aid,
                        cid:this.goodlist[index].cid
                }}).catch(err => err)
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
        position: relative;
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
    .video-info{
        position: absolute;
        bottom:0.2rem;
        display: flex;
        align-content: center;
        color: #fff;
        width: 100%;
        justify-content:space-between;
        height: 1rem;
        font-size: 12px;
    }
    .video-info div{
        white-space:nowrap;
        display: flex;
        align-items: center;
    }
    .video-info .small-icon{
        height: 1rem;
        width: 1rem;
    }
    .good-item-img{
        width: 100%;
        position: relative;
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