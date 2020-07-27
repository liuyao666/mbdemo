<template>
     <swiper :options="swiperOption">
        <swiper-slide><img src="../../public/img/1.jpg"></swiper-slide>
        <swiper-slide><img src="../../public/img/2.jpg"></swiper-slide>
        <swiper-slide><img src="../../public/img/3.jpg"></swiper-slide>
        <swiper-slide><img src="../../public/img/4.jpg"></swiper-slide>
    </swiper>
    <!--以下看需要添加-->
    <!-- <div class="swiper-scrollbar"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> 
    <div class="swiper-pagination"></div>  -->
</template>
<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
   components:{
       swiper,
       swiperSlide
   },
   data(){
       return{
      swiperOption: {//swiper3
      autoplay: 3000,
      speed: 1000,
      }
    }
   }
}
</script>>
<style scoped>
.swiper-container {
        width: 500px;
        height: 300px;
        margin: 20px auto;
    }
</style>