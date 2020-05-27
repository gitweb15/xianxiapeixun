<template>
  <div>
    <div style="position: fixed;z-index: 1;background-color: white;margin-top: -95px;width: 100%;height: 3%;">
      <p @click='left' style="float: left;color: black;">
        <van-icon name="arrow-left"/>支付成功</p>
    </div>
    <div style="margin-top: 150px;">
      <img src="../../assets/14.png" style='width:30%;height: 100%;' />
      <p>支付成功</p>
      <!-- <p>请等待管理员审核</p> -->
      <div style="margin-top: 120px;">
        <router-link type="info" style='width: 80%;' tag='van-button' to='/study' class="look">查看订单</router-link>
        <router-link type="info" class='fanhui' to='/infoKC' tag='van-button'>返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
    left() {
      this.$router.go(-1);
    },
    }
  }
</script>

<style scoped>
  .look {
    background: #1989fa;
    color: white;
  }

  .fanhui {
    margin-top: 20px;
    background: white;
    color: rgb(0, 0, 255);
    width: 80%;
  }
</style>
