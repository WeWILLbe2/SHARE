<template>
  <div>
     
    <el-button-group>
      <el-button type="primary" class="collect1" ref="chose11" icon="el-icon-s-check"  v-bind:style="mycolor1" @click="chose1">我的动态</el-button>
      <el-button type="primary" class="collect2" ref="chose22" icon="el-icon-star-on"  v-bind:style="mycolor2" @click="chose2">我的收藏</el-button>
      
    </el-button-group>
     
  </div>
</template>
<style scoped>
.collect2{
    background-color: azure;
    color:#66b1ff;
}
.collect1,.collect2:hover{
     background-color:#66b1ff;
    color:#fff;
}
</style>>


<script>
export default {
    data(){
        return{
           mycolor1:{
               background:'#66b1ff',
               color:'#fff'
           },
           mycolor2:{
                background:'#fff',
               color:'#66b1ff'
           },
           fg:true
        }
    },
    methods:{
        chose1(){
            this.fg=!this.flag;
               this.mycolor1.background="#66b1ff";
              this.mycolor1.color="#fff";
              this.mycolor2.background="#fff";
              this.mycolor2.color="#66b1ff";
        },
         chose2(){
            this.fg=!this.flag;
               this.mycolor1.background="#fff";
              this.mycolor1.color="#66b1ff";
              this.mycolor2.background="#66b1ff";
              this.mycolor2.color="#fff";
            
           
        }
    }
}
</script>