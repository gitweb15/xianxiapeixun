<template>
  <div>
    <hea title="学员详情"></hea>
    <div class="imgCss clear">
      <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div>
        <p>耐寒教育</p>
        <p>小学-六年级</p>
      </div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="课程表">
        <div class="rili">
          <van-calendar
            title="日历"
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '330px' }"
            @confirm="onConfirm"
          />
        </div>
        <div class="riliTop">
          <h3>3月11日 周一</h3>
          <p>今天没课，好好休息吧！</p>
        </div>
      </van-tab>
      <van-tab title="课程信息">内容 2</van-tab>
      <van-tab title="上课记录">内容 3</van-tab>
    </van-tabs>
    <!-- 我的课程 -->
    <div class="btn">
      <van-button type="info" block>退出登录</van-button>
    </div>
  </div>
</template>
<script>
import hea from "@/components/App/Header";
export default {
  name: "StuXiang",
  data() {
    return {
      mainData: [
        {
          icon: "friends-o",
          span: "学员管理",
          rightIcon: "arrow"
        },
        {
          icon: "coupon-o",
          span: "优惠券",
          rightIcon: "arrow"
        },
        {
          icon: "service-o",
          span: "立即咨询",
          rightIcon: "arrow"
        },
        {
          icon: "cluster-o",
          span: "关于我们",
          rightIcon: "arrow"
        }
      ],
      data: "",
      active: 0
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.date = this.formatDate(date);
      console.log(this.formatDate)
    }
  },
  components: {
    hea
  }
};
</script>
<style scoped>
.rili {
  width: 90%;
  margin: 20px auto;
  box-shadow: 0px 0px 15px #ccc;
  border: 1px solid rgb(226, 225, 225);
}
.riliTop{
  box-shadow: 0px 0px 15px #ccc;
  margin: 20px;
  margin-bottom: 120px;
}
.riliTop h3{
  text-align: left;
  padding-left: 10px;
  line-height: 40px;
}
.riliTop p{
  line-height: 30px;
  padding: 20px 0;
}
.imgCss {
  overflow: hidden;
  margin-top: 50px;
  width: 100%;
  height: 150px;
  background: #ccc;
  background-size: 100% 250px;
}
.imgCss > div {
  float: left;
  position: relative;
  top: 20%;
  text-align: left;
  color: white;
}
.imgCss > div:first-child {
  margin-left: 30px;
}
.imgCss > div:last-child {
  margin-left: 20px;
}
.imgCss > div:last-child span {
  margin-left: 10px;
  font-size: 12px;
}
.imgCss > div:last-child > p:last-child {
  margin-top: 5px;
  font-size: 13px;
}
.iconCss {
  text-align: center;
  margin-top: 10px;
}
.iconCss > span {
  display: inline-block;
  width: 25%;
  padding: 5px 0;
}
.iconCss > span i {
  font-size: 30px;
}
.main {
  border-radius: 3px;
  box-shadow: 0px 0px 15px #ccc;
  text-align: left;
  margin: 10px;
  background: #fff;
  position: relative;
  top: -40px;
  padding: 20px 10px 30px;
}
.main > div > span {
  position: relative;
  top: -6px;
  margin-left: 10px;
}
.main > div {
  padding-top: 3px;
  border-bottom: #ccc 1px solid;
  padding: 10px 0 5px 10px;
}
.main > div > i:last-child {
  float: right;
  margin-right: 10px;
}
.main i {
  font-size: 25px;
}
.btn {
  margin: 0 5%;
  position: absolute;
  width: 90%;
  bottom: -14%;
}
.btn button {
  border-radius: 5px;
}
.hide {
  height: 300px;
  line-height: 300px;
}
.hide button {
  position: relative;
  top: -250px;
  border-radius: 5px;
  padding: 0 10px;
}
.main2 {
  box-shadow: 0 0 15px #ccc;
  height: 300px;
  padding: 10px;
}
.main2 > div {
  border-bottom: #ccc 1px solid;
  padding: 10px;
}
.main2 > div i {
  font-size: 25px;
}
.main2 > div i:last-child {
  float: right;
}
.main2 > div span {
  position: relative;
  margin-left: 10px;
  top: -6px;
}
</style>