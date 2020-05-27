<template>
  <div>
    <hea title="个性化一对一"></hea>
    <van-search v-model="value" style="margin-top:50px;" @click="toggle" />
    <div class="main clear">
      <h4>高效晚辅导</h4>
      <div>
      <router-link :to="item.routeUrl" class="imgCss" v-for="(item, index) in dataContent" :key="index" tag="div">
         <van-image
            width="100%"
            height="100%"
            fit="contain"
            :src="item.url"
          />
          <h5>{{ item.h5 }}</h5>
          <p>{{ item.p }}</p>
      </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import hea from '@/components/App/Header'
export default {
  name: "ydy",
  data() {
    return {
      value: "",
      dataContent: [
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          h5: "活动课程",
          p: "￥1500/10课时",
          routeUrl:'ZhengChang'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          h5: "考勤总览",
          p: "￥1500/10课时",
          routeUrl:'ZhengChang'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          h5: "课程",
          p: "￥1500/10课时",
          routeUrl:'ZhengChang'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          h5: "课程购买",
          p: "￥1500/10课时",
          routeUrl:'ZhengChang'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          h5: "课程考勤",
          p: "￥1500/10课时",
          routeUrl:'ZhengChang'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          h5: "正常课程详情",
          p: "￥1500/10课时",
          routeUrl:'ZhengChang'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          h5: "转校申请",
          p: "￥1500/10课时",
          routeUrl:'ZhengChang'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          h5: "试学课程详情",
          p: "￥1500/10课时",
          routeUrl:'ZhengChang'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          h5: "收款",
          p: "￥1500/10课时",
          routeUrl:'ZhengChang'
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          h5: "所有订单",
          p: "￥1500/10课时",
          routeUrl:'ZhengChang'
        }
      ]
    };
  },
  components: {
    hea
  },
  methods: {
    toggle() {
      this.$router.push('sousuo')
    }
  },
};
</script>
<style scoped>
h4 {
  text-align: left;
  margin-bottom: 15px;
}
.main {
  padding: 12px;
}
.imgCss {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px #ccc;
  width: 48%;
  margin-right: 2%;
  float: left;
  text-align: left;
  margin-bottom: 10px;
}
.imgCss > p,
.imgCss > h5 {
  padding-left: 10px;
}
.imgCss > p {
  color: #ccc;
  margin-top: 3px;
  font-size: 12px;
  margin-bottom: 10px;
}
</style>