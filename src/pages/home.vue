<template>
  <div>
    <div class="header">
      <input class="ss" type="text" placeholder="输入商品名" @click="sousuo()">
      <i class="iconfont icon-sousuo"></i>
      <div class="xiaoxi">
        <i class="iconfont icon-xiaoxi"></i>
        <span>消息</span>
      </div>
    </div>
    <div class="nav">
      <div class="jx">
        精选
      </div>
      <div class="hd">
          <li
          class="nav_li"
          v-for="(v,i) in arr1"
          :key="i"
          :class="{active : active == v.title}"
          @click="selected(v.title)"
        >{{v.title}}</li> 
      </div>
      <div class="xiabtn" @click="clickdown"></div>
    </div>
    <div class="down" v-if="down">
        <img class="up" @click="clickdown" src="../../public/img/up.png" >
        <p class="like">猜你喜欢</p>
        <div class="likelist">
          <div class="likelistarr" v-for="(item,index) in arr1" :key='index'>
              <img class="likelistarr_down" :src="item.url">
              <p class="likelistarr_title">{{item.title}}</p>
          </div>
        </div>
    </div>
    <div class="daohang" >
      <div class="daohanglist" v-for="(item,index) in daohangarr" :key="index">
        <img class="daohanglist_img" :src="item.url">
        <p class="daohang_title">{{item.title}}</p>
      </div>
    </div>
    <div class="ddqiang">
      <div class="ddqheader">
        <p>咚咚抢</p>
        <p>整点特惠开抢</p>
      </div>
      <div class="time">
        <div class="timelist" v-for="(item,index) in timearr" :key="index">
          <p>{{item.time}}</p>
          <p>{{item.data}}</p>
        </div>
      </div>
      <div class="ddqlist">

      </div>
    </div>
    <!-- <Swiper></Swiper> -->
    <BottomBar></BottomBar>
    <router-view></router-view>
  </div>
</template>
<script>
import BottomBar from "@/components/bottombar.vue";
// import Swiper from '@/components/swiper.vue'
export default {
  components: {
    BottomBar,
    // Swiper
  },
  data() {
    return {
      arr1: [
        { title: "美食",url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN01hKSnoI2JJhz2bCgzy_!!2053469401.png" },
        { title: "女装",url:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN014aXsNM2JJhyzlL2YQ_!!2053469401.png" },
        { title: "美妆",url:"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01CGLh5g2JJhyzWsJN7_!!2053469401.png" },
        { title: "居家用品",url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01wYZtCv2JJhz38DYaQ_!!2053469401.png" },
        { title: "鞋品",url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01mXY0s52JJhxXjXXrq_!!2053469401.png" },
        { title: "数码家电",url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN01VJj85i2JJhyxOJiE0_!!2053469401.png" },
        { title: "男装",url:"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01EVAb4l2JJhxYaHWt1_!!2053469401.png" },
        { title: "内衣",url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01BqMTPD2JJhyzlIlEf_!!2053469401.png" },
        { title: "母婴",url:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Hz4Omt2JJhz3aY3y7_!!2053469401.png" },
        { title: "家装家纺",url:"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01b7QRoZ2JJhz1JEGsu_!!2053469401.png" }
      ],
      daohangarr:[
        { title: "疯抢排行",url:"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01IVi6Do2JJi1PQz6yq_!!2053469401.gif"  },
        { title: "9.9包邮",url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN01vOrMqk2JJi1P6T5r9_!!2053469401.gif"  },
        { title: "品牌特卖",url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN016LSPRa2JJi06FDPGB_!!2053469401.gif"  },
        { title: "每日半价",url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN01mOTTuU2JJi1RJAxZd_!!2053469401.gif"  },
        { title: "折上折",url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN01hKSnoI2JJhz2bCgzy_!!2053469401.png"  },
        { title: "今日秒杀",url:"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01T1dg4x2JJi0fKH8k4_!!2053469401.png"  },
        { title: "辣妈优选",url:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN01ydJdvm2JJi0eGF4oO_!!2053469401.png"  },
        { title: "饿了么",url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN011PKStB2JJi01MxH6f_!!2053469401.gif"  },
        { title: "大额神券",url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN01DxRkMF2JJi0dfsV7f_!!2053469401.png"  },
        { title: "限时爆品",url:"https://img.alicdn.com/imgextra/i2/2053469401/O1CN01cd4Sbe2JJi0BtsCQ9_!!2053469401.png"  }
        ],
      timearr:[
        { time:"13:00",data:"已开抢" },
        { time:"15:00",data:"已开抢" },
        { time:"17:00",data:"已开抢" },
        // { time:"19:00",data:"已开抢" },
        // { time:"21:00",data:"已开抢" },
        // { time:"23:00",data:"已开抢" },
        // { time:"23:00",data:"已开抢" },
        // { time:"23:00",data:"已开抢" },
        // { time:"23:00",data:"已开抢" },
        // { time:"23:00",data:"已开抢" },
        // { time:"23:00",data:"已开抢" },
        // { time:"23:00",data:"已开抢" },
      ],
      active: "",
      down:false,
    };
  },
  methods: {
    selected(name) {
      this.active = name;
    },
    sousuo() {
      this.$router.push("/sousuo");
    },
    clickdown(){
      this.down = !this.down
    },
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 100px;
  color:#333;
}
li {
  list-style: none;
}
.ss {
  width: 320px;
  height: 32px;
  border-radius: 16px 16px 16px 16px;
  outline: none;
  font-size: 14px;
  text-indent: 30px;
  margin-left: 6px;
  /* border: none; */
}
.icon-sousuo {
  font-size: 20px;
}
.header {
  position: relative;
  margin-top: 3px;
}
.icon-sousuo {
  position: absolute;
  left: 10px;
  top: 7px;
}
.xiaoxi {
  float: right;
  margin-right: 3px;
}
.xiaoxi .icon-xiaoxi {
  margin-left: 4px;
}
.xiaoxi span {
  display: block;
  width: 25px;
  height: 17px;
  font-size: 12px;
}
.nav {
  height: 36px;
  width: 100%;
  line-height: 30px;
  display: flex;
  white-space: nowrap;
}
.jx{
  width: 9%;
 font-size: 16px;
 margin-left: 5px;
  margin-right: 5px;
}
.hd {
  width: 78%;
  height: 36px;
  line-height: 30px;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
}
.nav_li {
  text-align: center;
  font-size: 16px;
  margin-left: 5px;
  margin-right: 5px;
}
.xiabtn{
  width: 10%;
  font-size: 40px;
  background-image: url(../../public/img/more.png);
  background-repeat: no-repeat;
  background-position: center center;
}
.active {
  /* background: #fd7522;
  border: 1px solid #fd7522; */
  color: red;
  border-bottom: 1px solid red;
}
.down{
  width: 100%;
  position: absolute;
  top: 40px;
  z-index: 2;
  background-color: #fff;
}
.down .up{
  position: absolute;
  right: 6px;
  top: 3px;
}
.like{
  font-size: 16px;
  padding-top: 10px;
  padding-left: 5px;
}
.likelist{
  display: flex;
  flex-wrap: wrap;
}
.likelistarr{
  width: 90px;
  height: 80px;
  position: relative;
}
.likelistarr_down{
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25px;
  margin-top: -25px;
}
.likelistarr_title,.daohang_title{
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
}
.daohang_title{
  bottom:-10px;
}
.daohang{
  width: 97%;
  height: 150px;
  margin: 5px 5px;
  border-radius: 5px;
  background-color:#fff;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.daohanglist{
  width:20%;
  height:66px;
  position: relative;
}
.daohanglist_img{
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25px;
  margin-top: -25px;
}
/* 咚咚抢部分 */
.ddqiang{
  width: 97%;
  height: 267px;
  margin: 5px 5px;
  border-radius: 5px;
  /* background-color:#fff; */
  background-color:yellow;
  display: inline-block;
}
.ddqheader{
  width: 97%;
  height: 23px;
  margin: 5px 5px;
  display: flex;
  background-color:red;
}
.ddqheader p:first-child{
  font-size: 16px
}
.ddqheader p:nth-child(2){
  line-height: 23px;
  margin-left: 10px;
  color: #888;
}
.time{
  width:300px;
  height: 40px;
  margin: 5px 5px;
  background-color: pink;
  display: flex;
  /* float: left; */
  overflow-x: scroll;
  white-space: nowrap;
  /* overflow: hidden; */
}
.timelist{
  /* display: block; */
  float: left;
  width: 80px;
  height: 40px;
  margin: 0 5px;
  background-color: blue;
  border-radius: 20px;
   
}
.timelist p:first-child{
  text-align: center;
  margin-top: 5px;
  font-size: 14px;
}
.timelist p:nth-child(2){
  text-align: center;
  font-size: 12px;
}
</style>