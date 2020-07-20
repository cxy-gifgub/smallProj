<template>
<div>
    <div class="block">
        <el-carousel height="150px" autoplay>
            <el-carousel-item v-for="item in imgList" :key="item.acm">
                <a :href="item.link">
                    <img :src="item.image">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</div>
  
</template>

<script>
export default {
    props:{
        imgList:Array
    },
    data(){
        return{
        }
    },
    mounted(){
        console.log(this.imgList);
    }
}
</script>
<style>
    .el-carousel__item img{
        width: 100%;
    }
    .el-carousel__item{
        height: auto;
    }
    .el-carousel{
        height: auto;
    }
</style>