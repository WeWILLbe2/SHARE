<template>
  <div>
    <div class="p-all">
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="textarea2"
      ></el-input>
      <p>{{textarea2}}</p>
    </div>
  </div>
</template>
<style scoped>
.p-all {
  /* max-width: 400px;
  min-width: 300px;
  height: 400px; */
  width:100%;
  border: 1px solid gray;
}
</style>
<script>
export default {
    data(){
        return{
            textarea2: ''
        }
    }
};
</script>