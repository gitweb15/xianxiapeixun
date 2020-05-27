<template>
  <div style="margin: 30px;">
    <div style="border: 1px solid #999999;height: 100px;padding: 50px;">
      <div style="text-align: left;position: absolute;left: 30px;top: 40px;">
        <span style="border: 3px solid #0000FF;width: 20px;height: 10px;margin-right: 50px;"></span>
        <span style="text-align: left;margin-left: -40px;">学员考勤</span>
      </div>
      <van-circle v-model="currentRate" :rate="40" :speed="100" :text="text" style='float: left;margin-top: 30px;' />
      <van-button type="info" style='float: right;margin-top: 40px;'>考勤总览</van-button>
    </div>

      <div style="border: 1px solid #999999;height: 300px;padding: 50px;margin-top: 40px;">
        <div style="text-align: left;position: absolute;left: 30px;top: 290px;">
          <span style="border: 3px solid #0000FF;width: 20px;height: 10px;margin-right: 50px;"></span>
          <span style="text-align: left;margin-left: -40px;">未到名单</span>
        </div>
        <span style='color: #999999;line-height: 100px;'>学员已经全部到齐啦~</span>
      </div>
    <!-- </div> -->
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
</style>
