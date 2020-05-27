<template>
  <div>
    <div>
      <img src="../../assets/2.png" style="width: 80%;height: 100%;" />
      <div class="right">
        <span>课程名称</span>
        <span>￥1500/10课时</span>
      </div>
      <div class="right1">
        <span>263人已报名</span>
      </div>
    </div>
    <div style="text-align: left;margin-top: 100px;position: absolute;z-index: -1;line-height: 30px;">
      <van-index-bar>
        <p style="margin-left: 40px;"><span style="width: 40px;height: 30px;background: #0000FF;"></span>已报名学员列表</p>
        <van-search placeholder="请输入学员姓名进行搜索" style="margin-left: 20px;width: 100%;" />
        <div class="color">
          <p>学员姓名</p>
          <p>剩余12节</p>
          <van-button type="info" class='xf'>立即续费</van-button>
        </div>
        <div class="color">
          <p>学员姓名</p>
          <p>剩余12节</p>
          <van-button type="info" class='xf'>立即续费</van-button>
        </div>
        <div class="color">
          <p>学员姓名</p>
          <p>剩余12节</p>
          <van-button type="info" class='xf'>立即续费</van-button>
        </div>
        <div class="color">
          <p>学员姓名</p>
          <p>剩余12节</p>
          <van-button type="info" class='xf'>立即续费</van-button>
        </div>
        <div class="color">
          <p>学员姓名</p>
          <p>剩余12节</p>
          <van-button type="info" class='xf'>信息按钮</van-button>
        </div>
      </van-index-bar>
    </div>
    <div class="di">
      <span class="yuan">￥1500.00</span>
      <router-link class="new" to='/success'>新学员报名</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
  .color {
    margin-left: 30px;
  }

  .xf {
    float: right;
    margin-top: -60px;
    margin-left: 220px;
  }

  .yuan {
    color: red;
    float: left;
    margin-left: 30px;
    margin-top: 5px;
    font-size: 25px;
  }

  .di {
    background: white;
    width: 100%;
    position: fixed;
    z-index: 1;
    bottom: 0px;
  }

  .new {
    float: right;
    margin-right: 20px;
    border-radius: 0px 0px 10px 0px;
    background: #0000FF;
    width: 50%;
    height: 50px;
    color: white;
    line-height: 50px;
  }

  .color p:nth-child(2) {
    color: #999999;
  }

  .van-index-bar__sidebar {
    position: fixed;
    top: 80%;
    right: 0;
    z-index: 2;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    text-align: center;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }

  .right span:nth-child(1) {
    float: left;
    margin-left: 40px;
  }

  .right span:nth-child(2) {
    float: right;
    color: red;
    margin-right: 50px;
  }

  .right1 span:nth-child(1) {
    float: left;
    margin-left: -63px;
    margin-top: 40px;
    color: #999;
  }

  .right1 span:nth-child(2) {
    float: right;
    margin-top: 20px;
    color: #999;
    margin-right: 50px;
  }
</style>
