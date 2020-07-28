<template>
  <div>
        <NavBar><div slot="center" class="nav-color">{{tagsInfo.name}}</div></NavBar>
        <el-tabs v-model="activeName" @tab-click="handleClick" >
            <el-tab-pane v-for="(item,index) in tagList" 
            :label="item.name" 
            :name="item.name" 
            :key="item.key">
                <videoList :categoryDatail="categoryDatailList"></videoList>
            </el-tab-pane>
        </el-tabs>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import tabControl from '@/components/content/tabControl/tabControl'
import {getGategory} from '@/network/homeBili'
import categoryDatail from '@/views/category/categoryDatail'
import videoList from '@/components/content/videoList'
export default {
    name:"smallTags",
    components:{
        NavBar,
        tabControl,
        categoryDatail,
        videoList
    },
    data(){
        return{
            tagsInfo:{},
            tagList:[],
            activeName: '',
            tagsDatailList:[],
            categoryDatailList:[]
        }
    },
    created(){
        this.tagList = this.$route.query.blocks
        this.activeName = this.tagList[0].name
        this.tagsInfo = this.$route.query;
        this.getGategory(this.tagList[0].key)
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab.$options._parentVnode.key, event);
            this.getGategory(tab.$options._parentVnode.key)
        },
        getGategory(rid){
            getGategory(rid).then(res=>{
                this.categoryDatailList = res.data.data.archives
                console.log(res,'res');
            })
        }
    }
}
</script>

<style scoped>
    .nav-color{
        color: var(--bili-color);
    }
</style>