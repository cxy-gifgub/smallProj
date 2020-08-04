<template>
  <div>
      <div class="bangumi-item" v-for="item in bangumiList">
          <div class="bangumi-block">
              <div class="bangumi-img">
                  <img :src="item.cover" alt="">
              </div>
              <div class="bangumi-info">
                  <div class="bangumi-title" v-html="item.title"></div>
                  <div class="bangumi-tag1">{{item.areas}}</div>
                  <div class="bangumi-tag2">{{item.styles}}</div>
                  <div class="bangumi-action">
                    <span class="play-now">立即观看</span>
                    <span class="carry-bangumi">追番</span>
                  </div>
              </div>
              <div class="bangumi-score" v-if="item.media_score">
                  {{item.media_score.score}}
                  <div class="user_count">{{item.media_score.user_count>10000?(item.media_score.user_count/10000).toFixed(1)+'万':item.media_score.user_count}}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        bangumiList:Array
    }
}
</script>

<style scoped>
    *{
        font-family: PingFangSC-Regular;
    }
    .bangumi-item{
        height: 10rem;
        background-color: #fff;
    }
    .bangumi-block{
        display: flex;
        padding: 1rem;
        position: relative;
    }
    .bangumi-img img{
        height: 7rem;
        border-radius: 5px;
    }
    .bangumi-info{
        margin: 0 0.5rem;
        width: 12rem;
        position: relative;
    }
    .bangumi-title{
        font-size: 16px;
    }
    .bangumi-tag1,.bangumi-tag2{
        font-size: 14px;
        color: #999;
    }
    .bangumi-action{
        position: absolute;
        bottom: 0.4rem;
    }
    .play-now{
        padding: 0.2rem 0.3rem;
        font-size: 14px;
        border: 2px solid var(--bili-color);
        border-radius: 5px;
        color: var(--bili-color);
        margin-right: 0.5rem;
    }
    .carry-bangumi{
        color: #fff;
        border-radius: 5px;
        background-color: var(--bili-color);
        border: 2px solid var(--bili-color);
        padding: 0.2rem 0.3rem;
        font-size: 14px;
    }
    .bangumi-score{
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: rgb(242,171,71);
        font-size: 20px;
        font-weight: 550;
        text-align: center;
    }
    .user_count{
        font-size: 12px;
        color: #999;
        font-weight:normal;
    }
</style>