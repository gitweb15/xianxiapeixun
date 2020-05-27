<template>
  <div>
    <div style="position: fixed;z-index: 1;background-color: white;margin-top: -80px;width: 100%;height: 7%;">
     <!-- <router-link to='/zhifu' style="float: left;color: black;">
        <van-icon name="arrow-left" tag='p' />选择教师</router-link> -->
       <p @click="left" style="float: left;color: black;">
          <van-icon name="arrow-left" />选择教师
        </p>
    </div>
    <div style="margin-top: 80px;">
      <ul class="ulli">
        <li>校区：</li>
        <li>百合</li>
        <li>水南</li>
        <li>龙山</li>
        <li>玫瑰园</li>
        <li>滨江</li>
      </ul>
    </div><br />
    <div>
      <ul class="ulli1" style="width: 100%;margin-top: 30px;">
        <li>
          <img src="../../assets/6.png" style="width: 170px;height: 150px;" @click="showCont" />
          <p style="margin-left: -68px;">教师姓名</p>
          <div @click="showCont" v-if="show" style='position: absolute;z-index: 1;width: 165px;top: 132px;height: 123px;padding-top: 70px;background:rgba(0, 0, 0, 0.3);color:white;font-weight: bold;'>已选择</div>
        </li>
        <li>
          <img src="../../assets/6.png" style="width: 170px;height: 150px;" @click="showCont1" />
          <p style="margin-left: -68px;">教师姓名</p>
          <div @click="showCont1" v-if="show1" style='position: absolute;z-index: 1;width: 165px;top: 132px;height: 123px;padding-top: 70px;background:rgba(0, 0, 0, 0.3);color:white;font-weight: bold;'>已选择</div>
        </li>
        <li>
          <img src="../../assets/6.png" style="width: 170px;height: 150px;" @click="showCont2" />
          <p style="margin-left: -68px;">教师姓名</p>
          <div @click="showCont2" v-if="show2" style='position: absolute;z-index: 1;width: 165px;top: 342px;height: 123px;padding-top: 70px;background:rgba(0, 0, 0, 0.3);color:white;font-weight: bold;'>已选择</div>
        </li>
        <li>
          <img src="../../assets/6.png" style="width: 170px;height: 150px;" @click="showCont3" />
          <p style="margin-left: -68px;">教师姓名</p>
          <div @click="showCont3" v-if="show3" style='position: absolute;z-index: 1;width: 165px;top: 342px;height: 123px;padding-top: 70px;background:rgba(0, 0, 0, 0.3);color:white;font-weight: bold;'>已选择</div>
        </li>
        <li>
          <img src="../../assets/6.png" style="width: 170px;height: 150px;" />
          <p style="margin-left: -68px;">教师姓名</p>
        </li>
        <li>
          <img src="../../assets/6.png" style="width: 170px;height: 150px;" />
          <p style="margin-left: -68px;">教师姓名</p>
        </li>
       <!-- <li>
          <img src="../../assets/6.png" style="width: 170px;height: 150px;" />
          <p style="margin-left: -68px;">教师姓名</p>
        </li> -->
      </ul>
    </div>
    <p>
      <van-button type="info" block style='margin-top: 220px;width: 70%;margin-left: 55px;' @click="click">保存</van-button>
    </p>
    <div id="app">
      <div v-show="isShow" style="border: 1px solid gainsboro;width: 100px;background: #fff;position: absolute;right: 30px;top: 720px;">
        <button @click="cy">未选择教师</button>
        <router-link tag='button' to='/kecheng'>已选择教师</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        show1: false,
        show2: false,
         show3: false,
        isShow: false,
        message: '显示',
      }
    },
    methods: {
      left() {
        this.$router.go(-1);
      },
      showCont: function() {
        this.show = !this.show;
      },
      showCont1: function() {
        this.show1 = !this.show1;
      },
      showCont2: function() {
        this.show2 = !this.show2;
      },
      showCont3: function() {
        this.show3 = !this.show3;
      },
      click() {
        this.isShow = !this.isShow;
        this.isShow1 = !this.isShow1;
        this.isShow2 = !this.isShow2;
        if (this.isShow) {
          this.message = '隐藏';
        } else {
          this.message = '显示';
        }
      },

      cy() {
        alert('未选择成员')
      },
    }
  }
</script>

<style scoped>
  .ulli li:hover {
    font-weight: bolder;
    font-size: 18px;
  }

  .ulli1 li {
    list-style-type: none;
    float: left;
    margin-left: 10px;
  }

  .ulli li {
    list-style-type: none;
    float: left;
    margin-left: 20px;
  }

  /* .ulli li:nth-child(4) {
    font-weight: bold;
  } */

  .ulli li:nth-child(1) {
    color: #0000FF;
  }
</style>
