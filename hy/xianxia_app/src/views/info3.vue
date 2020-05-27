<template>
  <div id="main">
    <!-- <xiaoqu></xiaoqu> -->
    <TabBar1></TabBar1>
    <info2></info2>
  </div>
</template>

<script>
  // import xiaoqu from '../components/选择校区/xiaoqu.vue'
  import TabBar1 from '../components/TabBar1.vue'
  import info2 from '../components/消息/info2.vue'
  export default {
    name: 'info3',
    components: {
      TabBar1,
      // xiaoqu
      info2
    }
  }
</script>

<style scoped>

</style>
