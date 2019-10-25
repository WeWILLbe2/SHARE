<template>
  <div>
    <div class="p-all">
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 7}"
        placeholder="说点什么吧..."
        v-model="textarea2"
      ></el-input>
      
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" id="upl" style="max-width:100px !important;max-height:100px;">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
      <el-button type="primary" plain>主要按钮</el-button>
    </div>
  </div>
</template>
<style scoped>
.p-all {
  /* width: 100%; */
  min-width: 400px;
  max-width:500px;
  border: 1px solid gray;
  border-radius: 4px;
  padding:5px;
}

.el-textarea .el-textarea__inner{
  resize: none ;
  /* text-indent: 2em; */
  border: 0;
  outline: 0;
}
#upl .el-upload--picture-card{
  width: 100px !important;
  height: 100px !important;
}
</style>
<script>
export default {
  data() {
    return {
      textarea2: "",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>