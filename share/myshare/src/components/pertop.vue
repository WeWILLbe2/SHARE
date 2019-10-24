<template>
  <div>
    <div class="bg">
      <!-- <img style="width:100%;height:260px;"  src="" alt=""> -->
      <el-avatar :size="80" @error="errorHandler">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </el-avatar>
      <i class="el-icon-edit nickname" contenteditable="true" @keydown.enter="changeName">{{nickname}}</i>
      <!-- <div class="nickname">用户昵称</div> -->
    </div>
    <div class="bgover">
      <div class="cout">
        <div class="cin">
          <div>88</div>
          <div>收藏</div>
        </div>
        <div  class="cin">
          <div>66</div>
          <div>点赞</div>
        </div>
        <div  class="cin" style="border:0;">
          <div>12</div>
          <div>动态</div>
        </div>
      </div>
    </div>
  </div>
  <!-- <el-image :src="src"></el-image> -->
</template>
<style scoped>
.bg {
  background-image: url("../assets/bg1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 260px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bgover {
  width: 100%;
  height: 80px;
  background-image: linear-gradient(#ffffff00, #fff);
  position: relative;
  top: -80px;
  display:flex;
  justify-content: center;
  align-items: flex-end;
}
.cout{
  display:flex;
 
}
.cin{
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
   border-right:1px solid #000;
   padding:0 20px;
   text-align: center;
}
.nickname {
  margin-top: 5px;
  font-size: 18px;
  color: #fff;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.nickname[contenteditable]:focus {
  outline: none;
}
</style>
<script>
export default {
  data() {
    return {
        nickname:'用户昵称'
    };
  },
  methods: {
    errorHandler() {
      return true;
    },
    changeName: function(e) {
    //     alert("ok");
    //   if (e.charCode === 13) {
        e.preventDefault();
        e.stopPropagation();
        var newnick=document.querySelector(".nickname").innerHTML;
        this.nickname=newnick;
        alert("修改成功");
    //   }
      
    }
  },
  mounted() {}
};
</script>