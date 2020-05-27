<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="records" :to="keCheng">课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" v-if="show" to="StuTab">学员</van-tabbar-item>
      <van-tabbar-item icon="more-o" to="XiaoXi">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="User">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      show: this.$store.state.tabIconShow,
      keCheng: this.$store.state.kechengUrl
    };
  }
};
</script>