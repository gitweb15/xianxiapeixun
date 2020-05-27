<template>
  <div class="appZ">
  <hea title="优惠券管理"></hea>
    <h3>优惠券管理</h3>
    <div class="clear main" :style="background" v-for="(item, index) in dataContent" :key="index">
      <div class="left">{{ item.jian }}</div>
      <div class="left">
        <p>{{ item.time }}</p>
        <p>{{ item.p }}</p>
      </div>
    </div>
    <div class="main2" v-if="youNull">
      <van-empty description="当前没有优惠券" />
    </div>
  </div>
</template>
<script>
import hea from "@/components/App/Header";
export default {
  name: "YouHuiQuan",
  data() {
    return {
      background: {
        background:
          "url(" + require("../../../assets/img/yhq.png") + ") no-repeat"
      },
      dataContent: [
        {
          jian: "优惠券立减100",
          time: "2019-3-19",
          p: "即将失效"
        },
        {
          jian: "优惠券立减100",
          time: "2019-3-19",
          p: "即将失效"
        },
        {
          jian: "优惠券立减100",
          time: "2019-3-19",
          p: "即将失效"
        },
        {
          jian: "优惠券立减100",
          time: "2019-3-19",
          p: "即将失效"
        },
        {
          jian: "优惠券立减100",
          time: "2019-3-19",
          p: "即将失效"
        },
        {
          jian: "优惠券立减100",
          time: "2019-3-19",
          p: "即将失效"
        }
      ],
      youNull: false
    };
  },
  components: {
    hea
  }
};
</script>

<style scoped>
.appZ h3 {
  text-align: left;
  border-left: 5px solid #2c7cf9;
  font-size: 15px;
  padding-left: 10px;
  margin-top: 70px;
  margin-bottom: 20px;
  margin-left: 20px;
}
.main {
  color: white;
  margin: 15px auto;
  width: 343px;
  box-shadow: 0px 0px 15px #ccc;
}
.main .left:first-child {
  font-size: 20px;
  font-weight: 800;
  margin: 29px 42px;
}
.main .left:last-child p {
  height: 20px;
  margin: 5px 0;
  text-align: left;
  font-size: 13px;
}
.main .left:last-child {
  padding-top: 18px;
}
</style>