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
  name: "System",
  components: {
    Header,
    Bar
    // WFDSelect
  },
  data() {
    return {
      barContent: [
        {
          text: "账号管理",
          content: [
            {
              title: "家长账号管理",
              url: "jzzh"
            },
            {
              title: "教师账号管理",
              url: "jszh"
            }
          ]
        },
        {
          text: "系统配置",
          content: [
            {
              title: "菜单管理",
              url: "cdgl"
            },
            {
              title: "权限管理",
              url: "qxgl"
            },
            {
              title: "组织架构管理",
              url: "zzjg"
            }
          ]
        },
        {
          text: "系统数据",
          content: [
            {
              title: "数据字典",
              url: ""
            },
            {
              title: "日历管理",
              url: ""
            },
            {
              title: "通知管理",
              url: "tzgl"
            },
            {
              title: "机构通知",
              url: "jgtz"
            },
            {
              title: "轮播图管理",
              url: "lungl"
            },
            {
              title: "首页推荐管理",
              url: "sytj"
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