<template>
  <div class="login">
    <div style="padding-top: 70px;">
      <img src="@/assets/img/cc.jpg" alt style="width: 100px;height: 100px;" />
      <p style="color: black;">耐寒教育</p>
      <p class="icon">
        <span v-if="i>0"></span>
        <span v-if="i>2"></span>
        <span v-if="i>3"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Qi",
  data() {
    return {
      i: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.i++;
    },600)
    setTimeout(() => {
      this.$router.push({path: '/App/Login'})
    },3000)
  },
};
</script>

<style scoped>
.login {
  background: #F2F2F2;
  height: 100%;
}
body {
  width: 100%;
}

.top {
  margin-top: 140px;
}

.rigth {
  color: black;
  font-size: 12px;
  margin-left: 150px;
  line-height: 55px;
}

.button {
  width: 280px;
  height: 55px;
  margin-top: 140px;
}
.icon>span{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #6F8CA7;
  margin: 10px 5px;
}
</style>
