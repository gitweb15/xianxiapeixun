<template>
  <div>
    <div>
      <div style="position: fixed;z-index: 1;background-color: white;margin-top: -10px;width: 100%;height: 9%;">
        <p style="margin-top: 20px;">课程</p>
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
    </div>
    <div style="text-align: left;margin: 10px;">
      <router-link to='/teacherlo/xiaoqu'>
        <van-icon name="location" style="margin-top: 60px;color: #999999;" />城南校区></router-link>
      <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../../assets/2.png" style="width: 100%;height: 100%;"></van-swipe-item>
        <van-swipe-item><img src="../../assets/2.png" style="width: 100%;height: 100%;"></van-swipe-item>
        <van-swipe-item><img src="../../assets/2.png" style="width: 100%;height: 100%;"></van-swipe-item>
        <van-swipe-item><img src="../../assets/2.png" style="width: 100%;height: 100%;"></van-swipe-item>
      </van-swipe> -->
      <div style="margin-left: -10px;">
        <el-carousel height="150px" width='100%' style='width: 100%;'>
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../assets/2.png" style="width: 100%;height: 100%;" />
             <img src="../../assets/2.png" style="width: 100%;height: 100%;" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <van-row gutter="20" style='text-align: center;'>
        <router-link tag='van-col' span="7" to='/wanfudao'><img src="../../assets/21.png">
          <p>高效晚辅导</p>
        </router-link>
        <router-link tag='van-col' span="7" to='/zhoumo'><img src="../../assets/21.png">
          <p>周末精品班</p>
        </router-link>
        <router-link tag='van-col' span="7" to='/yiduiyi'><img src="../../assets/21.png">
          <p>一对一</p>
        </router-link>
        <router-link tag='van-col' span="7" to='/sou'><img src="../../assets/21.png">
          <p>搜索</p>
        </router-link>
      </van-row>
      <!-- <van-grid>
        <van-grid-item icon="photo-o" text="高效晚辅导" to='/wanfudao' />
        <van-grid-item icon="photo-o" text="周末精品班" to='/wanfudao' />
        <van-grid-item icon="photo-o" text="一对一" to='/wanfudao' />
        <van-grid-item icon="photo-o" text="搜索" to='/sou' />
      </van-grid> -->
      <div style="width: 100%;">
        <!-- 滑动（高效晚辅导） -->
        <router-link to="wanfudao" tag="div" class="swipe2">
          <div>
            <h4 style="margin-left: 20px;">高效晚辅导</h4>
            <div style="float: right;margin-top: -42px;color: #999;">
              更多
              <van-icon name="arrow" class="arrow2" />
            </div>
          </div>
        </router-link>
        <router-link to="zhengchang" tag="div" class="swipe2">
          <van-swipe class="my-swipe" :loop="false" :show-indicators="false">
            <van-swipe-item v-for="(item, index) in swipe2Data" :key="index">
              <div class="swipe-img-div">
                <img src="../../assets/2.png" class="swipe-img" />
              </div>
              <p>{{ item.p1 }}</p>
              <p>{{ item.p2 }}</p>
            </van-swipe-item>
            <template>
              <span class="swipe-text">没有更多了</span>
            </template>
          </van-swipe>
        </router-link>
        <router-link to="zhoumo" tag="div" class="swipe2">
          <div>
            <h4 style="margin-left: 20px;">周末精品班</h4>
            <div style="float: right;margin-top: -42px;color: #999;">
              更多
              <van-icon name="arrow" class="arrow2" />
            </div>
          </div>
        </router-link>
        <router-link to="zhengchang" tag="div" class="swipe2">
          <van-swipe class="my-swipe" :loop="false" :show-indicators="false">
            <van-swipe-item v-for="(item, index) in swipe2Data" :key="index">
              <div class="swipe-img-div">
                <img src="../../assets/2.png" class="swipe-img" />
              </div>
              <p>{{ item.p1 }}</p>
              <p>{{ item.p2 }}</p>
            </van-swipe-item>
            <template>
              <span class="swipe-text">没有更多了</span>
            </template>
          </van-swipe>
        </router-link>
        <router-link to="yiduiyi" tag="div" class="swipe2">
          <div>
            <h4 style="margin-left: 20px;">个性化一对一</h4>
            <div style="float: right;margin-top: -42px;color: #999;">
              更多
              <van-icon name="arrow" class="arrow2" />
            </div>
          </div>
        </router-link>
        <router-link to="zhengchang" tag="div" class="swipe2">
          <van-swipe class="my-swipe" :loop="false" :show-indicators="false">
            <van-swipe-item v-for="(item, index) in swipe2Data" :key="index">
              <div class="swipe-img-div">
                <img src="../../assets/2.png" class="swipe-img" />
              </div>
              <p>{{ item.p1 }}</p>
              <p>{{ item.p2 }}</p>
            </van-swipe-item>
            <template>
              <span class="swipe-text">没有更多了</span>
            </template>
          </van-swipe>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          "../../assets/2.png",
          "../../assets/2.png",
        ],
        swipe2Data: [{
            images: "../../assets/2.png",
            p1: "课程名称",
            p2: "￥1500/10课时"
          },
          {
            images: "../../assets/2.png",
            p1: "课程名称",
            p2: "￥1500/10课时"
          },
          {
            images: "../../assets/2.png",
            p1: "课程名称",
            p2: "￥1500/10课时"
          },
          {
            images: "../../assets/2.png",
            p1: "课程名称",
            p2: "￥1500/10课时"
          }
        ],
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
    },
    // mounted() {
    //   if(this.timer){
    //     clearInterval(this.timer);
    //   }else{
    //     this.timer=setInterval(()=>{
    //       this.getMigrateDetail();
    //     },1800000)
    //   }
    // },
    // destroyed(){
    //   clearInterval(this.timer)
    // }
  };
</script>

<style scoped>
  .iocation {
    text-align: left;
    font-size: 25px;
    margin: 10px;
  }

  .iocation>span {
    font-size: 14px;
    display: inline-block;
    line-height: 31px;
    vertical-align: top;
    padding-left: 3px;
  }

  .arrow {
    padding: 0px 0px 7px 1px;
    vertical-align: bottom;
    font-size: 16px;
  }

  .swipe .my-swipe .van-swipe-item {
    margin: 10px;
    height: 150px;
    width: 100%;
    overflow: hidden;
  }

  .swipe-img {
    width: 100%;
  }

  .f4>span {
    display: inline-block;
    width: 25%;
    padding: 20px 10px;
    box-sizing: border-box;
    font-size: 14px;
  }

  .swipe2 .my-swipe .van-swipe-item {
    margin: 10px;
    width: 11% !important;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0px 0px 15px #ccc;
  }

  .swipe-img-div {
    height: 94px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .swipe2 .my-swipe .van-swipe-item p {
    text-align: left;
    margin: 10px 0;
    padding-left: 10px;
  }

  .swipe2 .my-swipe .van-swipe-item p:first-child {
    color: black;
  }

  .swipe2 .my-swipe .van-swipe-item p:last-child {
    color: #999;
  }

  .swipe-text {
    display: inline-block;
    width: 30px !important;
    text-shadow: 1px 1px 5px black;
    line-height: 28px;
  }

  .swipe2-top {
    margin: 10px;
  }

  .swipe2-top h3 {
    margin: 0px;
  }

  .content>span {
    display: inline-block;
    width: 46%;
    box-sizing: border-box;
    margin: 10px 2%;
    border-radius: 5px;
    overflow: hidden;
  }

  .content p {
    text-align: left;
    margin: 10px 0;
    padding-left: 10px;
  }

  .content>span p:first-child {
    color: black;
  }

  .content>span p:last-child {
    color: #999;
  }

  .el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
    width: 100%;
    background: url('../../assets/2.png') no-repeat;
  }

  .el-carousel__item:nth-child(2n+1) {
    /* background-color: #d3dce6; */
    width: 350%;
    background: url('../../assets/2.png') no-repeat;
    /* background-color: red;2 */
  }

  .van-swipe__indicator {
    width: 4.375rem;
    height: 0.375rem;
    background-color: #ebedf0;
    border-radius: 100%;
    opacity: .3;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
  }

  .van-col p {
    color: #999999;
  }

  .width {
    width: 100%;
  }

  .left {
    margin-left: 20px;
    float: left;
    width: 100%;
  }

  .more {
    float: right;
    margin-top: -40px;
    color: #999999;
    margin-right: 20px;
  }

  ul li {
    float: left;
    margin-bottom: 10px;
  }

  ul {
    margin-left: 20px;
  }

  ul li:nth-child(2) {
    margin-left: 40px;
  }

  li {
    width: 40%;
    margin-left: 0px;
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
