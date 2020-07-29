<template>
  <div id="video-detail">
      <div class="video-img">
          <img class="video-pic" :src="videoList.pic" @click="addCart">
          <img class="video-icon" src="@/assets/img/video/play.png">
      </div>
      <div class="video-tab">
            <div class="tab-left">
                <div class="tab-left-item" v-for="(item,index) in videoInfoItem" :class="{active:index === currentIndex}" @click="itemclick(index)" :key="index">
                    <div class="tab-sm">{{item}}</div>
                </div>
            </div>
        <div class="tab-right"></div>
      </div>  
      <detailInfo v-if="recommand" :bvid="this.$route.query.bvid"></detailInfo>
      <detailRecommand v-if="recommand" :bvid="this.$route.query.bvid"></detailRecommand>
      <detailReply v-if="reply" :aid="this.videoList.aid"></detailReply>
  </div>
</template>

<script>
import {getHomeBiliDetail} from 'network/homeBili'
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
            detailInfo:[]
        }
    },
    created(){
        this.getDetail();
        console.log('我是挂载前');
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
            const product = {};
            product.bvid = this.videoList.bvid
            this.$store.commit('addCart',product)
        }
    },
    // beforeUpdate(){
    //     this.getDetail()
    // }
    // watch:{
    //     "$route.query.bvid": "getDetail"
    // }

}
</script>

<style>
#video-detail{
    padding-bottom: 49px;
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
        color: teal;
    }
    .active div{
        border-bottom: 2px solid teal;
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
        border: 2px solid teal;
        margin-right:0.5rem;
    }
    .UU-img img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
    .UU-name{
        color: teal;
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
        background-color: teal;
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
        color: teal;
    } */
</style>