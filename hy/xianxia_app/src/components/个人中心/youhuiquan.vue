<template>
  <div class="body">
    <p @click="left" style="float: left;margin-top: -50px;color: black;">
      <van-icon name="arrow-left" />优惠券
    </p>
    <div class="title">
      <div><span style="border: 1px solid #0000FF;padding: 5px;background-color: #0000FF;text-indent: 20px;margin: 5px;"></span>优惠券管理</div>
      <img src="../../assets/17.png" style="width: 95%;height: 100%;">
      <img src="../../assets/17.png" style="width: 95%;height: 100%;">
      <img src="../../assets/17.png" style="width: 95%;height: 100%;">
      <img src="../../assets/17.png" style="width: 95%;height: 100%;">
      <img src="../../assets/22.png" style="width: 95%;height: 100%;">
      <img src="../../assets/22.png" style="width: 95%;height: 100%;">
      
    </div><p>没有更多内容了</p>
  </div>
</template>

<script>
  export default {
    methods: {
      left() {
        this.$router.go(-1);
      },
    },
  }
</script>


<style>
  img{
    margin: 20px 0px 0px 0px;
  }
  .title span:nth-child(2) {
    float: right;
    margin-top: -20px;
    margin-right: 30px;
  }

  .title {
    font-weight: bold;
    text-align: left;
    margin-left: 30px;
    margin-top: 100px;
  }

</style>
