<template>
  <div style="float: left;text-align: left;margin: 30px;">
    <div>
      <img src="../../assets/2.png" style="width: 50%;" />
      <div style="float: right;" class="red">
        <p>英语个性化一对一教学</p>
        <p>￥1500/10课时</p>
      </div>
    </div>
    <p>
     <van-cell title="选择学员" is-link arrow-direction="" value="" style='color: black;' />
     <span style="z-index: 1;position: absolute;right: 70px;top:160px;color: #999999;">学员姓名</span>
    </p>
    <van-divider />
    <p>
     <van-cell title="选择校区及教师" is-link arrow-direction="" value="" style='color: black;' />
     <span style="z-index: 1;position: absolute;right: 70px;top:237px;color: #999999;">福清校区 侯晨阳</span>
    </p>
    <van-divider />
    <p>
     <van-cell title="价格" is-link arrow-direction="" value="" style='color: #999;' />
     <span style="z-index: 1;position: absolute;right: 70px;top:315px;color: #999999;">￥1500.00</span>
    </p>
    <van-divider />
    <p>
     <van-cell title="学员数量" is-link arrow-direction="" value="" style='color: #999;' />
     <span style="z-index: 1;position: absolute;right: 70px;top:395px;color: #999999;">1</span>
    </p>
    <van-divider />
    <p>
     <van-cell title="实付" is-link arrow-direction="" value="" style='color: #999;' />
     <span style="z-index: 1;position: absolute;right: 70px;top:468px;color: #999999;">￥1500.00</span>
    </p>
    <van-divider />

    <div>
       <span style="color: red;float: left;margin-left: 20px;margin-top: 145px;font-size: 25px;">￥1500.00</span>
       <router-link to='/shoukuan' style="float: right;margin-right: -30px;border-radius: 0px 0px 10px 0px;background: #0000FF;width: 100px;height: 50px;color: white;line-height: 50px;padding-left: 40px;margin-top: 145px;">立即收款</router-link>
     </div>
  </div>
</template>

<script>
</script>

<style>
  .red p:nth-child(2) {
    color: red;
  }
</style>
