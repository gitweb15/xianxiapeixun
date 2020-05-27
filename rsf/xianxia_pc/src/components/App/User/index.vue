<template>
  <div>
    <top title="个人中心" style="margin-bottom:15px;"></top>
    <div class="imgCss clear">
      <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div>
        <p>
          耐寒教育
          <span>邀请码：XAS123</span>
        </p>
        <p>18802329867</p>
      </div>
    </div>
    <!-- 我的课程 -->
    <div v-if="boolShow2" style="margin-bottom:200px;">
      <div class="myKe" v-if="boolShow">
        <h3>我的课程</h3>
        <div class="iconCss">
          <router-link to="DaiZhiFu" tag="span">
            <van-icon name="pending-payment" />
            <p>待付款</p>
          </router-link>
          <router-link to="XueXiZhong" tag="span">
            <van-icon name="todo-list-o" />
            <p>学习中</p>
          </router-link>
          <router-link to="YiJieShu" tag="span">
            <van-icon name="failure" />
            <p>已结束</p>
          </router-link>
          <router-link to="SuoYou" tag="span">
            <van-icon name="description" />
            <p>全部</p>
          </router-link>
        </div>
      </div>
      <div class="main" v-if="boolShow">
        <router-link v-for="(item, index) in mainData" :key="index" tag="div" :to="item.url">
          <van-icon :name="item.icon" />
          <span>{{ item.span }}</span>
          <van-icon :name="item.rightIcon" />
        </router-link>
      </div>
      <div class="hide" v-if="!boolShow">
        <p>手机号码注册后才可以查看个人中心哦~</p>
        <van-button type="info" to="/App/Tab/Register">立即注册</van-button>
      </div>
    </div>
    <!-- 密码修改 -->
    <div v-if="!boolShow2" class="boolShow2">
      <div class="main2">
        <router-link to="Pass" tag="div">
          <van-icon name="goods-collect-o" />
          <span>密码修改</span>
          <van-icon name="arrow" />
          </router-link>
      </div>
    </div>
    <div class="btn">
      <van-button type="info" block @click="LoginClick">退出登录</van-button>
    </div>
  </div>
</template>
<script>
import top from '@/components/App/top'
export default {
  name: "User",
  data() {
    return {
      mainData: [
        {
          icon: "friends-o",
          span: "学员管理",
          rightIcon: "arrow",
          url: "/App/Tab/StuGuan"
        },
        {
          icon: "coupon-o",
          span: "优惠券",
          rightIcon: "arrow",
          url: "/App/Tab/YouHuiQuan"
        },
        {
          icon: "service-o",
          span: "立即咨询",
          rightIcon: "arrow",
          url: "/App/Tab/ZiXun"
        },
        {
          icon: "cluster-o",
          span: "关于我们",
          rightIcon: "arrow",
          url: "/App/Tab/About"
        }
      ],
      boolShow: true,
      boolShow2: true,
      value: ''
    };
  },
  methods: {
    LoginClick() {
      this.$router.push('/App/Login')
    }
  },
  mounted() {
    let x = (x => (x => x*9)(x)+(5))
    let y = y => (y => y * 9)(y) + 3
    console.log(x)
    console.log(y(5))
  },
  components: {
    top
  },
  mounted() {
    if(this.$store.state.kechengUrl == 'keCheng'){
      this.boolShow =true;
      this.boolShow2=true;
    }else {
      this.boolShow =false;
      this.boolShow2=false;
    }
  }
};
</script>
<style scoped>
.imgCss {
  overflow: hidden;
  width: 100%;
  height: 170px;
  background: #ccc;
  background-size: 100% 250px;
}
.imgCss > div {
  float: left;
  position: relative;
  top: 20%;
  text-align: left;
  color: white;
}
.imgCss > div:first-child {
  margin-left: 30px;
}
.imgCss > div:last-child {
  margin-left: 20px;
}
.imgCss > div:last-child span {
  margin-left: 10px;
  font-size: 12px;
}
.imgCss > div:last-child > p:last-child {
  margin-top: 5px;
}
.myKe {
  border-radius: 5px;
  box-shadow: 0px 0px 15px #ccc;
  margin: 10px 20px;
  text-align: left;
  background: #fff;
  position: relative;
  top: -50px;
  z-index: 9;
}
.myKe > h3 {
  border-bottom: #ccc 1px solid;
  padding: 10px;
}
.iconCss {
  text-align: center;
  margin-top: 10px;
}
.iconCss p {
  margin-top: 5px;
}
.iconCss > span {
  display: inline-block;
  width: 25%;
  padding: 5px 0;
}
.iconCss > span i {
  font-size: 30px;
}
.main {
  border-radius: 5px;
  box-shadow: 0px 0px 15px #ccc;
  text-align: left;
  margin: 10px 20px;
  background: #fff;
  position: relative;
  top: -40px;
  padding: 20px 20px 30px 10px;
}
.main > div > span {
  position: relative;
  top: -6px;
  margin-left: 10px;
}
.main > div {
  padding-top: 3px;
  border-bottom: rgb(228, 225, 225) 1px solid;
  padding: 10px 0px 5px 10px;
  margin: 10px 0;
}
.main > div > i:last-child {
  float: right;
  margin-right: 10px;
}
.main i {
  font-size: 25px;
}
.btn {
  position: fixed;
  bottom: 60px;
  left: 0px;
  width: 100%;
  padding-left: 10%;
  background: white;
}
.btn button {
  width: 80%;
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
.main2 > div {
  border-bottom: #ccc 1px solid;
  padding: 10px;
}
.main2 > div i {
  font-size: 25px;
}
.main2 > div i:last-child {
  float: right;
}
.main2 > div span {
  position: relative;
  margin-left: 10px;
  top: -6px;
}
</style>