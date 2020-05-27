<template>
  <div id="main">
    <weidenglu></weidenglu>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import weidenglu from '../components/个人中心/weidenglu.vue'
  import TabBar from '../components/TabBar.vue'
  export default {
    name: 'course',
    components: {
      TabBar,
      weidenglu
    }
  }
</script>

<style scoped>
 
</style>
