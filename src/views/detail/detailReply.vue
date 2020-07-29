<template>
  <div>
      <div class="top-reply-box">
          <div class="top-reply-box-left">热门评论</div>
          <div class="top-reply-box-right">按热度</div>
      </div>
      <div class="reply-item" v-for="item in totalReplyList">
          <div class="user-img"><img v-if="item.member.avatar" :src="item.member.avatar" alt=""></div>
          <div class="user-reply">
              <div class="reply-person">
                  <div class="person-name">{{item.member.uname}}</div>
                  <div class="reply-time">7-22</div>
              </div>
              <div class="reply-content">{{item.content.message}}</div>
              <div class="reply-reply-content" v-if="item.replies">
                <div class="re-re-sli" v-for="item in item.replies">
                    <span class="re-re-username">{{item.member.uname}}：</span>
                    <span class="re-re-content">{{item.content.message}}</span>
                    
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {getVedioReply} from 'network/homeBili'
export default {
    props:{
        aid:Number,
        
    },
    data(){
        return{
            totalReplyList:[],
            isLoad:false
        }
    },
    created(){
        console.log(this.aid,'aid');
        if(!this.isLoad){
            this.getReply()
            this.isLoad = !this.isLoad
        }
    },
    methods:{
        getReply(){
            getVedioReply(this.aid,1).then(res=>{
                console.log(res,'我是评论');
                this.totalReplyList = res.data.data.replies
                console.log(this.totalReplyList,'存到了数组');
            })
        }
    },
    destroyed(){
        console.log('我被摧毁了现在');
    }

}
</script>

<style scoped>
    *{
        font-family: PingFangSC-Regular;
    }
    .top-reply-box{
        display: flex;
        justify-content: space-between;
        height: 2rem;
        font-size: 14px;
        color: #111;
    }
    .top-reply-box-left{
        margin: 0 0.5rem;
        align-items: center;
        display: flex;
    }
    .top-reply-box-right{
        display: flex;
        align-items: center;
        margin: 0 1rem;
        color: rgb(185,185,185);
    }
    .reply-item{
        display: flex;
        padding: 1rem 1rem;
        border-bottom: 1px solid #f3f3f3;
    }
    .user-img img{
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
    }
    .user-reply{
        margin-left: 1rem;
        flex:1;
    }
    .person-name{
        color: #757575;
        margin-bottom: 0.5rem;
        font-size: 14px;
    }
    .reply-time{
        color: #757575;
        font-size: 12px;
    }
    .reply-person{
        height: 3rem;
    }
    .reply-content{
        font-size: 14px;
        color: #212121;
    }
    .reply-reply-content{
        background-color: #f4f4f4;
        border-radius: 5px;
        padding: 0.5rem;
        font-size: 14px;
    }
    .re-re-username{
        color: #5090cc;
    }
    .re-re-sli{
        margin: 0.2rem 0;
    }
    .re-re-content{
        width: 100%;
        word-break:break-all;
    }
</style>