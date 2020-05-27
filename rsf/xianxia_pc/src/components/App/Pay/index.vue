<template>
  <div class="zhu">
    <div class="d1">
      <p>
        <img src="@/assets/img/cc.jpg" />
      </p>
      <p>不忘初心 做有温度的教育</p>
      <p>
        <van-button
          round
          block
          type="info"
          native-type="submit"
          to="/App/Tab/KeCheng"
          style="width: 80%;margin: 20px auto;"
        >微信授权登录</van-button>
      </p>
      <router-link to="/App/TeaLogin" class="p2" tag="p">微信教师入口</router-link>
      <p class="p3">技术服务电话：XXXXX</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShouYe"
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.zhu {
  background-color: #f2f2f2;
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
}
.d1 > p:nth-child(2) {
  color: red;
  line-height: 30px;
}
.d1 > p:nth-child(3) {
  margin-top: 300px;
}
.p2 {
  text-align: right;
  padding-right: 12%;
  margin-bottom: 15px;
}
</style>
