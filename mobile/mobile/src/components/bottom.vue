<template>
    <div class="bot">
        <router-view />
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="plus" replace to="/push">发布</van-tabbar-item>
            <van-tabbar-item icon="friends-o " replace to="/self">个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'


    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        data() {
            return {

            }
        },
        methods: {
            active() {

            }
        }
    }
</script>
<style>
    .bot{
        height: 45px;
    }
</style>