<template>
  <div class="main">
    <div>
      <van-image width="100%" height="100%" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="clear dataCss">
      <div class="left">
        <h3>课程名称</h3>
        <p>263人报名</p>
      </div>
      <div class="right">
        <h3>￥1000/10课时</h3>
      </div>
    </div>
    <div class="box">
      <h3>已报名学员列表</h3>
      <van-search v-model="value" placeholder="请输入学员姓名进行搜索" />
      <div class="zhongCss">
        <div class="clear stuTabCss" v-for="(item, index) in dataContent" :key="index">
          <div class="left">
            <p>{{ item.name }}</p>
            <p>{{ item.jie }}</p>
          </div>
          <div class="right">
            <van-button type="info" size="small" :to="item.url">立即续费</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="botton">
      <span>￥1500.00</span>
      <span>新学员报名</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StuTab",
  data() {
    return {
      active: 0,
      dataContent: [
        {
          name: '新用户来源',
          jie: '剩余12节',
          url: 'newUser'
        },
        {
          name: '选择教师',
          jie: '剩余12节',
          url: 'XuanTea'
        },
        {
          name: '选择学校',
          jie: '剩余12节',
          url: 'XiaoXuan'
        },
        {
          name: '学员详情',
          jie: '剩余12节',
          url: 'StuXiang'
        },
        {
          name: '学员',
          jie: '剩余12节',
          url: 'Stu'
        },
        {
          name: '选择学员',
          jie: '剩余12节',
          url: 'StuXuan'
        },
        {
          name: '选择学员1',
          jie: '剩余12节',
          url: 'StuXuan1'
        }
      ]
    };
  }
};
</script>

<style scoped>
.zhongCss{
  margin-bottom: 100px;
}
.main {
  padding: 20px;
}
.main > div:first-child {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 30px gray;
  position: relative;
}
.main > div:first-child span {
  background: #dcac00;
  color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  display: inline-block;
  width: 100px;
  line-height: 50px;
  height: 50px;
}
.dataCss > .right h3 {
  text-align: right;
  color: red;
}
.dataCss h3 {
  margin: 20px 0 10px;
}
.dataCss p {
  color: #999;
  margin: 10px 0;
}
.botton {
  position: fixed;
  bottom: 49px;
  left: 0px;
  width: 100%;
  z-index: 99;
}
.botton > span {
  display: inline-block;
  width: 50%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
}
.botton > span:first-child {
  background: white;
  color: red;
}
.botton > span:last-child {
  background: #3078ff;
  color: #fff;
}
.tabCss h3 {
  color: #3078ff;
  font-size: 16px;
  margin: 10px 0;
}
.tabCss p {
  font-size: 13px;
  margin: 10px 0;
}
.box {
  text-align: left;
  margin-top: 10px;
}
.box > h3 {
  border-left: 5px #3078ff solid;
  padding-left: 10px;
  font-size: 16px;
}
.stuTabCss{
  margin: 10px 0;
}
.stuTabCss>.left{
  font-size: 13px;
}
.stuTabCss>.left p{
  line-height: 25px;
}
.stuTabCss>.left p:last-child{
  color: #999;
}
.stuTabCss>.right{
  padding-top: 10px;
}
.stuTabCss>.right button{
  border-radius: 5px;
}
</style>