<template>
<div>
    <NavBar class="nav-color"><div slot="center" >收藏夹</div></NavBar>
    <div class="recommand-box" v-for="item in recommandList" @click="toDetail(item)">
        <div class="recom-pic">
            <div class="recom-pic-box">
                <img :src="item.pic" alt="">
            </div>
            <div class="recom-time"></div>
        </div>
        <div class="recom-info" >
            <div class="recom-title">{{item.title}}</div>
            <div class="recom-up">
                <div class="up-icon"><img src="@/assets/img/video/upmaster.png" alt=""></div>
                {{item.name}}
                </div>
            <div class="recom-other">
                <div class="recom-times">
                    <div class="recom-oth-icon"><img src="@/assets/img/video/views.png" alt=""></div>
                    <div>{{item.view>=10000?(item.view/10000).toFixed(2):item.view}}万</div>
                </div>
                <div class="recomdanmu-count">
                    <div class="recom-oth-icon"><img src="@/assets/img/video/danmaku.png" alt=""></div>
                    <div>{{item.danmaku}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {getHomeBiliDetail} from '@/network/homeBili'
import NavBar from 'components/navbar/NavBar'
export default {
    name:'cart',
    components:{
        NavBar
    },
    data(){
        return{
            recommandList:[],
            upname:[],
            bvid:''
        }
    },
    created(){
        console.log(this.$store.state.cartList);
        this.recommandList = this.$store.state.cartList
    },
    methods:{
        toDetail(item){
             console.log(item);
            this.$router.push({
                path:'/detail/',
                query:{bvid:item.bvid,
                        aid:item.aid,
                        cid:item.cid
                }}).catch(err => err)
        }
    }
}
</script>

<style scoped>
    .nav-color{
        background-color: var(--bili-color);
        color: #fff;
    }
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