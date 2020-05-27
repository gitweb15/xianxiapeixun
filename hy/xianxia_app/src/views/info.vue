<template>
  <div id="main">
    <TabBar></TabBar>
    <info1></info1>
  </div>
</template>

<script>
  import TabBar from '../components/TabBar.vue'
  import info1 from '../components/消息/info.vue'
  export default {
    name: 'kecheng',
    components: {
      TabBar,
      info1
    }
  }
</script>

<style scoped>

</style>
