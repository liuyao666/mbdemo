<template>
    <div>
       包邮
       <BottomBar></BottomBar>
        <router-view></router-view>
    </div>
</template>
<script>
import BottomBar from '@/components/bottombar.vue'
export default {
    components:{
        BottomBar
    }
}
</script>
<style scoped>
    
</style>