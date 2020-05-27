<template>
  <div id="main">
    <TabBar2></TabBar2>
    <pwd1></pwd1>
  </div>
</template>

<script>
  import TabBar2 from '../components/TabBar.vue'
  import pwd1 from '../components/个人中心/pwd.vue'
  export default {
    name: 'pwd2',
    components: {
      TabBar2,
      pwd1
    }
  }
</script>

<style scoped>

</style>
