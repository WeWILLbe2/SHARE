<template>
    <div class="bgc">
        <div>
            <div class="a"></div>
            <div class="name"><em>SHARE</em></div>
            <myreg></myreg>
            <div class="mylogin" @click="goLogin">我已有账号，去登陆</div>
        </div>
    </div>
</template>

<style>
    .bgc {
        background-image: url("../assets/00.jpg");
        /* background-repeat: no-repeat; */
        /* background-size: 100% 100%; */
        height: 670px;
        display: flex;
        justify-content: center;
    }

    .name {
        font-size: 34px;
        color: rgb(82, 141, 218);
        /* margin-top: 30px; */
        margin-bottom: 30px;
        ;
    }

    .a {
        height: 60px;
    }

    .mylogin {
        background-color: #6099d229;
        width: 168px;
        margin-left: 151px;
    }
</style>
<script>
export default{
    methods:{
        goLogin:function(){
        this.$router.push({ path: "/login" });
        }

    }

}

</script>