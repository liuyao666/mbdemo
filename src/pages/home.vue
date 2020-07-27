<template>
  <div>
    <div class="header">
      <input class="ss" type="text" placeholder="输入商品名" @click="sousuo()">
      <!-- <van-search class="ss" v-model="value" placeholder="请输入搜索关键词" @click="sousuo()" /> -->
      <i class="iconfont icon-sousuo"></i>
      <div class="xiaoxi">
        <i class="iconfont icon-xiaoxi"></i>
        <span>消息</span>
      </div>
    </div>
    <div class="nav">
      <li
        class="nav_li"
        v-for="(v,i) in arr1"
        :key="i"
        :class="{active : active == v.title}"
        @click="selected(v.title)"
      >{{v.title}}</li>
    </div>
    <Swiper></Swiper>
    <BottomBar></BottomBar>
    <router-view></router-view>
  </div>
</template>
<script>
import BottomBar from "@/components/bottombar.vue";
import Swiper from '@/components/swiper.vue'
export default {
  components: {
    BottomBar,
    Swiper
  },
  data() {
    return {
      arr1: [
        { title: "精选" },
        { title: "美食" },
        { title: "女装" },
        { title: "美妆" },
        { title: "居家用品" },
        { title: "鞋品" },
        { title: "数码家电" },
        { title: "男装" },
        { title: "内衣" },
        { title: "母婴" },
        { title: "家装家纺" }
      ],
      active: ""
    };
  },
  methods: {
    selected(name) {
      this.active = name;
    },
    sousuo() {
      this.$router.push("/sousuo");
    }
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
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.nav_li {
  text-align: center;
  font-size: 16px;
  margin-left: 5px;
  margin-right: 5px;
}
.active {
  /* background: #fd7522;
  border: 1px solid #fd7522; */
  color: red;
  border-bottom: 1px solid red;
}
</style>