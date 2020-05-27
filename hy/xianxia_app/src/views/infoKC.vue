<template>
  <div id="main">
    <!-- <xiaoqu></xiaoqu> -->
    <TabBar></TabBar>
    <infoKC></infoKC>
  </div>
</template>

<script>
  // import xiaoqu from '../components/选择校区/xiaoqu.vue'
  import TabBar from '../components/TabBar.vue'
  import infoKC from '../components/消息/infoKC.vue'
  export default {
    name: 'info3',
    components: {
      TabBar,
      infoKC
    }
  }
</script>

<style scoped>

</style>
