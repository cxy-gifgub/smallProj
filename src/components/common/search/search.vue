<template>
    <div id="search-block">
        <slot name="user_img" class="block_left"></slot>
        <div class="search-input">
            <i class="el-icon-search" style="font-size:12px;color:rgb(191, 191, 191);"></i>
            <input type="text" class="input-search"  v-model="inputSearch" @keyup.enter="search">
        </div>
        <slot name="other_icon1"></slot>
        <slot name="other_icon2"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return{
            inputSearch:''
        }
    },
    methods:{
        search(){
            console.log('一次',this.inputSearch);
            this.$emit('inputkeyword',this.inputSearch)
        }
    }
}
</script>

<style scoped>
    #search-block{
        height: 1.8rem;
        display: flex;
        margin: 0.5rem 0;
        padding: 0 0.5rem;
        background-color: #fff;
    }
    .block_left,.other_icon1,.other_icon2{
        height: 100%;
    }
    .search-input{
        width: 65%;
        background-color: #eee;
        border-radius: 20px;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
    }
    .input-search{
        width: 100%;
        background-color: #eee;
        border: none;
        border-radius: 20px;
        font-size: 14px;
        color: #999;
        margin: 0 0.5rem;
        outline:none;
    }
</style>