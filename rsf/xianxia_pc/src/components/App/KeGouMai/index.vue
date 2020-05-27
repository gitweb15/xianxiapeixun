<template>
  <div>
    <hea title="课程购买"></hea>
    <div class="main">
      <div>
        <p>
          用户名称：
          <span>耐寒教育</span>
        </p>
        <p>
          用户手机：
          <span>1880202333</span>
        </p>
      </div>
      <div class="clear">
        <div class="left">
          <van-image width="9rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="left keCss">
          <p>英语个性化一对一教学</p>
          <p>￥1500/12课时</p>
        </div>
      </div>
      <div class="xuanCss">
        <router-link to="StuXuan" tag="div" class="clear">
          <div class="left">选择学员</div>
          <div class="right">
            已选择2人
            <van-icon name="arrow" />
          </div>
        </router-link>
        <router-link to="XuanTea" tag="div" class="clear">
          <div class="left">选择校区及教师</div>
          <div class="right">
            福清校区 侯晨阳
            <van-icon name="arrow" />
          </div>
        </router-link>
        <router-link to="XuanTea" tag="div" class="clear">
          <div class="left">选择优惠券</div>
          <div class="right">
            已使用 200元
            <van-icon name="arrow" />
          </div>
        </router-link>
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
          <div class="left">优惠券</div>
          <div class="right">-200.00</div>
        </div>
        <div class="clear">
          <div class="left">实付</div>
          <div class="right fontCss">￥2800.00</div>
        </div>
      </div>
      <div class="botton">
        <span>￥1500.00</span>
        <span @click="showPopup">立即支付</span>
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" class="popup">
          <p @click="weiStu">未选择学员</p>
          <p @click="weiTea">未选择教师</p>
          <router-link to="/zfcg" tag="p">支付成功</router-link>
          <router-link to="/zfsb" tag="p">支付失败</router-link>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import hea from "@/components/App/Header";
export default {
  name: "KeGouMai",
  data() {
    return {
      active: 0,
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    weiStu() {
      this.$toast({
        message: "请选择学员",
        icon: "warning-o"
      });
    },
    weiTea() {
      this.$toast({
        message: "未选择教师",
        icon: "warning-o"
      });
    }
  },
  components: {
    hea
  },
  created() {}
};
</script>

<style scoped>
.main {
  padding: 20px;
  font-size: 13px;
  margin-top: 50px;
}
.main > div:first-child,
.main > div:nth-child(2) {
  box-shadow: 0px 0px 15px #ccc;
}
.main > div:first-child {
  text-align: left;
  padding: 10px;
  margin-bottom: 10px;
}
.main > div:first-child p {
  line-height: 30px;
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
.main > div:nth-child(2) > div:first-child {
  padding: 10px;
}
.main > div:nth-child(2) > div:first-child > div {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px #ccc;
}
.keCss {
  font: 12px;
  text-align: left;
  padding: 10px;
}
.keCss > p:first-child {
  padding-top: 20px;
  padding-bottom: 15px;
}
.keCss > p:last-child {
  color: red;
  font-weight: 800;
}
.xuanCss {
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.xuanCss > div {
  height: 50px;
  line-height: 50px;
}
.xuanCss > div .right {
  color: #999;
}
.xuanCss > div .right i {
  margin-left: 10px;
}
.xuanCss > div .left {
  padding-left: 10px;
}
.jiaCss {
  padding: 20px 0;
}
.jiaCss > div {
  line-height: 40px;
  color: #999;
}
.fontCss {
  color: red;
  font: 800 18px "微软雅黑";
}
.popup p {
  border-bottom: 1px solid #999;
  line-height: 30px;
}
</style>