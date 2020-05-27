<template>
  <div id="main">
    <!-- <xiaoqu></xiaoqu> -->
    <TabBar2></TabBar2>
    <info></info>
  </div>
</template>

<script>
  // import xiaoqu from '../components/选择校区/xiaoqu.vue'
  import TabBar2 from '../components/TabBar2.vue'
  import info from '../components/消息/info.vue'
  export default {
    name: 'info2',
    components: {
      TabBar2,
      // xiaoqu
      info
    }
  }
</script>

<style scoped>

</style>
