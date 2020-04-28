<template>
  <div>
    <el-row>
      <el-col :span="24" class="headerCss clear">
        <div class="left">
          <el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
        </div>
        <ul class="clear heaerLink left">
          <router-link
            v-for="(item, index) in liContent"
            :key="index"
            :class="{'active':currentSort==index}"
            @click.native="active(index)"
            :to="`${item.id}`"
            tag="li"
          >{{ item.name }}</router-link>
        </ul>
        <div class="right headerClose">
          <el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
          <router-link to="" tag="a">账户设置</router-link>
          <el-avatar icon="el-icon-switch-button" :size="30"></el-avatar>
          <router-link to="" tag="a">退出登录</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      liContent: [
        {
          name:"课程管理",
          id:"Course"
        },
        {
          name:"班级管理",
          id:"Class"
        },
        {
          name:"学员管理",
          id:"Student"
        },
        {
          name:"订单管理",
          id:"Order"
        },
        {
          name: "统计分析",
          id:"Statis"
        },
        {
          name:"支付中心",
          id:"Pay"
        },
        {
          name:"系统管理",
          id:"System"
        }
      ],
      currentSort: 4
    };
  },
  methods: {
    active(index) {
      this.currentSort = index;
    }
  }
};
</script>

<style scoped>
.headerCss > div:first-child {
  padding: 8px 50px 5px 20px;
}
.headerCss {
  background: #464c5b;
  padding-right: 20px;
}
.heaerLink li {
  float: left;
  cursor: pointer;
  color: #cccccc;
  font-size: 13px;
  margin: 0 10px;
  line-height: 47px;
}
.active {
  color: white !important;
}
.headerClose span{
    margin: 7px 15px -10px 17px;
}
.headerClose a{
    color: #cccccc;
     font-size: 13px;
      line-height: 47px;
}

</style>