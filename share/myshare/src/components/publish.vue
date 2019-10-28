<template>
  <div>
    <div class="p-all">
      <div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 7}"
        placeholder="说点什么吧..." maxlength='200'
        v-model="textarea2"
      ></el-input>
      </div>
      <div>
        
      <el-upload 
        action="http://localhost:8081/upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible"  >
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
      </div>
      <div style="display:flex;justify-content:center">
      <el-button type="primary" plain @click="publish">发布</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.p-all {
  /* width: 100%; */
  min-width: 400px;
  max-width:500px;
  /* min-height:400px; */
  border: 1px solid #EBEEF5;
  border-radius: 4px;
  padding:15px;
 
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap; */
  /* align-items: center; */
  /* justify-content: space-around; */
   /* align-content:space-around; */

}
.p-all:hover{
 box-shadow: 2px 2px 5px #ccc;
}
.p-all>div{
  margin-bottom: 15px;
}
.el-textarea__inner{
  margin-bottom:10px !important;
}

.el-textarea .el-textarea__inner{
  resize: none ;
  /* text-indent: 2em; */
  border: 0;
  outline: 0;
  /* margin-bottom: 10px !important; */
}
 .el-upload .el-upload--picture-card{
  width: 10px !important;
  height: 100px !important;
  line-height:100px;
}
</style>
<script>
export default {
  data() {
    return {
      textarea2: "",
      dialogImageUrl: "",
      dialogVisible: false,
      myarr:[],
       account: this.$store.getters.userAccount
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess(response, file, fileList){
      this.myarr.push(response.data.src)
      console.log(response.data.src)
      fileList.forEach(e=>{
        console.log(e.name)
      })
      console.log(fileList);
    },
    publish(){
      console.log(this.myarr.join(''));
       this.axios
        .post("/addContent",{account:this.account,constent:this.textarea2,img:this.myarr.join(',')})
        .then(res => {
          console.log(res.data);
           alert('发布成功');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>