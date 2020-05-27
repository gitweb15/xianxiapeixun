<template>
  <div>
    <hea title="考勤总览"></hea>
    <div class="app">
      <div class="main">
        <h3 class="top">学员名单</h3>
        <div class="stu">
          <van-button
            v-for="(item, index) in dataContent"
            :key="index"
            :type="item.icon"
            @click="buttonFun(item,index)"
          >{{ item.text }}</van-button>
        </div>
        <div class="footer">
          <van-button type="info" block @click="dataContentFun">全部设置为出勤</van-button>
          <van-button type="default" block to="riCheng">返回首页</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hea from "@/components/App/Header";
export default {
  name: "KaoQin",
  data() {
    return {
      dataContent: [
        {
          icon: "default",
          text: "学生姓名"
        },
        {
          icon: "info",
          text: "学生姓名"
        },
        {
          icon: "default",
          text: "学生姓名"
        },
        {
          icon: "default",
          text: "学生姓名"
        },
        {
          icon: "info",
          text: "学生姓名"
        },
        {
          icon: "info",
          text: "学生姓名"
        },
        {
          icon: "default",
          text: "学生姓名"
        },
        {
          icon: "info",
          text: "学生姓名"
        },
        {
          icon: "default",
          text: "学生姓名"
        },
        {
          icon: "default",
          text: "学生姓名"
        },
        {
          icon: "info",
          text: "学生姓名"
        },
        {
          icon: "info",
          text: "学生姓名"
        }
      ]
    };
  },
  methods: {
    dataContentFun() {
      for (let i = 0; i < this.dataContent.length; i++) {
        this.dataContent[i].icon = "info";
      }
    },
    buttonFun(item,index){
      if(item.icon == 'info'){
        this.dataContent[index].icon = "default"
      }else{
        this.dataContent[index].icon = "info"
      }
    }
  },
  components: {
    hea
  }
};
</script>
<style scoped>
.top {
  border-left: 5px #3379ff solid;
  text-align: left;
  padding-left: 10px;
  line-height: 40px;
  margin-top: 50px;
}
.app {
  height: 97%;
  padding: 20px;
}
.main {
  box-shadow: 0px 0px 15px #ccc;
  height: 100%;
}
.stu {
  margin-bottom: 50px;
}
.stu button {
  padding: 10px 20px;
  margin: 10px;
  box-shadow: 3px 3px 15px #ccc;
  border-radius: 3px;
}
.footer {
  width: 85%;
  position: absolute;
  bottom: 50px;
  margin: 0 2.5%;
}
.footer button {
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0;
}
.footer button:last-child {
  border: #3379ff 1px solid;
  color: #3379ff;
}
</style>