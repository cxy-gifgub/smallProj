<template>
<div>
    <div class="block">
        <el-carousel height="110px" autoplay>
            <el-carousel-item v-for="(item,index) in imgList" :key="index">
                    <img :src="item">
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
    el-carousel__item{
        height: 375px;
    }
    .el-carousel{
        height: auto;
    }
    .el-carousel__container{
        height: 375px;
    }
</style>