<template>
  <div class="body">
    <p>日程</p>
    <img src="../../assets/20.png" style="position: absolute;top: 20px;right: 20px;z-index: 1;" @click="showPopup" />
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
    <ul class='border'>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
    </ul>
    <div class="mond">
      <van-row gutter="40" style='margin-top: 10px;width: 100%;'>
        <van-col span="11">3月11日周一</van-col>
        <van-col span="5" offset="6">
          <van-button type="info" @click="dialogVisible = true">更多</van-button>
        </van-col>
      </van-row>
      <el-dialog title="" :visible.sync="dialogVisible" width="90%" height='50%'>
        <el-calendar v-model="value">
        </el-calendar>

      </el-dialog>

      <van-row gutter="40" style='margin-top: 30px;width: 100%;'>
        <van-col span="10">今日课程</van-col>
        <van-col span="5" offset="7">03/04</van-col>
      </van-row>
      <van-row gutter="40" style='margin-top: 30px;width: 100%;'>
        <van-progress :percentage="50" />
      </van-row>
      <div class="main">
        <router-link tag="div" v-for="(item, index) in mainData" :key="index" :to="item.url">
          <span class="span"></span>
          <span>{{ item.span }}</span>
          <p style="margin-top:-20px;margin-left: 33px;">{{ item.span1 }}</p>
          <van-icon :name="item.rightIcon" style="margin-top:-60px;" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: new Date(),
        dialogVisible: false,
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        mainData: [{
            span: "英语个性化一对一",
            span1: "10:00-12:00",
            rightIcon: "arrow",
            url: '/kaoqing'
          },
          {
            span: "英语个性化一对一",
            span1: "10:00-12:00",
            rightIcon: "arrow",
            url: '/kaoqing'
          },
          {
            span: "英语个性化一对一",
            span1: "10:00-12:00",
            rightIcon: "arrow",
            url: '/kaoqing'
          },
          {
            span: "英语个性化一对一",
            span1: "10:00-12:00",
            rightIcon: "arrow",
            url: '/kaoqing'
          }
        ],
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
            path: '/richeng'
          })
        }, 3000)
      },
      showPopup2() {
        this.show2 = true;
        setTimeout(() => {
          this.show = false;
          this.show2 = false;
          this.$router.replace({
            path: '/richeng'
          })
        }, 3000)
      },
      showPopup3() {
        this.show3 = true;
        setTimeout(() => {
          this.show = false;
          this.show3 = false;
          this.$router.replace({
            path: '/richeng'
          })
        }, 3000)
      },
      showPopup4() {
        setTimeout(() => {
          this.show = false;
          this.$router.replace({
            path: '/richeng'
          })
        }, 100)
      },
      click() {
        this.isShow = !this.isShow;
        if (this.isShow) {
          this.message = '隐藏';
        } else {
          this.message = '显示';
        }
      },
    }
  };
</script>
<style>
  .span {
    background-color: #0000FF;
    border-radius: 50%;
    padding: 0px 8px;
    margin-top: 10px;
  }

  .mond {
    border: 1px solid #fff;
    margin-top: 20px;
    box-shadow: 0px 0px 15px #ccc;
  }

  .send {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    line-height: 25px;
    color: white;
    background-color: black;
  }

  .main {
    border-radius: 3px;
    text-align: left;
    background: #fff;
    position: relative;
    top: 10px;
    padding: 0px 0px 0px;
  }

  .main>div>span {
    position: relative;
    top: -6px;
    margin-left: 10px;
  }

  .main>div {
    padding-top: 3px;
    padding: 10px 0 5px 10px;
  }

  .main>div>i:last-child {
    float: right;
    margin-right: 10px;
  }

  .main i {
    font-size: 25px;
  }

  div {
    line-height: 40px;
  }

  .ulli1 {
    margin-top: 100px;

  }

  .ulli1 p:nth-child(1) {
    float: left;
    margin-left: 20px;
  }

  .ulli1 p:nth-child(2) {
    float: right;
    margin-right: 20px;
  }

  .ulli {
    border: 1px solid gainsboro;
  }

  .ulli p:nth-child(1) {
    float: left;
    margin-left: 20px;
  }

  .ulli p:nth-child(2) {
    float: right;
    margin-right: 20px;
  }

  .border {
    padding-top: 20px;
    width: 100%;
    background-color: #EEEEEE;
    width: 100%;
    height: 40px;
  }

  .border li {
    margin-left: 42px;
    list-style-type: none;
    width: 20px;
    height: 28px;
    float: left;
    border-radius: 50%;
    padding: 0px 10px;
  }

  .border li:hover {
    color: white;
    width: 20px;
    height: 38px;
    border-radius: 50%;
    background-color: #0000FF;
  }
</style>
