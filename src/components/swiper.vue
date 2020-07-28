<template>
     <swiper ref="mySwiper" :options="swiperOption" >
        <swiper-slide><img src="../../public/img/1.jpg"></swiper-slide>
        <swiper-slide><img src="../../public/img/2.jpg"></swiper-slide>
        <swiper-slide><img src="../../public/img/3.jpg"></swiper-slide>
        <swiper-slide><img src="../../public/img/4.jpg"></swiper-slide>
         <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
</template>
<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'carrousel',
   components:{
       swiper,
       swiperSlide
   },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(3, 1000, false)
    },
   data(){
        return {
                swiperOptions: {
                    //添加分页器
                    pagination: {
                        //默认的圆点类型
                        el: '.swiper-pagination'
                    },
                    //环路,当为true时则会循环
                    loop : true,
                    //切换样式
                    effect:'coverflow',
                    //自动切换
                    autoplay: {
                        //隔2000ms切换一次
                        delay: 2000
                    },
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