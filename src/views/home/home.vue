<template>
  <div id="home">
      <NavBar class="nav-color"><div slot="center">首页</div></NavBar>
      <swiper :imgList="navList"></swiper>
      <recommend :recommendList="recommendList"></recommend>
      <!-- <catalogy :catalogyList="catalogyList"></catalogy> -->
      <tabControl :titles="fenlei" class="tabState" @tabClick='tabClick'></tabControl>
      <goodlist :goodlist="goods[currentType].list"></goodlist>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import {getHomeListdata} from 'network/home'
import {getHomeBili} from 'network/homeBili'

import swiper from '@/components/common/swiper/swiper'
import recommend from '@/views/home/homeComponents/recommend/recommend'
import catalogy from '@/views/home/homeComponents/catalogy/catalogy'
import tabControl from '@/components/content/tabControl/tabControl'
import goodlist from '@/components/content/goodlist/goodlist'
export default {
    data(){
      return{
        navList:[],
        recommendList:[],
        cataList:[],
        catalogyList:[],
        fenlei:['流行','新款','精选'],
        goodlist:[],
        goods:{
          '1':{page:1,list:[]},
          '3':{page:1,list:[]},
          '5':{page:1,list:[]}
        },
        currentType:'1'
      }
    },
    components:{
      NavBar,
      swiper,
      recommend,
      catalogy,
      tabControl,
      goodlist
    },
    created(){
      this.getHomeBanner()
      this.getHomeDedatil('1')
      this.getHomeDedatil('3')
      this.getHomeDedatil('5')
    },
    methods:{
      getHomeBanner(){
        getHomeListdata().then(res=>{
          console.log(res);
          this.navList = res.data.data.banner.list;
          this.recommendList = res.data.data.recommend.list;
          console.log(res);
        })
      }, 
      getHomeDedatil(type){
        const page = this.goods[type].page + 1;
        console.log(this.goods[type].page,'page');
        getHomeBili(type,page).then(res=>{
          console.log(res.data.data.archives,'我是bili');
          this.goods[type].list.push(...res.data.data.archives);
          this.goods[type].page += 1;
        })
      },

      tabClick(index){
        console.log(index,'传回来的');
        switch (index) {
          case 0:
            this.currentType = '1'
            break;
          case 1:
            this.currentType = '3'
            break;
          case 2:
            this.currentType = '5'
            break;
        }
      }
    }
}
</script>

<style>
  .nav-color{
    background-color: teal;
    color: #fff;
  }
  #home{
    background-color: #eee;
    padding-bottom: 60px;
  }
  .tabState{
    position: sticky;
    top: 0;
  }
</style>