<template>
    <div>
        <nav>
            <div>取消</div>
            <div>分享动态</div>
            <div @click="changMsg">发布</div>
        </nav>
        <!-- <div class="share"> -->
        <van-cell-group>
            <van-field v-model="message" rows="5" autosize="true" type="textarea" placeholder="分享新鲜事..." />
        </van-cell-group>
        <van-uploader v-model="fileList" multiple :max-count="9" />
        <!-- </div> -->

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
                fileList: [],
                message: ""
            }
        },
        created: function () {
            this.axios
                .get("/getdelCon") //发起请求
                .then(response => {
                    console.log(response)
                    response.data.forEach(element => {
                        console.log(element)
                    //     console.log(this.dataShow)
                        this.message = element.delcontent;
                        console.log(this.message)
                    // });
                })
            })
            
                .catch(function (error) {
                    console.log(error);
                });
        },
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            },
            changMsg() {
                // this.message = this.message;
                console.log(this.message)

                this.axios
                    .post("/addContent", {
                        constent: this.message
                    }) //发起请求
                    .then(response => {
                        console.log(response.data);

                    })
                    .catch(function (error) {
                        console.log(error);
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