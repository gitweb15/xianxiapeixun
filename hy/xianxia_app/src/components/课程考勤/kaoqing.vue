<template>
  <div class="main">
    <div class="dianji">
      <router-link to='/wanfudao' class="wanfudao">
        <van-icon name="arrow-left" tag='p' />课程考勤</router-link>
      <!-- <img src="../../assets/20.png" class="img" @click="showPopup" /> -->
      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
        <div style="text-align: center;margin:0px 20px;line-height: 35px;">
          <p @click="showPopup1">转发</p>
          <van-popup class='send' v-model="show1">
            <p>
              <van-icon name="passed" />
            </p>
            <p>已发送</p>
          </van-popup>
          <p @click="showPopup2">添加到桌面</p>
          <van-popup class='send' v-model="show2">
            <p>
              <van-icon name="passed" />
            </p>
            <p>已添加</p>
          </van-popup>
          <p @click="showPopup3">从我的小程序中移除</p>
          <van-popup class='send' v-model="show3">
            <p>
              <van-icon name="passed" />
            </p>
            <p>已移除</p>
          </van-popup>
          <p @click="showPopup4">关于</p>
        </div>
      </van-popup>
    </div>
    <div style="margin-top:95px;">
      <div style="border: 1px solid #999999;height: 100px;padding: 50px;">
        <div style="text-align: left;position: absolute;left: 10px;top: 50px;">
          <span style="border: 3px solid #0000FF;width: 20px;height: 10px;margin-right:80px;"></span>
          <span style="text-align: left;margin-left: -50px;">学员考勤</span>
        </div>
        <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" style='float: left;margin-top: 30px;' />
        <van-button type="info" style='margin-top: 40px;margin-left: 100px;' to='/kaoqinzonglan'>考勤总览</van-button>
      </div>
      <div style="border: 1px solid #999999;height: 100%;margin-top: 30px;padding-top: 10px;">
        <van-row>
          <van-col span="8">
            <div style="margin-left: -40px;">
              <span style="border: 3px solid #0000FF;width: 20px;height: 10px;margin-right:40px;padding: 0px;"></span>
              <span style="text-align: left;margin-left: -30px;">未到名单</span>
            </div>
          </van-col>
          <van-col span="8"></van-col>
          <van-col span="8">
            <van-button type="info" @click="data=[]" v-show="data.length>0">全部出勤</van-button>
          </van-col>
        </van-row>
        <div v-if="!items" style="height: 100%;">
          <div v-for="(item,index) in data" :key='index' class="left2" v-show="data.length>0">
            <p>{{item.name}}</p>
            <p>{{item.name1}}<span style="float: right;margin-right: 20px;background-color: #0000FF;padding: 10px;color: white;margin-top: -20px;">{{item.button}}</span>
            </p>
          </div>
          <div v-if="!items" style="padding: 125px;">学员已经全部到齐啦~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: false,
        data: [{
            name: '学员姓名',
            name1: '182432255534(家长手机号)',
            button: '标记为出勤'
          },
          {
            name: '学员姓名',
            name1: '182432255534(家长手机号)',
            button: '标记为出勤'
          },
          {
            name: '学员姓名',
            name1: '182432255534(家长手机号)',
            button: '标记为出勤'
          },
          {
            name: '学员姓名',
            name1: '182432255534(家长手机号)',
            button: '标记为出勤'
          },
          {
            name: '学员姓名',
            name1: '182432255534(家长手机号)',
            button: '标记为出勤'
          },
          {
            name: '学员姓名',
            name1: '182432255534(家长手机号)',
            button: '标记为出勤'
          }
        ],
        currentRate: 0,
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      };
    },
    computed: {
      text() {
        return this.currentRate.toFixed(0) + '' + '/40';
      },
    },
    methods: {
      cq() {

      },
      showPopup() {
        this.show = true;
      },
      showPopup1() {
        this.show1 = true;
        setTimeout(() => {
          this.show = false;
          this.show1 = false;
          this.$router.replace({
            path: '/kecheng'
          })
        }, 3000)
      },
      showPopup2() {
        this.show2 = true;
        setTimeout(() => {
          this.show = false;
          this.show2 = false;
          this.$router.replace({
            path: '/kecheng'
          })
        }, 3000)
      },
      showPopup3() {
        this.show3 = true;
        setTimeout(() => {
          this.show = false;
          this.show3 = false;
          this.$router.replace({
            path: '/kecheng'
          })
        }, 3000)
      },
      showPopup4() {
        setTimeout(() => {
          this.show = false;
          this.$router.replace({
            path: '/kecheng'
          })
        }, 100)
      },
    }
  };
</script>

<style scoped>
  .left2 van-button {
    background-color: #0000FF;
  }

  .left2 {
    height: 100%;
  }

  .left2 p {
    text-align: left;
    margin-left: 20px;
  }

  .send {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    line-height: 25px;
    color: white;
    background-color: black;
  }

  .img {
    position: absolute;
    top: 35px;
    right: 20px;
    z-index: 1;
  }

  .wanfudao {
    float: left;
    margin-top: 17px;
    color: black;
    margin-left: 10px;
  }

  .dianji {
    position: fixed;
    z-index: 1;
    background-color: white;
    margin-top: -120px;
    width: 100%;
    height: 9%;
  }
</style>
