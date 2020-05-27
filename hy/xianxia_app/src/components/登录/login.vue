<template>
  <div class="login">
    <div style="margin-top: 50px;">
      <img src="../../assets/1.png" alt="" style="width: 100px;height: 100px;">
      <p style="color: red;">不忘初心,做有温度的教育</p>
      <!-- <van-button round type="info" class='button' @click="showShare = true">微信授权登录</van-button> -->
      <!-- <van-button round type="info" class='button' to='/kecheng2'>微信授权登录</van-button> -->

      <van-button round type="info" class='button' @click="showPopup">微信授权登录</van-button>
      <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
        <div style="text-align: left;margin:0px 20px;">
          <p>
            <span style="font-size: 20px;font-weight: bold;">耐寒教育</span>
            <span style="margin-left: 10px;">申请</span>
          </p>
          <h1>获取你的昵称、头像、地区及性别</h1>
          <div class="border-div">
            <img src="../../assets/6.png" style="width: 20%;" />
            <div class="info">
              <p>微信个人信息</p>
              <p>耐寒教育</p>
            </div>
          </div>
          <div class="button-div">
            <van-button type="default" class="button1" to='/zc'>取消</van-button>
            <van-button type="primary" class="button2" to='/kecheng2'>允许</van-button>
          </div>
        </div>
      </van-popup>

      <!--  <van-overlay :show="show" @click="show = false" /> -->
    </div>
    <router-link class="rigth" to="/teacherLogin">教师登录入口</router-link>
    <p class="right top">技术服务电话:XXXXXX</p>
  </div>

</template>

<script>
  export default {
    // mounted() {
    //   this.$toast('提示文案');
    // },
    data() {
      return {
        show: false,
        showShare: false,
        options: [{
            name: '名称',
            icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
          },
          {
            name: '名称',
            icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
          },
          {
            name: '名称',
            icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
          },
        ],
      };
    },
    methods: {
      showPopup() {
        this.show = true;
      },
    },
  };
</script>

<style scoped>
  .border-div {
    border-bottom: 1px solid gainsboro;
    border-top: 1px solid gainsboro;
    padding: 10px;
  }

  .button-div {
    margin-top: 50px;
    border-radius: 10px;
    text-indent: 20px;
  }

  .button1 {
    width: 40%;
    background-color: #EEEEEE;
  }

  .button2 {
    width: 40%;
    float: right;
  }

  .info {
    margin-top: -20px;
    margin-right: 150px;
    float: right;
  }

  .info p:nth-child(1) {
    font-weight: bold;
    font-size: 20px;
  }

  .info p:nth-child(2) {
    margin-top: -10px;
  }

  .content {
    padding: 16px 16px 160px;
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
</style>
<!-- npm i postcss-px2rem -S


npm i amfe-flexible -S

"postcss": {
    "plugins": {
      "autoprefixer": {},
      "postcss-px2rem": {
        "remUnit": 37.5
      }
    }
  } -->
