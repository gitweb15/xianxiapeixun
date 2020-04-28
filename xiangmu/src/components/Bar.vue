<template>
  <div class="height100">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo height100"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu v-for="(item, i) in barContentData" :key="i" :index="`${i}`">
            <template slot="title">
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item2, j) in item.content"
                :key="j"
                :index="`${i}-${j}`"
              ><router-link to="/manage">{{ item2 }}</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
  </div>
</template>

<script>
export default {
  name: "Bar",
  data() {
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
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-submenu,
.el-submenu__title {
  background: #f9f9f9 !important;

  border-bottom: 1px solid #f2f2f2;
}
.el-menu-item {
  background: #fcfcfc;
  color: #666666;
}
.el-menu-item.is-active {
  background: #fff;
  color: #48c9b0;
}
.el-menu-vertical-demo {
  background: #fcfcfc;
}
.height100 {
  height: 100%;
}
.el-menu-item-group>div{
    padding: 0px !important;
}

</style>