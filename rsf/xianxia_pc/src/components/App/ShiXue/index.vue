<template>
  <div class="main">
    <div>
      <van-image width="100%" height="100%" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span>试学</span>
    </div>
    <div class="clear dataCss">
      <div class="left">
        <h3>课程名称</h3>
        <p>263人报名</p>
      </div>
      <div class="right">
        <h3>￥1000/10课时</h3>
        <p>原价：￥1500/10课时</p>
      </div>
    </div>
    <van-tabs v-model="active" class="tabCss">
      <van-tab title="课程简介">
        <h3>精品课程</h3>
        <p>在前端开发过程中，盒子居中是常常用到的。其中 ，居中又可以分为水平居中和垂直居中。水平居中是比较容易的</p>
        <van-image width="100%" height="100%" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </van-tab>
      <van-tab title="课程设置">内容 2</van-tab>
      <van-tab title="师资介绍">内容 3</van-tab>
    </van-tabs>
    <div class="botton">
        <span>￥1500.00</span>
        <span>立即报名</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShiXue",
  data() {
      return {
          active: 0
      }
  }
};
</script>

<style scoped>
.main {
  padding: 20px;
}
.main > div:first-child {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 30px gray;
  position: relative;
}
.main > div:first-child span {
  background: #DCAC00;
  color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  display: inline-block;
  width: 100px;
  line-height: 50px;
  height: 50px;
}
.dataCss > .right h3 {
  text-align: right;
  color: red;
}
.dataCss h3 {
  margin: 20px 0 10px;
}
.dataCss p {
  color: #999;
  margin: 10px 0;
}
.botton{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
}
.botton>span{
    display: inline-block;
    width: 50%;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
}
.botton>span:first-child{
    background: white;
    color: red;
}
.botton>span:last-child{
    background: #3078FF;
    color: #fff;
}
.tabCss h3{
  color: #3078FF;
  font-size: 16px;
  margin: 10px 0;
}
.tabCss p{
  font-size: 13px;
  margin: 10px 0;
}
</style>