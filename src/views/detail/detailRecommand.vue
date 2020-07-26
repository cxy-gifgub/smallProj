<template>
<div>
    <div class="recommand-box" v-for="item in recommandList">
        <div class="recom-pic">
            <div class="recom-pic-box">
                <img :src="item.pic" alt="">
            </div>
            <div class="recom-time"></div>
        </div>
        <div class="recom-info" >
            <div class="recom-title">{{item.title}}</div>
            <div class="recom-up" v-if="item.owner">
                <div class="up-icon"><img src="@/assets/img/video/upmaster.png" alt=""></div>
                {{item.owner.name}}
                </div>
            <div class="recom-other" v-if="item.stat">
                <div class="recom-times">
                    <div class="recom-oth-icon"><img src="@/assets/img/video/views.png" alt=""></div>
                    <div>{{item.stat.view>=10000?(item.stat.view/10000).toFixed(2):item.stat.view}}万</div>
                </div>
                <div class="recomdanmu-count">
                    <div class="recom-oth-icon"><img src="@/assets/img/video/danmaku.png" alt=""></div>
                    <div>{{item.stat.danmaku}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {getDetailVedioRecommand} from '@/network/homeBili'
export default {
    name:"detailR",
    props:{
        bvid:String
    },
    data(){
        return{
            recommandList:[],
            upname:[]
        }
    },
    created(){
        console.log(this.bvid);
        getDetailVedioRecommand(this.bvid).then((res)=>{
            console.log(res);
            this.recommandList = res.data.data;
            console.log(this.recommandList );
            // this.upname = this.recommandList.owner.name
        })
    }
}
</script>

<style>
    .recommand-box{
        display: flex;
        padding: 0.5rem 1rem;
        position: relative;
    }
    .recommand-box::before{
        position: absolute;
        content: '';
        background-color: rgb(221, 221, 221);
        width: 95%;
        height: 1px;
        top: 0;
        left: 0.5rem;
    }
    .recom-info{
        width: 60%;
        padding: 0 0.5rem;
    }
    .recom-pic{
        width: 40%;
    }
    .recom-pic{
        height: 5rem;
        overflow: hidden;
    }
    .recom-pic-box img{
        width: 100%;
        border-radius: 5px;
    }
    .recom-title{
        height: 2.5rem;
        font-size: 14px;
        overflow: hidden;
        color: #333;
    }
    .recom-up{
        color: #999;
        font-size: 12px;
        display: flex;
        align-items: center;
    }
    .recom-other{
        display: flex;
    }
    .recom-times,.recomdanmu-count{
        display: flex;
        align-items: center;
        color: #999;
        font-size: 12px;
        margin-right:0.6rem;
    }
    .recom-oth-icon{
        height: 1.2rem;
    }
    .recom-oth-icon img{
        height: 100%;
    }
    .up-icon{
        height: 1.2rem;
        margin-right: 0.3rem;
    }
    .up-icon img{
        height: 100%;
    }
</style>