<template>
  <div>
    <div style="position: fixed;z-index: 1;background-color: white;margin-top: -60px;width: 100%;height: 9%;">
      <router-link to='/wanfudao' style="float: left;margin-top: 17px;color: black;margin-left: 10px;">
        <van-icon name="arrow-left" tag='p' />搜索</router-link>
      <img src="../../assets/20.png" style="position: absolute;top: 20px;right: 20px;z-index: 1;" @click="showPopup" />
    </div>

    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <div style="text-align: center;margin:0px 20px;line-height: 35px;">
        <p @click="showPopup1">转发</p>

        <van-popup class='send' v-model="show1" style='width: 100px;height: 100px;border-radius: 10px;line-height: 25px;color: white;background-color: black;'>
          <p>
            <van-icon name="passed" />
          </p>
          <p>已发送</p>
        </van-popup>
        <p @click="showPopup2">添加到桌面</p>
        <van-popup class='send' v-model="show2" style='width: 100px;height: 100px;border-radius: 10px;line-height: 25px;color: white;background-color: black;'>
          <p>
            <van-icon name="passed" />
          </p>
          <p>已添加</p>
        </van-popup>
        <p @click="showPopup3">从我的小程序中移除</p>
        <van-popup class='send' v-model="show3" style='width: 100px;height: 100px;border-radius: 10px;line-height: 25px;color: white;background-color: black;'>
          <p>
            <van-icon name="passed" />
          </p>
          <p>已移除</p>
        </van-popup>
        <p @click="showPopup4">关于</p>
      </div>
    </van-popup>
    <van-search v-model="value" placeholder="搜索课程" class='div' />

    <div class='jl'>
      <p>还没有搜索记录哦~</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "wu",
    data() {
      return {
        mainData: [{
            icon: "search",
            span: "语文个性化一对一辅导",
            url: '/zhengchang'
          },
          {
            icon: "search",
            span: "数学个性化一对一辅导",
            url: '/zhengchang'
          },
          {
            icon: "search",
            span: "英语个性化一对一辅导",
            url: '/zhengchang'
          },
          {
            icon: "search",
            span: "化学个性化一对一辅导",
            url: '/zhengchang'
          }
        ],
        boolShow: true,
        boolShow2: true,
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      };
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      showPopup1() {
        this.show1 = true;
        setTimeout(() => {
          this.show = false;
          this.show1 = false;
          this.$router.replace({
            path: '/kecheng2'
          })
        }, 3000)
      },
      showPopup2() {
        this.show2 = true;
        setTimeout(() => {
          this.show = false;
          this.show2 = false;
          this.$router.replace({
            path: '/kecheng2'
          })
        }, 3000)
      },
      showPopup3() {
        this.show3 = true;
        setTimeout(() => {
          this.show = false;
          this.show3 = false;
          this.$router.replace({
            path: '/kecheng2'
          })
        }, 3000)
      },
      showPopup4() {
        setTimeout(() => {
          this.show = false;
          this.$router.replace({
            path: '/kecheng2'
          })
        }, 100)
      },
    }
  }
</script>

<style scoped>
  .jl {
    color: #999999;
    margin-top: 300px;
  }

  .div {
    margin-top: 60px;
  }

  .main {
    border-radius: 3px;
    /* box-shadow: 0px 0px 15px #ccc; */
    text-align: left;
    margin: 10px;
    background: #fff;
    line-height: 40px;
    position: relative;
    top: -10px;
    padding: 20px 10px 30px;
  }

  .main>div>span {
    position: relative;
    top: -6px;
    margin-left: 10px;
  }

  .main>div {
    padding-top: 3px;
    border-bottom: #ccc 1px solid;
    padding: 10px 0 5px 10px;
  }

  .main>div>i:last-child {
    float: right;
    margin-right: 10px;
  }

  .main i {
    font-size: 25px;
  }
</style>
