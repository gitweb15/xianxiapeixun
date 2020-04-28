<template>
<<<<<<< HEAD
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
            to
            tag="li"
          >{{ item }}</router-link>
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
=======
    <div class="header">
        <span class="spancss"></span><a class="h6text">{{ title }}</a>
    </div>
>>>>>>> qq
</template>

<script>
export default {
<<<<<<< HEAD
  name: "Header",
  data() {
    return {
      liContent: [
        "课程管理",
        "班级管理",
        "学员管理",
        "订单管理",
        "统计分析",
        "支付中心",
        "系统管理"
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

=======
    name:'Header',
    props:['title']
}
</script>
<style scoped>
.header{
    padding: 10px 0;
    text-align: left;
    background: #f9f9f9;
    border-bottom: #f2f2f2;
}
.h6text{
    color: #999999;
    font-size: 14px;
    display: inline-block;
    position: relative;
    top: -3px
}
.spancss{
    background: #1abc9c;
    display: inline-block;
    width: 5px;
    height: 20px;
    margin-right: 5px;
}
>>>>>>> qq
</style>