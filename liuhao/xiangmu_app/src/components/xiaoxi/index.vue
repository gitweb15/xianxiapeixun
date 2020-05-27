<template>
  <div class="appZ">
	  <p class="head">消 息</p>
    <h3>全部消息通知</h3>
    <div v-if="!hideText">
      <div class="text" v-for="(item, index) in dataContent" :key="index">
        <h4>{{ item.title }}</h4>
        <p>{{ item.p }}</p>
        <div>{{ item.time }}</div>
      </div>
    </div>
	<p style="text-align: center;padding-bottom: 60px;margin-top: 10px;">没有更多内容了</p>
    <foot></foot>
  </div>
</template>

<script>
	import foot from '../foot.vue'
 export default {
	 components:{
		 foot
	 },
  name: "XiaoXi",
  data() {
    return {
      dataContent: [
        {
          title: "课程消息",
          p:
            "亲爱的【耐寒教育】，您的学员【学员一】再2019-12应参加的【课程名称】考勤未到，请确认！",
          time: "2019-4-12"
        },
        {
          title: "课程消息",
          p:
            "亲爱的【耐寒教育】，您的学员【学员一】再2019-12应参加的【课程名称】考勤未到，请确认！",
          time: "2019-4-12"
        },
        {
          title: "课程消息",
          p:
            "亲爱的【耐寒教育】，您的学员【学员一】再2019-12应参加的【课程名称】考勤未到，请确认！",
          time: "2019-4-12"
        },
        {
          title: "课程消息",
          p:
            "亲爱的【耐寒教育】，您的学员【学员一】再2019-12应参加的【课程名称】考勤未到，请确认！",
          time: "2019-4-12"
        }
      ],
      hideText: false
    };
  }
};
</script>

<style scoped>
.appZ {
  padding-top: 10%;
}
.appZ > h3 {
  text-align: left;
  border-left: #3376ff 5px solid;
  margin: 10px 0;
  padding-left: 10px;
  font-size: 19px;
}
.text {
  text-align: left;
  box-shadow: 0px 0px 15px #ccc;
  margin: 10px;
  padding: 10px;
  height: 120px;
  font-weight: 400;
  }
.text > p {
  font-size: 13px;
  margin: 10px 0;
}
.text > div {
  text-align: right;
  color: #999;
  font-size: 14px;
}
.head {
		text-align: center;
		position: fixed;
		top: -20px;
		font-size: 20px;
		background-color: white;
		width: 100%;
		height: 40px;
		z-index: 100;
	}
</style>