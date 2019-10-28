<template>
  <div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <div>
  <el-menu-item index="1" @click="home">
    <em>SHARE</em>
  </el-menu-item>
  <el-menu-item index="2">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    
  </el-menu-item>
  </div>
  <div>
  <el-menu-item index="3" @click="openreg" >注册</el-menu-item>
  <el-menu-item index="4" @click="openlog" >登录</el-menu-item>
  <el-menu-item index="5" >欢迎{{$store.getters.userAccount}}</el-menu-item>
  <el-menu-item index="6" @click="personal">个人中心</el-menu-item>
   <el-menu-item index="7" v-on:click="logout"  >
          注销
        </el-menu-item>
    <!-- <el-button type="text" >点击打开 Message Box</el-button> -->
  </div>
</el-menu>

  </div>
</template>
<style  scoped>
ul.el-menu-demo{
  display:flex !important;
  justify-content:space-between !important;
}
ul.el-menu-demo>div{
   display:flex !important;
   justify-content:space-evenly !important;
}

</style>
<script>
  export default {
    data() {
     
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input:''
        
      }

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      home(){
      this.$router.push({ path:'/'  });
      },
         openreg() {
            this.$router.push({ path:'/myreg'  });
       
      },
        openlog() {
           this.$router.push({ path:'/mylog'  });
     
      },
      personal(){
          this.$router.push({ path:'/personal'  });
      },
          logout: function () {
        // console.log(this.$store.getters.userType);
        this.$store.commit("LoginOut", false);
        this.$router.push({
          path: "/"
        });
      }
    }
  }
</script>
