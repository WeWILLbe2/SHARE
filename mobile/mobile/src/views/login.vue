<template>
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <div class="bgc">
          <div>
              <div class="a"></div>
              <div class="name"><em>SHARE</em></div>
              <mylog></mylog>
          </div>
         
      </div>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'home',
    components: {
      HelloWorld
    }
  }
  </script>
  <style>
    .bgc {
        background-image: url("../assets/00.jpg");
        /* background-repeat: no-repeat; */
        /* background-size: 100% 100%; */
        height: 670px;
        display: flex;
        justify-content: center;
    }

    .name {
        font-size: 34px;
        color: rgb(82, 141, 218);
        /* margin-top: 30px; */
        margin-bottom: 30px;
        ;
    }

    .a {
        height: 60px;
    }
    </style>