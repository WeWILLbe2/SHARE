<template>
    <div>
        <div class="f">
            <van-button type="default">返回</van-button>
            <van-button type="default">发送</van-button>
        </div>

        <van-cell-group>
            <van-field v-model="message" autosize type="textarea" placeholder="分享新鲜事..." maxlength="500" is-link="true" row="10"/>
        </van-cell-group>

        <van-uploader v-model="fileList" multiple :max-count="9" />

        <bottoms></bottoms>
    </div>
</template>
<script>


</script>
<style>
    .van-uploader {
        position: relative;
        display: inline-block;
        float: left;
        left: 20px;
        margin-left: 10px;
    }

    .f {
        display: flex;
        justify-content: space-between;
    }
</style>