<template>
  <div id="main">
    <yidengLoginKC></yidengLoginKC>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import yidengLoginKC from '../components/个人中心/yidengLogin.vue'
  import TabBar from '../components/TabBar.vue'
  export default {
    name: 'yiLoginKC',
    components: {
      TabBar,
      yidengLoginKC
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
