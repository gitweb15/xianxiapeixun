<template>
    <div class="appZ">
        <div class="main">
            <h3>向客户收款</h3>
            <p>￥1500.00</p>
            <div>
                <img src="@/assets/img/bivector.png" alt="二维吗">
            </div>
        </div>
        <van-button type="info" block>客户线下支付完成</van-button>
    </div>
</template>

<script>
export default {
    name: 'Bivector'
}
</script>

<style scoped>
.appZ{
    padding: 20px;
}
.main{
    margin-top: 10%;
    box-shadow: 0px 0px 15px #ccc;
    padding-top: 10px; 
}
.main>h3{
    border-left: 5px solid #3673ff;
    text-align: left;
    line-height: 30px;
    padding-left: 10px;
    font-size: 16px;
}
.main>p{
    margin: 10px 0;
    color: #999;
    font: 800 16px '微软雅黑'
}
.main>div{
    padding: 10px 0 20%;
}
.appZ>button{
    margin-top: 10%;
    border-radius: 5px;
    box-shadow:  3px 3px 15px #ccc;
}
</style>