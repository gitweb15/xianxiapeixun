<template>
  <div>
  <hea title="学习中课程"></hea>
    <div class="spanImg" v-for="(item, index) in dataContent" :key="index">
      <div class="clear">
        <div class="left">
          <van-image width="7rem" height="7rem" fit="contain" :src="item.url" />
        </div>
        <div class="left textCss">
          <p>{{ item.p }}</p>
          <span>{{ item.span }}</span>
          <span></span>
        </div>
      </div>
      <div class="timeCss">{{ item.date }}</div>
      <div class="bottom">
        <van-button type="default" size="small">转校审核中</van-button>
        <router-link to="KeGouMai">
          <van-button type="info" size="small">立即续费</van-button>
        </router-link>
      </div>
      <p class="pCss">{{ item.time }}</p>
    </div>
    <div>没有更多内容了</div>
  </div>
</template>
<script>
import hea from "@/components/App/Header";
export default {
  name: "XueXiZhong",
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
.spanImg {
  box-shadow: 0px 0px 5px #ccc;
  margin: 15px 20px;
  padding: 10px;
  font-size: 13px;
  margin-top: 50px;
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
  margin: 0 10px;
  border-radius: 2px;
  box-shadow: 3px 3px 10px #2f7afa
}
.timeCss {
  text-align: left;
  padding: 10px;
}
.van-image {
  border-radius: 10px;
}
.pCss{
  text-align: left;
}
</style>