<template>
  <div>
    <p style="color: #737373;font-size: 17px;font-weight: 600;margin-top: 30px;">请输入手机号及密码</p>
    <br />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
        style="width: 90%;margin: 0 auto;"
      />
      <br />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        style="width: 90%;margin: 0 auto;"
      />
      <br />
      <div style="margin: 18px;">
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "jsgl",
  data() {
    return {
      username: "",
      password: "",
      show: false,
      actions: [
        { name: "验证码错误", url: "手机号码错误" },
        { name: "判断为家长",url: '/App/Tab/KeCheng' },
        { name: "判断为教师", url: "/App/Tab/riCheng" }
      ]
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      // this.$router.push({ path: "/App/Tab/KeCheng" });
      this.show = true;
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      console.log(item.url);
      if (item.url == "手机号码错误") {
        this.$toast({
          message:item.url,
          icon: 'close'
        });
      } else {
        this.$router.push(item.url);
        this.$store.commit('kechengUrlUpd',item.url)
      }
    }
  }
};
</script>

<style>
</style>
