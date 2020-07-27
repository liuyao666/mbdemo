<template>
   <div>
       <div class="header">
           <img @click="back()" src="../../public/img/back.png">
           注册
       </div>
       <div class="logininfor">
           <input type="text" placeholder="手机号码" v-model="userphone">
           <input type="text" placeholder="密码" v-model="userpass">
           <span @click="register()">注册</span>
       </div>
       <p>已有账号？去<span class="zhuce" @click="login()">登录</span></p>
   </div>
</template>
<script>

export default {
     data(){
        return{
            userphone:"",
            userpass:""
        }
    },
    methods: {
            back(){
                this.$router.go(-1)
            },
            login(){
                this.$router.push("/login")
            },
            zhuce(){
                this.$router.push("/zhuce")
            },
            register(){
                if(this.userphone==""||this.userpass==""){
                    window.console.log('您输入为空');
                    return false;
                }else{
                    var usp = new URLSearchParams();

                    usp.append('userphone',this.userphone)
                    usp.append('userpass',this.userpass)
              
              this.axios({
                url:"http://localhost:9988/register",
                method:"post",
               data:usp,
               headers:{
                    'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
                }
            }).then((ok)=>{
                if(ok.data.data.linkid==1){
                    window.console.log("注册成功")
                     window.console.log(ok.data.data.linkid)
                     window.console.log(ok)
                    // this.$toast.success('注册成功,请登录');
                    // this.$router.push("/denglu")
                    // setTimeout(this.go,3000);
                }else{
                    // this.$toast.fail('注册失败，请重试');
                    window.console.log("注册失败")
                }
            })
            }
        },
    }
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