<template>
  <el-card shadow="hover" style="max-width:1000px;margin:0 auto">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div style="display:flex;">
        <el-avatar :size="60"  @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
        <p style="margin-left:10px;">这是用户名</p>
      </div>
      <div>这是发布时间</div>
    </div>
    <div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  
    <div ref="mydescripe" class="mydescripe">
   这是内容 这是内容 这是内容这是内容 这是内容 这是内容 这是内容这是内容 这是内容  这是内容 这是内容这是内容 这是内容 这是内容 这是内容这是内容  这是内容这是内容 这是内容  这是内容 这是内容这是内容 这是内容 这是内容 这是内容这是内容 这是内容 这是内容 这是内容这是内容 这是内容  这是内容 这是内容这是内容 这是内容 这是内容 这是内容这是内容  这是内容这是内容 这是内容  这是内容 这是内容这是内容 这是内容这是内容这是内容 这是内容 这是内容 这是内容这是内容 这是内容  这是内容 这是内容这是内容 这是内容 这是内容 这是内容这是内容  这是内容这是内容 这是内容  这是内容 这是内容这是内容 这是内容 这是内容 这是内容这是内容 这是内容 这是内容 这是内容这是内容 这是内容  这是内容 这是内容这是内容 这是内容 这是内容 这是内容这是内容  这是内容这是内容 这是内容  这是内容 这是内容这是内容 这是内容
    </div>
   <div style="display:flex;justify-content:center">
 <i :class="tb" id="tb" ref="tog" @click="toggle">
        {{togstate}}
    </i>
   </div>
   
  
  </el-card >
</template>
<style scoped>
/* el-avater::after{
content:'<p>这是用户名</p>';
font-size: 20px;
} */
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .mydescripe{
     text-align: justify;
  }
  
 

  #tb:hover{
      color:#409EFF;
  }
  
</style>
<script>
export default {
    data(){
    return{
        desHeight:'',
        togstate:"展开",
        flag:true,
        tb:"el-icon-caret-bottom"
       
    }
    },
 
    mounted(){
       this.desHeight=parseInt(window.getComputedStyle(this.$refs.mydescripe).height) ;
       console.log(this.desHeight);
       if(this.desHeight>42){
            this.$refs.mydescripe.style.height=42+"px";
           this.$refs.mydescripe.style.overflow="hidden";
          
       }

    },
  methods: {
 
    errorHandler() {
      return true;
    },
    toggle(){
       
       this.flag=!this.flag;
        if(!this.flag){
           
            this.togstate="收起";
            this.tb="el-icon-caret-top";
               this.$refs.mydescripe.style.height='100%';
             this.$refs.mydescripe.style.overflow="visible";
            //   this.$refs.tog[after].style.borderColor="transparent transparent red transparent";
        }
        else{
             this.togstate="展开";
             this.tb="el-icon-caret-bottom";
               this.$refs.mydescripe.style.height=42+"px";
              this.$refs.mydescripe.style.overflow="hidden";
        }
       
    }
  }
};
</script>