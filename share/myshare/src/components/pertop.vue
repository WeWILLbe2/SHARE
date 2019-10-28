<template>
  <div>
    <div class="bg">
      <!-- <img style="width:100%;height:260px;"  src="" alt=""> -->

      <el-upload
        class="avatar-uploader"
        action="http://localhost:8081/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" prop="imageUrl" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <!-- <el-avatar :size="80" @error="errorHandler">
        <img  />
      </el-avatar>-->
      <i
        class="el-icon-edit nickname"
        contenteditable="true"
        @keydown.enter="changeName"
      >{{nickname}}</i>
      <!-- <div class="nickname">用户昵称</div> -->
    </div>
    <div class="bgover">
      <div class="cout">
        <div class="cin">
          <div>88</div>
          <div>收藏</div>
        </div>
        <div class="cin">
          <div>66</div>
          <div>点赞</div>
        </div>
        <div class="cin" style="border:0;">
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.cout {
  display: flex;
}
.cin {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  border-right: 1px solid #000;
  padding: 0 20px;
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 78px;
  height: 78px;
  line-height: 78px;
  text-align: center;
}
.avatar {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  display: block;
}
</style>
<script>
export default {
  data() {
    return {
      nickname: "用户昵称",
      imageUrl:
        "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
      account: this.$store.getters.userAccount
    };
  },
  created:function() {
     this.axios
        .post("/getuserinfo",{account:this.account})
        .then(res => {
          console.log(res.data);
          this.nickname=res.data[0].nickname;
          this.imageUrl=res.data[0].avater;
        })
        .catch(err => {
          console.log(err);
        });
    
  },
  methods: {
    onload: function() {
      console.log(body);
    },

    errorHandler() {
      return true;
    },
    changeName: function(e) {
      //     alert("ok");
      //   if (e.charCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      var newnick = document.querySelector(".nickname").innerHTML;
      this.nickname = newnick;
      alert("修改成功");
       this.axios
        .post("/nickname",{nickname:this.nickname,account:this.account})
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      //   }
    },
    handleAvatarSuccess(res, file) {
      console.log(res.data.src, file);
      this.imageUrl=res.data.src;
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.axios
        .post("/avater",{img:this.imageUrl,account:this.account})
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      // this.axios.post('/avater',this.imageUrl).then(res=>{
      //     console.log(res);
      // }).catch(err=>{
      //  console.log(err);
      // })
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  mounted() {}
};
</script>