<template>
  <div>
            <div class="UUInfo-box">
          <div class="UUInfo-head">
              <div class="UU-img">
                  <img :src="userInfo.face" alt="">
              </div>
              <div class="UU-name">
                  <div>{{userInfo.name}}</div>
                  <div></div>
              </div>
          </div>
          <div class="follow-UU">
              <div class="follow-click">
                    关注
              </div>
              
          </div>
      </div>
      <div id="coll-box">
        <el-collapse>
            <el-collapse-item :title="detailInfo.title" name="1">
                <div class="video-desc" v-html="detailInfo.desc"></div>
            </el-collapse-item>
        </el-collapse>
      </div>
      <div id="video-otherinfo">
          <div class="play-times">
              <div class="v-oth-icon"><img src="@/assets/img/video/views.png" alt=""></div>
              <div>{{otherinfo.view>=10000?(otherinfo.view/10000).toFixed(2):otherinfo.view}}万</div>
          </div>
          <div class="danmu-count">
              <div class="v-oth-icon"><img src="@/assets/img/video/danmaku.png" alt=""></div>
              <div>{{otherinfo.danmaku}}</div>
          </div>
          <div class="video-bvid">{{detailInfo.bvid}}</div>
      </div>
      <div id="user-action">
          <div class="action-item">
              <div class="action-item-icon">
                  <img src="@/assets/img/video/zan.png" alt="">
              </div>
              <div class="action-count">
                  {{otherinfo.like>=10000?(otherinfo.like/10000).toFixed(1)+'万':otherinfo.like}}
              </div>
          </div>
          <div class="action-item">
              <div class="action-item-icon">
                  <img src="@/assets/img/video/cai.png" alt="">
              </div>
              <div class="action-count">
                  {{otherinfo.dislike>0?otherinfo.dislike:'不喜欢'}}
              </div>
          </div>
          <div class="action-item">
              <div class="action-item-icon">
                  <img src="@/assets/img/video/Bbi.png" alt="">
              </div>
              <div class="action-count">
                  {{otherinfo.coin>=10000?(otherinfo.coin/10000).toFixed(1)+'万':otherinfo.coin}}
              </div>
          </div>
          <div class="action-item">
              <div class="action-item-icon">
                  <img src="@/assets/img/video/shoucang.png" alt="">
              </div>
              <div class="action-count">
                  {{otherinfo.favorite>=10000?(otherinfo.favorite/10000).toFixed(1)+'万':otherinfo.favorite}}
              </div>
          </div>
          <div class="action-item">
              <div class="action-item-icon">
                  <img src="@/assets/img/video/fenxiang.png" alt="">
              </div>
              <div class="action-count">
                  {{otherinfo.share>=10000?(otherinfo.share/10000).toFixed(1)+'万':otherinfo.share}}
              </div>
          </div>
      </div>
      <div id="video-tags">
          <div class="tags-item" v-for="(item,index) in tagFinally" :class="{firstTag:index == 0}">{{item}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        detailInfo:Object
    },
    data(){
        return{
            userInfo:{
                face:'',
                name:''
            },
            otherinfo:{},
            tagFinally:[],
            tag:[]
        }
    },
    mounted(){
        console.log(this.detailInfo,'我再info');
        this.userInfo = this.detailInfo.owner;
        this.otherinfo =this.detailInfo.stat
        var indexE =this.detailInfo.dynamic.lastIndexOf("\#");  
                var indexB =this.detailInfo.dynamic.indexOf("\#");  
                this.tag = (this.detailInfo.dynamic).slice(indexB,indexE).split("#")
                //把视频tag切出来放到数组
                for(let i = 0,j = 0;i<this.tag.length;i++){
                    if(this.tag[i] != ''){
                        this.tagFinally[j] = this.tag[i]
                        j += 1;
                    }
                }
    }
}
</script>

<style>
    .UUInfo-box{
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
    }
</style>