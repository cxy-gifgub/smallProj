<template>
  <div>
        <NavBar><div slot="center" class="nav-color">{{tagsInfo.name}}</div></NavBar>
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
            currentType:''
        }
    },
    created(){
        console.log(this.tagsContent['err'],'状态');
        console.log(this.$route.query.blocks,'this.$route.query.blocks');
        this.tagList = this.$route.query.blocks
        console.log(this.tagList,'this.tagList');
        this.currentType = this.tagList[0].name
        console.log(this.currentType);
        console.log(this.$route.query,'this.$route.query');
        for(var i = 0;i<this.tagList.length;i++){
            this.tagsName.push(this.tagList[i].name)
        }
        console.log(this.tagsName,'tagList');
        this.tagsInfo = this.$route.query;
        for(let i = 0;i<this.tagList.length;i++){
            
            this.tagsContent[this.tagList[i].name] = {list:[]}
            this.getGategory(this.tagList[i].key,this.tagList[i].name);
            
            // if(i == this.tagList.length){
            //     this.tagsContent['err'] = true
            // }
        }
        console.log('创建完了');
    },
    methods:{
        getGategory(rid,tagName){
            getGategory(rid).then(res=>{
                // this.categoryDatailList = res.data.data.archives
                this.tagsContent[tagName].list.push(...res.data.data.archives)
                console.log(this.tagsContent,'this.tagsContent');
                this.tagsContent['err'] = true
            })
        },
        tabClick(tagName){
            console.log(tagName,'穿回来的tagName');
            this.currentType = tagName
        }
    },
    destroyed(){
        console.log('摧毁了');
    }
}
</script>

<style scoped>
    .nav-color{
        color: var(--bili-color);
    }
</style>