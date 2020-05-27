<template>
  <div>

    <div style="position: fixed;z-index: 1;background-color: white;margin-top: -100px;width: 100%;height: 9%;">
      <p style="margin-top: 30px;">选择校区</p>
      <img src="../../assets/20.png" style="position: absolute;top: 20px;right: 20px;z-index: 1;" @click="showPopup" />
    </div>
    <div class="left">
      <p class="left1">请选择查看的校区</p>
      <ul class="ulli">
        <router-link tag='li' to='/kecheng2'>城南校区</router-link>
        <router-link tag='li' to='/kecheng2'>水榭校区</router-link>
        <router-link tag='li' to='/kecheng2'>花之南校区</router-link>
        <router-link tag='li' to='/kecheng2'>滨江校区</router-link>
        <router-link tag='li' to='/kecheng2'>九洞桥校区</router-link>
        <router-link tag='li' to='/kecheng2'>万达校区</router-link>
        <router-link tag='li' to='/kecheng2'>世贸校区</router-link>
      </ul>
      
    </div>
  </div>

</template>

<script>
</script>

<style scoped>
  .left {
    text-align: left;
  }

  .left1 {
    margin-top: 100px;
    margin-left: 20px;
  }

  .ulli li {
    list-style-type: none;
    margin: 15px;
    float: left;
    line-height: 30px;
    border: 1px solid #CCCCCC;
    padding: 10px;
  }

  .ulli {
    width: 100%;
  }
</style>
