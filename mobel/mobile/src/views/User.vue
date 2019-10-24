<template>
    <div class="all">
        <div class="top">
                <van-icon name="manager-o" />
                <div class="k"></div>
                <van-icon name="discount" />
        </div>
        <div class="userMsg">
            <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <div>
                <div>昵称</div>
                <div>简介</div>
            </div>
        </div>
        <div class="list">
            <ul>
                <li>
                    <van-icon name="like-o" />
                </li>
                <li>
                    <van-icon name="share" />
                </li>
                <li>
                    <van-icon name="paid" />
                </li>
                <li>
                    <van-icon name="qr" />
                </li>
            </ul>
            <ul>
                <li>
                    <van-icon name="like-o" />
                </li>
                <li>
                    <van-icon name="share" />
                </li>
                <li>
                    <van-icon name="paid" />
                </li>
                <li>
                    <van-icon name="qr" />
                </li>
            </ul>
        </div>
        <div class="last">
            <ul>
                <li>免流量</li>
                <hr>
                <li>运动</li>
                <hr>
                <li>草稿箱</li>
                <hr>
                <li>退出</li>
                <div clear="both"></div>
            </ul>
        </div>
        <div class="chao">超话社区
            <div>超话签到是信仰，超话发帖是美德</div>
            <div class="put">
                <ul>
                    <li>这里是图片</li>
                    <li>这里是图片</li>
                    <li>这里是图片</li>
                    <li>这里是图片</li>
                </ul>
            </div>
        </div>
        <bottoms></bottoms>
    </div>
</template>
<style>
    .top{
       background-color: #fff; 
       margin-bottom: 10px;
       height: 3rem;
       font-size:24px;
       line-height: 3rem;
       /* display: flex;
       justify-content: space-between; */
    }
    .k{
        display: inline-block;
        width: 80%;
    }
    .all {
        padding-left: 4px;
        padding-right: 4px;
        background-color: #f4f4f4;
    }

    .userMsg {
        display: flex;
        background-color: #fff;
        border-radius: 5px;
        padding-left: 10px;
        padding-top: 10px;
        margin-bottom: 10px;
        height: 5rem;
    }

    .userMsg>div:last-child {
        margin-left: 10px;
        font-size: 14px;
        padding-top: 20px;
        color: rgb(92, 91, 89);
    }

    .list {
        background-color: #fff;
        margin-bottom: 10px;
        height: 5rem;
        font-size: 28px;
        padding-top: 12px;
    }

    .list>ul {
        display: flex;
        justify-content: space-evenly;
    }

    .last {
        height: 130px;
        background-color: #fff;
        margin-bottom: 10px;
        font-size: 14px;
    }
    .chao{
        width:100%;
        height: 150px;
        background-color: #fff;
        margin-bottom: 10px;
        font-size: 14px;
    }
    .put>ul{
        display: flex;
    }
    .put>ul>li{
        width: 100px;
        height: 90px;
        background-color: rgb(149, 73, 73);
        margin-left: 2px;
    }


</style>