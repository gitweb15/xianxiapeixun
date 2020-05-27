<template>
  <div id="main">
    <!-- <xiaoqu></xiaoqu> -->
    <TabBar2></TabBar2>
    <kecheng1></kecheng1>
  </div>
</template>

<script>
  // import xiaoqu from '../components/选择校区/xiaoqu.vue'
  import TabBar2 from '../components/TabBar2.vue'
  import kecheng1 from '../components/课程/kecheng1.vue'
  export default {
    name: 'course',
    components: {
      TabBar2,
      // xiaoqu
      kecheng1
    }
  }
</script>

<style scoped>

</style>
