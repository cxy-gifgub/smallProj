<template>
  <div id="videoList">
      <div class="video-item-small" v-for="item in categoryDatail">
          <div class="video-item-img">
              <img :src="item.pic">
          </div>
          <div class="video-item-title">
              {{item.title}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        categoryDatail:Array
    }
}
</script>

<style>
    #videoList{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .video-item-small{
        min-width: 40%;
        margin: 0.5rem 0.3rem;
        flex: 1;
    }
    .video-item-img{
        width: 100%;
        height: 6rem;
        overflow: hidden;
    }
    .video-item-img img{
        width: 100%;
        border-radius: 5px;
    }
    .video-item-title{
        height: 2.5rem;
        color: #111111;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>