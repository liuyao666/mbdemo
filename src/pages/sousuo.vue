<template>
    <div>
        <div class="header">
             <img @click="back()" src="../../public/img/back.png" style="width:30px,height:30px">
            <input class="ss" type="text" placeholder="输入商品名" ref="userinput">
            <div class="xiaoxi">
                <span @click="sousuo()">搜索</span>
            </div>
        </div>
       <div class="headerB">
            <P>三步轻松获得优惠券</P>
       </div>
       <div class="headerC" v-show="bool">
            <P>搜索历史</P>
            <p class="del" @click="del">删除</p>
            <li class="histroyinput" v-for="(item,index) in arr" :key="index">{{item}}</li>
       </div>
       <BottomBar></BottomBar>
       <router-view></router-view>
    </div>
</template>
<script>
import BottomBar from '@/components/bottombar.vue'
// import Swiper from '@/components/swiper.vue'
export default {
     components:{
        BottomBar,
        // Swiper
    },
     created() {
        //  var history_input = localStorage.getItem('history_input')
                //  var arr = history_input.split(",")
                // for(var i = 0;i<arr.length;i++){
                //     window.console.log(arr[i])
                // }
        },
   data() {
       return {
            arr : localStorage.getItem('history_input').split(","),
            bool:true,
       }
   },
    methods: {
       back(){
            this.$router.go(-1)
        },
       sousuo(){
           if(this.$refs.userinput.value == ""){
               return false
           }else{
               if(localStorage.history_input){
                    var a = localStorage.history_input.split(',');
                    a.push(this.$refs.userinput.value)
                    localStorage.setItem('history_input',a.join(','))
                }else{
                    localStorage.setItem('history_input',this.$refs.userinput.value)
                }
           }  
       },
       del(){
           this.bool = !this.bool;
       } 
    }, 
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}

li{
    list-style: none;
}
header img{
    margin-top: 6px;
}
.ss{
    width: 260px;
    height: 32px;
    border-radius: 16px 16px 16px 16px;
    outline: none;
    background-color:#f6f6f6;
    font-size: 14px;
    text-indent: 30px;
    margin-left: 30px;
    border: none;
}
.icon-sousuo{
    font-size: 20px;
}
.header{
    position: relative;
    margin-top: 3px;
}

.xiaoxi{
    float: right;
    margin-right: 10px;
}
.xiaoxi span{
    /* display: block; */
    width: 25px;
    height: 17px;
    font-size: 14px;
    line-height: 32px;
}
.headerB{
    height: 100px;
    margin: 6px auto;
    background-color: pink;
}
.headerC{
    height: 100px;
    margin: 6px auto;
    background-color: pink;
    position: relative;
}
.headerC p{
    font-size: 16px;
    padding-left: 16px;
}
.histroyinput{
    float: left;
    margin-top: 6px;
    height: 20px;
    border-radius: 10px 10px;
    background-color:yellow;
    text-align: center;
    margin: 3px 3px;
    padding-left: 5px;
    padding-right: 5px;
    line-height: 20px;
}
.del{
    float:right;
    position: absolute;
    right: 10px;
    top: 5px;
}
</style>