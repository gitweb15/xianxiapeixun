<template>
  <div id="main">
    <TabBar></TabBar>
    <kecheng2></kecheng2>
  </div>
</template>

<script>
  import TabBar from '../components/TabBar.vue'
  import kecheng2 from '../components/课程/kecheng1.vue'
  export default {
    name: 'kecheng',
    components: {
      TabBar,
      kecheng2
    }
  }
</script>

<style scoped>

</style>
