<template>
  <div class="appZ">
    <div>
      <van-search placeholder="请输入学员姓名进行搜索" style="margin-top: 0px;" />
      <van-index-bar style="margin-top: 20px;">
        <van-index-anchor index="A" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />

        <van-index-anchor index="B" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-index-anchor index="C" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-index-anchor index="D" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
        <van-cell title="学生姓名" />
      </van-index-bar>
    </div>
    <div class="btn">
      <van-button round block type="info" native-type="submit" size="50">保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stu'
}
</script>

<style scoped>
.appZ {
  text-align: left;
}
.appZ > div:first-child {
  margin-bottom: 300px;
}
.btn {
  background: white;
  height: 10%;
  width: 100%;
  position: fixed;
  bottom:30px;
}
.btn>button{
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
}
</style>
