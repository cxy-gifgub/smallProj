<template>
  <div>
        <NavBar class="nav-color">
            <div slot="left" @click="$router.go(-1)">
                <!-- <img class="back-icon" src="@/assets/img/video/bck.png"> -->
                <i class="el-icon-arrow-left"></i>
            </div>
            <div slot="center" >{{tagsInfo.name}}</div>
        </NavBar>
        <tabControlCopy :titles="tagsName" @tabClick='tabClick'></tabControlCopy>
        <videoList v-if="tagsContent['err']" :categoryDatail="tagsContent[currentType].list"></videoList>
  </div>
</template>
 
<script>
import NavBar from '@/components/navbar/NavBar'
import tabControlCopy from '@/components/content/tabControl/tabControlCopy'
import {getGategory} from '@/network/homeBili'
import categoryDatail from '@/views/category/categoryDatail'
import videoList from '@/components/content/videoList'
export default {
    name:"smallTags",
    components:{
        NavBar,
        tabControlCopy,
        categoryDatail,
        videoList,
    },
    data(){
        return{
            tagsInfo:{},
            tagList:[],
            activeName: '',
            tagsDatailList:[],
            categoryDatailList:[],
            tagsName:[],
            tagsContent:{
                'err':false
            },
            currentType:'',
        }
    },
    created(){
        //此处接收参数的时候，应该把参数从字符串转成对象，同理在传参数的时候也会要把对象转成字符串
        this.tagsInfo = JSON.parse(this.$route.query.data)
        this.tagList = this.tagsInfo.blocks
        this.currentType = this.tagList[0].name
        this.tagsContent[this.tagList[0].name] = {list:[]}
        this.getGategory(this.tagList[0].key,this.tagList[0].name);
        for(var i = 0;i<this.tagList.length;i++){
            this.tagsName.push(this.tagList[i].name)
        }
        for(let i = 1;i<this.tagList.length;i++){
            this.tagsContent[this.tagList[i].name] = {list:[]}
            this.getGategory(this.tagList[i].key,this.tagList[i].name);
        }
    },

    methods:{
        getGategory(rid,tagName){
            getGategory(rid).then(res=>{
                this.tagsContent[tagName].list.push(...res.data.data.archives)
                console.log(this.tagsContent,'this.tagsContent');
                //判断是否获取到了推荐的，只有获取了推荐列表才开始渲染
                if(tagName == '推荐'){
                    this.tagsContent['err'] = true
                }
            })
        },
        tabClick(tagName){
            console.log(tagName,'传回来的tagName');
            this.currentType = tagName
        }
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
    .back-icon{
        height: 1.5rem;
        width: 1.5rem;
    }
    .el-icon-arrow-left{
        font-size: 1.5rem;
        line-height: inherit;
    }
</style>