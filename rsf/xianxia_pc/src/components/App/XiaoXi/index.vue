<template>
  <div class="appZ">
    <top title="消息"></top>
    <h3>全部消息通知</h3>
    <div v-if="!hideText" style="margin-bottom:100px;">
      <div class="text" v-for="(item, index) in dataContent" :key="index">
        <h4>{{ item.title }}</h4>
        <p>{{ item.p }}</p>
        <div>{{ item.time }}</div>
      </div>
    </div>
    <van-empty description="学员已经全部到齐了" v-if="hideText"></van-empty>
  </div>
</template>

<script>
import top from "@/components/App/top";
export default {
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
  },
  components: {
    top
  }
};
</script>

<style scoped>

.appZ > h3 {
  text-align: left;
  border-left: #3376ff 5px solid;
  margin: 20px 10px;
  padding-left: 10px;
  font-size: 16px;
}
.text {
  text-align: left;
  box-shadow: 0px 0px 15px #ccc;
  margin: 10px;
  padding: 10px;
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
</style>