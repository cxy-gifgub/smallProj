<template>
  <div id="home">
    <scroll class="content-home" 
              ref="scroll"
              :pull-up-load="true"
              @pullingUp="loadMore">
        <div id="search-block">
            <img class="user_img" src="@/assets/img/bilibili.png">
            <div class="search-input">
                <i class="el-icon-search" style="font-size:12px;color:rgb(191, 191, 191);"></i>
                <input type="text" class="input-search"  v-model="inputSearch" @keyup.enter="searchbili">
            </div>
            <div class="other_icon" @click="searchbili">搜索</div>
        </div>
      <!-- <NavBar class="nav-color"><div slot="center">首页</div></NavBar> -->
      
        <swiper :imgList="swiperList"></swiper>
        <!-- <recommend :recommendList="recommendList"></recommend> -->
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
import {getSearch} from 'network/homeBili'

import swiper from '@/components/common/swiper/swiper'
import recommend from '@/views/home/homeComponents/recommend/recommend'
import catalogy from '@/views/home/homeComponents/catalogy/catalogy'
import tabControl from '@/components/content/tabControl/tabControl'
import goodlist from '@/components/content/goodlist/goodlist'
import scroll from '@/components/common/scroll/scroll'
import backtop from '@/components/content/backtop/backtop'
import search from '@/components/common/search/search'
export default {
    data(){
      return{
        navList:[],
        swiperList:[require('@/assets/img/swip1.png'),require('@/assets/img/swip2.png')],
        recommendList:[],
        cataList:[],
        catalogyList:[],
        fenlei:['推荐','热门','精选'],
        goodlist:[],
        goods:{
          '1':{page:1,list:[]},
          '3':{page:1,list:[]},
          '5':{page:1,list:[]}
        },
        currentType:'1',
        offsetTop:0,
        isFixed:false,
        saveY:0,
        input: '',
        searchPage:1,
        inputSearch:''
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
      backtop,
      search
    },
    created(){
      console.log(this.swiperList);
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
      // clickToSearch(){
      //   this.$router.push({
      //     path:'/search/',
      //     query:{keyword:this.}}).catch(err => err)
      // },
      searchbili(keyword){
        console.log(this.inputSearch,'inputSearch');
        this.$router.push({
          path:'/search/',
          query:{keyword:this.inputSearch}}).catch(err => err)
      }
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
  .other_icon{
    color: #999;
    margin: 0 1rem;
    display: flex;
    align-items: center;
  }
  .other_icon img{
    margin-left: auto;
    height: 100%;
  }
  .user_img{
    height: 100%;
    margin-right: 1rem;
  }
  .nav-color{
    background-color: var(--bili-color);
    color: #fff;
  }
  #home{
    background-color: #fff;
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
  #search-block{
        height: 1.8rem;
        display: flex;
        margin: 0.5rem 0;
        padding: 0 0.5rem;
        background-color: #fff;
    }
    .block_left,.other_icon1,.other_icon2{
        height: 100%;
    }
    .search-input{
        width: 65%;
        background-color: #eee;
        border-radius: 20px;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
    }
    .input-search{
        width: 100%;
        background-color: #eee;
        border: none;
        border-radius: 20px;
        font-size: 14px;
        color: #999;
        margin: 0 0.5rem;
        outline:none;
    }
</style>