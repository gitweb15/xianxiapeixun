<template>
  <div>
    <p @click="left" style="float: left;margin-top: 40px;color: black;">
      <van-icon name="arrow-left" />学员详情
    </p>
    <div class="imgCss clear" style="width: 100%;margin-top: 40px;">
      <!-- <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
      <img src="../../assets/2.png" style="width: 100%;height: 100%;" />
      <div style="position: absolute;z-index: 1;top:95px;">
        <img src="../../assets/16.png" />
        <div style="position: absolute;top: 10px;left: 50px;width: 100px;">
          <p>
            学员姓名

          </p>
          <p>小学-六年级</p>
        </div>

      </div>
    </div>

    <van-tabs v-model="active">
      <van-tab title="课程表">
        <div style='width: 95%;border: 1px solid gainsboro;margin-left: 10px;margin-top: 30px;'>
          <el-calendar v-model="value">
          </el-calendar>
        </div>
        <div style="border: 1px solid gainsboro;font-weight: bold;width:95%;">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content bg-purple">3月11日 周一</div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 50px;height: 50px;">
            <el-col :span="18" :offset="3">
              <div class="grid-content bg-purple">今天没课，好好放松一下吧！</div>
            </el-col>
          </el-row>
        </div>
      </van-tab>
      <van-tab title="课程信息" style='margin-top: 30px;'>
        <div class="img">
          <img src="../../assets/2.png">
        </div>
        <div class="left">
          <p>英语个性化一对一教学</p>
          <p style="color: red;">￥1500/10课时</p>
        </div>
        <p class="kc">课程剩余节数:12节</p>
        <p class="kc1">如需退款请联系线下主讲老师</p>
        <van-button type="info" class='info' to='kecheng'>立即续费</van-button>
        <div class="img">
          <img src="../../assets/2.png">
        </div>
        <div class="left">
          <p>英语个性化一对一教学</p>
          <p style="color: red;">￥1500/10课时</p>
        </div>

        <p class="kc">课程剩余节数:12节</p>
        <p class="kc1">如需退款请联系线下主讲老师</p>
        <van-button type="info" class='info' to='kecheng'>立即续费</van-button>
        <div class="img">
          <img src="../../assets/2.png">
        </div>
        <div class="left">
          <p>英语个性化一对一教学</p>
          <p style="color: red;">￥1500/10课时</p>
        </div>

        <p class="kc">课程剩余节数:12节</p>
        <p class="kc1">如需退款请联系线下主讲老师</p>
        <van-button type="info" class='info' to='kecheng'>立即续费</van-button>
      </van-tab>

      <van-tab title="上课记录">
        <div style="text-align: left;margin-left: 20px;margin:13px;">
          <span style="border: 1px solid #0000FF;padding:2px;background: #0000FF;margin: 5px;"></span>
          <span>上课记录</span>
        </div>
        <van-row type="flex" justify="center">
          <van-col span="12" style='text-align: left;'>
            <p>2019-4-12</p>
            <p>英语一对一课外辅导</p>
          </van-col>
          <van-col span="6">
            <p class="red">未考勤</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="12" style='text-align: left;'>
            <p>2019-4-12</p>
            <p>英语一对一课外辅导</p>
          </van-col>
          <van-col span="6">
            <p class="blue">已考勤</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="12" style='text-align: left;'>
            <p>2019-4-12</p>
            <p>英语一对一课外辅导</p>
          </van-col>
          <van-col span="6">
            <p class="blue">已考勤</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="12" style='text-align: left;'>
            <p>2019-4-12</p>
            <p>英语一对一课外辅导</p>
          </van-col>
          <van-col span="6">
            <p class="blue">已考勤</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="12" style='text-align: left;'>
            <p>2019-4-12</p>
            <p>英语一对一课外辅导</p>
          </van-col>
          <van-col span="6">
            <p class="blue">已考勤</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="12" style='text-align: left;'>
            <p>2019-4-12</p>
            <p>英语一对一课外辅导</p>
          </van-col>
          <van-col span="6">
            <p class="blue">已考勤</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="12" style='text-align: left;'>
            <p>2019-4-12</p>
            <p>英语一对一课外辅导</p>
          </van-col>
          <van-col span="6">
            <p class="red">未考勤</p>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>

    <!-- <div>
      <ul class="ulli">
        <li>课程表</li>
        <li>课程信息</li>
        <li>上课记录</li>
      </ul>
    </div><br />
    <div style='width: 95%;border: 1px solid gainsboro;margin-left: 10px;margin-top: 30px;'>
      <el-calendar v-model="value">
      </el-calendar>
    </div>
    <div>
      <p></p>
      <p></p>
    </div>

    <div style="border: 1px solid gainsboro;font-weight: bold;width:95%;">
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">3月11日 周一</div></el-col>
      </el-row>
     <el-row :gutter="20" style="margin-top: 50px;height: 50px;">
        <el-col :span="18" :offset="3"><div class="grid-content bg-purple">今天没课，好好放松一下吧！</div></el-col>
      </el-row>
    </div> -->

  </div>
</template>
<script>
  export default {
    name: "xueyuan",
    data() {
      return {
        value: new Date(),
        active: 1
      }
    },
    methods: {
      left() {
        this.$router.go(-1);
      }
    }
  };
</script>
<style scoped>
  .blue {
    color: blue;
  }

  .red {
    color: red;
  }

  .kc1 {
    width: 60%;
    color: #666666;
  }

  .info {
    float: right;
    margin-left: 20px;
    margin-right: 40px;
    margin-top: -80px;
  }

  .left {
    float: right;
    margin-top: -120px;
    text-align: left;
    margin-right: 20px;
  }

  .img {
    width: 40%;
    text-align: left;
    margin-left: 10px;
  }

  .kc {
    text-align: left;
    margin-left: 20px;
    width: 50%;
  }

  .xf {
    float: right;
    margin-left: 20px;
    margin-right: 40px;
    margin-top: 0px;
  }

  .van-tabs__line {
    position: absolute;
    bottom: 0.9375rem;
    left: 0;
    z-index: 1;
    height: 0.1875rem;
    background-color: none;
    border-radius: 0.1875rem;
    /* color: black; */
  }

  .ulli li {
    list-style-type: none;
    float: left;
    margin-left: 60px;
  }

  .ulli li:nth-child(4) {
    font-weight: bold;
  }

  .ulli li:nth-child(1) {
    font-weight: bold;
  }

  .imgCss {
    overflow: hidden;
    width: 100%;
    height: 200px;
    background: #ccc;
    background-size: 100% 250px;
  }

  .imgCss>div {
    float: left;
    position: relative;
    top: 20%;
    text-align: left;
    color: white;
  }

  .imgCss>div:first-child {
    margin-left: 30px;
  }

  .imgCss>div:last-child {
    margin-left: 20px;
    padding-top: 15px;
  }

  .imgCss>div:last-child span {
    margin-left: 10px;
    font-size: 12px;
  }

  .imgCss>div:last-child>p:last-child {
    margin-top: 5px;
  }

  .myKe {
    border-radius: 3px;
    box-shadow: 0px 0px 15px #ccc;
    padding: 10px;
    text-align: left;
    margin: 10px;
    background: #fff;
    position: relative;
    top: -50px;
    z-index: 9;
  }

  .myKe>h3 {
    border-bottom: #ccc 1px solid;
    padding-bottom: 10px;
  }

  .iconCss {
    text-align: center;
    margin-top: 10px;
  }

  .iconCss>span {
    display: inline-block;
    width: 25%;
    padding: 5px 0;
  }

  .iconCss>span i {
    font-size: 30px;
  }

  .main {
    border-radius: 3px;
    box-shadow: 0px 0px 15px #ccc;
    text-align: left;
    margin: 10px;
    background: #fff;
    position: relative;
    top: -40px;
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

  .btn {
    margin: 0 5%;
    position: absolute;
    width: 90%;
    bottom: 4%;
  }

  .btn button {
    border-radius: 5px;
  }

  .hide {
    height: 300px;
    line-height: 300px;
  }

  .hide button {
    position: relative;
    top: -250px;
    border-radius: 5px;
    padding: 0 10px;
  }

  .boolShow2 {
    text-align: left;
    padding: 15px;
  }

  .main2 {
    box-shadow: 0 0 15px #ccc;
    height: 300px;
    padding: 10px;
  }

  .main2>div {
    border-bottom: #ccc 1px solid;
    padding: 10px;
  }

  .main2>div i {
    font-size: 25px;
  }

  .main2>div i:last-child {
    float: right;
  }

  .main2>div span {
    position: relative;
    margin-left: 10px;
    top: -6px;
  }
</style>
