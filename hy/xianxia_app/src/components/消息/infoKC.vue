<template>
  <div>
    <p>消息</p>
      <img src="../../assets/20.png" style="position: absolute;top: 7px;right: 20px;z-index: 1;" @click="showPopup" />
      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
        <div style="text-align: center;margin:0px 20px;line-height: 35px;">
          <p @click="showPopup1">转发</p>

          <van-popup class='send' v-model="show1" style='width: 100px;height: 100px;border-radius: 10px;line-height: 25px;color: white;background-color: black;'>
            <p>
              <van-icon name="passed" />
            </p>
            <p>已发送</p>
          </van-popup>
          <p @click="showPopup2">添加到桌面</p>
          <van-popup class='send' v-model="show2" style='width: 100px;height: 100px;border-radius: 10px;line-height: 25px;color: white;background-color: black;'>
            <p>
              <van-icon name="passed" />
            </p>
            <p>已添加</p>
          </van-popup>
          <p @click="showPopup3">从我的小程序中移除</p>
          <van-popup class='send' v-model="show3" style='width: 100px;height: 100px;border-radius: 10px;line-height: 25px;color: white;background-color: black;'>
            <p>
              <van-icon name="passed" />
            </p>
            <p>已移除</p>
          </van-popup>
          <p @click="showPopup4">关于</p>
        </div>
      </van-popup>
    <div style="padding-left: 35px;margin-top:60px;width: 85%;">
      <div style="text-align: left;position: absolute;left: 20px;top: 50px;">
        <span style="border: 3px solid #0000FF;width: 20px;height: 10px;margin-right:60px;"></span>
        <span style="text-align: left;margin-left: -50px;">全部消息通知</span>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>课程消息</p>
        <p>亲爱的【耐寒教育】，您已为【学员一】、【学员二】成功报名了【英语个性化一对一教学】，请按时上课哦~</p>
        <p>2019-4-12</p>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>考勤消息</p>
        <p>亲爱的【耐寒教育】，您的学员【学员一】在2019-4-12应参加的【课程名称】考勤未到，请确认！</p>
        <p>2019-4-12</p>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>课程消息</p>
        <p>亲爱的【耐寒教育】，您报名的【课程名称】的课程还剩3个课时即将结束，请确认！</p>
        <p>2019-4-12</p>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>机构通知</p>
        <p>各位家长请注意，本周末因为上级检查临时休息，请安排好自己小孩的学习，谢谢！</p>
        <p>2019-4-12</p>
      </div>
      <div style="text-align: left;width: 100%;" class="info">
        <p>机构通知</p>
        <p>各位家长请注意，本周末因为上级检查临时休息，请安排好自己小孩的学习，谢谢！</p>
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
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      };
    },
    computed: {
      text() {
        return this.currentRate.toFixed(0) + '' + '/40';
      },
    },
    methods: {
      showPopup() {
          this.show = true;
        },
        showPopup1() {
          this.show1 = true;
          setTimeout(() => {
            this.show = false;
            this.show1 = false;
            this.$router.replace({
              path: '/kecheng2'
            })
          }, 3000)
        },
        showPopup2() {
          this.show2 = true;
          setTimeout(() => {
            this.show = false;
            this.show2 = false;
            this.$router.replace({
              path: '/kecheng2'
            })
          }, 3000)
        },
        showPopup3() {
          this.show3 = true;
          setTimeout(() => {
            this.show = false;
            this.show3 = false;
            this.$router.replace({
              path: '/kecheng2'
            })
          }, 3000)
        },
        showPopup4() {
          setTimeout(() => {
            this.show = false;
            this.$router.replace({
              path: '/kecheng2'
            })
          }, 100)
        },
        }
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
