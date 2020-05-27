<template>
  <div>
    
    <div style="margin-top: 50px;">
      <p style="margin-top: 40px;margin-left: -60px;"><van-search v-model="value" placeholder=""/></p>
      <van-tabs v-model="active">
        <van-tab title="高效晚辅导">
          <p style="margin-left: -230px;">高效晚辅导</p>
        </van-tab>
        <van-tab title="周末精品班">
          <p style="margin-left: -230px;">周末精品班</p>
        </van-tab>
        <van-tab title="个性化一对一">
          <p style="margin-left: -230px;">个性化一对一</p>
        </van-tab>
      </van-tabs>
      <!-- <p></p> -->
      <div>
        <ul class="ulli1" style="width: 100%;margin-top: 30px;">
          <li>
            <img src="../../assets/2.png" style="width: 170px;height: 150px;" />
            <p style="margin-left: -68px;">课程名称</p>
            <p style="margin-left: -33px;color: #999;">￥1500/10课时</p>
          </li>
          <li>
            <img src="../../assets/2.png" style="width: 170px;height: 150px;" />
            <p style="margin-left: -68px;">课程名称</p>
            <p style="margin-left: -33px;color: #999;">￥1500/10课时</p>
          </li>
          <li>
            <img src="../../assets/2.png" style="width: 170px;height: 150px;" />
            <p style="margin-left: -68px;">课程名称</p>
            <p style="margin-left: -33px;color: #999;">￥1500/10课时</p>
          </li>
          <li>
            <img src="../../assets/2.png" style="width: 170px;height: 150px;" />
            <p style="margin-left: -68px;">课程名称</p>
            <p style="margin-left: -33px;color: #999;">￥1500/10课时</p>
          </li>
          <li>
            <img src="../../assets/2.png" style="width: 170px;height: 150px;" />
            <p style="margin-left: -68px;">课程名称</p>
            <p style="margin-left: -33px;color: #999;">￥1500/10课时</p>
          </li>
          <li>
            <img src="../../assets/2.png" style="width: 170px;height: 150px;" />
            <p style="margin-left: -68px;">课程名称</p>
            <p style="margin-left: -33px;color: #999;">￥1500/10课时</p>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
  // export default {
  //   data() {
  //     return {
  //       active: 2,
  //     };
  //   },
  // };
</script>

<style scoped>
  .van-search .van-cell {
    margin-top: 30px;
    margin-left: -80px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 0.3125rem 0.5rem 0.3125rem 0;
    background-color: transparent;
}
  .ulli1 li {
    list-style-type: none;
    float: left;
    margin-left: 10px;
    border: 1px solid gainsboro;
    border-radius: 10px;
  }

  .ulli li {
    list-style-type: none;
    float: left;
    margin-left: 20px;
  }

  .ulli li:nth-child(4) {
    font-weight: bold;
  }

  .ulli li:nth-child(1) {
    color: #0000FF;
  }
</style>
