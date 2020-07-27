import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index'
import router from '@/router/index.js';
import './assets/iconfont/iconfont.css'
//导入rem的js，动态的设置了不同屏幕的html根元素的font-size
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper)
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false

Vue.use(Vant)


new Vue({
  render: h => h(App),
  router,

}).$mount('#app')
