<template>
  <div class="home">
    <div class="int">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" style="border-radius: 20px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="content">
        <ul>
          <li>亲爱的热爱的</li>
          <li>亲爱的热爱的</li>
          <li>亲爱的热爱的</li>
          <li>亲爱的热爱的</li>
        </ul>
        <div class="line"></div>
        <ul>
          <li>亲爱的热爱的</li>
          <li>亲爱的热爱的</li>
          <li>亲爱的热爱的</li>
          <li>更多内容</li>
        </ul>
      </div>
    </div>
    <div class="kong"></div>
    <div class="ad">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" class="img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="kong"></div>
    <div class="msg">
      <div class="usermsg">
        <div class="userhead"></div>
        <div>
          <div>昵称</div>
          <div>发表时间</div>
        </div>
      </div>
      <div class="userCon">
        这是内容
      </div>
      <div class="like">
        <van-icon name="share" />
        <van-icon name="like-o" />
        <van-icon name="good-job-o" />
      </div>

    </div>
    <div class="msg">
      <div class="usermsg">
        <div class="userhead"></div>
        <div>
          <div>昵称</div>
          <div>发表时间</div>
        </div>
      </div>
      <div class="userCon">
        这是内容
      </div>
      <div class="like">
        <van-icon name="share" />
        <van-icon name="like-o" />
        <van-icon name="good-job-o" />
      </div>

    </div>
    <div class="msg">
      <div class="usermsg">
        <div class="userhead"></div>
        <div>
          <div>昵称</div>
          <div>发表时间</div>
        </div>
      </div>
      <div class="userCon">
        这是内容
      </div>
      <div class="like">
        <van-icon name="share" />
        <van-icon name="like-o" />
        <van-icon name="good-job-o" />
      </div>

    </div>

    <bottoms></bottoms>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Vue from 'vue';
  import {
    Tabbar,
    TabbarItem,
    Swipe,
    SwipeItem,
    Lazyload,
    Icon
  } from 'vant';

  Vue.use(Icon);
  Vue.use(Swipe).use(SwipeItem);
  Vue.use(Lazyload)
  Vue.use(Tabbar).use(TabbarItem);
  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data() {
      return {
        input1: '',
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
      }
    },
    methods: {
      active() {

      }
    }
  }
</script>
<style>
  .el-select .el-input {
    width: 120px;
  }

  .int {
    margin-left: 10px;
    margin-right: 10px;
  }

  #search {
    color: #FFF;
    background-color: #99c6f5;
    border-color: #adcae8;
  }

  .content {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    box-sizing: border-box;
  }
  .content>ul>li{
    font-size:14px;
    margin-top: 5px;
    font-family: sans-serif;
    letter-spacing:3px;
    color: #000;
  }
  .content>ul:last-child>li:last-child{
    color:#ff9800f5;
  }

  .line {
    width: 10px;
    height: 90px;
    border-left: 1px solid #1b181838;
  }

  .kong {
    width: 100%;
    height: 10px;
    background-color: #e6e6e6;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .img {
    width: 100%;
    height: 150px;
  }
  .userhead {
    width: 50px;
    height: 50px;
    background-color: rgb(219, 124, 124);
    border-radius: 50%;
    margin-right: 10px;
  }

  .msg {
    margin-bottom: 20px;
  }

  .usermsg {
    display: flex;
    justify-content: start;
    font-size: 12px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .usermsg>div:nth-child(2) {
    height: 50px;
    padding-top: 15px;
    box-sizing: border-box;

  }

  .userCon {
    margin-top: 10px;
    width: 90%;
    height: 40px;
    border: 1px solid black;
    margin-left: 10px;
    box-sizing: border-box;
  }

  .like {
    width: 90%;
    font-size: 26px;
    display: flex;
    justify-content: space-around;
  }
</style>