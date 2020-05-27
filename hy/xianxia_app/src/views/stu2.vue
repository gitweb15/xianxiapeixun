<template>
  <div id="main">
    <stu11></stu11>
    <TabBar2></TabBar2>

  </div>
</template>

<script>
  import stu11 from '../components/学员主页/stuzhuye.vue'
  import TabBar2 from '../components/TabBar2.vue'
  export default {
    name: 'stu1',
    components: {
      TabBar2,
      stu11
    }
  }
</script>

<style scoped>

</style>
