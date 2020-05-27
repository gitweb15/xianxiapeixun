<template>
  <div>
    <hea title="支付成功"></hea>
    <div class="imgContent">
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
          剩余：
          <van-count-down :time="time" />
        </div>
      </div>
      <div class="bottom">
        <van-button type="default">取消支付</van-button>
        <van-button type="info" to="KeGouMai">立即支付</van-button>
      </div>
      <div class="zhifu">
        <div>{{ item.zhifu }}</div>
      </div>
    </div>
    <div>没有更多内容了</div>
    </div>
  </div>
</template>
<script>
import hea from "@/components/App/Header";
export default {
  name: "SuoYou",
  data() {
    return {
      dataContent: [
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          p: "英语个性化一对一教学",
          span: "￥1500/10课时",
          date:
            new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
          time: 30 * 60 * 60 * 1000,
          zhifu: '待支付'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          p: "英语个性化一对一教学",
          span: "￥1500/10课时",
          date:
            new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
          time: 30 * 60 * 60 * 1000,
          zhifu: '待支付'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          p: "英语个性化一对一教学",
          span: "￥1500/10课时",
          date:
            new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
          time: 30 * 60 * 60 * 1000,
          zhifu: '进行中'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          p: "英语个性化一对一教学",
          span: "￥1500/10课时",
          date:
            new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
          time: 30 * 60 * 60 * 1000,
          zhifu: '已结束'
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
.imgContent{
  margin: 50px 0;

}
.spanImg {
  box-shadow: 0px 0px 5px #ccc;
  margin: 15px 20px;
  padding: 10px;
  font-size: 13px;
  position: relative;
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
.van-image{
    border-radius: 10px;
}
.zhifu{
  position: absolute;
  top: 5px;
  right: 10px;
  background: white;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
}
.zhifu>div{
  border: 1px solid black;
  width: 60px;
  height: 25px;
  line-height: 25px;
  background: white;
  transform:rotate(30deg);
  position: absolute;
  top: 11px;
  right: -8px;
}
</style>