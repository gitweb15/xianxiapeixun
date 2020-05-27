<template>
  <div id="main">
    <TabBar1></TabBar1>
    <richeng></richeng>
  </div>
</template>

<script>
  import TabBar1 from '../components/TabBar1.vue'
  import richeng from '../components/日程/richeng.vue'
  export default {
    name: 'richeng1',
    components: {
      TabBar1,
      richeng
    }
  }
</script>

<style scoped>

</style>
