<template>
  <div>
    <p>消息</p>
    <div style="padding-left: 35px;margin-top:60px;width: 85%;">
      <div style="text-align: left;position: absolute;left: 20px;top: 50px;">
        <span style="border: 3px solid #0000FF;width: 20px;height: 10px;margin-right:60px;"></span>
        <span style="text-align: left;margin-left: -50px;">全部消息通知</span>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>机构通知</p>
        <p>各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！</p>
        <p>2019-4-12</p>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>机构通知</p>
        <p>各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！</p>
        <p>2019-4-12</p>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>机构通知</p>
        <p>各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！</p>
        <p>2019-4-12</p>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>机构通知</p>
        <p>各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！</p>
        <p>2019-4-12</p>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>机构通知</p>
        <p>各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！</p>
        <p>2019-4-12</p>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>机构通知</p>
        <p>各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！</p>
        <p>2019-4-12</p>
      </div>
      <p class="info1">没有更多内容了</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentRate: 0,
      };
    },
    computed: {
      text() {
        return this.currentRate.toFixed(0) + '' + '/40';
      },
    },
  };
</script>

<style>
  .info p:nth-child(3) {
    float: right;
    color: #999;
    margin-top: -20px;
  }

  .info p:nth-child(1) {
    /* float: right;color: #999;margin-top: -20px; */
    font-weight: bold;
  }

  .info1 {
    color: #999;
    text-align: center;
    margin-left: 80px;
  }
</style>
