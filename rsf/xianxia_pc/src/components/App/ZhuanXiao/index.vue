<template>
  <div class="main">
    <div class="clear">
      <div class="left">
        <van-image
          width="9rem"
          fit="contain"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="left keCss">
        <p>英语个性化一对一教学</p>
        <p>￥1500/12课时</p>
      </div>
    </div>
    <div class="xuanCss">
      <div class="clear">
        <div class="left">选择学员</div>
        <div class="right">学员姓名<van-icon name="arrow" /></div>
      </div>
      <div class="clear">
        <div class="left">选择校区及教师</div>
        <div class="right">福清校区 侯晨阳<van-icon name="arrow" /></div>
      </div>
    </div>
    <div class="jiaCss">
      <div class="clear">
        <div class="left">价格</div>
        <div class="right">￥1500.00</div>
      </div>
      <div class="clear">
        <div class="left">学员数量</div>
        <div class="right">2</div>
      </div>
      <div class="clear">
        <div class="left">实付</div>
        <div class="right fontCss">￥2800.00</div>
      </div>
    </div>
    <div class="botton">
      <span>￥1500.00</span>
      <span>立即收款</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZhuanXiao",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
.main {
  padding: 20px;
  font-size: 13px;
}
.main > div:first-child {
  box-shadow: 0px 0px 15px #ccc;
}
.botton {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 99;
}
.botton > span {
  display: inline-block;
  width: 50%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
}
.botton > span:first-child {
  background: white;
  color: red;
}
.botton > span:last-child {
  background: #3078ff;
  color: #fff;
}
.main > div:nth-child(1) > div:first-child{
  padding: 10px;
}
.main > div:nth-child(1) > div:first-child>div {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px #ccc;
}
.keCss{
  font: 12px;
  text-align: left;
  padding: 10px;
}
.keCss>p:first-child{
  padding-top: 20px;
  padding-bottom: 15px;
}
.keCss>p:last-child{
  color: red;
  font-weight: 800;
}
.xuanCss{
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.xuanCss>div{
  height: 50px;
  line-height: 50px;
}
.xuanCss>div .right{
  color: #999;
}
.xuanCss>div .right i{
  margin-left: 10px;
}
.xuanCss>div .left{
  padding-left: 10px;
}
.jiaCss{
  padding: 20px 0;
}
.jiaCss>div{
  line-height: 40px;
  color: #999;
}
.fontCss{
  color: red;
  font: 800 18px '微软雅黑';
}
</style>