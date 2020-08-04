<template>
  <div>
    <div class="user_block" v-for="item in userList">
      <div class="user_img">
        <img :src="item.upic">
      </div>
      <div class="user_info">
        <div class="user_name">{{item.uname}}</div>
        <div class="user_other_info">
          <span>{{item.fans>10000?item.fans/10000:item.fans}}粉丝</span>
          <span>{{item.videos}}个视频</span>
        </div>
        <div class="user_desc" v-if="item.official_verify.type == 1||item.official_verify.type == 0">
            {{item.official_verify.desc}}
        </div>
      </div>
      <div class="user_touch">
        <span>+关注</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        userList:Array
    }
}
</script>

<style scoped>
  .user_info{
      margin-left: 0.5rem;
      width: 55%;
      overflow: hidden;
  }
  .user_block{
    background-color: #fff;
    display: flex;
    padding: 1rem;
    position: relative;
    height: 4rem;
    align-items: center;
  }
  .user_block::after{
    position: absolute;
    content: '';
    height: 1px;
    width: 90%;
    background-color: #ddd;
    bottom: 0;
    left:1rem;
  }
  .user_name{
    margin: 0.2rem;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
  }
  .user_img img{
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
  .user_other_info span{
    color: #999;
    font-size: 12px;
    margin: .2rem .3rem;
  }
  .user_desc{
    color: #999;
    font-size: 12px;
    margin: .2rem .3rem;
  }
  .user_touch{
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .user_touch span{
    background-color: var(--bili-color);
    color: #fff;
    padding: .1rem 1rem;
    border-radius: 5px;
  }
</style>