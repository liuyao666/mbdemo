<template>
    <div>
        <div>
            <div class="header">
                <div class="headerinfor">
                    <img class="userimg" src="../../public/img/user.png">
                    <div class="logininfor">
                        <span class="login" @click="login()">登录</span><span class="reg" @click="zhuce()">/注册</span>
                    </div>
                    <i class="iconfont icon-xiaoxi"></i>
                </div>
                <div class="sc">
                    <span><i class="iconfont icon-shoucang"></i>我的收藏</span>
                    <span><img src="../../public/img/foot.png" alt="">我的足迹</span>
                </div>
            </div>
        </div>
        <div class="imginfor">
            <img src="../../public/img/a1.jpg" >
        </div>
        <div class="gj">
            <p>常用工具</p>
            <div class="gjbtm">
                <div><span>新手教程</span></div>
                <div><span>意见反馈</span></div>
                <div><span>帮助中心</span></div>
            </div>
        </div>
       <BottomBar></BottomBar>
        <router-view></router-view>
    </div>
</template>
<script>
import BottomBar from '@/components/bottombar.vue'
export default {
    components:{
        BottomBar
    },
    methods: {
        login(){
            this.$router.push("/login")
        },
        zhuce(){
            this.$router.push("/zhuce")
        }
    },
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 200px;
    background-color: #fe323c;
    position: relative;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
}
.headerinfor{
    padding-top: 16px;
    padding-left: 15px;
    height: 66px;
}
.userimg{
    width: 65.8px;
    height: 65.8px;
}
.logininfor{
    float: right;
    position: absolute;
    top: 44px;
    left: 94px;
}
.logininfor .login,.reg{
    color: #fff;
    font-size: 20px; 
}
.sc{
    width: 355px;
    height: 93px;
    background-color:yellow;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #666;
}
.sc .icon-shoucang{
    display: block;
    font-size: 26px;
    text-align: center;
}
.sc img{
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 5px;
}
.imginfor{
    margin-top: 15px;
    margin-left: 10px;
   
}
.imginfor img{
     border-radius: 10px;
}
.gj{
    width: 355px;
    background-color: red;
    border-radius: 10px;
    margin: 0 auto;
}
.gj p{
    height: 30px;
    border-bottom: 1px solid gray;
    font-size: 16px;
    line-height: 30px;
    padding-left: 10px;
}
.gjbtm{
    height: 93px;
    padding: 13px 0px 13px 0px;
    display: flex;
}
.gjbtm div{
    height: 93px;
    flex: 1;
    text-align: center;
}
</style>