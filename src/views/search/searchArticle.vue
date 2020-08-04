<template>
  <div>
      <div class="article_item" v-for="item in articleList">
          <div class="art_title" v-html="item.title"></div>
          <div class="art_img" v-if="item.image_urls.length == 1" >
              <img v-for="img in item.image_urls" :src="img">
          </div>
          <div class="art_img3" v-if="item.image_urls.length == 3" >
              <div v-for="img in item.image_urls">
                <img  :src="img">
              </div>
          </div>
          <div class="art-info">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        articleList:Array
    }
}
</script>

<style>
    .article_item{
        height: 10rem;
        margin: 0.8rem 0.5rem;
        box-shadow: 1px 1px 1px #ddd;
        border-radius: 5px;
        background-color: #fff;
    }
    .art_title{
        padding: 0.5rem;
        height: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .art_img{
        height: 6rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
    }
    .art_img img{
        min-width: 33%;
        height: 100%;
        flex: 1;
    }
    .art_img3{
        height: 6rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
    }
    .art_img3 div{
        min-width: 33%;
        height: 100%;
        flex: 1;
        overflow: hidden;
    }
    .art_img3 img{
        width: 100%;
        min-height: 100%;
    }
</style>