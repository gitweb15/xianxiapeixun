<template>
  <div style="text-align: left;">
    <div style="position: fixed;z-index: 1;background-color: white;margin-top: 0px;width: 100%;height: 9%;">
    <!--  <router-link to='/kecheng2' style="float: left;margin-top: 17px;color: black;">
        <van-icon name="arrow-left" tag='p' />高效晚辅导
      </router-link> -->
      <p @click="go" style="float: left;margin-top: 35px;color: black;">
        <van-icon name="arrow-left"/>个性化一对一
      </p>
    </div>
    <img src="../../assets/20.png" style="position: absolute;top: 20px;right: 20px;z-index: 1;" @click="showPopup" />
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
        <!-- <van-popup class='send' v-model="show4" style='width: 100px;height: 100px;border-radius: 10px;line-height: 25px;color: white;background-color: black;'>
          <p>
            <van-icon name="passed" />
          </p>
          <p>已移除</p>
        </van-popup> -->
      </div>
    </van-popup>
    <div style="position: absolute;z-index: 0;">
      <router-link to='/sou' tag='p'>
      <van-search v-model="value" placeholder="" style="margin-left: 20px;margin-top:70px;"/></router-link>
      <p style="margin-left: 40px;margin-top: 10px;">高效晚辅导</p>

      <ul>
        <router-link tag='li' to='/zhengchang'><img src="../../assets/2.png" style="width: 100%;">
          <p>课程名称</p>
          <p>￥1500/10课时</p>
        </router-link>
       <router-link tag='li' to='/zhengchang'><img src="../../assets/2.png" style="width: 100%;">
         <p>课程名称</p>
         <p>￥1500/10课时</p>
       </router-link>
       <router-link tag='li' to='/zhengchang'><img src="../../assets/2.png" style="width: 100%;">
          <p>课程名称</p>
          <p>￥1500/10课时</p>
        </router-link>
       <router-link tag='li' to='/zhengchang'><img src="../../assets/2.png" style="width: 100%;">
         <p>课程名称</p>
         <p>￥1500/10课时</p>
       </router-link>
        <router-link tag='li' to='/zhengchang'><img src="../../assets/2.png" style="width: 100%;">
           <p>课程名称</p>
           <p>￥1500/10课时</p>
         </router-link>
        <router-link tag='li' to='/zhengchang'><img src="../../assets/2.png" style="width: 100%;">
          <p>课程名称</p>
          <p>￥1500/10课时</p>
        </router-link>
        <li>没有更多内容了</li>
      </ul>
    </div>
  </div>
</template>
<script>
  // import top from "../Top";
  export default {
    data() {
      return {
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      };
    },
    // components:{
    //   top
    // },
    methods: {
      go(){
       this.$router.go(-1)
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
            path: '/wanfudao'
          })
        }, 3000)
      },
      showPopup2() {
        this.show2 = true;
        setTimeout(() => {
          this.show = false;
          this.show2 = false;
          this.$router.replace({
            path: '/wanfudao'
          })
        }, 3000)
      },
      showPopup3() {
        this.show3 = true;
        setTimeout(() => {
          this.show = false;
          this.show3 = false;
          this.$router.replace({
            path: '/wanfudao'
          })
        }, 3000)
      },
      showPopup4() {
        setTimeout(() => {
          this.show = false;
          this.$router.replace({
            path: '/wanfudao'
          })
        }, 100)
      },
    },
    mounted() {


    },
  };
</script>


<style scoped>
  ul li:last-of-type {
    margin-left: 130px;
    color: #999999;
  }

  ul li {
    float: left;
    margin-bottom: 10px;
  }

  ul {
    margin-top: 30px;
    margin-left: 20px;
  }

  li {
    width: 40%;
    margin-left: 20px;
    border: 1px solid gainsboro;
    border-radius: 10px;
  }

  ul li p:nth-child(3) {
    color: #999999;
  }

  ul li p {
    padding-left: 10px;
  }
</style>
