<template>
  <el-card   shadow="hover" style="max-width:1000px;min-width:600px;margin:0 auto"  >
    <div style="display:flex;justify-content:space-between;align-items:center;width:80%">
      <div style="display:flex;">
        <el-avatar :size="60" @error="errorHandler">
          <img :src="imgurl" />
        </el-avatar>
        <p style="margin-left:10px;">{{nickname}}</p>
      </div>
      <div>{{ptime}}</div>
    </div>

    <div style="display:flex;justify-content:space-around;align-items:center">
      <div style="width:80%">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for='item in myimg'  :key="item">
            <img class="image" :src='item'>
          </el-carousel-item>
          <!-- <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item> -->
        </el-carousel>
      </div>
      <div class="btn">
        <div class="dz" @click="likes">
          <i class="iconfont icon-dianzan" ref="likes"></i>
          <span>{{dz}}</span>
        </div>
        <div class="dz" @click="collect">
          <i class="iconfont icon-shoucang" ref="collect"></i>
          <span>{{sc}}</span>
        </div>
      </div>
    </div>
    <div
      ref="mydescripe"
      class="mydescripe"
    >{{description}}</div>
    <div style="display:flex;justify-content:center;width:80%;">
      <i :class="tb" id="tb" ref="tog" @click="toggle">{{togstate}}</i>
    </div>
  </el-card>
</template>
<style scoped>

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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.mydescripe {
  text-align: justify;
  width: 80%;
}

#tb:hover {
  color: #409eff;
}
.dz {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.dz i {
  font-size: 30px;
  color: gray;
}
.dz span {
  font-size: 14px;
  text-align: center;
}
.btn {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* align-items: center; */
}
.image{
  width:100%;
  height:auto;
}

</style>
<script>
export default {
  data() {
    return {
      desHeight: "",
      togstate: "展开",
      flag: true,
      flags: true,
      flag1: true,
      tb: "el-icon-caret-bottom",
      imgurl:
        "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
      nickname: "",
      ptime: "",
      myimg:  [
         
        ],
        imgnum:0,
      dz: 0,
      sc: 0,
      description:'',
      eveimg:'',
      alldata:[]
    };
  },
created:function(){
  this.axios
        .post("/getinfor")
        .then(res => {
          console.log(res.data);
         this.alldata=res.data;
          this.nickname=res.data[0].nickname;
          this.imgurl=res.data[0].avater;
          this.ptime=res.data[0].ptime;
          this.dz=res.data[0].dz;
          this.sc=res.data[0].sc;
          this.description=res.data[0].description;
          this.myimg=res.data[0].img.split(',');
          this.imgnum=this.myimg.length;
          console.log( this.myimg[0]);
          this.myimg.forEach(e=>{
            this.eveimg=e;
          })
        console.log(this.eveimg)
        })
        .catch(err => {
          console.log(err);
        });
},
  mounted() {
    this.desHeight = parseInt(
      window.getComputedStyle(this.$refs.mydescripe).height
    );
    console.log(this.desHeight);
    if (this.desHeight > 42) {
      this.$refs.mydescripe.style.height = 42 + "px";
      this.$refs.mydescripe.style.overflow = "hidden";
    }
  },
  methods: {
    errorHandler() {
      return true;
    },
    toggle() {
      this.flag = !this.flag;
      if (!this.flag) {
        this.togstate = "收起";
        this.tb = "el-icon-caret-top";
        this.$refs.mydescripe.style.height = "100%";
        this.$refs.mydescripe.style.overflow = "visible";
        //   this.$refs.tog[after].style.borderColor="transparent transparent red transparent";
      } else {
        this.togstate = "展开";
        this.tb = "el-icon-caret-bottom";
        this.$refs.mydescripe.style.height = 42 + "px";
        this.$refs.mydescripe.style.overflow = "hidden";
      }
    },
    likes() {
      this.flags = !this.flags;
      if (!this.flags) {
        this.$refs.likes.style.color = "yellow";
        this.dz++;
      } else {
        this.$refs.likes.style.color = "gray";
        this.dz--;
      }
    },
    collect() {
      this.flag1 = !this.flag1;
      if (!this.flag1) {
        this.$refs.collect.style.color = "red";
         this.sc++;
      } else {
        this.$refs.collect.style.color = "gray";
        this.sc--;
      }
    }
  }
};
</script>