<template>
    <div class="all">
        <div>
            <div class="User">
                <div class="u"></div>
                <div class="umsg">
                    <div>昵称</div>
                    <div>简介：暂无简介</div>
                </div>
                <div></div>
            </div>
            <ul class="ul">
                <li>动态</li>
                <li>关注</li>
                <li>粉丝</li>
            </ul>

        </div>
        <div class="kong"></div>
        <div>
            <ul class="list">
                <li><i class="el-icon-s-finance"></i><span>了解会员特权</span></li>
                <li><i class="el-icon-s-management"></i><span>个性装扮</span></li>
                <li><i class="el-icon-eleme"></i><span>我的收藏</span></li>
                <li><i class="el-icon-picture"></i><span>我的相册</span></li>
            </ul>
        </div>
        <div class="kong"></div>
        <div class="page">
            <div>超话专区</div>
            <div>
                <div><img src="../assets/02.jpg" alt="">
                    <div>舒远</div>
                </div>
                <div><img src="../assets/03.jpg" alt="">
                    <div>estar</div>
                </div>
                <div><img src="../assets/04.jpg" alt="">
                    <div>吞海</div>
                </div>
                <div><img src="../assets/05.jpg" alt="">
                    <div>黄三</div>
                </div>
            </div>
        </div>
        <div class="kong"></div>
        <div class="last">
            <div>免流量</div>
            <div>我的运动</div>
            <router-link to="/del" tag="li">
                <div>草稿箱</div>
            </router-link>
        </div>

        <bottoms></bottoms>
    </div>
</template>
<script>
</script>
<style>
    ul,
    li {
        list-style: none;
    }

    .all {
        padding-top: 10px;
        box-sizing: border-box;
    }

    .User {
        display: flex;
        justify-content: start;
        padding-left: 10px;


    }

    .u {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgb(209, 123, 123);
        margin-right: 10px;
    }

    .umsg {
        /* line-height: 50px; */
        padding-top: 15px;
        height: 60px;
        font-size: 12px;
        /* background-color: rgb(177, 123, 123); */
        box-sizing: border-box;
    }

    .ul {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-top: 1px solid rgba(0, 0, 0, 0.062);
        display: flex;
        justify-content: space-around;
    }

    .list {
        font-size: 30px;
        color: rgba(65, 125, 216, 0.849);
        display: flex;
        flex-direction: column;
        align-items: start;
        padding-left: 10px;
    }

    .list>li {
        margin-top: 20px;
    }

    span {
        margin-left: 20px;
        font-size: 16px;
        color: #090909;
    }

    .page>div:last-child {
        padding-top: 10px;
        display: flex;
        justify-content: space-around;
    }


    img {
        width: 60px;
        height: 60px;
        /* border: 1px solid black; */

    }

    .last div {
        height: 40px;
        text-align: left;
        padding-left: 20px;
        line-height: 40px;
    }
</style>