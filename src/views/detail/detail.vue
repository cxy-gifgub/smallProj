<template>
  <div id="video-detail">
      <div class="video-player" v-if="videoList.aid">
          <i class="back-icon el-icon-arrow-left" @click="back"></i>
          <iframe class="bili-player" :src="playerSrc" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
      </div>
      <!-- <div class="video-img">
          
          <img class="video-pic" :src="videoList.pic" @click="addCart">
          <img class="video-icon" src="@/assets/img/video/play.png">
      </div> -->
      <!-- <div class="video-tab">
            <div class="tab-left">
                <div class="tab-left-item" v-for="(item,index) in videoInfoItem" :class="{active:index === currentIndex}" @click="itemclick(index)" :key="index">
                    <div class="tab-sm">{{item}}</div>
                </div>
            </div>
        <div class="tab-right"></div>
      </div>   -->
      <!-- <detailInfo v-if="recommand" :bvid="this.$route.query.bvid"></detailInfo>
      <detailRecommand v-if="recommand" :bvid="this.$route.query.bvid" @newBvid="getNewBvid"></detailRecommand>
      <detailReply v-if="reply" :aid="this.videoList.aid"></detailReply> -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="简介" name="first">
            <detailInfo v-if="videoList.aid" :bvid="this.$route.query.bvid"></detailInfo>
            <detailRecommand v-if="videoList.aid" :bvid="this.$route.query.bvid" @newBvid="getNewBvid"></detailRecommand>
        </el-tab-pane>
        <el-tab-pane  name="second">
            <span slot="label">评论  {{replyAcount == 0?'':replyAcount}}</span>
            <detailReply v-if="videoList.aid" :aid="this.videoList.aid"></detailReply>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import {getHomeBiliDetail} from 'network/homeBili'
import {getVedioReply} from 'network/homeBili'
import detailRecommand from '@/views/detail/detailRecommand'
import detailReply from '@/views/detail/detailReply'
import detailInfo from '@/views/detail/detailInfo'
export default {
    name:"detail",
    components:{
        detailRecommand,
        detailReply,
        detailInfo
    },
    inject:['reload'],
    data(){
        return {
            recommand:true,
            reply:false,
            videoList:{},
            videoInfoItem:['简介','评论'],
            currentIndex:0,
            userInfo:{
                face:'',
                name:''
            },
            otherinfo:{},
            tag:[],
            tagFinally:[],
            detailInfo:[],
            newBvid:'',
            activeName: 'first',
            replyAcount:0,
            showVideo:true,
            rlen:history.length
        }
    },
    created(){
        this.getDetail();
        
        console.log('我创建');
    },
    computed:{
        playerSrc(){
            return `https://player.bilibili.com/player.html?aid=`+this.videoList.aid+`&bvid=`+this.videoList.bvid+`&cid=`+this.videoList.cid+`&page=1`
        }
    },
    methods:{
        getDetail(){
            getHomeBiliDetail(this.$route.query.bvid).then((res)=>{
                console.log(res);
                this.videoList = res.data.data
                this.userInfo = this.videoList.owner
                this.otherinfo = this.videoList.stat
                var indexE =this.videoList.dynamic.lastIndexOf("\#");  
                var indexB =this.videoList.dynamic.indexOf("\#");  
                this.tag = (this.videoList.dynamic).slice(indexB,indexE).split("#")
                //把视频tag切出来放到数组
                for(let i = 0,j = 0;i<this.tag.length;i++){
                    if(this.tag[i] != ''){
                        this.tagFinally[j] = this.tag[i]
                        j += 1;
                    }
                }
                if(this.videoList.aid){
                    this.getReply()
                }
            })
        },
        getReply(){
            getVedioReply(this.videoList.aid,1).then(res=>{
                console.log(res,'我是详情页里面的res');
                this.replyAcount = res.data.data.cursor.all_count
                console.log(this.replyAcount,'this.replyAcount');
            })
        },
        itemclick(index){
            this.currentIndex = index;
            index == 0?this.recommand = true:this.recommand = false;
            index == 1?this.reply = true:this.reply = false;
            this.$emit('tabClick',index)
        },
        GetChinese(strValue) {
            if (strValue !== null && strValue !== '') {
            const reg = /[\u4e00-\u9fa5]/g;
            return strValue.match(reg).join('');
            }
            return '';
        },
        addCart(){
            console.log(this.videoList);
            const product = {};
            product.bvid = this.videoList.bvid;
            this.$store.commit('addCart',product)
        },
        getNewBvid(bvid){
            console.log(bvid);
            this.reload()
        },
        back(){
            let len = this.rlen - history.length - 1;//-1是不进入iframe页面的下级页面直接退出的话，执行后退一步的操作
            this.reload()
            this.$router.go(len);
            
        }
    }

}
</script>

<style>
    .el-icon-arrow-left{
        font-size: 1.5rem;
        line-height: inherit;
    }
    .el-tabs__nav{
        margin-left: 2rem;
    }
    .el-tabs__active-bar{
        background-color: var(--bili-color);
    }
    .el-tabs__item.is-active{
        color: var(--bili-color);
    }
    .el-tabs__nav-wrap::after{
        background-color: #fff;
    }
    .el-tabs__item{
        color: #999;
    }
    .bili-player{
        width: 100%;
        height: 100%;
    }
    .video-player{
        width: 100%;
        height: 12rem;
        position: relative;
    }
    #video-detail{
        padding-bottom: 49px;
    }
    .back-icon{
        height: 1.5rem;
        width: 1.5rem;
        position: absolute;
        top: 0.5rem;
        left: 1rem;
        z-index: 1;
        opacity: 0.8;
    }
    .video-img{
        position: relative;
        width: 100%;
        height: 12rem;
        background-color: #fff;
        overflow: hidden;
    }
    .video-pic{
        position: absolute;
        top: 0;
        width: 100%;
    }
    .video-icon{
        position: absolute;
        height: 3.5rem;
        bottom: 1rem;
        right: 1rem;
        z-index: 1;
        opacity: 0.8;
    }
    .video-tab{
        display: flex;
    }
    .tab-left{
        height: 2rem;
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .tab-left{
        padding: 0.2rem 0.5rem;
        color: #999;
        font-size: 14px;
    }
    .tab-left-item{
        height: 100%;
    }
    .tab-sm{
        height: 100%;
        display: flex;
        align-items: center;
        font-weight: 550;
    }
    .active{
        color: var(--bili-color);
    }
    .active div{
        border-bottom: 2px solid var(--bili-color);
    }
    /* .UUInfo-box{
        height: 3rem;
        width: 100%;
        margin: .5rem auto;
        display: flex;
    }
    .UUInfo-head{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 1rem;
    }
    .UU-img{
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        border: 2px solid var(--bili-color);
        margin-right:0.5rem;
    }
    .UU-img img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
    .UU-name{
        color: var(--bili-color);
        font-size: 14px;
        font-weight: 550;
    }
    .follow-UU{
        display: flex;
        width: 50%;
        justify-content: flex-end;
        align-items: center;
    }
    .follow-click{
        margin-right: 1rem;
        background-color: var(--bili-color);
        padding: 0.2rem 1rem;
        color: #fff;
        border-radius: 5px;
    }
    #coll-box{
        margin: 0rem 1rem;
        
    }
    .el-collapse-item__header{
        color: #111;
        font-weight: 550;
        font-size: 1rem;
        border: none;
        line-height: normal;
    }
    .el-collapse-item__wrap{
        border: none;
    }
    .coll-box,.el-collapse{
        border: none;
    }
    #video-otherinfo{
        margin: 0 1rem;
        display: flex;
        color: #999;
        font-size: 14px;
    }
    .play-times,.danmu-count{
        display: flex;
        margin: 0 0.5rem;
        align-items: center;

    }
    .v-oth-icon img{
        height: 1.2rem;
        margin: 0 0.3rem;
        display: flex;
        align-items: center;
    }
    .video-bvid{
        margin: 0 0.5rem;
        align-items: center;
        display: flex;
    }
    #user-action{
        margin: 1.3rem 1rem;
        display: flex;
    }
    .action-item{
        display: flex;
        min-width: 20%;
        align-items: center;
        flex-direction: column;
    }
    .action-item-icon img{
        height: 1.5rem;
    }
    .action-count{
        color: #999;
        font-size: 12px;
    }
    .video-desc{
        color: #999;
        font-size: 12px;
        white-space:pre-wrap;
    }
    #video-tags{
        display: flex;
        padding: 0.5rem 1rem;
        border-top: 1px solid rgb(240, 240, 240);
    }
    .tags-item{
        margin: 0 0.3rem;
        background-color: rgb(244, 244, 244);
        color: #111;
        font-size: 14px;
        padding: 0.2rem 0.8rem;
        border-radius: 20px;
        align-items: center;
        display: flex;
    }
    .firstTag{
        color: var(--bili-color);
    } */
</style>