<template>
    <div>
        <van-cell-group>
            <van-field v-model="username" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名"
                @click-right-icon="$toast('question')" />
            <br>
            <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
            <div class="lr">
                <van-button color="linear-gradient(to right, rgb(217, 227, 234), rgb(156, 179, 63))">注册</van-button>
                <div class="kong"></div>
                <van-button color="linear-gradient(to right, rgb(217, 227, 234), rgb(156, 179, 63))" class="login">登陆
                </van-button>
            </div>
        </van-cell-group>
    </div>
</template>
<style>
    .home {
        height: 33rem;
        /* background-image: url("../assets/123.gif"); */
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(212, 187, 187);
    }


    .login {
        margin-top: 3rem;
    }

    .van-button {
        width: 6rem;
    }

    .kong {
        display: inline-block;
        width: 50px;
    }
</style>