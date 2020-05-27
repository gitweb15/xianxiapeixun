<template>
  <div>

    <div style="position: fixed;z-index: 1;background-color: white;margin-top: 0px;width: 100%;height: 7%;">
      <router-link to='/zhifu' style="float: left;color: black;">
        <van-icon name="arrow-left" tag='p' />学习中课程</router-link>
    </div>
    <div style="float: left;text-align: left;margin: 10px;margin-top: 50px;">

      <div style="width: 100%;background: #EEEEEE;padding: 10px;margin-top: 20px;">
        <img src="../../assets/2.png" style="width: 50%;" />
        <div style="float: right;" class="red">
          <p>英语个性化一对一教学</p>
          <p>￥1500/10课时</p>
        </div>
        <van-divider />
        <p>课程剩余节数 </p>
        <p class="gray">如需退款请线下联系</p>
        <router-link type="info" style="background-color: white;color: #0000FF;border:1px solid #1989FA;" class='sq'
          tag='van-button' to='/zhuanxiao'>转校审核中</router-link>
        <van-button type="info" style='float: right;margin-top: -65px;' to='/kecheng'>立即续费</van-button>

      </div>
      <div style="width: 100%;background: #EEEEEE;padding: 10px;margin-top: 20px;">
        <img src="../../assets/2.png" style="width: 50%;" />
        <div style="float: right;" class="red">
          <p>英语个性化一对一教学</p>
          <p>￥1500/10课时</p>
        </div>
        <van-divider />
        <p>课程剩余节数 </p>
        <p class="gray">如需退款请线下联系</p>
        <router-link type="info" style="background-color: white;color: #0000FF;border:1px solid #1989FA;" class='sq'
          tag='van-button' to='/zhuanxiao'>转校申请</router-link>
        <van-button type="info" style='float: right;margin-top: -65px;' to='/kecheng'>立即续费</van-button>

      </div>
      <div style="width: 100%;background: #EEEEEE;padding: 10px;margin-top: 20px;">
        <img src="../../assets/2.png" style="width: 50%;" />
        <div style="float: right;" class="red">
          <p>英语个性化一对一教学</p>
          <p>￥1500/10课时</p>
        </div>
        <van-divider />
        <p>课程剩余节数 </p>
        <p class="gray">如需退款请线下联系</p>
        <router-link type="info" style="background-color: white;color: #0000FF;border:1px solid #1989FA;" class='sq'
          tag='van-button' to='/zhuanxiao'>转校申请</router-link>
        <van-button type="info" style='float: right;margin-top: -65px;' to='/kecheng'>立即续费</van-button>

      </div>
      <div style="width: 100%;background: #EEEEEE;padding: 10px;margin-top: 20px;">
        <img src="../../assets/2.png" style="width: 50%;" />
        <div style="float: right;" class="red">
          <p>英语个性化一对一教学</p>
          <p>￥1500/10课时</p>
        </div>
        <van-divider />
        <p>课程剩余节数 </p>
        <p class="gray">如需退款请线下联系</p>
        <router-link type="info" style="background-color: white;color: #0000FF;border:1px solid #1989FA;" class='sq'
          tag='van-button' to='/zhuanxiao'>转校申请</router-link>
        <van-button type="info" class='xf' to='/kecheng'>立即续费</van-button>

      </div>
      <p style="color: #999;text-align: center;">没有更多内容了</p>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .sq {
    float: right;
    margin-top: -65px;
    margin-right: 110px;
    background: #1989fa;
    color: white;width: 105px;border-radius: 10px;
  }

  .xf {
    float: right;border-radius: 10px;
    margin-top: -65px;
  }

  .gray {
    color: #999999;
  }

  .red p:nth-child(2) {
    color: red;
  }
</style>
