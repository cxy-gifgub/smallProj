<template>
<div>
    <iframe class="bili-player" :src="biliH5" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" ></iframe>
</div>
</template>

<script>
export default {
    props:{
        query:Array
    },
    created(){
        
    }
}
</script>

<style>
.bili-player{
        width: 100%;
        height: 100%;
    }
</style>