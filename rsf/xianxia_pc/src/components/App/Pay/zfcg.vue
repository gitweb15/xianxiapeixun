<template>
  <div>
    <hea title="支付成功"></hea>
    <div style="margin-top: 110px;">
      <van-icon name="checked" size="100" />
      <p class="p1">支付成功</p>
    </div>
    <div style="margin-top: 100px;">
      <router-link to="App/Tab/XueXiZhong">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          style="width: 80%;margin: 20px auto;"
        >查看订单</van-button>
      </router-link>
      <router-link to="App/Tab/KeCheng">
        <van-button
          round
          plain
          block
          hairline
          type="info"
          style="width: 80%;margin-left: 40px;"
        >返回首页</van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import hea from "@/components/App/Header";
export default {
  components: {
    hea
  }
};
</script>

<style scoped>
.p1 {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
</style>
