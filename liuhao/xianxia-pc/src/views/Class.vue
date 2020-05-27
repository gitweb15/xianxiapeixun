<template>
  <div class="barmain">
    <Header></Header>
    <!-- header -->
    <div class="main clear">
      <div class="left barcss">
        <Bar :barContentData="barContent"></Bar>
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
export default {
  name: "Class",
  components: {
    Header,
    Bar
  },
  data() {
    return {
      barContent: [
        {
          text: "班级管理",
          content: [
            {
              title: "分班管理",
              url: "fbgl"
            }
          ]
        },
        {
          text: "排课管理",
          content: [
            {
              title: "教室管理",
              url: "jsgl"
            },
            {
              title: "课时管理",
              url: "ksgl"
            },
            {
              title: "课表管理",
              url: "kbgl"
            },
            {
              title: "调课管理",
              url: "tkgl"
            }
          ]
        }
      ]
    };
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