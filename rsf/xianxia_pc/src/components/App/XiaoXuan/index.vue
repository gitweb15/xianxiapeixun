<template>
  <div class="appZ">
    <top title="选择校区"></top>
    <p class="pCss">请选择查看校区</p>
    <div>
      <ul class="uu">
        <li v-for="(item, index) in dataContent" :key="index">
          <p v-for="(item2, i) in item" :key="i">
            <router-link :to="item2.url" tag="van-button" type="default">{{ item2.text }}</router-link>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import top from "@/components/App/top";
export default {
  name: "XiaoXuan",
  data() {
    return {
      dataContent: [
        [
          { text: "城南校区", url: "KeCheng" },
          { text: "滨江校区", url: "KeCheng" },
          { text: "世贸校区", url: "KeCheng" }
        ],
        [
          { text: "水榭校区", url: "KeCheng" },
          { text: "九栋桥校区", url: "KeCheng" }
        ],
        [
          { text: "花之南校区", url: "KeCheng" },
          { text: "万达校区", url: "KeCheng" }
        ]
      ]
    };
  },
  components: {
    top
  }
};
</script>

<style scoped>
.appZ > p:first-child {
  text-align: left;
  padding-left: 10px;
}
.uu li {
  float: left;
  margin-left: 25px;
}
.uu li p {
  color: black;
}
.pCss {
  color: #737373;
  font-size: 17px;
  font-weight: 600;
  margin-left: 30px;
  margin-top: 30px;
  text-align: left;
}
</style>
