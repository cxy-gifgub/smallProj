<template>
  <div id="home">
      <NavBar class="nav-color"><div slot="center">首页</div></NavBar>
      <scroll class="content-home" 
              ref="scroll"
              :pull-up-load="true"
              @pullingUp="loadMore">
        <swiper :imgList="navList"></swiper>
        <recommend :recommendList="recommendList"></recommend>
        <!-- <catalogy :catalogyList="catalogyList"></catalogy> -->
        <tabControl :titles="fenlei" 
                    class="tabState" 
                    @tabClick='tabClick' 
                    ref="tabControl"></tabControl>
        <goodlist :goodlist="goods[currentType].list"></goodlist>
      </scroll>
      <backtop @click.native="backtop"></backtop>
      <!-- @click.native可以监听组件的事件 -->
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
import scroll from '@/components/common/scroll/scroll'
import backtop from '@/components/content/backtop/backtop'
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
        currentType:'1',
        offsetTop:0,
        isFixed:false,
        saveY:0
      }
    },
    components:{
      NavBar,
      swiper,
      recommend,
      catalogy,
      tabControl,
      goodlist,
      scroll,
      backtop
    },
    created(){
      this.getHomeBanner()
      this.getHomeDedatil('1')
      this.getHomeDedatil('3')
      this.getHomeDedatil('5')
    },
    mounted(){
      console.log('挂载完了');
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
          console.log(res,'我是bili');
          if(res.data.code == -404){
            console.log("无了");
            this.$refs.scroll.scroll.finishPullUp()
            this.$message({
              showClose: true,
              message: '没了啊别拉了',
              type: 'error',
              center: true
            });
            return
          }
          this.goods[type].list.push(...res.data.data.archives);
          //...是拼接数组
          this.goods[type].page += 1;
          this.$refs.scroll.scroll.finishPullUp()
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
      },
      backtop(){
        console.log('回到顶部')
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
      loadMore(){
        console.log('加载更多吧!');
        this.getHomeDedatil(this.currentType)
      },
    },
    activated(){
      this.$refs.scroll.scroll.refresh()
      this.$refs.scroll.scroll.scrollTo(0,this.saveY)
      
    },
    deactivated(){
      this.saveY = this.$refs.scroll.scroll.y
    }
}
</script>

<style scoped>
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .nav-color{
    background-color: var(--bili-color);
    color: #fff;
  }
  #home{
    background-color: #eee;
    padding-bottom: 60px;
    height: 100vh;
  }
  .tabState{
    /* position: sticky; */
    /* top: 0; */
  }
  .content-home{
    height: calc(100% - 93px);
  }
  .is_fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>