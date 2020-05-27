<template>
  <div style="border: 1px solid gainsboro;height: 380px;margin: 20px;">
    <p><span style="border: 1px solid gainsboro;background: #0000FF;float: left;margin-left: 10px;height: 20px;"></span><span
        style="float: left;margin-left: 10px;font-weight: bold;">向客户收款</span></p>
    <p style="color: #606266;text-align: center;margin-top: 80px;">￥1500.00</p>
    <p><img src="../../assets/4.png"></p>
    <router-link type="info" block class="success" to='/zhifu' tag='van-button'>客户线下支付完成</router-link>
  </div>
</template>

<script>
</script>

<style scoped>
  .success{
    margin-top: 220px;
   background: #1989fa;
   color: white;width: 70%;
  }
</style>
