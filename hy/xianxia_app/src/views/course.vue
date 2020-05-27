<template>
  <div id="main">
    <!-- <xiaoqu></xiaoqu> -->
    <TabBar></TabBar>
    <kecheng1></kecheng1>
  </div>
</template>

<script>
  // import xiaoqu from '../components/选择校区/xiaoqu.vue'
  import TabBar from '../components/TabBar.vue'
  import kecheng1 from '../components/课程/kecheng1.vue'
  export default {
    name: 'course',
    components: {
      TabBar,
      // xiaoqu
      kecheng1
    }
  }
</script>

<style scoped>

</style>
