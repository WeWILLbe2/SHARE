<template>
    <div>
        <nav>
            <div @click="del">取消</div>
            <div>分享动态</div>
            <div @click="changMsg">发布</div>
        </nav>
        <!-- <div class="share"> -->
        <van-cell-group>
            <van-field v-model="message" rows="5" autosize="true" type="textarea" placeholder="分享新鲜事..." />
        </van-cell-group>
        <!-- <van-uploader v-model="fileList" multiple :max-count="9" action="http://localhost:8081/upload"
            :on-success="handleSuccess" /> -->
        <!-- </div> -->
        <el-upload action="http://localhost:8081/upload" list-type="picture-card" :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove" :on-success="handleSuccess">
            <i class="el-icon-plus"></i>
        </el-upload>
        <bottoms></bottoms>
    </div>

</template>
<script>
    import Vue from 'vue';
    import {
        Field,
        Uploader,
        Toast
    } from 'vant';
    Vue.use(Uploader);
    Vue.use(Field);
    export default {
        data() {
            return {
                textarea: '',
                fileList: [],
                message: "",
                myarr: [],
                // account

            }
        },
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            },
            // changMsg() {
            //     // this.message = this.message;
            //     console.log(this.message)

            //     this.axios
            //         .post("/addContent", {
            //             constent: this.message
            //         }) //发起请求
            //         .then(response => {
            //             console.log(response.data);

            //         })
            //         .catch(function (error) {
            //             console.log(error);
            //         });
            // },
            del() {
                this.axios
                    .post("/delContent", {
                        constent: this.message
                    }) //发起请求
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                this.$router.push({
                    path: "/Home"
                });
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleSuccess(response, file, fileList) {
                this.myarr.push(response.data.src)
                console.log(response.data.src)
                fileList.forEach(e => {
                    console.log(e.name)
                })
                console.log(fileList);
            },
            changMsg() {
                console.log(this.myarr.join(''));
                this.axios
                    .post("/addContent", {
                        // account: this.account,
                        constent: this.message,
                        img: this.myarr.join(',')
                    })
                    .then(res => {
                        console.log(res.data);
                        alert('发布成功');
                    })
                    .catch(err => {
                        console.log(err);
                    });
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

    .van-uploader__wrapper {
        padding-left: 10%;
    }

    .van-uploader__preview {
        position: relative;
        margin: 0px 12px 17px 4px;
    }
</style>