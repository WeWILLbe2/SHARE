<template>
        <div class="home">
          <div></div>
          <div class="word"><em>SHARE</em></div>
          <div></div>
          <van-cell-group class="int">
            <van-field v-model="username" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名"
              @click-right-icon="$toast('question')" />
      
            <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
          </van-cell-group>
          <div></div>
          <div>
            <div class="reg">注册</div>
            <div class="login">登陆</div>
          </div>
          <bottoms></bottoms>
        </div>
      </template>
      <script>
        export default {
          name: 'home',
          components: {
            // HelloWorld,
          },
          data() {
            return {}
          },
          methods: {
      
          }
        }
      </script>
      <style>
        .int {
          /* padding-left: 30px; */
          display: block;
          margin-left: 30px;
        }
      
        .home>div:first-child {
          height: 130px;
        }
      
        .home>div:nth-child(3) {
          height: 50px;
        }
      
        .word {
          font-size: 34px;
          color: rgb(24, 107, 184);
      
        }
        .home>div:nth-child(5) {
          height: 44px;
      
        }
        .home>div:nth-child(6) {
          display: flex;
          justify-content: space-evenly;
      
        }
        .login,.reg{
          width: 75px;
          height: 40px;
          line-height: 40px;
          background-color: rgba(139, 165, 202, 0.5);
          border-radius: 4px;
        }
      
      </style>