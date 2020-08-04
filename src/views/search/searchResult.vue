<template>
  <div id="search_page">
      <div id="search-block">
        <div class="search-input">
            <i class="el-icon-search" style="font-size:12px;color:rgb(191, 191, 191);"></i>
            <input type="text" class="input-search" @keyup.enter="search" v-model="inputSearch">
        </div>
        <div class="cancel" @click="$router.go(-1)">
            取消
        </div>
    </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="综合" name="video">
            <allVideoList v-if="videoList" :videoList="videoList"></allVideoList>
        </el-tab-pane>
        <el-tab-pane name="media_bangumi">
            <span slot="label">番剧({{tagsState.media_bangumi}})</span>
            <searchBangumi :bangumiList="searchResult['media_bangumi']"></searchBangumi>
        </el-tab-pane>
        <el-tab-pane name="live_room">
            <span slot="label">直播({{tagsState.live_room}})</span>
            <searchLive :liveRoom="searchResult['live_room']"></searchLive>
        </el-tab-pane>
        <el-tab-pane name="bili_user">
            <span slot="label">用户({{tagsState.bili_user>100?99+'+':tagsState.bili_user}})</span>
            <searchUser :userList="searchResult['bili_user']"></searchUser>
        </el-tab-pane>
        <el-tab-pane  name="media_ft">
            <span slot="label">影视({{tagsState.media_ft>1000?999+'+':tagsState.media_ft}})</span>
            <searchBangumi :bangumiList="searchResult['media_ft']"></searchBangumi>
        </el-tab-pane>
        <el-tab-pane name="article">
            <span slot="label">专栏({{tagsState.article>900?999+'+':tagsState.article}})</span>
            <searchArticle :articleList="searchResult['article']"></searchArticle>
        </el-tab-pane>
      </el-tabs>
      
  </div>
</template>

<script>
import {getSearch} from 'network/homeBili'
import {getSearchAll} from 'network/homeBili'
import allVideoList from '@/components/content/videoList/allVideoList'
import searchBangumi from '@/views/search/searchBangumi'
import searchUser from '@/views/search/searchUser'
import searchLive from '@/views/search/searchLive'
import searchArticle from '@/views/search/searchArticle'
export default {
    name:"search",
    components:{
        allVideoList,
        searchBangumi,
        searchUser,
        searchLive,
        searchArticle
    },
    data(){
        return{
            videoList:[],
            tagsState:{},
            activeName: 'video',
            inputSearch:'',
            searchResult:{
                'video':[],
                'media_bangumi':[],
                'media_ft':[],
                'live_room':[],
                'bili_user':[],
                'article':[],
            }
        }
    },
    inject:['reload'],
    created(){
        console.log(this.$route.query.keyword);
        this.getSearch(this.$route.query.keyword)
    },
    methods:{
        getSearch(keyword){
            getSearch(keyword).then(res=>{
                console.log(res);
                this.videoList = res.data.data.result[8].data;
                this.tagsState = res.data.data.top_tlist
                console.log(this.videoList);
            })
        },
        getSearchAll(keyword,search_type,page){
            getSearchAll(keyword,search_type,page).then(res=>{
                console.log(res);
                this.searchResult[search_type] = res.data.data.result;
                // this.searchResult[search_type].push(...res.data.data.result);
                console.log(this.searchResult[search_type]);
                console.log(search_type,'这边是');
            })
        },
        search(keyword){
            console.log(this.inputSearch);
            this.$router.replace({
                path:'/search/',
                query:{keyword:this.inputSearch}
                }).catch(err => err)
            this.reload()
        },
        handleClick(tab, event) {
        console.log(tab, event);
        this.getSearchAll(this.$route.query.keyword,tab.name,1)
      }
    }
}
</script>

<style scoped>
    /* html{
        background-color: rgb(244,244,244);
    } */
    #search_page>>>.el-tabs__active-bar{
        background-color: var(--bili-color);
    }
    #search_page>>>.el-tabs__item.is-active{
        color: var(--bili-color);
    }
    #search_page>>>.el-tabs__nav-wrap::after{
        background-color: #fff;
    }
    #search_page>>>.el-tabs__item{
        color: #999;
    }
    *{
        font-family: PingFangSC-Regular;
    }
    .cancel{
        color: #999;
        font-size: 14px;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .search-input{
        background-color: #eee;
        width: 80%;
        border-radius: 20px;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
    }
    #search-block{
        height: 1.8rem;
        display: flex;
        margin: 0.5rem 0;
        padding: 0 0.5rem;
    }
        .input-search{
        background-color: #eee;
        border: none;
        border-radius: 20px;
        font-size: 14px;
        color: #999;
        margin: 0 0.5rem;
        outline:none;
    }
</style>