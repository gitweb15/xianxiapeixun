<template>
  <div class="appZ">
    <top title="课程"></top>
    <!-- 坐标 -->
    <div class="iocation" @click="iocation">
      <van-icon name="location" />
      <span>
        城南校区
        <van-icon name="arrow" class="arrow" />
      </span>
    </div>
    <!-- 轮播 -->
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000">
        <van-swipe-item v-for="(img, index) in images" :key="index">
          <img :src="img" class="swipe-img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- f4 -->
    <div class="f4">
      <router-link to="GaoXiaoWFD" tag="span">
        <van-image round width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <p>高效晚辅导</p>
      </router-link>
      <router-link to="jing" tag="span">
        <van-image round width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <p>周末精品班</p>
      </router-link>
      <router-link to="ydy" tag="span">
        <van-image round width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <p>一对一</p>
      </router-link>
      <router-link to="sousuo" tag="span">
        <van-image round width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <p>搜索</p>
      </router-link>
    </div>
    <!-- 滑动（高效晚辅导） -->
    <router-link to="GaoXiaoWFD" tag="div" class="swipe2">
      <div class="swipe2-top clear">
        <h3 class="left">高效晚辅导</h3>
        <div class="right">
          更多
          <van-icon name="arrow" class="arrow2" />
        </div>
      </div>
      <van-swipe class="my-swipe" :loop="false" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in swipe2Data" :key="index">
          <div class="swipe-img-div">
            <img :src="item.images" class="swipe-img" />
          </div>
          <p>{{ item.p1 }}</p>
          <p>{{ item.p2 }}</p>
        </van-swipe-item>
        <template>
          <span class="swipe-text">没有更多了</span>
        </template>
      </van-swipe>
    </router-link>
    <!-- 周末精品班 -->
    <router-link to="jing" tag="div" class="swipe2">
      <div class="swipe2-top clear">
        <h3 class="left">高效晚辅导</h3>
        <div class="right">
          更多
          <van-icon name="arrow" class="arrow2" />
        </div>
      </div>
      <van-swipe class="my-swipe" :loop="false" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in swipe2Data" :key="index">
          <div class="swipe-img-div">
            <img :src="item.images" class="swipe-img" />
          </div>
          <p>{{ item.p1 }}</p>
          <p>{{ item.p2 }}</p>
        </van-swipe-item>
        <template>
          <span class="swipe-text">没有更多了</span>
        </template>
      </van-swipe>
    </router-link>
    <!-- 个性化一对一 -->
    <router-link to="ydy" tag="div" class="swipe2">
      <div class="swipe2-top clear">
        <h3 class="left">高效晚辅导</h3>
        <div class="right">
          更多
          <van-icon name="arrow" class="arrow2" />
        </div>
      </div>
      <van-swipe class="my-swipe" :loop="false" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in swipe2Data" :key="index">
          <div class="swipe-img-div">
            <img :src="item.images" class="swipe-img" />
          </div>
          <p>{{ item.p1 }}</p>
          <p>{{ item.p2 }}</p>
        </van-swipe-item>
        <template>
          <span class="swipe-text">没有更多了</span>
        </template>
      </van-swipe>
    </router-link>
  </div>
</template>

<script>
import top from "@/components/App/top";
export default {
  name: "KeCheng",
  data() {
    return {
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590204018550&di=fd1dbe15fa5196d9d239fc66b1e62e71&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn09%2F377%2Fw1777h1000%2F20180427%2F26cf-fztkpin9984298.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590204044904&di=70aba88ccde940bc8b245496b9d32482&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FQ5CxcMryZkMcJ2C03YVxwpuiLgj4v4An2pe7pGZing00%3D1537548392488.jpg"
      ],
      swipe2Data: [
        {
          images:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590204018550&di=fd1dbe15fa5196d9d239fc66b1e62e71&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn09%2F377%2Fw1777h1000%2F20180427%2F26cf-fztkpin9984298.jpg",
          p1: "课程名称",
          p2: "￥1500/10课时"
        },
        {
          images:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590204044904&di=70aba88ccde940bc8b245496b9d32482&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FQ5CxcMryZkMcJ2C03YVxwpuiLgj4v4An2pe7pGZing00%3D1537548392488.jpg",
          p1: "课程名称",
          p2: "￥1500/10课时"
        },
        {
          images:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590204018550&di=fd1dbe15fa5196d9d239fc66b1e62e71&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn09%2F377%2Fw1777h1000%2F20180427%2F26cf-fztkpin9984298.jpg",
          p1: "课程名称",
          p2: "￥1500/10课时"
        },
        {
          images:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590204044904&di=70aba88ccde940bc8b245496b9d32482&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FQ5CxcMryZkMcJ2C03YVxwpuiLgj4v4An2pe7pGZing00%3D1537548392488.jpg",
          p1: "课程名称",
          p2: "￥1500/10课时"
        }
      ]
    };
  },
  components: {
    top
  },
  methods: {
    iocation() {
      this.$router.push("XiaoXuan");
    }
  }
};
</script>

<style scoped>
.iocation {
  text-align: left;
  font-size: 25px;
  margin: 10px;
}
.iocation > span {
  font-size: 14px;
  display: inline-block;
  line-height: 31px;
  vertical-align: top;
  padding-left: 3px;
}
.arrow {
  padding: 0px 0px 7px 1px;
  vertical-align: bottom;
  font-size: 16px;
}
.swipe .my-swipe .van-swipe-item {
  margin: 10px;
  height: 150px;
  width: 100%;
  overflow: hidden;
}
.swipe-img {
  width: 100%;
}
.f4 > span {
  display: inline-block;
  width: 25%;
  padding: 20px 10px;
  box-sizing: border-box;
  font-size: 14px;
}
.swipe2 .my-swipe .van-swipe-item {
  margin: 10px;
  width: 11% !important;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 15px #ccc;
}
.swipe-img-div {
  height: 94px;
  overflow: hidden;
  box-sizing: border-box;
}
.swipe2 .my-swipe .van-swipe-item p {
  text-align: left;
  margin: 10px 0;
  padding-left: 10px;
}
.swipe2 .my-swipe .van-swipe-item p:first-child {
  color: black;
}
.swipe2 .my-swipe .van-swipe-item p:last-child {
  color: #999;
}
.swipe-text {
  display: inline-block;
  width: 30px !important;
  text-shadow: 1px 1px 5px black;
  line-height: 28px;
}
.swipe2-top {
  margin: 10px;
}
.swipe2-top h3 {
  margin: 0px;
}
.content > span {
  display: inline-block;
  width: 46%;
  box-sizing: border-box;
  margin: 10px 2%;
  border-radius: 5px;
  overflow: hidden;
}

.content p {
  text-align: left;
  margin: 10px 0;
  padding-left: 10px;
}
.content > span p:first-child {
  color: black;
}
.content > span p:last-child {
  color: #999;
}
.appZ {
  padding-bottom: 100px;
}
</style>
