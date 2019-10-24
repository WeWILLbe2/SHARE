<template>
  <div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <div>
  <el-menu-item index="1" >
    <em>SHARE</em>
  </el-menu-item>
  <el-menu-item index="2">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </el-menu-item>
  </div>
  <div>
  <el-menu-item index="3" @click="openreg">注册</el-menu-item>
  <el-menu-item index="4" @click="openlog">登录</el-menu-item>
  <el-menu-item index="5" @click="personal">个人中心</el-menu-item>
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
        input:'',
      }

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
         openreg() {
        this.$alert(<myreg></myreg>, '注册账号', {
          dangerouslyUseHTMLString: true,
          showCancelButton:false,
          showConfirmButton:false
         
        });
      },
        openlog() {
        this.$alert(<mylog></mylog>, '登录账号', {
          dangerouslyUseHTMLString: true,
          showCancelButton:false,
          showConfirmButton:false
         
        });
      },
      personal(){
          this.$router.push({ path:'/personal'  });
      }
    }
  }
</script>
