<template>
  <div>
    <h4>请输入手机号及密码</h4>
    <van-form @submit="onSubmit">
      <van-field
        v-model="tel"
        type="tel"
        label="+86"
        placeholder="请输入手机号码"
        :rules="[
              { required: true, message: '请填写您的手机号码！' },
              { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}
            ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, }]"
      />
      <div style="margin: 30px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onClickLeft() {
      Toast("返回");
    }
  }
};
</script>
<style scoped>
h4 {
  margin: 20px 0 20px;
  text-align: left;
  text-indent: 16px;
  font-size: 15px;
}
.van-field__label{
  width: 40px !important;
}
</style>