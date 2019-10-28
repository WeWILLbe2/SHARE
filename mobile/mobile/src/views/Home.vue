<template>
  <div class="home">
    <div class="int">
      <div style="margin-top: 15px;">
        <!-- <el-input placeholder="请输入内容" style="border-radius: 20px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input> -->

        <div class="nav">
          <div class="search">
            <search></search>
          </div>
          <div class="word">搜索</div>
        </div>
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
    <div class="msg" v-for="data in dataShow" :key="data.pid">
      <div class="usermsg">
        <div class="userhead"></div>
        <div>
          <div>昵称{{data.myaccount}}</div>
          <div>{{data.ptime}}</div>
        </div>
      </div>
      <div class="userCon">
        <div> {{data.description}}</div>
        <div class="images" v-for="item in data.img" :key="item">
          <img :src="data.img">
        </div>
      </div>
      <div class="like">
        <van-icon name="share" />
        <div class="share">:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.dz}}</div>
        <van-icon name="like-o" />
        <div class="likes">:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.sc}}</div>
      </div>
    </div>
    <bottoms></bottoms>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import search from "@/components/search.vue";
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
      HelloWorld,
      search
    },
    data() {
      return {
        input1: '',
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        nickname: "",
        dataShow: [],
        like: ""

      }
    },
    created: function () {
      this.axios
        .get("/getCon") //发起请求
        .then(response => {
          response.data.forEach(element => {
            console.log(this.dataShow)
            this.dataShow = response.data;
            // console.log(this.datashow[2].img)
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {
      active() {

      }
    }

  }
</script>
<style>
  .images>div {
    display: flex;
    justify-content: start;
    margin-top: 10px;

  }

  .images>div>div {
    width: 60px;
    height: 60px;
    background-color: rgb(170, 145, 145);
    margin-left: 40px;
  }

  .images>div>div:first-child {
    margin-left: 0;
  }

  .share,
  .likes {
    width: 20px;
    height: 40px;
    font-size: 16px;
    line-height: 22px;
    /* background-color: rgb(155, 71, 71); */
    position: relative;
    left: -62px;
  }


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

  .content>ul>li {
    font-size: 14px;
    margin-top: 5px;
    font-family: sans-serif;
    letter-spacing: 3px;
    color: #000;
    text-align: left;
  }

  .content>ul:last-child>li:last-child {
    color: #ff9800f5;
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
    text-align: left;
  }

  .usermsg>div:nth-child(2) {
    width: 76%;
    height: 50px;
    padding-top: 15px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  .userCon {
    margin-top: 10px;
    width: 90%;
    /* height: 40px; */
    margin-left: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: left;
    padding-left: 12px;

  }

  .like {
    margin-top: 14px;
    width: 90%;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    padding-left: 36px;
  }

  .nav {
    width: 100%;
    height: 70px;
    /* background-color: rgba(200, 200, 210, 0.6); */
    margin: 0 auto;
    padding-top: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-pack: center;
    -ms-flex-pack: center;
    /* justify-content: ; */
    /* margin-bottom: 20px; */
    border-radius: 5px;
  }

  .nav>div:last-child {
    width: 50px;
    height: 28px;
    line-height: 30px;
    background-color: #EEEEEE;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-left: 1px solid #00000030;
    margin-left: 22px;
  }

  .search ul {
    width: 105.1%;
    position: relative;
    z-index: 7;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .search ul>li:hover {
    cursor: pointer;
  }

  .search {
    width: 64%;
  }

  .search>div {
    width: 100%;
    /* margin-left: 300px; */
  }

  .search>ul>li {
    height: 33px;
    width: 95%;
    text-align: start;
    background-color: rgb(250, 245, 245);
  }

  input {
    width: 108%;
    height: 28px;
    box-sizing: border-box;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color: #eee;
    border-color: #ddd;
    box-sizing: border-box;
    margin-top: 0px;
    border-block-start-color: #444;
    border: 0;
    text-indent: 20px;
    margin-left: 30px;
  }

  input:focus {
    outline: none;
  }
</style>