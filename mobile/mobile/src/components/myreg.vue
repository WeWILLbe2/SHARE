<template>
  <div class="myform">
      
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        

      <el-form-item id="a1" label="账号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="passW">
        <el-input v-model="ruleForm.passW" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="rePassW">
        <el-input v-model="ruleForm.rePassW" type="password"></el-input>
      </el-form-item>
      <el-form-item id="myr"> 
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
  export default {
    data: function () {
      var validatename = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入账号"));
        } else {
          if (/^1[3456789]\d{9}$/.test(value)) {
            callback();
          } else {
            callback(new Error("账号为11 为手机号"));
          }
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          if (
            /^(?=.*\d+)(?=.*_+)(?=.*[a-zA-Z]+)(?=.*\W+).{6,16}$/gim.test(value)
          ) {
            if (this.ruleForm.rePassW !== "") {
              this.$refs.ruleForm.validateField("rePassW");
            }
            callback();
          } else {
            callback(new Error("密码须包含字母/数字/下划线/特殊字符,6~16位"));
          }
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm.passW) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {

        ruleForm: {
          name: "",
          passW: "",
          rePassW: "",
          nickname: "",
        },
        rules: {
          name: [{
              required: true,
              message: "请输入账号",
              trigger: "blur"
            },
            {
              validator: validatename,
              trigger: "blur"
            }
          ],
          nickname: [{
            required: true,
            message: "请输入昵称",
            trigger: "blur"
          }],
          passW: [{
              required: true,
              message: "请输入用户密码",
              trigger: "blur"
            },
            {
              min: 6,
              max: 16,
              message: "长度在 6 到 16 个字符",
              trigger: "blur"
            },
            {
              validator: validatePass,
              trigger: "blur"
            }
          ],
          rePassW: [{
              required: true,
              message: "请重新输入密码",
              trigger: "blur"
            },
            {
              min: 6,
              max: 16,
              message: "长度在 6 到 16 个字符",
              trigger: "blur"
            },
            {
              validator: validatePass2,
              trigger: "blur"
            }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.axios
              .post("/regist", this.ruleForm)
              .then(response => {
                if (response.data.msg == "username_has_exited") {
                  this.$alert("该用户名已注册", "注册失败", {
                    confirmButtonText: "确定",
                    callback: action => {}
                  });
                } else {
                  this.$message("注册成功");
                  this.$router.push({
                    path: "/login"
                  });
                }
              })
              .catch(function (error) {
                console.log(error);
              });
            // alert('submit!');
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>
<style>

.el-form-item {
    margin-bottom: 22px;
    padding-right: 65px;
}
/* #myr{
  margin-left: 100px;
} */
</style>