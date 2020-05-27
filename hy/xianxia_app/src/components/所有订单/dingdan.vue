<template>
  <div style="float: left;text-align: left;margin: 30px;">
    <div>
      <img src="../../assets/2.png" style="width: 50%;" />
      <img src="../../assets/11.png" style="width: 10%;float: right;margin-top: -10px;margin-right: -15px;" />
      <div style="float: right;margin-top: -100px;" class="red">
        <p>英语个性化一对一教学</p>
        <p>￥1500/10课时</p>
      </div>
    </div>
    <van-divider />
    <p>2019-4-12 11:36:14 <span style='margin-top: 0px;float: right;margin-right: -20px;width: 150px;'>剩余
        <van-count-down :time="time" style='margin-top: 2px;float: right;margin-right: 50px;' /></span></p>
    <div style="float: right;">
      <van-button type="default">取消支付</van-button>
      <van-button type="info" style='margin-left: 20px;' to='/kecheng'>立即支付</van-button>
    </div>

    <div>
      <img src="../../assets/2.png" style="width: 50%;" />
      <img src="../../assets/11.png" style="width: 10%;float: right;margin-top: -10px;margin-right: -15px;" />
      <div style="float: right;margin-top: -100px;" class="red">
        <p>英语个性化一对一教学</p>
        <p>￥1500/10课时</p>
      </div>
    </div>
    <van-divider />
    <p>2019-4-12 11:36:14 <span style='margin-top: 0px;float: right;margin-right: -20px;width: 150px;'>剩余
        <van-count-down :time="time" style='margin-top: 2px;float: right;margin-right: 50px;' /></span></p>
    <div style="float: right;">
      <van-button type="default">取消支付</van-button>
      <van-button type="info" style='margin-left: 20px;'>立即支付</van-button>
    </div>
    <div>
      <img src="../../assets/2.png" style="width: 50%;" />
      <img src="../../assets/12.png" style="width: 10%;float: right;margin-top: -10px;margin-right: -15px;" />
      <div style="float: right;margin-top: -100px;" class="red">
        <p>英语个性化一对一教学</p>
        <p>￥1500/10课时</p>
      </div>
    </div>
    <van-divider />
    <p>课程剩余节数：12节
    </p>
    <p style="color: #999;">如需退款请线下联系主讲老师</p>
    <div style="float: right;margin-top: -60px;">
      <van-button type="info" style='margin-left: 20px;'>立即续费</van-button>
    </div>

    <div>
      <img src="../../assets/2.png" style="width: 50%;" />
      <img src="../../assets/13.png" style="width: 10%;float: right;margin-top: -10px;margin-right: -15px;" />
      <div style="float: right;margin-top: -100px;" class="red">
        <p>英语个性化一对一教学</p>
        <p>￥1500/10课时</p>
      </div>
    </div>
    <van-divider />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: 10 * 60 * 60 * 1000,
      };
    },
  };
</script>

<style>
  .red p:nth-child(2) {
    color: red;
  }

  body {
    font-size: 17px;
  }
</style>
