<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #tab-bar{
    display: flex;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    /* box-shadow: 0px -1px 2px rgb(236, 236, 236); */
    border-top: 1px solid rgb(212, 212, 212);
  }
  
</style>