<template>
  <div>
      详情页
      {{$route.query.bvid}}
  </div>
</template>

<script>
import {getHomeBiliDetail} from 'network/homeBili'

export default {
    data(){
        return {
            bvid:null
        }
    },
    mounted(){
        this.getDetail()
    },
    methods:{
        getDetail(){
            getHomeBiliDetail(this.$route.query.bvid).then((res)=>{
                console.log(res);
            })
        }
    },
    watch:{
        "$route.query.bvid": "getDetail"
    }

}
</script>

<style>

</style>