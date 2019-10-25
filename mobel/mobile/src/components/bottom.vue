<template>
    <div>
        <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" route>
            <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="plus"  replace to="/push">发表</van-tabbar-item>
            <van-tabbar-item icon="friends-o" replace to="/user">个人</van-tabbar-item>
            <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>


</script>