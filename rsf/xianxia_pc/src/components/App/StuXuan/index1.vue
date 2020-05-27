c<template>
  <div class="appZ">
    <h3 class="h3Css">请选择参与学员</h3>
    <div>
      <van-search placeholder="请输入学员姓名进行搜索" style="margin-top: 0px;" />
      <van-index-bar style="margin-top: 20px;">
        <van-index-anchor index="A" />
        <van-cell title="学生姓名" />

        <van-index-anchor index="B" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-index-anchor index="C" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-index-anchor index="D" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
      </van-index-bar>
    </div>
    <van-button
      round
      block
      type="info"
      native-type="submit"
      size="50"
      style="border-radius: 5%;width: 90%;position: fixed;top: 658px;left: 18px;"
    >保存</van-button>
  </div>
</template>

<script>
export default {
  name: "StuXuan1"
};
</script>

<style scoped>
.appZ{
	text-align: left;
}
.h3Css{
	border-left: #2e79ff 5px solid;
	text-align: left;
	font-size: 15px;
	padding-left: 10px;
}
.p1 {
  color: #737373;
  font-size: 17px;
  font-weight: 600;
  margin-left: 30px;
  margin-top: 30px;
}

.p1 span:nth-of-type(1) {
  display: inline-block;
  width: 6px;
  height: 22px;
  background-color: #2e79ff;
}

.p1 span:nth-of-type(2) {
  display: inline-block;
  position: relative;
  top: -5px;
  left: 5px;
}
</style>
