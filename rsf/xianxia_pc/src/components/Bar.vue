<template>
  <div class="height100 appZ">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo height100"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-submenu v-for="(item, i) in barContentData" :key="i" :index="i+'i'">
            <template slot="title">
              <span>{{ item.text }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item2, j) in item.content"
                :key="j"
                :index="item2.url"
              >{{ item2.title }}</el-menu-item>
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
    };
  },
  props:['barContentData','text'],
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
.appZ{
  overflow-y: auto;
}
</style>