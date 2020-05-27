<template>
  <div id="main">
    <pwd></pwd>
    <TabBar1></TabBar1>
  </div>
</template>

<script>
  import pwd from '../components/个人中心/pwd.vue'
  import TabBar1 from '../components/TabBar1.vue'
  export default {
    name: 'grzx',
    components: {
      TabBar1,
      pwd
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
