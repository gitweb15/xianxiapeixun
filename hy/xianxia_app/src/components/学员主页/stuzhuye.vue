<template>
  <div>
    <div class="imgCss clear">
      <img src="../../assets/2.png" style="width: 100%;height: 100%;" />
      <div style="position: absolute;z-index: 1;top:40px;">
        <img src="../../assets/16.png" />
        <div style="position: absolute;top: 10px;left: 50px;width: 100px;">
          <p>学员姓名</p>
          <p>小学-六年级</p>
          <van-button type="info" style='position: absolute;left: 180px;width: 100%;top: 10px;' to='/liebiao'>立即报名</van-button>
        </div>
      </div>
    </div>
    <div class="one">
      <p><span style="background: #0000FF;width: 20px;height: 20px;border: 1px solid #0000FF;"></span><span>已报名课程</span></p>
    </div>
    <div class="img">
      <img src="../../assets/2.png">
    </div>
    <div class="left">
      <p>英语个性化一对一教学</p>
      <p style="color: red;">￥1500/10课时</p>
    </div>
    <p class="kc">课程剩余节数:12节</p>
    <van-button type="info" class='info'>立即续费</van-button>
    <div class="img">
      <img src="../../assets/2.png">
    </div>
    <div class="left">
      <p>英语个性化一对一教学</p>
      <p style="color: red;">￥1500/10课时</p>
    </div>

    <p class="kc">课程剩余节数:12节</p>
    <van-button type="info" class='info'>立即续费</van-button>
    <div class="img">
      <img src="../../assets/2.png">
    </div>
    <div class="left">
      <p>英语个性化一对一教学</p>
      <p style="color: red;">￥1500/10课时</p>
    </div>

    <p class="kc">课程剩余节数:12节</p>
    <van-button type="info" class="xf">立即续费</van-button>
  </div>
</template>

<script>
</script>

<style scoped>
  .info {
    float: right;
    margin-left: 20px;
    margin-right: 40px;
    margin-top: -50px;
  }

  .left {
    float: right;
    margin-top: -120px;
    text-align: left;
    margin-right: 20px;
  }

  .img {
    width: 50%;
    text-align: left;
    margin-left: 10px;
  }

  .kc {
    text-align: left;
    margin-left: 20px;
    width: 50%;
  }

  .xf {
    float: right;
    margin-left: 20px;
    margin-right: 40px;
    margin-top: -50px;
  }

  .one {
    text-align: left;
  }

  .one p:nth-child(1) {
    text-align: left;
    margin-left: 20px;

  }

  .one span:nth-child(2) {
    padding-left: 20px;
  }

  .red p:nth-child(2) {
    color: red;
  }

  .imgCss {
    overflow: hidden;
    width: 100%;
    height: 200px;
    background: #ccc;
    background-size: 100% 250px;
  }

  .imgCss>div {
    float: left;
    position: relative;
    top: 20%;
    text-align: left;
    color: white;
  }

  .imgCss>div:first-child {
    margin-left: 30px;
  }

  .imgCss>div:last-child {
    margin-left: 20px;
    padding-top: 15px;
  }

  .imgCss>div:last-child span {
    margin-left: 10px;
    font-size: 12px;
  }

  .imgCss>div:last-child>p:last-child {
    margin-top: 5px;
  }
</style>
