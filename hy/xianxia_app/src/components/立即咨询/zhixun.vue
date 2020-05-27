<template>
  <div>
    <p @click="left" style="float: left;margin-top: 17px;color: black;">
      <van-icon name="arrow-left" />立即咨询
    </p>
    <img src="../../assets/2.png" style="width: 80%;height: 100%;margin: 20px;" />
    <div>
      <p style="color: #0000FF;">联系我们</p>
      <p>城南校区：17746084680</p>
      <p>水榭校区：0591-85220810</p>
      <p>世贸校区：0591-85211969</p>
      <p>花之南校区：0591-85150106</p>
      <p>滨江校区：0591-960013316</p>
      <p>九洞桥校区：0591-86550125</p>
      <p>万达校区：0591-85370025</p>
    </div>


    <div style="margin-top: 50px;">
      <p style="color: #0000FF;">联系地址</p>
      <p>福清市中联天御财富广场4楼</p>
      <p>福清市水南车站旁-景园公寓208</p>
      <p>福清市玫瑰园27#临街2层</p>
      <p>福清市国际公馆2#2层（大地影院对面）</p>
      <p>福清市融侨城17#207.208对面</p>
      <p>福清市金辉华府1号楼(宏路中学旁)</p>
    </div>
    <div style="margin-top: 50px;">
      <p style="color: #0000FF;">联系邮箱</p>
      <p>邮箱：34744682@qq.com</p>
    </div>
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
</style>
