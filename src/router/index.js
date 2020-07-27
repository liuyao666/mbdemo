import Vue from 'vue'
import Router from 'vue-router'
// import Swiper from 'swiper';
import 'swiper/css/swiper.css';
// import {swiper,swiperSlide} from 'vue-awesome-swiper'

import  Home from "@/pages/home.vue";
import  BaoYou from "@/pages/baoyou.vue";
import  FenLei from "@/pages/fenlei.vue";
import  ShouCang from "@/pages/shoucang.vue";
import  WoDe from "@/pages/wode.vue";
import  Login from "@/pages/login.vue";
import  ZhuCe from "@/pages/zhuce.vue";
import  Sousuo from "@/pages/sousuo.vue";

Vue.use(Router)
// Vue.use(swiper)

export default new Router({
    routes: [
       {name:"home",path:"/home",component:Home},
       {name:"baoyou",path:"/baoyou",component:BaoYou},
       {name:"fenlei",path:"/fenlei",component:FenLei},
       {name:"shoucang",path:"/shoucang",component:ShouCang},
       {name:"wode",path:"/wode",component:WoDe},
       {name:"login",path:"/login",component:Login},
       {name:"zhuce",path:"/zhuce",component:ZhuCe},
       {name:"sousuo",path:"/sousuo",component:Sousuo},
    //   路由重定向
       {path:"/",redirect:"/home"}
    ]
}
)