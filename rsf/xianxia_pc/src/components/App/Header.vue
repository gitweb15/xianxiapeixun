<template>
  <div class="sss">
    <van-nav-bar
      :left-text="title"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  props: ['title']
};
</script>

<style scoped>
.sss{
    position: fixed;
    top: 0px;
    width: 100%;
    background: white;
    z-index: 99;
}
</style>