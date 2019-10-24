<template>
  <div class="home">
    <div class="f">
      <form action="/">
        <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
      </form>
      <div class="rl">
        <van-cell is-link @click="showPopup" class="reg">注册</van-cell>
        <van-popup v-model="show"  position="top"
        :style="{ height: '20%' }">内容</van-popup>
        <van-cell is-link @click="showPopup" class="login">登陆</van-cell>
        <van-popup v-model="show">内容</van-popup>
      </div>

      </input>
    </div>
    <bottoms></bottoms>
  </div>
</template>
<script>
  // import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'home',
    components: {
      // HelloWorld,
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      showPopup() {
        this.show = true;
        console.log(this.show)
      }
    }
  }
</script>
<style>
  .rl {
    padding-top: 10px;
    width: 100px;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
  }

  .reg,
  .login {
    background-color: rgb(236, 206, 206);
    height: 30px;
    line-height: 30px;
    width: 40px;
    border-radius: 5px;

  }
</style>