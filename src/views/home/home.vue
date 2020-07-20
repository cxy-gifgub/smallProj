<template>
  <div id="home">
      <NavBar class="nav-color"><div slot="center">首页</div></NavBar>
      <swiper :imgList="navList"></swiper>
      <recommend :recommendList="recommendList"></recommend>
      <catalogy :catalogyList="catalogyList"></catalogy>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import {getHomeListdata} from 'network/home'
import {getHomeBili} from 'network/homeBili'
import swiper from '@/components/common/swiper/swiper'
import recommend from '@/views/home/homeComponents/recommend/recommend'
import catalogy from '@/views/home/homeComponents/catalogy/catalogy'
export default {
    data(){
      return{
        navList:[],
        recommendList:[],
        cataList:[],
        catalogyList:[]
      }
    },
    components:{
      NavBar,
      swiper,
      recommend,
      catalogy
    },
    created(){
      getHomeListdata().then(res=>{
        console.log(res);
        this.navList = res.data.data.banner.list;
        this.recommendList = res.data.data.recommend.list;
        console.log(res);
      })
      getHomeBili().then(res=>{
        this.cataList = Object.values(res.data)
        console.log(this.cataList,'我是bili');
        for(let i=0;i<this.cataList.length-4;i++){
          this.catalogyList[i] = this.cataList[i][0]
        }
        this.catalogyList = Object.values(this.catalogyList)
      })
    }
}
</script>

<style>
  .nav-color{
    background-color: teal;
    color: #fff;
  }
</style>