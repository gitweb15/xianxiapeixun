<template>
  <div>
    <div>
      <img src="../../assets/2.png" style="width: 80%;height: 100%;" />
      <div class="right">
        <span>课程名称</span>
        <span>￥300/2课时</span>
      </div>
      <div class="right1">
        <span>263人已报名</span>
        <span>原价：￥1500/10课时</span>
      </div>
    </div>
    <div style="margin-top: 100px;text-align: center;margin-left: 30px;">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="课程简介" name="first" style='margin-left: 0px;'>
          <p style="color: #0000FF">精品课程</p>
          <p style="width: 90%;">采用全省最优质的教学资源与最先进的教学手段,旨在为7-18岁的孩子提供语、数学、英、物、化、作文的专业服务，史有书法、绘画等艺术兴趣班，在为孩子的童年增添乐趣的同时,提升孩子的艺术教育。</p>
        </el-tab-pane>
        <el-tab-pane label="课程设置" name="second">课程设置</el-tab-pane>
        <el-tab-pane label="师资介绍" name="third">课程介绍</el-tab-pane>
      </el-tabs>
      <img src="../../assets/2.png" style="width: 80%;height: 100%;" />

    </div>
<div style="background: white;width: 100%;position: fixed;z-index: 1;bottom: 0px;">
      <span style="color: red;float: left;margin-left: 30px;margin-top: 5px;font-size: 25px;">￥1500.00</span>
      <span style="float: right;margin-right: 20px;border-radius: 0px 0px 10px 0px;background: #0000FF;width: 50%;height: 50px;color: white;line-height: 50px;">新学员报名</span>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
  .right span:nth-child(1) {
    float: left;
    margin-left: 40px;
  }

  .right span:nth-child(2) {
    float: right;
    color: red;
   margin-right: 50px;
  }

  .right1 span:nth-child(1) {
    float: left;
    margin-left: -63px;
    margin-top: 40px;
    color: #999;
  }

  .right1 span:nth-child(2) {
    float: right;
    margin-top: 20px;
    color: #999;
    margin-right: 50px;
  }
</style>
