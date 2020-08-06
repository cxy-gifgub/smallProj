<template>
  <div id="main_block">
    <div class="stars">
      <div v-for="(item,index) in starCount" ref="star" class="star">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        starCount:800,
        distance:800
      }
    },
    mounted(){
      let _this = this;
      let starArr = _this.$refs.star;

      starArr.forEach(item =>{
        var speed = 0.2 +(Math.random()*1);
        var thisDistance = _this.distance + (Math.random()*300);
        item.style.transformOrigin = `0 0 ${thisDistance}px`;
        item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${(Math.random()*360)}deg) rotateX(${(Math.random()*-50)}deg) scale(${speed},${speed})`
      })
    }
  }
</script>
<style scoped>
  #main_block{
    height: 100%;
    width: 100%;
    background:radial-gradient(200% 100% at bottom center,#f7f7b6,#e96f92,#1b2947);
    /* background:radial-gradient(220% 105% at top center,#1b2947 10%,#77517d 40%,#e96f92 65%,#f7f7b6); */
    background: radial-gradient(220% 105% at top center,#1b2947 10%,#25304d 40%,#35486f 65%,#0d2048);
    background-attachment: fixed;
    overflow: hidden;
    position: relative;
  }
  @keyframes rotate{
    0%{
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }
    100%{
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
  }
  .stars{
    transform: perspective(500px);
    transform-style: preserve-3d;
    position: absolute;
    perspective-origin: 50% 100%;
    left: 50%;
    animation: rotate 90s infinite linear;
    bottom: 0;
        border-radius: 50%;
  }
  .star{
    width: 2px;
    height: 2px;
    background-color: #f7f7b6;
    position: absolute;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    border-radius: 50%;
  }
</style>