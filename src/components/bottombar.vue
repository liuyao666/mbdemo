<template>
    <div id="bottombar">
        <router-link class="bottombar_a" to="/home"><div><i class="iconfont icon-shouye"></i><span>首页</span></div></router-link>
        <router-link class="bottombar_a" to="/baoyou"><div><i class="iconfont icon-99"></i><span>9.9包邮</span> </div></router-link>
        <router-link class="bottombar_a" to="/fenlei"><div><i class="iconfont icon-leimupinleifenleileibie"></i><span>分类</span> </div></router-link>
        <router-link class="bottombar_a" to="/shoucang"><div><i class="iconfont icon-shoucang"></i><span>收藏</span> </div></router-link>
        <router-link class="bottombar_a" to="/wode"><div><i class="iconfont icon-wode"></i><span>我的</span></div></router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #bottombar{
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: row;
        height: 50px;
        margin-left: -8px;
        border-top: 1px solid #eeeeee;
    }
    #bottombar i{
        font-size: 20px;
        display: block;
        text-align: center;
        padding-top: 7px;
    }
    .bottombar_a{
        text-align: center;
    }
   /* .bottombar_a i,span{
       color: red;
   } */
    .bottombar_a span{
        display: block;
        margin-top: 4px;
        font-size: 12px;
    }
    #bottombar a{
        flex: 1;
        font-size: .16rem;
        text-decoration: none;
        color: gray;
    }
   /* #bottombar a:active{
       color: red;
   } */
</style>