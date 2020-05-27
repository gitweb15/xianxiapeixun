<template>
  <div>
    <div class="imgCss clear">
      <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div>
        <p>耐寒教育</p>
        <p>小学-六年级</p>
      </div>
    </div>
    <div class="main">
      <h3>已报名课程</h3>
      <div class="xunCss" v-for="(item, index) in mainData" :key="index">
        <div class="clear">
          <div class="left">
            <van-image
              width="100%"
              height="100%"
              fit="contain"
              :src="item.img"
            />
          </div>
          <div class="left">
            <p>{{ item.p1 }}</p>
            <p>{{ item.p2 }}</p>
          </div>
        </div>
        <div class="clear">
          <div class="left">{{ item.p3 }}</div>
          <div class="right">
            <van-button type="info" size="small">立即续费</van-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 我的课程 -->
    <div class="btn">
      <van-button type="info" block>退出登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "StuZhu",
  data() {
    return {
      mainData: [
        {
          img: "https://img.yzcdn.cn/vant/cat.jpeg",
          p1: "英语个性化一对一",
          p2: "￥1500/10课时",
          p3: "课程剩余结束：12节"
        },
        {
          img: "https://img.yzcdn.cn/vant/cat.jpeg",
          p1: "英语个性化一对一",
          p2: "￥1500/10课时",
          p3: "课程剩余结束：12节"
        },
        {
          img: "https://img.yzcdn.cn/vant/cat.jpeg",
          p1: "英语个性化一对一",
          p2: "￥1500/10课时",
          p3: "课程剩余结束：12节"
        },
        {
          img: "https://img.yzcdn.cn/vant/cat.jpeg",
          p1: "英语个性化一对一",
          p2: "￥1500/10课时",
          p3: "课程剩余结束：12节"
        },
        {
          img: "https://img.yzcdn.cn/vant/cat.jpeg",
          p1: "英语个性化一对一",
          p2: "￥1500/10课时",
          p3: "课程剩余结束：12节"
        }
      ],
      data: "",
      active: 0
    };
  },
  methods: {}
};
</script>
<style scoped>
.imgCss {
  overflow: hidden;
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
  padding-top: 15px;
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

.btn {
  margin: 0 5%;
  position: fixed;
  width: 90%;
  bottom: 0;
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
.main {
  padding: 10px;
  position: relative;
  background: white;
  margin: 10px;
  border-radius: 7px;
  top: -40px;
}
.main h3 {
  text-align: left;
  font-size: 15px;
  border-left: 5px solid #3078ff;
  padding-left: 10px;
  background: white;
}
.xunCss {
  box-shadow: 0px 0px 15px #ccc;
}
.xunCss > .clear:first-child > .left:first-child {
  width: 30%;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
}
.xunCss > .clear:first-child > .left:last-child {
  text-align: left;
  font-size: 13px;
}
.xunCss > .clear:first-child > .left:last-child p:first-child {
  margin-top: 30px;
}
.xunCss > .clear:first-child > .left:last-child p:last-child {
  color: red;
  font-weight: 800;
}
.xunCss > .clear:first-child {
  border-bottom: 1px solid #ccc;
  margin: 10px;
}
.xunCss > .clear:last-child > .left {
  padding-left: 10px;
  font-size: 13px;
  color: #999;
  margin-top: 10px;
}
.xunCss > .clear:last-child > .right {
  margin: 0 10px 20px 0;
}
</style>