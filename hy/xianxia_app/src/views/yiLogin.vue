<template>
  <div id="main">
    <yidengLogin></yidengLogin>
    <TabBar1></TabBar1>
  </div>
</template>

<script>
  import yidengLogin from '../components/个人中心/yidengLogin.vue'
  import TabBar1 from '../components/TabBar2.vue'
  export default {
    name: 'yiLogin',
    components: {
      TabBar1,
      yidengLogin
    }
  }
</script>

<style scoped>
  #footer[data-v-0f9cef9a] {
      width: 70%;
      height: 3.125rem;
      background: white;
      border-top: 0.125rem solid #ebe8e3;
      position: fixed;
      left: 0;
      bottom: 0;
  }
</style>
