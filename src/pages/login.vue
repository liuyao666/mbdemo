<template>
   <div>
       <div class="header">
           <img @click="back()" src="../../public/img/back.png">
           登录
       </div>
       <div class="logininfor">
           <input type="text" placeholder="手机号码">
           <input type="text" placeholder="密码">
           <span>登录</span>
       </div>
       <p>还没有账号？去<span class="zhuce" @click="zhuce()">注册</span></p>
   </div>
</template>
<script>

export default {
    methods: {
        back(){
            this.$router.go(-1)
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
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 18px;
    position: relative;
}
.header img{
    position: absolute;
    left: 4px;
    top: 12px;
}
.logininfor{
    margin-top: 20px;
    width: 100%;
    height: 182px;
    /* background-color:yellow; */
}
.logininfor input{
    display: block;
    width: 100%;
    height: 46px;
    font-size: 16px;
    margin: 10px auto;
    border-radius: 10px;
    text-indent: 20px;
}
.logininfor span{
    display: block;
    margin:10px auto;
    width: 319px;
    height: 40px;
    background-color: #eee;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    border-radius: 20px;
}
.zhuce{
    color: red;
}
</style>