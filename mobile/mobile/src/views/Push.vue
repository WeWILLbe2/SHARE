<template>
    <div>
        <nav>
            <div>取消</div>
            <div>分享动态</div>
            <div>发布</div>
        </nav>
        <div class="share">
            <van-cell-group>
                <van-field v-model="message" rows="5" autosize="true" type="textarea" placeholder="分享新鲜事..." />
            </van-cell-group>
            <van-uploader v-model="fileList" multiple :max-count="9" />
        </div>
        <bottoms></bottoms>
    </div>

</template>
<script>
    import Vue from 'vue';
    import {
        Field,
        Uploader
    } from 'vant';
    Vue.use(Uploader);
    Vue.use(Field);
    export default {
        data() {
            return {
                textarea: '',
                fileList: []
            }
        },
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            }
        }
    }
</script>
<style>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: #e6e6e685;
        box-sizing: border-box;
    }
    .van-uploader__wrapper{
        padding-left: 10%;
    }
    .van-uploader__preview {
    position: relative;
    margin: 0px 12px 17px 4px;
}
</style>