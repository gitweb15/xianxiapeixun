<template>
  <div>
    <div class="imgCss clear" style="width: 100%;">
      <!-- <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
      <img src="../../assets/2.png" style="width: 100%;height: 100%;" />
      <div style="position: absolute;z-index: 1;top:40px;">
        <img src="../../assets/16.png" />
        <div style="position: absolute;top: 10px;left: 50px;width: 250px;">
          <p>
            耐寒教育
            <span>邀请码：XAS123</span>
          </p>
          <p>18802329867</p>
        </div>

      </div>
    </div>
    <!-- 我的课程 -->
    <div v-if="boolShow2">
      <div class="myKe" v-if="boolShow">
        <h3>我的课程</h3>
        <div class="iconCss">
          <router-link to="/daizhifu" tag="span">
            <van-icon name="pending-payment" badge="1" />
            <p>待付款</p>
          </router-link>
          <router-link to="/study" tag="span">
            <van-icon name="todo-list-o" badge="2" />
            <p>学习中</p>
          </router-link>
          <router-link to="/end" tag="span">
            <van-icon name="failure" badge="3" />
            <p>已结束</p>
          </router-link>
          <router-link to="/dingdan" tag="span">
            <van-icon name="description" />
            <p>全部</p>
          </router-link>
        </div>
      </div>
      <div class="main" v-if="boolShow">
        <router-link tag="div" v-for="(item, index) in mainData" :key="index" :to="item.url">
          <van-icon :name="item.icon" />
          <span>{{ item.span }}</span>
          <van-icon :name="item.rightIcon" />
        </router-link>
      </div>
      <div class="hide" v-if="!boolShow">
        <p>手机号码注册后才可以查看个人中心哦~</p>
        <van-button type="info">立即注册</van-button>
      </div>
    </div>
    <div v-if="!boolShow2" class="boolShow2">
      <div class="main2">
        <div>
          <van-icon name="goods-collect-o" />
          <span>密码修改</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="btn" style="position: absolute;bottom: 70px;">
      <router-link style="background: #0000FF;color: white;width: 80%;" type="info" tag='van-button' to='/login' block>退出登录</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: "yidenLgohin",
    data() {
      return {
        mainData: [{
            icon: "friends-o",
            span: "学员管理",
            rightIcon: "arrow",
            url: '/guanli'
          },
          {
            icon: "coupon-o",
            span: "优惠券",
            rightIcon: "arrow",
            url: '/youhuiquan'
          },
          {
            icon: "service-o",
            span: "立即咨询",
            rightIcon: "arrow",
            url: '/zhixun'
          },
          {
            icon: "cluster-o",
            span: "关于我们",
            rightIcon: "arrow",
            url: '/gerenzhongxi'
          }
        ],
        boolShow: true,
        boolShow2: true
      };
    }
  };
</script>
<style scoped>
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
