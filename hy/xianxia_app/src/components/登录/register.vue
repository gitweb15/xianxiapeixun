<template>
  <div>
    <van-nav-bar left-text="" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" style='margin-top: -40px;' />
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <span style="float: left;padding-left:16px;padding-top: 20px;">请输入手机号码</span>
      <div style="padding-top: 80px;line-height: 50px;">


        <van-field v-model="value1" name="pattern" label="+86" placeholder="请输入手机号码" :rules="[{ pattern, message: '请输入11位手机号码'}]"
          style='margin-left: -32px;' />
        <!-- 通过 validator 进行函数校验 -->
        <van-field v-model="sms" center clearable label="" placeholder="请输入验证码" :rules="[{ pattern, message: '请输入4位数验证码'}]">
          <template #button>
            <van-button size="small" style='color: #0000FF;'>发送验证码</van-button>
          </template>
        </van-field>
        <div style="margin: 16px;margin-top: 300px;" @click="zc">
          <!-- <van-button round block type="info" native-type="submit">
            登录
          </van-button> -->
          <van-button type="info" size="normal" style='width: 85%;'>注册</van-button>
        </div>
      </div>
    </van-form>
  </div>

</template>
<script>


  export default {

    data() {
      return {
        value1: '',
        sms: '',
        pattern: /^\d{11}$/,
      };
    },
    methods: {
      zc(){
        this.$router.replace({
          path: '/login'
        })
      },
      onClickLeft() {
        Toast('<');

      },
      onClickRight() {
        Toast('按钮');
      },

      // 异步校验函数返回 Promise
      asyncValidator(val) {
        return new Promise((resolve) => {
          Toast.loading('验证中...');

          setTimeout(() => {
            Toast.clear();
            resolve(/\d{6}/.test(val));
          }, 1000);
        });
      },
      onFailed(errorInfo) {
        console.log('failed', errorInfo);
      },
    },
  };
</script>
