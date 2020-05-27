<template>
  <div class="zhu">
    <div class="imgCss clear">
      <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div>
        <p>
          耐寒教育
          <span>邀请码：XAS123</span>
        </p>
        <p @click="Pass">18802329867</p>
      </div>
    </div>
    <!-- 我的课程 -->
    <div v-if="boolShow2">
      <div class="myKe" v-if="boolShow">
        <h4>我的课程</h4>
        <div class="iconCss">
          <span @click="dzfdd">
            <van-icon name="pending-payment" />
            <p>待付款</p>
          </span>
          <span @click="xxz">
            <van-icon name="todo-list-o" />
            <p>学习中</p>
          </span>
          <span @click="jies">
            <van-icon name="failure" />
            <p>已结束</p>
          </span>
          <span @click="qb">
            <van-icon name="description" />
            <p>全部</p>
          </span>
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
        <div>
          <van-icon name="goods-collect-o" />
          <span>密码修改</span>
          <van-icon name="arrow" />
          </div>
      </div>
    </div>
    <div class="btn">
      <van-button type="info" block @click="LoginClick">退出登录</van-button>
    </div>
	<foot></foot>
  </div>
</template>
<script>
	import foot from '../foot.vue'
export default {
	components:{
		foot
	},
  name: "User",
  data() {
    return {
      mainData: [
        {
          icon: "friends-o",
          span: "学员管理",
          rightIcon: "arrow",
          url: "/xygl"
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
      this.boolShow = false;
	 this.$router.push({path:'/Login'})
    },
    Pass() {
      this.boolShow =false;
      this.boolShow2=false;
    },
	dzfdd(){
		this.$router.push({path:'/dzf'})
	},
	xxz(){
		this.$router.push({path:'/xxz'})
	},
	jies(){
		this.$router.push({path:'/jies'})
	},
	qb(){
		this.$router.push({path:'/qb'})
	}
  }
};
</script>
<style scoped>
	.zhu{
		height: 750px;
		width: 100%;
	}
.imgCss {
  overflow: hidden;
  width: 100%;
  height: 200px;
  background: #748aa1;
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
  padding-top: 15px;
}
.imgCss > div:last-child span {
  margin-left: 10px;
  font-size: 12px;
}
.imgCss > div:last-child > p:last-child {
  margin-top: 5px;
}
.myKe {
  border-radius: 3px;
  box-shadow: 0px 0px 15px #ccc;
  padding: 6px;
  text-align: left;
  margin: 6px;
  background: #fff;
  position: relative;
  top: -55px;
  z-index: 9;
}
.myKe > h4 {
  border-bottom: #ccc 1px solid;
  padding-bottom: 11px;
}
.iconCss {
  text-align: center;
  margin-top: 2px;
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
  border-radius: 3px;
  box-shadow: 0px 0px 15px #ccc;
  text-align: left;
  margin: 10px;
  background: #fff;
  position: relative;
  top: -40px;
  padding: 20px 10px 30px;
}
.main > div > span {
  position: relative;
  top: -2px;
  margin-left: 10px;
}
.main > div {
  padding-top: 3px;
  border-bottom: #ccc 1px solid;
  padding: 10px 0 5px 10px;
}
.main > div > i:last-child {
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
  bottom: 3%;
}
.btn button {
  border-radius: 5px;
}
.hide {
  height: 300px;
  line-height: 300px;
  text-align: center;
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