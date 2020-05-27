<template>
  <div>
  <hea title="立即咨询"></hea>
    <div class="main">
      <van-image width="100%" height="100%" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <h4>关于我们</h4>
      <div>
        <p>城南校区：17746084680</p>
        <p>水榭校区：0591-85220810</p>
        <p>世贸校区：0591-85211969</p>
        <p>花之南校区：0591-85150106</p>
        <p>滨江校区：0591-86001316</p>
        <p>九洞桥校区：0591-86550125</p>
        <p>万达校区：0591-85370025</p>
      </div>
      <h4>联系地址</h4>
      <div>
        <p>福清市中联天御财富广场4楼</p>
        <p>福清市水南车站旁·景园公寓208</p>
        <p>福清市龙山车站·农商银行旁3楼</p>
        <p>福清市玫瑰园27#临街2层</p>
        <p>福清市国际公馆2#2层(大地影院对面)</p>
        <p>福清市融侨城17# 207.208店面</p>
        <p>福清市金辉华府1号楼(宏路中学旁)</p>
      </div>
      <h4>联系邮箱</h4>
      <div>
        <p>邮箱：202066@163.com</p>
      </div>
    </div>
  </div>
</template>
<script>
import hea from "@/components/App/Header";
export default {
  name: "ZiXun",
  components: {
    hea
  }
};
</script>
<style scoped>
.main {
  padding: 20px;
  margin-top: 50px;
}
.main > div:first-child {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 30px gray;
}
.main h4 {
  color: #4573db;
  margin: 15px 0;
  font-size: 15px;
}
.main > div p {
  margin: 5px 0;
  font-size: 13px;
  color: gray;
}
.main > div {
  margin: 10px 0;
}
</style>