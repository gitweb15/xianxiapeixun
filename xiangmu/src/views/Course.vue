<template>
  <div class="barmain">
    <Header></Header>
    <!-- header -->
    <div class="main clear">
      <div class="left barcss">
        <Bar :barContentData="barContentData" :text="Course"></Bar>
      </div>
      <div class="left wfdcss">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Bar from "../components/Bar";
import WFDSelect from "../components/WFD/WFDSelect";
export default {
  name: "Course",
  data(){
    return {
      barContentData: [
        {
          title: "课程管理",
          content: ["班级课程管理", "晚辅导课程管理", "一对一课程管理"]
        },
        {
          title: "课程消耗",
          content: ["班级课程消耗", "晚辅导课程消耗", "一对一课程消耗"]
        },
        {
          title: "活动课程管理",
          content: ["班级课程活动管理", "晚辅导课程活动管理"]
        }
      ]
    }
  },
  components: {
    Header,
    Bar,
    // WFDSelect
  }
};
</script>

<style scoped>
.barmain {
  height: 100%;
}
.main {
  height: 92%;
}
</style>