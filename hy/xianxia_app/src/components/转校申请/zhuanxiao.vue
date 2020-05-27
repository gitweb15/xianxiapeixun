<template>
  <div>

    <div style="float: left;text-align: left;margin: 30px;">
      <p @click='left'>
        <van-icon name="arrow-left"/>
      </p>
      <div>
        <p>用户名称:耐寒教育</p>
        <p>用户手机:18802329867</p>
      </div>
      <div>
        <img src="../../assets/2.png" style="width: 40%;" />
        <div style="float: right;" class="red">
          <p>英语个性化一对一教学</p>
          <p><span>￥1500/10课时</span><span style="float: right;color: #999;">剩余12节</span></p>
        </div>
      </div>
      <p>
        <van-cell title="选择学员" is-link arrow-direction="" value="" style='color: black;' />
        <span style="color: #999999;margin-top: -32px;z-index: 1;position: absolute;margin-left: 240px;">已选择2人</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="选择校区及教师" is-link arrow-direction="" value="" style='color: black;' />
        <span style="color: #999999;margin-top: -32px;z-index: 1;position: absolute;margin-left: 200px;">福清校区 侯晨阳</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="原校区剩余余额" is-link arrow-direction="" value="" style='color: #999;' />
        <span style="color: #999999;margin-top: -32px;z-index: 1;position: absolute;margin-left: 240px;">￥1500.00</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="新校区课程价格" is-link arrow-direction="" value="" style='color: #999;' />
        <span style="color: #999999;margin-top: -32px;z-index: 1;position: absolute;margin-left: 240px;">￥1700.00</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="需补差价" is-link arrow-direction="" value="" style='color: #999;' />
        <span style="color: red;margin-top: -30px;z-index: 1;position: absolute;margin-left: 240px;">￥200.00</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="若新校区价格低,则将返您等额优惠券" is-link arrow-direction="" value="" style='color: #999;' />

      </p>
      <van-divider />
      <div style="background: white;width: 100%;position: fixed;z-index: 1;bottom: 0px;">
        <span style="color: red;float: left;margin-left: 30px;margin-top: 5px;font-size: 25px;">￥200.00</span>
        <router-link tag='span' to='zhifu' style="float: right;margin-right: 0px;border-radius: 0px 0px 10px 0px;background: #0000FF;width: 40%;height: 50px;color: white;line-height: 50px;padding-left: 50px;">立即支付</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      left() {
        this.$router.go(-1);
      },

    }
  }
</script>

<style scoped>
  .red {
    width: 50%;
    margin-top: 10px;
    margin-left: 10px;
  }

  .red p:nth-child(2) {
    color: red;
  }
</style>
