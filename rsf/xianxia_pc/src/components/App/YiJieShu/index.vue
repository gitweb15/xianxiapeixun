<template>
  <div>
    <hea title="已结束课程"></hea>
    <div class="imagesContent">
      <div class="spanImg" v-for="(item, index) in dataContent" :key="index">
        <div class="clear">
          <div class="left">
            <van-image width="7rem" height="7rem" fit="contain" :src="item.url" />
          </div>
          <div class="left textCss">
            <p>{{ item.p }}</p>
            <span>{{ item.span }}</span>
          </div>
        </div>
        <div class="clear timeCss">
          <div class="left">{{ item.date }}</div>
          <div class="right">
            <van-button type="info" to="KeGouMai">重新报名</van-button>
          </div>
        </div>
      </div>
      <div>没有更多内容了</div>
    </div>
  </div>
</template>
<script>
import hea from "@/components/App/Header";
export default {
  name: "YiJieShu",
  data() {
    return {
      dataContent: [
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          p: "英语个性化一对一教学",
          span: "￥1500/10课时",
          date:
            new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
          time: 30 * 60 * 60 * 1000
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          p: "英语个性化一对一教学",
          span: "￥1500/10课时",
          date:
            new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
          time: 30 * 60 * 60 * 1000
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          p: "英语个性化一对一教学",
          span: "￥1500/10课时",
          date:
            new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
          time: 30 * 60 * 60 * 1000
        }
      ]
    };
  },
  components: {
    hea
  }
};
</script>

<style scoped>
.imagesContent{
  margin-top: 70px;
}
.spanImg {
  background: #f2f2f2;
  box-shadow: 0px 0px 5px #ccc;
  margin: 15px 20px;
  padding: 10px;
  font-size: 13px;
}
.spanImg > div:first-child {
  border-bottom: 1px solid #f3f3f2;
}
.textCss {
  text-align: left;
  margin-left: 20px;
}
.textCss p {
  margin: 30px 0 10px;
}
.textCss span {
  color: red;
}
.bottom {
  text-align: right;
  padding: 10px;
}
.bottom button {
  margin: 0 5px;
}
.timeCss > div {
  display: inline-block;
}
.timeCss {
  padding: 10px 10px 0 10px;
}
.timeCss .right > div {
  display: inline-block;
}
.van-image {
  border-radius: 10px;
}
</style>