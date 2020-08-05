<template>
  <div id="live_block">
      <div class="live_room" v-for="item in liveRoom" :key="item.uid">
          <!-- <a :href="liveRul(item.uid)"> -->
            <div class="live_img">
                <img :src="item.cover" >
                <div class="live_user">
                    <div class="live_username">{{item.uname}}</div>
                    <div class="live_attention">{{item.attentions>=10000?(item.attentions/10000).toFixed(2)+'万':item.attentions}}</div>
                </div>
            </div>
            <div class="live_info">
                <div class="live_title" v-html="item.title"></div>
                <div class="live_tag">{{item.cate_name}}</div>
            </div>
          <!-- </a> -->
      </div>
  </div>
</template>

<script>
export default {
    props:{
        liveRoom:Array
    }
    // methods:{
    //     liveRul(uid){
    //         return `https://api.live.bilibili.com/bili/living_v2/`+uid+`?callback=liveXhrDone`
    //     }
    // }
}
</script>

<style>
    #live_block{
        display: flex;
        flex-wrap: wrap;
    }
    .live_room{
        width: 45%;
        margin: 0.5rem;
        border-radius: 10px;
        box-shadow: 1px 1px 1px #ddd;
        background-color: #fff;
    }
    .live_img{
        height: 6rem;
        position: relative;
        overflow: hidden;
    }
    .live_user{
        position: absolute;
        bottom: 0.2rem;
        display: flex;
        padding: 0 0.2rem;
        justify-content: space-between;
        width: 100%;
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
    }
    .live_img img{
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .live_info{
        height: 2.5rem;
        padding: 0.5rem;
    }
    .live_username{
        width: 60%;
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 0.5rem;
    }
    .live_attention{
        margin-right: 0.5rem;
    }
    .live_title{
        font-size: 14px;
        white-space:nowrap;
        word-break: keep-all;
        overflow: hidden;
        text-overflow:ellipsis;
        margin-bottom: 0.5rem;
    }
    .live_tag{
        font-size: 12px;
        color: #999;
    }
</style>