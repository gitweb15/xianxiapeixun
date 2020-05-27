<template>
  <div>
	  <p class="head">
	  	<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
	  		<van-icon name="arrow-left" style="margin-left: 13px;"/>课程考勤</span></p>
    <div class="main">
      <div class="top">
        <h3>学员考勤</h3>
        <div class="clear">
          <div class="left">
            <van-circle
              v-model="currentRate"
              layer-color="#ccc"
              :rate="30"
              :speed="100"
              stroke-width="80"
              :text="text"
            />
          </div>
          <div class="left kaoCss">
            <van-button type="info" size="small" to="KaoQin">考勤总览</van-button>
          </div>
        </div>
      </div>
      <div class="footer">
        <h3 class="clear">
          未到名单
          <van-button
            type="info"
            size="small"
            class="right"
            @click="dataContent=[]"
            v-show="dataContent.length>0"
          >全部出勤</van-button>
        </h3>
        <div class="content" v-if="!hideText">
          <div
            class="clear"
            v-for="(item, index) in dataContent"
            :key="index"
            v-show="dataContent.length>0"
          >
            <div class="left">
              <p>{{ item.name }}</p>
              <p>{{ item.phone }}({{ item.text }})</p>
            </div>
            <van-button type="info" size="small" class="right" style="margin-top: 20px;">标记为考勤</van-button>
          </div>
          <div
            v-show="dataContent.length<1"
            style="line-height:100px;text-align:center;margin:100px 0;border-radio:5px;"
          >学员已经全部到齐啦~</div>
        </div>
        <van-empty description="学员已经全部到齐了" v-if="hideText"></van-empty>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeKaoQin",
  data() {
    return {
      currentRate: 0,
      hideText: false,
      dataContent: [
        {
          name: "学生姓名",
          phone: "13312345677",
          text: "家长手机号码"
        },
        {
          name: "学生姓名",
          phone: "13312345677",
          text: "家长手机号码"
        },
        {
          name: "学生姓名",
          phone: "13312345677",
          text: "家长手机号码"
        },
        {
          name: "学生姓名",
          phone: "13312345678",
          text: "家长手机号码"
        }
      ]
    };
  },
  methods:{
	  kc(){
	  	this.$router.go(-1)
	  },
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  }
};
</script>
<style scoped>
	.clear::after{
		content:"";
		display: block;
		clear: both;
	}
	
	.left{
		float: left;
	}
	.right{
		float: right;
	}
.main {
  padding: 20px;
  margin-top: 50px;
}
.top {
  text-align: left;
  box-shadow: 0 0 15px #ccc;
  padding: 10px;
}
.top > h3 {
  border-left: 5px solid #3078ff;
  line-height: 30px;
  margin: 10px 0 20px 0;
  padding-left: 10px;
}
.kaoCss {
  border-radius: 5px;
  overflow: hidden;
  margin: 30px 0px 0px 90px;
}
.footer {
  text-align: left;
  box-shadow: 0 0 15px #ccc;
  margin-top: 10px;
  padding: 10px;
}
.footer > h3 {
  border-left: 5px solid #3078ff;
  line-height: 30px;
  margin: 10px 0 20px 0;
  padding-left: 10px;
}
.content {
  font-size: 12px;
}
.content > div {
  height: 60px;
}
.content > div button {
  border-radius: 5px;
  overflow: hidden;
  font-size: 12px;
  box-shadow: 3px 3px 15px #ccc;
}
.content > .clear {
  margin: 10px 0;
}
.head{
		position: fixed;
		top: -10px;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}
</style>